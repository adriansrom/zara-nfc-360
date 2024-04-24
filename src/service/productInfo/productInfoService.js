export default async function getProductInfo(mocacota) {
    try {
        //TODO: MOCK
        const productsInfo = [
            {
                "id": "0558426180002",
                "type": "Product",
                "name": "CAMISETA BÁSICA SLIM FIT",
                "price": "9,95",
                "shortDescription": "Camiseta basica",
                "description": "Camiseta slim fit. Cuello redondo y manga corta.",
                "recommendedSize": "L",
                "detail": {
                    "reference": "05584361-V2024",
                    "displayReference": "5584/361",
                    "color": "Negro",
                    "size": "S",
                    "url": "https://static.zara.net/assets/public/6c4b/611e/2dfe4bd4b38b/604c3b0519aa/05584261800-p/05584261800-p.jpg?ts=1701435211101&w={width}",
                    "colors": [
                        {
                            "id": "800",
                            "hexCode": "#191919",
                            "productId": 315241755,
                            "name": "Negro",
                            "reference": "C05584361800000-V2024",
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 102,
                                    "id": 2,
                                    "name": "S",
                                    "price": 995,
                                    "reference": "0558426180002-V2024",
                                    "sku": 315220735,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 103,
                                    "id": 3,
                                    "name": "M",
                                    "price": 995,
                                    "reference": "0558436180003-V2024",
                                    "sku": 319301580,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 104,
                                    "id": 4,
                                    "name": "L",
                                    "price": 995,
                                    "reference": "0558436180004-V2024",
                                    "sku": 319301581,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 105,
                                    "id": 5,
                                    "name": "XL",
                                    "price": 995,
                                    "reference": "0558436180005-V2024",
                                    "sku": 319301582,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 106,
                                    "id": 6,
                                    "name": "XXL",
                                    "price": 995,
                                    "reference": "0558426180006-V2024",
                                    "sku": 315220739,
                                }
                            ],
                        },
                        {
                            "id": "401",
                            "hexCode": "#22242D",
                            "productId": 315241754,
                            "name": "Marino",
                            "reference": "C05584361401000-V2024",
                            "url": "https://static.zara.net/assets/public/8381/2e04/d21a4a62a569/8adebba0adf9/05584261401-p/05584261401-p.jpg?ts=1701768013296&w={width}",
                            "price": 995,
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 102,
                                    "id": 2,
                                    "name": "S",
                                    "price": 995,
                                    "reference": "0558436140102-V2024",
                                    "sku": 319301584,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 103,
                                    "id": 3,
                                    "name": "M",
                                    "price": 995,
                                    "reference": "0558426140103-V2024",
                                    "sku": 315220741,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 104,
                                    "id": 4,
                                    "name": "L",
                                    "price": 995,
                                    "reference": "0558426140104-V2024",
                                    "sku": 315220727,
                                },
                            ],
                        },
                        {
                            "id": "527",
                            "hexCode": "#828874",
                            "productId": 316180330,
                            "name": "Verde medio",
                            "reference": "C05584361527000-V2024",
                                    "url": "https://static.zara.net/assets/public/3ad1/3213/28d84e588ee7/47c0bece815d/05584361527-p/05584361527-p.jpg?ts=1703780850686&w={width}",
                            "price": 995,
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 103,
                                    "id": 3,
                                    "name": "M",
                                    "price": 995,
                                    "reference": "0558436152703-V2024",
                                    "sku": 316178874,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 104,
                                    "id": 4,
                                    "name": "L",
                                    "price": 995,
                                    "reference": "0558436152704-V2024",
                                    "sku": 316178875,
                                },
                                {
                                    "availability": "low_on_stock",
                                    "equivalentSizeId": 105,
                                    "id": 5,
                                    "name": "XL",
                                    "price": 995,
                                    "reference": "0558436152705-V2024",
                                    "sku": 316178876,
                                },
                            ],
                        },
                    ],
                    "composition": [
                    {
                        "material": "algodón",
                        "percentage": "95%"
                    },
                    {
                        "material": "elastano",
                        "percentage": "5%"
                    }
                ],
                }
            },
            {
                "id": "0678642040136",
                "type": "Product",
                "name": "PANTALÓN CHINO",
                "price": "25,95",
                "shortDescription": "Pantalon chino",
                "description": "Pantalón skinny fit confeccionado en tejido con mezcla de algodón y elasticidad. Bolsillos frontales y detalle de bolsillos traseros de vivo. Cierre frontal con cremallera y botón.",
                "recommendedSize": "40",
                "detail": {
                    "reference": "06786320-V2024",
                    "displayReference": "6786/320",
                    "color": "Marino",
                    "size": "36",
                    "url": "https://static.zara.net/assets/public/c968/2cf6/826b4fff99de/95f5a55f06c3/1685516404896/1685516404896.jpg?ts=1701376683920&w={width}",
                    "colors": [
                        {
                            "id": "401",
                            "hexCode": "#141827",
                            "productId": 311307194,
                            "name": "Marino",
                            "reference": "C06786320401000-V2024",
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 36,
                                    "id": 36,
                                    "name": "36",
                                    "price": 2595,
                                    "reference": "0678642040136-V2024",
                                    "sku": 312369760,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 38,
                                    "id": 38,
                                    "name": "38",
                                    "price": 2595,
                                    "reference": "0678632040138-V2024",
                                    "sku": 311304412,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 40,
                                    "id": 40,
                                    "name": "40",
                                    "price": 2595,
                                    "reference": "0678632040140-V2024",
                                    "sku": 311304415,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 44,
                                    "id": 44,
                                    "name": "44",
                                    "price": 2595,
                                    "reference": "0678642040144-V2024",
                                    "sku": 312369766,
                                }
                            ]
                        },
                        {
                            "id": "800",
                            "hexCode": "#0A0A0A",
                            "productId": 311307197,
                            "name": "Negro",
                            "reference": "C06786320800000-V2024",
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 38,
                                    "id": 38,
                                    "name": "38",
                                    "price": 2595,
                                    "reference": "0678632080038-V2024",
                                    "sku": 311304402,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 40,
                                    "id": 40,
                                    "name": "40",
                                    "price": 2595,
                                    "reference": "0678632080040-V2024",
                                    "sku": 311304404,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 42,
                                    "id": 42,
                                    "name": "42",
                                    "price": 2595,
                                    "reference": "0678632080042-V2024",
                                    "sku": 311304406,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 44,
                                    "id": 44,
                                    "name": "44",
                                    "price": 2595,
                                    "reference": "0678632080044-V2024",
                                    "sku": 311304408,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 46,
                                    "id": 46,
                                    "name": "46",
                                    "price": 2595,
                                    "reference": "0678632080046-V2024",
                                    "sku": 311304411,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 48,
                                    "id": 48,
                                    "name": "48",
                                    "price": 2595,
                                    "reference": "0678642080048-V2024",
                                    "sku": 312369763,
                                }
                            ]
                        },
                        {
                            "id": "807",
                            "hexCode": "#787676",
                            "productId": 311307201,
                            "name": "Gris antracita",
                            "reference": "C06786320807000-V2024",
                            "sizes": [
                                {
                                    "availability": "out_of_stock",
                                    "equivalentSizeId": 38,
                                    "id": 38,
                                    "name": "38",
                                    "price": 2595,
                                    "reference": "0678632080738-V2024",
                                    "sku": 311304405,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 40,
                                    "id": 40,
                                    "name": "40",
                                    "price": 2595,
                                    "reference": "0678632080740-V2024",
                                    "sku": 311304407
                                },
                            ]
                        },
                        {
                            "id": "710",
                            "hexCode": "#BBAD99",
                            "productId": 311307195,
                            "name": "Beige",
                            "reference": "C06786320710000-V2024",
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 36,
                                    "id": 36,
                                    "name": "36",
                                    "price": 2595,
                                    "reference": "0193443071036-V2024",
                                    "sku": 312369770,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 38,
                                    "id": 38,
                                    "name": "38",
                                    "price": 2595,
                                    "reference": "0193433071038-V2024",
                                    "sku": 311304331
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 40,
                                    "id": 40,
                                    "name": "40",
                                    "price": 2595,
                                    "reference": "0193433071040-V2024",
                                    "sku": 311304332,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 42,
                                    "id": 42,
                                    "name": "42",
                                    "price": 2595,
                                    "reference": "0193443071042-V2024",
                                    "sku": 312369773
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 44,
                                    "id": 44,
                                    "name": "44",
                                    "price": 2595,
                                    "reference": "0193433071044-V2024",
                                    "sku": 311304334,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 46,
                                    "id": 46,
                                    "name": "46",
                                    "price": 2595,
                                    "reference": "0193443071046-V2024",
                                    "sku": 312369775
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 48,
                                    "id": 48,
                                    "name": "48",
                                    "price": 2595,
                                    "reference": "0193443071048-V2024",
                                    "sku": 312369776
                                }
                            ]
                        },
                    ],
                    "composition": [
                        {
                            "material": "algodón",
                            "percentage": "98%"
                        },
                        {
                            "material": "elastano",
                            "percentage": "2%"
                        }
                    ],
                }
            },
            {
                "id": "0104415780002",
                "type": "Product",
                "name": "VESTIDO MIDI RIB",
                "price": "19,95",
                "shortDescription": "Vestido midi",
                "description": "Vestido midi confeccionado en hilatura con mezcla de algodón. Cuello redondo y manga sisa caída.",
                "recommendedSize": "S",
                "detail": {
                    "reference": "01044157-V2024",
                    "displayReference": "1044/157",
                    "color": "Negro",
                    "size": "S",
                    "url": "https://static.zara.net/assets/public/dab4/b17d/7c0247f18640/714db8251ee1/01044157800-p/01044157800-p.jpg?ts=1711472803633&w={width}",
                    "colors": [
                        {
                            "id": "800",
                            "hexCode": "#0D0A02",
                            "productId": 335304992,
                            "name": "Negro",
                            "reference": "C01044157800000-V2024",
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 102,
                                    "id": 2,
                                    "name": "S",
                                    "price": 1995,
                                    "reference": "0104415780002-V2024",
                                    "sku": 335301475,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 103,
                                    "id": 3,
                                    "name": "M",
                                    "price": 1995,
                                    "reference": "0104415780003-V2024",
                                    "sku": 335301476
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 104,
                                    "id": 4,
                                    "name": "L",
                                    "price": 1995,
                                    "reference": "0104415780004-V2024",
                                    "sku": 335301477
                                }
                            ]
                        },
                        {
                            "id": "250",
                            "hexCode": "#F5F6FC",
                            "productId": 335304993,
                            "name": "Blanco",
                            "reference": "C01044157250000-V2024",
                            "price": 1995,
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 102,
                                    "id": 2,
                                    "name": "S",
                                    "price": 1995,
                                    "reference": "0104415725002-V2024",
                                    "sku": 335301463,
                                },
                                {
                                    "availability": "out_of_stock",
                                    "equivalentSizeId": 103,
                                    "id": 3,
                                    "name": "M",
                                    "price": 1995,
                                    "reference": "0104415725003-V2024",
                                    "sku": 335301465,
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 104,
                                    "id": 4,
                                    "name": "L",
                                    "price": 1995,
                                    "reference": "0104415725004-V2024",
                                    "sku": 335301467
                                }
                            ]
                        },
                        {
                            "id": "711",
                            "hexCode": "#CFC2B7",
                            "productId": 335304991,
                            "name": "Arena",
                            "reference": "C01044157711000-V2024",
                            "price": 1995,
                            "sizes": [
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 102,
                                    "id": 2,
                                    "name": "S",
                                    "price": 1995,
                                    "reference": "0104415771102-V2024",
                                    "sku": 335301472
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 103,
                                    "id": 3,
                                    "name": "M",
                                    "price": 1995,
                                    "reference": "0104415771103-V2024",
                                    "sku": 335301473
                                },
                                {
                                    "availability": "in_stock",
                                    "equivalentSizeId": 104,
                                    "id": 4,
                                    "name": "L",
                                    "price": 1995,
                                    "reference": "0104415771104-V2024",
                                    "sku": 335301474
                                }
                            ]
                        }
                    ],
                    "composition": [
                        {
                            "material": "algodón",
                            "percentage": "96%"
                        },
                        {
                            "material": "elastano",
                            "percentage": "4%"
                        }
                    ],
                }
            }
        ]

        const productInfo = productsInfo.find(product => product.id === mocacota);
        if (!productInfo) return Promise.reject("Product not found");

        if (productInfo) {
            return Promise.resolve(productInfo);
        }
    } catch (error) {
        console.error(error);
    }
}