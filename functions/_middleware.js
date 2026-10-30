// Вход по логину и паролю для всего сайта (Cloudflare Pages).
// Логин и пароль задаются в Cloudflare: Settings → Variables and Secrets,
// переменные AUTH_USER и AUTH_PASS. В этом файле их нет, поэтому код можно хранить открыто.

const REALM = 'Keremet';

function deny(status, text, extra = {}) {
  return new Response(text, {
    status,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
      ...extra,
    },
  });
}

function decodeBasic(header) {
  const [scheme, encoded] = (header || '').split(' ');
  if (!scheme || scheme.toLowerCase() !== 'basic' || !encoded) return null;
  try {
    const bytes = Uint8Array.from(atob(encoded), c => c.charCodeAt(0));
    const text = new TextDecoder().decode(bytes);
    const i = text.indexOf(':');
    return i === -1 ? null : { user: text.slice(0, i), pass: text.slice(i + 1) };
  } catch {
    return null;
  }
}

// Сравнение без утечки по времени ответа.
function same(a, b) {
  const x = new TextEncoder().encode(a);
  const y = new TextEncoder().encode(b);
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] || 0) ^ (y[i] || 0);
  return diff === 0;
}

export async function onRequest({ request, env, next }) {
  const user = env.AUTH_USER;
  const pass = env.AUTH_PASS;
  if (!user || !pass) {
    return deny(503, 'Доступ не настроен: задайте AUTH_USER и AUTH_PASS в настройках Cloudflare Pages.');
  }

  const creds = decodeBasic(request.headers.get('Authorization'));
  if (creds && same(creds.user, user) && same(creds.pass, pass)) {
    const res = await next();
    const out = new Response(res.body, res);
    out.headers.set('Cache-Control', 'private, no-store');
    out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return out;
  }

  return deny(401, 'Требуется вход: введите логин и пароль.', {
    'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
  });
}
