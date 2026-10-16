/* Данные сайта «Документы аттестации».
 * Структура разделов полностью повторяет исходный сайт: 14 категорий, в №5 — 6 подразделов.
 * Сейчас сайт пустой. Документы добавляются в массив documents нужного раздела:
 *   { id: "4-licenziia", title: { kk: "4. Лицензия", ru: "4. Лицензия" },
 *     file: "files/2-bilim-beru/4-licenziia.pdf", size: "1,8 МБ" }
 * Вместо file можно указать drive: "<ID файла на Google Диске>" (для больших файлов).
 * Поля settings заполняют боковую панель (пустое поле показывается как подсказка). */
window.SITE_CONFIG = { mode: "docs" };

window.SITE = {
    "updated": null,
    "settings": {
        "site_name": {
            "kk": "",
            "ru": ""
        },
        "slogan": {
            "kk": "",
            "ru": ""
        },
        "director_role": {
            "kk": "",
            "ru": ""
        },
        "director_name": {
            "kk": "",
            "ru": ""
        },
        "students": {
            "kk": "",
            "ru": ""
        },
        "teachers": {
            "kk": "",
            "ru": ""
        },
        "languages": {
            "kk": "",
            "ru": ""
        },
        "hours": {
            "kk": "",
            "ru": ""
        },
        "address": {
            "kk": "",
            "ru": ""
        },
        "phone": "",
        "email": "",
        "logo": "",
        "director_photo": ""
    },
    "catalogs": [
        {
            "id": "1-ozin-ozi-bagalau",
            "title": {
                "kk": "№1 өзін өзі бағалау",
                "ru": "№1 өзін өзі бағалау"
            },
            "documents": [],
            "children": []
        },
        {
            "id": "2-bilim-beru-uiymdarynyn-zalpy-sipattamasy",
            "title": {
                "kk": "№2 Білім беру ұйымдарының жалпы сипаттамасы",
                "ru": "№2 Білім беру ұйымдарының жалпы сипаттамасы"
            },
            "documents": [],
            "children": []
        },
        {
            "id": "3-kadrlyq-quramga-taldau",
            "title": {
                "kk": "№3 Кадрлық құрамға талдау",
                "ru": "№3 Кадрлық құрамға талдау"
            },
            "documents": [],
            "children": []
        },
        {
            "id": "4-bilim-alusylar-kontingenti",
            "title": {
                "kk": "№4 Білім алушылар контингенті",
                "ru": "№4 Білім алушылар контингенті"
            },
            "documents": [],
            "children": []
        },
        {
            "id": "5-oqu-adistemelik-zumys",
            "title": {
                "kk": "№5 оқу-әдістемелік жұмыс",
                "ru": "№5 оқу-әдістемелік жұмыс"
            },
            "documents": [],
            "children": [
                {
                    "id": "tarbie-zumysy-boiynsa-2025-2026",
                    "title": {
                        "kk": "Тәрбие жұмысы бойынша 2025-2026",
                        "ru": "Тәрбие жұмысы бойынша 2025-2026"
                    },
                    "documents": [],
                    "children": []
                },
                {
                    "id": "tarbie-zumysy-boiynsa-2024-2025",
                    "title": {
                        "kk": "Тәрбие жұмысы бойынша 2024-2025",
                        "ru": "Тәрбие жұмысы бойынша 2024-2025"
                    },
                    "documents": [],
                    "children": []
                },
                {
                    "id": "tarbie-zumys-boiynsa-2026-2027",
                    "title": {
                        "kk": "Тәрбие жұмыс бойынша 2026-2027",
                        "ru": "Тәрбие жұмыс бойынша 2026-2027"
                    },
                    "documents": [],
                    "children": []
                },
                {
                    "id": "oqu-zumys-zospary-boiynsa-2026-2027",
                    "title": {
                        "kk": "Оқу жұмыс-жоспары бойынша 2026-2027",
                        "ru": "Оқу жұмыс-жоспары бойынша 2026-2027"
                    },
                    "documents": [],
                    "children": []
                },
                {
                    "id": "oqu-zumys-zospary-boiynsa-2025-2026",
                    "title": {
                        "kk": "Оқу жұмыс-жоспары бойынша 2025-2026",
                        "ru": "Оқу жұмыс-жоспары бойынша 2025-2026"
                    },
                    "documents": [],
                    "children": []
                },
                {
                    "id": "oqu-zumys-zospary-boiynsa-2024-2025",
                    "title": {
                        "kk": "Оқу жұмыс-жоспары бойынша 2024-2025",
                        "ru": "Оқу жұмыс-жоспары бойынша 2024-2025"
                    },
                    "documents": [],
                    "children": []
                }
            ]
        },
        {
            "id": "6-oqu-materialdyq-aktivter",
            "title": {
                "kk": "№6 Оқу-материалдық активтер",
                "ru": "№6 Оқу-материалдық активтер"
            },
            "documents": [],
            "children": []
        },
        {
            "id": "7-aqparattyq-resurstar-zane-kitapxanalyq-qor",
            "title": {
                "kk": "№7 Ақпараттық ресурстар және кітапханалық қор",
                "ru": "№7 Ақпараттық ресурстар және кітапханалық қор"
            },
            "documents": [],
            "children": []
        },
        {
            "id": "8-bilim-alusylardyn-bilimin-bagalau",
            "title": {
                "kk": "№8 Білім алушылардың білімін бағалау",
                "ru": "№8 Білім алушылардың білімін бағалау"
            },
            "documents": [],
            "children": []
        }
    ]
};
