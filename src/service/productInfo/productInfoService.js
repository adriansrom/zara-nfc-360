export default async function getProductInfo(mocacota) {
    try {
        //TODO: MOCK
        const productsInfo = [{
            "id": "0558426180002",
            "type": "Product",
            "name": "CAMISETA BÁSICA SLIM FIT",
            "price": "9,95",
            "shortDescription": "Camiseta basica",
            "description": "Camiseta regular fit. Cuello redondo y manga corta.",
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
        }]

        const productInfo = productsInfo.find(product => product.id === mocacota);
        if (!productInfo) return Promise.reject("Product not found");

        if (productInfo) {
            return Promise.resolve(productInfo);
        }
    } catch (error) {
        console.error(error);
    }
}