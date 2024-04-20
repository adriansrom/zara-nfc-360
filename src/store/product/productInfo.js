import { create } from 'zustand';

// TODO eliminar, esto viene de la peti iniciala producto
const defaultProductInfo = {
  "id": 315220723,
  "type": "Product",
  "kind": "Wear",
  "state": "visible",
  "brand": {
      "brandId": 1,
      "brandGroupId": 1,
      "brandGroupCode": "zara"
  },
  "name": "CAMISETA BÁSICA SLIM FIT",
  "detail": {
      "reference": "05584361-V2024",
      "displayReference": "5584/361",
      "colors": [
          {
              "id": "800",
              "hexCode": "#191919",
              "productId": 315241755,
              "name": "Negro",
              "reference": "C05584361800000-V2024",
              "stylingId": "0",
              "xmedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701435203369",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "6c4b611e2dfe4bd4b38b604c3b0519aa",
                          "deliveryUrl": "https://static.zara.net/assets/public/6c4b/611e/2dfe4bd4b38b/604c3b0519aa/05584261800-p/05584261800-p.jpg?ts=1701435211101",
                          "deliveryPath": "/assets/public/6c4b/611e/2dfe4bd4b38b/604c3b0519aa/05584261800-p/05584261800-p.jpg?ts=1701435211101"
                      },
                      "url": "https://static.zara.net/assets/public/6c4b/611e/2dfe4bd4b38b/604c3b0519aa/05584261800-p/05584261800-p.jpg?ts=1701435211101&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_2_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701435203622",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a1",
                          "assetId": "899c9555057b454aa1b2dad861e437e0",
                          "deliveryUrl": "https://static.zara.net/assets/public/899c/9555/057b454aa1b2/dad861e437e0/05584261800-a1/05584261800-a1.jpg?ts=1701435211530",
                          "deliveryPath": "/assets/public/899c/9555/057b454aa1b2/dad861e437e0/05584261800-a1/05584261800-a1.jpg?ts=1701435211530"
                      },
                      "url": "https://static.zara.net/assets/public/899c/9555/057b454aa1b2/dad861e437e0/05584261800-a1/05584261800-a1.jpg?ts=1701435211530&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_2_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701435203367",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a2",
                          "assetId": "1bb94d747fef453d8f42b30e893edbf9",
                          "deliveryUrl": "https://static.zara.net/assets/public/1bb9/4d74/7fef453d8f42/b30e893edbf9/05584261800-a2/05584261800-a2.jpg?ts=1701435212216",
                          "deliveryPath": "/assets/public/1bb9/4d74/7fef453d8f42/b30e893edbf9/05584261800-a2/05584261800-a2.jpg?ts=1701435212216"
                      },
                      "url": "https://static.zara.net/assets/public/1bb9/4d74/7fef453d8f42/b30e893edbf9/05584261800-a2/05584261800-a2.jpg?ts=1701435212216&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_2_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701435203364",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a3",
                          "assetId": "d23f9f72b5b4462da8f352dd9f33d5ce",
                          "deliveryUrl": "https://static.zara.net/assets/public/d23f/9f72/b5b4462da8f3/52dd9f33d5ce/05584261800-a3/05584261800-a3.jpg?ts=1701435211228",
                          "deliveryPath": "/assets/public/d23f/9f72/b5b4462da8f3/52dd9f33d5ce/05584261800-a3/05584261800-a3.jpg?ts=1701435211228"
                      },
                      "url": "https://static.zara.net/assets/public/d23f/9f72/b5b4462da8f3/52dd9f33d5ce/05584261800-a3/05584261800-a3.jpg?ts=1701435211228&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_2_4_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701435203750",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a4",
                          "assetId": "2e786c442a69452ebee1de5b39a2c06f",
                          "deliveryUrl": "https://static.zara.net/assets/public/2e78/6c44/2a69452ebee1/de5b39a2c06f/05584261800-a4/05584261800-a4.jpg?ts=1701435212230",
                          "deliveryPath": "/assets/public/2e78/6c44/2a69452ebee1/de5b39a2c06f/05584261800-a4/05584261800-a4.jpg?ts=1701435212230"
                      },
                      "url": "https://static.zara.net/assets/public/2e78/6c44/2a69452ebee1/de5b39a2c06f/05584261800-a4/05584261800-a4.jpg?ts=1701435212230&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_2_5_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701435203822",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a5",
                          "assetId": "06e74a9819b945939724cfbd04dfe387",
                          "deliveryUrl": "https://static.zara.net/assets/public/06e7/4a98/19b945939724/cfbd04dfe387/05584261800-a5/05584261800-a5.jpg?ts=1701435211861",
                          "deliveryPath": "/assets/public/06e7/4a98/19b945939724/cfbd04dfe387/05584261800-a5/05584261800-a5.jpg?ts=1701435211861"
                      },
                      "url": "https://static.zara.net/assets/public/06e7/4a98/19b945939724/cfbd04dfe387/05584261800-a5/05584261800-a5.jpg?ts=1701435211861&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_6_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701355301897",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e1",
                          "assetId": "e9e91a85339b4549a2d1dcaa8cd81759",
                          "deliveryUrl": "https://static.zara.net/assets/public/e9e9/1a85/339b4549a2d1/dcaa8cd81759/05584261800-e1/05584261800-e1.jpg?ts=1701355317347",
                          "deliveryPath": "/assets/public/e9e9/1a85/339b4549a2d1/dcaa8cd81759/05584261800-e1/05584261800-e1.jpg?ts=1701355317347"
                      },
                      "url": "https://static.zara.net/assets/public/e9e9/1a85/339b4549a2d1/dcaa8cd81759/05584261800-e1/05584261800-e1.jpg?ts=1701355317347&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_6_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701355301950",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e2",
                          "assetId": "c526ea50ee014b4585da57c8d283e621",
                          "deliveryUrl": "https://static.zara.net/assets/public/c526/ea50/ee014b4585da/57c8d283e621/05584261800-e2/05584261800-e2.jpg?ts=1701355316609",
                          "deliveryPath": "/assets/public/c526/ea50/ee014b4585da/57c8d283e621/05584261800-e2/05584261800-e2.jpg?ts=1701355316609"
                      },
                      "url": "https://static.zara.net/assets/public/c526/ea50/ee014b4585da/57c8d283e621/05584261800-e2/05584261800-e2.jpg?ts=1701355316609&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_6_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701355303024",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e3",
                          "assetId": "d466b887412c41faa18ae8cb3b7a8f66",
                          "deliveryUrl": "https://static.zara.net/assets/public/d466/b887/412c41faa18a/e8cb3b7a8f66/05584261800-e3/05584261800-e3.jpg?ts=1701355322403",
                          "deliveryPath": "/assets/public/d466/b887/412c41faa18a/e8cb3b7a8f66/05584261800-e3/05584261800-e3.jpg?ts=1701355322403"
                      },
                      "url": "https://static.zara.net/assets/public/d466/b887/412c41faa18a/e8cb3b7a8f66/05584261800-e3/05584261800-e3.jpg?ts=1701355322403&w={width}"
                  }
              ],
              "shopcartMedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/261/800/2",
                      "name": "5584261800_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701435203369",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "6c4b611e2dfe4bd4b38b604c3b0519aa",
                          "deliveryUrl": "https://static.zara.net/assets/public/6c4b/611e/2dfe4bd4b38b/604c3b0519aa/05584261800-p/05584261800-p.jpg?ts=1701435211101",
                          "deliveryPath": "/assets/public/6c4b/611e/2dfe4bd4b38b/604c3b0519aa/05584261800-p/05584261800-p.jpg?ts=1701435211101"
                      },
                      "url": "https://static.zara.net/assets/public/6c4b/611e/2dfe4bd4b38b/604c3b0519aa/05584261800-p/05584261800-p.jpg?ts=1701435211101&w={width}"
                  }
              ],
              "price": 995,
              "sizes": [
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 102,
                      "id": 2,
                      "name": "S",
                      "price": 995,
                      "reference": "0558426180002-V2024",
                      "sku": 315220735,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 341687499,
                              "reference": "0601936180002-V2024"
                          },
                          {
                              "sku": 363789753,
                              "reference": "0556436280002-V2024"
                          },
                          {
                              "sku": 323184108,
                              "reference": "0601936180002-V2024"
                          },
                          {
                              "sku": 351411378,
                              "reference": "0188746180002-V2024"
                          },
                          {
                              "sku": 365939994,
                              "reference": "0564446180002-V2024"
                          },
                          {
                              "sku": 323915918,
                              "reference": "0564426180002-V2024"
                          },
                          {
                              "sku": 319301579,
                              "reference": "0558436180002-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 103,
                      "id": 3,
                      "name": "M",
                      "price": 995,
                      "reference": "0558436180003-V2024",
                      "sku": 319301580,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323915919,
                              "reference": "0564426180003-V2024"
                          },
                          {
                              "sku": 315220736,
                              "reference": "0558426180003-V2024"
                          },
                          {
                              "sku": 363789754,
                              "reference": "0556436280003-V2024"
                          },
                          {
                              "sku": 341687500,
                              "reference": "0601936180003-V2024"
                          },
                          {
                              "sku": 365939995,
                              "reference": "0564446180003-V2024"
                          },
                          {
                              "sku": 323184109,
                              "reference": "0601936180003-V2024"
                          },
                          {
                              "sku": 351411379,
                              "reference": "0188746180003-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 104,
                      "id": 4,
                      "name": "L",
                      "price": 995,
                      "reference": "0558436180004-V2024",
                      "sku": 319301581,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 363789755,
                              "reference": "0556436280004-V2024"
                          },
                          {
                              "sku": 323184110,
                              "reference": "0601936180004-V2024"
                          },
                          {
                              "sku": 323915920,
                              "reference": "0564426180004-V2024"
                          },
                          {
                              "sku": 365939996,
                              "reference": "0564446180004-V2024"
                          },
                          {
                              "sku": 315220737,
                              "reference": "0558426180004-V2024"
                          },
                          {
                              "sku": 341687501,
                              "reference": "0601936180004-V2024"
                          },
                          {
                              "sku": 351411380,
                              "reference": "0188746180004-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 105,
                      "id": 5,
                      "name": "XL",
                      "price": 995,
                      "reference": "0558436180005-V2024",
                      "sku": 319301582,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 341687502,
                              "reference": "0601936180005-V2024"
                          },
                          {
                              "sku": 351411381,
                              "reference": "0188746180005-V2024"
                          },
                          {
                              "sku": 323915921,
                              "reference": "0564426180005-V2024"
                          },
                          {
                              "sku": 315220738,
                              "reference": "0558426180005-V2024"
                          },
                          {
                              "sku": 363789756,
                              "reference": "0556436280005-V2024"
                          },
                          {
                              "sku": 323184111,
                              "reference": "0601936180005-V2024"
                          },
                          {
                              "sku": 365939997,
                              "reference": "0564446180005-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 106,
                      "id": 6,
                      "name": "XXL",
                      "price": 995,
                      "reference": "0558426180006-V2024",
                      "sku": 315220739,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323915922,
                              "reference": "0564426180006-V2024"
                          },
                          {
                              "sku": 351411382,
                              "reference": "0188746180006-V2024"
                          },
                          {
                              "sku": 365939998,
                              "reference": "0564446180006-V2024"
                          },
                          {
                              "sku": 363789757,
                              "reference": "0556436280006-V2024"
                          },
                          {
                              "sku": 319301583,
                              "reference": "0558436180006-V2024"
                          },
                          {
                              "sku": 341687503,
                              "reference": "0601936180006-V2024"
                          },
                          {
                              "sku": 323184112,
                              "reference": "0601936180006-V2024"
                          }
                      ]
                  }
              ],
              "description": "Camiseta slim fit. Cuello redondo y manga corta.",
              "rawDescription": "Camiseta slim fit. Cuello redondo y manga corta.",
              "extraInfo": {
                  "isStockInStoresAvailable": true,
                  "fitSizeMessage": "Este producto talla más pequeño de lo habitual.",
                  "highlightPrice": false
              },
              "tagTypes": [],
              "attributes": [],
              "relations": [
                  {
                      "ids": [
                          276492057,
                          278795309,
                          304719622
                      ],
                      "type": "RECOMMENDED"
                  }
              ]
          },
          {
              "id": "401",
              "hexCode": "#22242D",
              "productId": 315241754,
              "name": "Marino",
              "reference": "C05584361401000-V2024",
              "stylingId": "0",
              "xmedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/261/401/2",
                      "name": "5584261401_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979760",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "83812e04d21a4a62a5698adebba0adf9",
                          "deliveryUrl": "https://static.zara.net/assets/public/8381/2e04/d21a4a62a569/8adebba0adf9/05584261401-p/05584261401-p.jpg?ts=1701768013296",
                          "deliveryPath": "/assets/public/8381/2e04/d21a4a62a569/8adebba0adf9/05584261401-p/05584261401-p.jpg?ts=1701768013296"
                      },
                      "url": "https://static.zara.net/assets/public/8381/2e04/d21a4a62a569/8adebba0adf9/05584261401-p/05584261401-p.jpg?ts=1701768013296&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/401/2",
                      "name": "5584261401_2_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979481",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a1",
                          "assetId": "3be7391ca96b417c9074c70b4280b19f",
                          "deliveryUrl": "https://static.zara.net/assets/public/3be7/391c/a96b417c9074/c70b4280b19f/05584261401-a1/05584261401-a1.jpg?ts=1701768021126",
                          "deliveryPath": "/assets/public/3be7/391c/a96b417c9074/c70b4280b19f/05584261401-a1/05584261401-a1.jpg?ts=1701768021126"
                      },
                      "url": "https://static.zara.net/assets/public/3be7/391c/a96b417c9074/c70b4280b19f/05584261401-a1/05584261401-a1.jpg?ts=1701768021126&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/401/2",
                      "name": "5584261401_2_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979983",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a2",
                          "assetId": "1d405b5b00d8458e9197e3b266826cfc",
                          "deliveryUrl": "https://static.zara.net/assets/public/1d40/5b5b/00d8458e9197/e3b266826cfc/05584261401-a2/05584261401-a2.jpg?ts=1701768030156",
                          "deliveryPath": "/assets/public/1d40/5b5b/00d8458e9197/e3b266826cfc/05584261401-a2/05584261401-a2.jpg?ts=1701768030156"
                      },
                      "url": "https://static.zara.net/assets/public/1d40/5b5b/00d8458e9197/e3b266826cfc/05584261401-a2/05584261401-a2.jpg?ts=1701768030156&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/401/2",
                      "name": "5584261401_2_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979487",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a3",
                          "assetId": "c0b55cd98b3b4bdaafd5f7ce8eb47fbc",
                          "deliveryUrl": "https://static.zara.net/assets/public/c0b5/5cd9/8b3b4bdaafd5/f7ce8eb47fbc/05584261401-a3/05584261401-a3.jpg?ts=1701768033784",
                          "deliveryPath": "/assets/public/c0b5/5cd9/8b3b4bdaafd5/f7ce8eb47fbc/05584261401-a3/05584261401-a3.jpg?ts=1701768033784"
                      },
                      "url": "https://static.zara.net/assets/public/c0b5/5cd9/8b3b4bdaafd5/f7ce8eb47fbc/05584261401-a3/05584261401-a3.jpg?ts=1701768033784&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/401/2",
                      "name": "5584261401_2_4_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767981811",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a4",
                          "assetId": "280216ee6be64395996c37bac933e7be",
                          "deliveryUrl": "https://static.zara.net/assets/public/2802/16ee/6be64395996c/37bac933e7be/05584261401-a4/05584261401-a4.jpg?ts=1701768014414",
                          "deliveryPath": "/assets/public/2802/16ee/6be64395996c/37bac933e7be/05584261401-a4/05584261401-a4.jpg?ts=1701768014414"
                      },
                      "url": "https://static.zara.net/assets/public/2802/16ee/6be64395996c/37bac933e7be/05584261401-a4/05584261401-a4.jpg?ts=1701768014414&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/401/2",
                      "name": "5584261401_2_5_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767982089",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a5",
                          "assetId": "70acb6eb0dd045289df378fec07df9b4",
                          "deliveryUrl": "https://static.zara.net/assets/public/70ac/b6eb/0dd045289df3/78fec07df9b4/05584261401-a5/05584261401-a5.jpg?ts=1701768034281",
                          "deliveryPath": "/assets/public/70ac/b6eb/0dd045289df3/78fec07df9b4/05584261401-a5/05584261401-a5.jpg?ts=1701768034281"
                      },
                      "url": "https://static.zara.net/assets/public/70ac/b6eb/0dd045289df3/78fec07df9b4/05584261401-a5/05584261401-a5.jpg?ts=1701768034281&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/401/2",
                      "name": "5584361401_6_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701943382356",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e1",
                          "assetId": "e367cae6043241e9a6c16345504d56d6",
                          "deliveryUrl": "https://static.zara.net/assets/public/e367/cae6/043241e9a6c1/6345504d56d6/05584361401-e1/05584361401-e1.jpg?ts=1701943392496",
                          "deliveryPath": "/assets/public/e367/cae6/043241e9a6c1/6345504d56d6/05584361401-e1/05584361401-e1.jpg?ts=1701943392496"
                      },
                      "url": "https://static.zara.net/assets/public/e367/cae6/043241e9a6c1/6345504d56d6/05584361401-e1/05584361401-e1.jpg?ts=1701943392496&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/401/2",
                      "name": "5584361401_6_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701943382326",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e2",
                          "assetId": "9261877a022a45ad9fc26aed1eed5063",
                          "deliveryUrl": "https://static.zara.net/assets/public/9261/877a/022a45ad9fc2/6aed1eed5063/05584361401-e2/05584361401-e2.jpg?ts=1701943390253",
                          "deliveryPath": "/assets/public/9261/877a/022a45ad9fc2/6aed1eed5063/05584361401-e2/05584361401-e2.jpg?ts=1701943390253"
                      },
                      "url": "https://static.zara.net/assets/public/9261/877a/022a45ad9fc2/6aed1eed5063/05584361401-e2/05584361401-e2.jpg?ts=1701943390253&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/401/2",
                      "name": "5584361401_6_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701943382600",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e3",
                          "assetId": "0a24fd42a68a4da1bb18a7647b095266",
                          "deliveryUrl": "https://static.zara.net/assets/public/0a24/fd42/a68a4da1bb18/a7647b095266/05584361401-e3/05584361401-e3.jpg?ts=1701943391684",
                          "deliveryPath": "/assets/public/0a24/fd42/a68a4da1bb18/a7647b095266/05584361401-e3/05584361401-e3.jpg?ts=1701943391684"
                      },
                      "url": "https://static.zara.net/assets/public/0a24/fd42/a68a4da1bb18/a7647b095266/05584361401-e3/05584361401-e3.jpg?ts=1701943391684&w={width}"
                  }
              ],
              "shopcartMedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/261/401/2",
                      "name": "5584261401_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979760",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "83812e04d21a4a62a5698adebba0adf9",
                          "deliveryUrl": "https://static.zara.net/assets/public/8381/2e04/d21a4a62a569/8adebba0adf9/05584261401-p/05584261401-p.jpg?ts=1701768013296",
                          "deliveryPath": "/assets/public/8381/2e04/d21a4a62a569/8adebba0adf9/05584261401-p/05584261401-p.jpg?ts=1701768013296"
                      },
                      "url": "https://static.zara.net/assets/public/8381/2e04/d21a4a62a569/8adebba0adf9/05584261401-p/05584261401-p.jpg?ts=1701768013296&w={width}"
                  }
              ],
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
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 341687504,
                              "reference": "0601936140102-V2024"
                          },
                          {
                              "sku": 323184113,
                              "reference": "0601936140102-V2024"
                          },
                          {
                              "sku": 351411383,
                              "reference": "0188746140102-V2024"
                          },
                          {
                              "sku": 363789758,
                              "reference": "0556436240102-V2024"
                          },
                          {
                              "sku": 315220740,
                              "reference": "0558426140102-V2024"
                          },
                          {
                              "sku": 323915923,
                              "reference": "0564426140102-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 103,
                      "id": 3,
                      "name": "M",
                      "price": 995,
                      "reference": "0558426140103-V2024",
                      "sku": 315220741,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 351411384,
                              "reference": "0188746140103-V2024"
                          },
                          {
                              "sku": 319301585,
                              "reference": "0558436140103-V2024"
                          },
                          {
                              "sku": 323184114,
                              "reference": "0601936140103-V2024"
                          },
                          {
                              "sku": 341687505,
                              "reference": "0601936140103-V2024"
                          },
                          {
                              "sku": 363789759,
                              "reference": "0556436240103-V2024"
                          },
                          {
                              "sku": 323915924,
                              "reference": "0564426140103-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 104,
                      "id": 4,
                      "name": "L",
                      "price": 995,
                      "reference": "0558426140104-V2024",
                      "sku": 315220727,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 341687506,
                              "reference": "0601936140104-V2024"
                          },
                          {
                              "sku": 319301586,
                              "reference": "0558436140104-V2024"
                          },
                          {
                              "sku": 363789745,
                              "reference": "0556436240104-V2024"
                          },
                          {
                              "sku": 351411370,
                              "reference": "0188746140104-V2024"
                          },
                          {
                              "sku": 323184115,
                              "reference": "0601936140104-V2024"
                          },
                          {
                              "sku": 323915910,
                              "reference": "0564426140104-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 105,
                      "id": 5,
                      "name": "XL",
                      "price": 995,
                      "reference": "0558436140105-V2024",
                      "sku": 319301587,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 341687507,
                              "reference": "0601936140105-V2024"
                          },
                          {
                              "sku": 351411372,
                              "reference": "0188746140105-V2024"
                          },
                          {
                              "sku": 323915912,
                              "reference": "0564426140105-V2024"
                          },
                          {
                              "sku": 315220729,
                              "reference": "0558426140105-V2024"
                          },
                          {
                              "sku": 363789747,
                              "reference": "0556436240105-V2024"
                          },
                          {
                              "sku": 323184116,
                              "reference": "0601936140105-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 106,
                      "id": 6,
                      "name": "XXL",
                      "price": 995,
                      "reference": "0601936140106-V2024",
                      "sku": 341687508,
                      "attributes": [
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "EG"
                              ],
                              "properties": {}
                          },
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 351411374,
                              "reference": "0188746140106-V2024"
                          },
                          {
                              "sku": 315220731,
                              "reference": "0558426140106-V2024"
                          },
                          {
                              "sku": 319301588,
                              "reference": "0558436140106-V2024"
                          },
                          {
                              "sku": 323915914,
                              "reference": "0564426140106-V2024"
                          },
                          {
                              "sku": 363789749,
                              "reference": "0556436240106-V2024"
                          },
                          {
                              "sku": 323184117,
                              "reference": "0601936140106-V2024"
                          }
                      ]
                  }
              ],
              "description": "Camiseta slim fit. Cuello redondo y manga corta.",
              "rawDescription": "Camiseta slim fit. Cuello redondo y manga corta.",
              "extraInfo": {
                  "isStockInStoresAvailable": true,
                  "fitSizeMessage": "Este producto talla más pequeño de lo habitual.",
                  "highlightPrice": false
              },
              "tagTypes": [],
              "attributes": [],
              "relations": [
                  {
                      "ids": [
                          301394475,
                          278795309,
                          316232248
                      ],
                      "type": "RECOMMENDED"
                  }
              ]
          },
          {
              "id": "250",
              "hexCode": "#F4F7F6",
              "productId": 315241756,
              "name": "Blanco",
              "reference": "C05584361250000-V2024",
              "stylingId": "0",
              "xmedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/261/250/2",
                      "name": "5584261250_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979752",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "1ae60dd862c8426f9950d4174f728c72",
                          "deliveryUrl": "https://static.zara.net/assets/public/1ae6/0dd8/62c8426f9950/d4174f728c72/05584261250-p/05584261250-p.jpg?ts=1701768016303",
                          "deliveryPath": "/assets/public/1ae6/0dd8/62c8426f9950/d4174f728c72/05584261250-p/05584261250-p.jpg?ts=1701768016303"
                      },
                      "url": "https://static.zara.net/assets/public/1ae6/0dd8/62c8426f9950/d4174f728c72/05584261250-p/05584261250-p.jpg?ts=1701768016303&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/250/2",
                      "name": "5584261250_2_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979738",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a1",
                          "assetId": "bddc1a0e76cc436ea13aced8fe3feecd",
                          "deliveryUrl": "https://static.zara.net/assets/public/bddc/1a0e/76cc436ea13a/ced8fe3feecd/05584261250-a1/05584261250-a1.jpg?ts=1701768028354",
                          "deliveryPath": "/assets/public/bddc/1a0e/76cc436ea13a/ced8fe3feecd/05584261250-a1/05584261250-a1.jpg?ts=1701768028354"
                      },
                      "url": "https://static.zara.net/assets/public/bddc/1a0e/76cc436ea13a/ced8fe3feecd/05584261250-a1/05584261250-a1.jpg?ts=1701768028354&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/250/2",
                      "name": "5584261250_2_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767980000",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a2",
                          "assetId": "6df2a054bb9c48cba450374971dcb8e4",
                          "deliveryUrl": "https://static.zara.net/assets/public/6df2/a054/bb9c48cba450/374971dcb8e4/05584261250-a2/05584261250-a2.jpg?ts=1701768029650",
                          "deliveryPath": "/assets/public/6df2/a054/bb9c48cba450/374971dcb8e4/05584261250-a2/05584261250-a2.jpg?ts=1701768029650"
                      },
                      "url": "https://static.zara.net/assets/public/6df2/a054/bb9c48cba450/374971dcb8e4/05584261250-a2/05584261250-a2.jpg?ts=1701768029650&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/250/2",
                      "name": "5584261250_2_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979534",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a3",
                          "assetId": "3702d09e807c4be4bedad162b4dda9cf",
                          "deliveryUrl": "https://static.zara.net/assets/public/3702/d09e/807c4be4beda/d162b4dda9cf/05584261250-a3/05584261250-a3.jpg?ts=1701768014696",
                          "deliveryPath": "/assets/public/3702/d09e/807c4be4beda/d162b4dda9cf/05584261250-a3/05584261250-a3.jpg?ts=1701768014696"
                      },
                      "url": "https://static.zara.net/assets/public/3702/d09e/807c4be4beda/d162b4dda9cf/05584261250-a3/05584261250-a3.jpg?ts=1701768014696&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/261/250/2",
                      "name": "5584261250_2_4_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979899",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a4",
                          "assetId": "956fb9c32f3649ec9f7f0b335ec3029c",
                          "deliveryUrl": "https://static.zara.net/assets/public/956f/b9c3/2f3649ec9f7f/0b335ec3029c/05584261250-a4/05584261250-a4.jpg?ts=1701768019390",
                          "deliveryPath": "/assets/public/956f/b9c3/2f3649ec9f7f/0b335ec3029c/05584261250-a4/05584261250-a4.jpg?ts=1701768019390"
                      },
                      "url": "https://static.zara.net/assets/public/956f/b9c3/2f3649ec9f7f/0b335ec3029c/05584261250-a4/05584261250-a4.jpg?ts=1701768019390&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/250/2",
                      "name": "5584361250_6_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701943382303",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e1",
                          "assetId": "c3347262b6c64a7da5403b251ea8639b",
                          "deliveryUrl": "https://static.zara.net/assets/public/c334/7262/b6c64a7da540/3b251ea8639b/05584361250-e1/05584361250-e1.jpg?ts=1701795761728",
                          "deliveryPath": "/assets/public/c334/7262/b6c64a7da540/3b251ea8639b/05584361250-e1/05584361250-e1.jpg?ts=1701795761728"
                      },
                      "url": "https://static.zara.net/assets/public/c334/7262/b6c64a7da540/3b251ea8639b/05584361250-e1/05584361250-e1.jpg?ts=1701795761728&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/250/2",
                      "name": "5584361250_6_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701943382202",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e2",
                          "assetId": "d424c5bb90674995b9d6177d057ff76d",
                          "deliveryUrl": "https://static.zara.net/assets/public/d424/c5bb/90674995b9d6/177d057ff76d/05584361250-e2/05584361250-e2.jpg?ts=1701943390241",
                          "deliveryPath": "/assets/public/d424/c5bb/90674995b9d6/177d057ff76d/05584361250-e2/05584361250-e2.jpg?ts=1701943390241"
                      },
                      "url": "https://static.zara.net/assets/public/d424/c5bb/90674995b9d6/177d057ff76d/05584361250-e2/05584361250-e2.jpg?ts=1701943390241&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/250/2",
                      "name": "5584361250_6_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701943382324",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e3",
                          "assetId": "524dc55e034642b1a4111e847236d2fc",
                          "deliveryUrl": "https://static.zara.net/assets/public/524d/c55e/034642b1a411/1e847236d2fc/05584361250-e3/05584361250-e3.jpg?ts=1701943392068",
                          "deliveryPath": "/assets/public/524d/c55e/034642b1a411/1e847236d2fc/05584361250-e3/05584361250-e3.jpg?ts=1701943392068"
                      },
                      "url": "https://static.zara.net/assets/public/524d/c55e/034642b1a411/1e847236d2fc/05584361250-e3/05584361250-e3.jpg?ts=1701943392068&w={width}"
                  }
              ],
              "shopcartMedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/261/250/2",
                      "name": "5584261250_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1701767979752",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "1ae60dd862c8426f9950d4174f728c72",
                          "deliveryUrl": "https://static.zara.net/assets/public/1ae6/0dd8/62c8426f9950/d4174f728c72/05584261250-p/05584261250-p.jpg?ts=1701768016303",
                          "deliveryPath": "/assets/public/1ae6/0dd8/62c8426f9950/d4174f728c72/05584261250-p/05584261250-p.jpg?ts=1701768016303"
                      },
                      "url": "https://static.zara.net/assets/public/1ae6/0dd8/62c8426f9950/d4174f728c72/05584261250-p/05584261250-p.jpg?ts=1701768016303&w={width}"
                  }
              ],
              "price": 995,
              "sizes": [
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 102,
                      "id": 2,
                      "name": "S",
                      "price": 995,
                      "reference": "0558426125002-V2024",
                      "sku": 315220728,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184088,
                              "reference": "0601936125002-V2024"
                          },
                          {
                              "sku": 315220743,
                              "reference": "0564426125002-V2024"
                          },
                          {
                              "sku": 363789746,
                              "reference": "0556436225002-V2024"
                          },
                          {
                              "sku": 351411371,
                              "reference": "0188746125002-V2024"
                          },
                          {
                              "sku": 341687494,
                              "reference": "0601936125002-V2024"
                          },
                          {
                              "sku": 319301559,
                              "reference": "0558436125002-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 103,
                      "id": 3,
                      "name": "M",
                      "price": 995,
                      "reference": "0558426125003-V2024",
                      "sku": 315220730,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 351411373,
                              "reference": "0188746125003-V2024"
                          },
                          {
                              "sku": 323184089,
                              "reference": "0601936125003-V2024"
                          },
                          {
                              "sku": 319301560,
                              "reference": "0558436125003-V2024"
                          },
                          {
                              "sku": 341687495,
                              "reference": "0601936125003-V2024"
                          },
                          {
                              "sku": 363789748,
                              "reference": "0556436225003-V2024"
                          },
                          {
                              "sku": 315220744,
                              "reference": "0564426125003-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 104,
                      "id": 4,
                      "name": "L",
                      "price": 995,
                      "reference": "0558436125004-V2024",
                      "sku": 319301562,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184091,
                              "reference": "0601936125004-V2024"
                          },
                          {
                              "sku": 341687496,
                              "reference": "0601936125004-V2024"
                          },
                          {
                              "sku": 351411375,
                              "reference": "0188746125004-V2024"
                          },
                          {
                              "sku": 315220745,
                              "reference": "0564426125004-V2024"
                          },
                          {
                              "sku": 363789750,
                              "reference": "0556436225004-V2024"
                          },
                          {
                              "sku": 315220732,
                              "reference": "0558426125004-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 105,
                      "id": 5,
                      "name": "XL",
                      "price": 995,
                      "reference": "0558436125005-V2024",
                      "sku": 319301564,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184093,
                              "reference": "0601936125005-V2024"
                          },
                          {
                              "sku": 315220733,
                              "reference": "0558426125005-V2024"
                          },
                          {
                              "sku": 341687497,
                              "reference": "0601936125005-V2024"
                          },
                          {
                              "sku": 363789751,
                              "reference": "0556436225005-V2024"
                          },
                          {
                              "sku": 351411376,
                              "reference": "0188746125005-V2024"
                          },
                          {
                              "sku": 315220746,
                              "reference": "0564426125005-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 106,
                      "id": 6,
                      "name": "XXL",
                      "price": 995,
                      "reference": "0558436125006-V2024",
                      "sku": 319301566,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 341687498,
                              "reference": "0601936125006-V2024"
                          },
                          {
                              "sku": 351411377,
                              "reference": "0188746125006-V2024"
                          },
                          {
                              "sku": 315220734,
                              "reference": "0558426125006-V2024"
                          },
                          {
                              "sku": 315220747,
                              "reference": "0564426125006-V2024"
                          },
                          {
                              "sku": 363789752,
                              "reference": "0556436225006-V2024"
                          },
                          {
                              "sku": 323184095,
                              "reference": "0601936125006-V2024"
                          }
                      ]
                  }
              ],
              "description": "Camiseta slim fit. Cuello redondo y manga corta.",
              "rawDescription": "Camiseta slim fit. Cuello redondo y manga corta.",
              "extraInfo": {
                  "isStockInStoresAvailable": true,
                  "highlightPrice": false
              },
              "tagTypes": [],
              "attributes": [],
              "relations": [
                  {
                      "ids": [
                          311302678,
                          323851933
                      ],
                      "type": "RECOMMENDED"
                  }
              ]
          },
          {
              "id": "672",
              "hexCode": "#3D2E2D",
              "productId": 316180328,
              "name": "Ciruela oscuro",
              "reference": "C05584361672000-V2024",
              "stylingId": "0",
              "xmedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780817597",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "ed749bf91f9248deaa8c242ffbb35796",
                          "deliveryUrl": "https://static.zara.net/assets/public/ed74/9bf9/1f9248deaa8c/242ffbb35796/05584361672-p/05584361672-p.jpg?ts=1703780837721",
                          "deliveryPath": "/assets/public/ed74/9bf9/1f9248deaa8c/242ffbb35796/05584361672-p/05584361672-p.jpg?ts=1703780837721"
                      },
                      "url": "https://static.zara.net/assets/public/ed74/9bf9/1f9248deaa8c/242ffbb35796/05584361672-p/05584361672-p.jpg?ts=1703780837721&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_2_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780818056",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a1",
                          "assetId": "e5f9996214134962a9c712cee9dbd569",
                          "deliveryUrl": "https://static.zara.net/assets/public/e5f9/9962/14134962a9c7/12cee9dbd569/05584361672-a1/05584361672-a1.jpg?ts=1703780849569",
                          "deliveryPath": "/assets/public/e5f9/9962/14134962a9c7/12cee9dbd569/05584361672-a1/05584361672-a1.jpg?ts=1703780849569"
                      },
                      "url": "https://static.zara.net/assets/public/e5f9/9962/14134962a9c7/12cee9dbd569/05584361672-a1/05584361672-a1.jpg?ts=1703780849569&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_2_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780817936",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a2",
                          "assetId": "2ce458038a8f47549e79ba4f695bb8b3",
                          "deliveryUrl": "https://static.zara.net/assets/public/2ce4/5803/8a8f47549e79/ba4f695bb8b3/05584361672-a2/05584361672-a2.jpg?ts=1703780842905",
                          "deliveryPath": "/assets/public/2ce4/5803/8a8f47549e79/ba4f695bb8b3/05584361672-a2/05584361672-a2.jpg?ts=1703780842905"
                      },
                      "url": "https://static.zara.net/assets/public/2ce4/5803/8a8f47549e79/ba4f695bb8b3/05584361672-a2/05584361672-a2.jpg?ts=1703780842905&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_2_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780816466",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a3",
                          "assetId": "141b2d88fc164095a01ac90870437431",
                          "deliveryUrl": "https://static.zara.net/assets/public/141b/2d88/fc164095a01a/c90870437431/05584361672-a3/05584361672-a3.jpg?ts=1703780847845",
                          "deliveryPath": "/assets/public/141b/2d88/fc164095a01a/c90870437431/05584361672-a3/05584361672-a3.jpg?ts=1703780847845"
                      },
                      "url": "https://static.zara.net/assets/public/141b/2d88/fc164095a01a/c90870437431/05584361672-a3/05584361672-a3.jpg?ts=1703780847845&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_2_4_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780818429",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a4",
                          "assetId": "a973b54645de4b718a115cffc030c3f9",
                          "deliveryUrl": "https://static.zara.net/assets/public/a973/b546/45de4b718a11/5cffc030c3f9/05584361672-a4/05584361672-a4.jpg?ts=1703780852997",
                          "deliveryPath": "/assets/public/a973/b546/45de4b718a11/5cffc030c3f9/05584361672-a4/05584361672-a4.jpg?ts=1703780852997"
                      },
                      "url": "https://static.zara.net/assets/public/a973/b546/45de4b718a11/5cffc030c3f9/05584361672-a4/05584361672-a4.jpg?ts=1703780852997&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_6_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703759556572",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e1",
                          "assetId": "c33814fdc8d340e89cc519aa0f9382cd",
                          "deliveryUrl": "https://static.zara.net/assets/public/c338/14fd/c8d340e89cc5/19aa0f9382cd/05584361672-e1/05584361672-e1.jpg?ts=1703759627879",
                          "deliveryPath": "/assets/public/c338/14fd/c8d340e89cc5/19aa0f9382cd/05584361672-e1/05584361672-e1.jpg?ts=1703759627879"
                      },
                      "url": "https://static.zara.net/assets/public/c338/14fd/c8d340e89cc5/19aa0f9382cd/05584361672-e1/05584361672-e1.jpg?ts=1703759627879&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_6_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703759557676",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e2",
                          "assetId": "fda3ef05240049fcbd909267353dce42",
                          "deliveryUrl": "https://static.zara.net/assets/public/fda3/ef05/240049fcbd90/9267353dce42/05584361672-e2/05584361672-e2.jpg?ts=1703759602188",
                          "deliveryPath": "/assets/public/fda3/ef05/240049fcbd90/9267353dce42/05584361672-e2/05584361672-e2.jpg?ts=1703759602188"
                      },
                      "url": "https://static.zara.net/assets/public/fda3/ef05/240049fcbd90/9267353dce42/05584361672-e2/05584361672-e2.jpg?ts=1703759602188&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_6_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703759579246",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e3",
                          "assetId": "be96f34d541a4a5c8eec1da3fdb27810",
                          "deliveryUrl": "https://static.zara.net/assets/public/be96/f34d/541a4a5c8eec/1da3fdb27810/05584361672-e3/05584361672-e3.jpg?ts=1703759589722",
                          "deliveryPath": "/assets/public/be96/f34d/541a4a5c8eec/1da3fdb27810/05584361672-e3/05584361672-e3.jpg?ts=1703759589722"
                      },
                      "url": "https://static.zara.net/assets/public/be96/f34d/541a4a5c8eec/1da3fdb27810/05584361672-e3/05584361672-e3.jpg?ts=1703759589722&w={width}"
                  }
              ],
              "shopcartMedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/672/2",
                      "name": "5584361672_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780817597",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "ed749bf91f9248deaa8c242ffbb35796",
                          "deliveryUrl": "https://static.zara.net/assets/public/ed74/9bf9/1f9248deaa8c/242ffbb35796/05584361672-p/05584361672-p.jpg?ts=1703780837721",
                          "deliveryPath": "/assets/public/ed74/9bf9/1f9248deaa8c/242ffbb35796/05584361672-p/05584361672-p.jpg?ts=1703780837721"
                      },
                      "url": "https://static.zara.net/assets/public/ed74/9bf9/1f9248deaa8c/242ffbb35796/05584361672-p/05584361672-p.jpg?ts=1703780837721&w={width}"
                  }
              ],
              "price": 995,
              "sizes": [
                  {
                      "availability": "low_on_stock",
                      "equivalentSizeId": 102,
                      "id": 2,
                      "name": "S",
                      "price": 995,
                      "reference": "0558436167202-V2024",
                      "sku": 316178868,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_RUNNING_OUT",
                      "twinnedSkus": [
                          {
                              "sku": 323184098,
                              "reference": "0601936167202-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 103,
                      "id": 3,
                      "name": "M",
                      "price": 995,
                      "reference": "0558436167203-V2024",
                      "sku": 316178869,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184099,
                              "reference": "0601936167203-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 104,
                      "id": 4,
                      "name": "L",
                      "price": 995,
                      "reference": "0558436167204-V2024",
                      "sku": 316178870,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184100,
                              "reference": "0601936167204-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 105,
                      "id": 5,
                      "name": "XL",
                      "price": 995,
                      "reference": "0558436167205-V2024",
                      "sku": 316178871,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184101,
                              "reference": "0601936167205-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "out_of_stock",
                      "equivalentSizeId": 106,
                      "id": 6,
                      "name": "XXL",
                      "price": 995,
                      "reference": "0558436167206-V2024",
                      "sku": 316178872,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184102,
                              "reference": "0601936167206-V2024"
                          }
                      ]
                  }
              ],
              "description": "Camiseta slim fit. Cuello redondo y manga corta.",
              "rawDescription": "Camiseta slim fit. Cuello redondo y manga corta.",
              "extraInfo": {
                  "isStockInStoresAvailable": true,
                  "fitSizeMessage": "Este producto talla más pequeño de lo habitual.",
                  "highlightPrice": false
              },
              "tagTypes": [
                  {
                      "displayName": "POCAS UNIDADES",
                      "type": "FEW_ITEMS_LEFT"
                  }
              ],
              "attributes": [],
              "relations": [
                  {
                      "ids": [
                          278805720,
                          316691110,
                          316694827,
                          317108205
                      ],
                      "type": "RECOMMENDED"
                  }
              ]
          },
          {
              "id": "527",
              "hexCode": "#828874",
              "productId": 316180330,
              "name": "Verde medio",
              "reference": "C05584361527000-V2024",
              "stylingId": "0",
              "xmedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780817987",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "3ad1321328d84e588ee747c0bece815d",
                          "deliveryUrl": "https://static.zara.net/assets/public/3ad1/3213/28d84e588ee7/47c0bece815d/05584361527-p/05584361527-p.jpg?ts=1703780850686",
                          "deliveryPath": "/assets/public/3ad1/3213/28d84e588ee7/47c0bece815d/05584361527-p/05584361527-p.jpg?ts=1703780850686"
                      },
                      "url": "https://static.zara.net/assets/public/3ad1/3213/28d84e588ee7/47c0bece815d/05584361527-p/05584361527-p.jpg?ts=1703780850686&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_2_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780817569",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a1",
                          "assetId": "29f8338f8920476b92b8e9b98745f6ce",
                          "deliveryUrl": "https://static.zara.net/assets/public/29f8/338f/8920476b92b8/e9b98745f6ce/05584361527-a1/05584361527-a1.jpg?ts=1703780849382",
                          "deliveryPath": "/assets/public/29f8/338f/8920476b92b8/e9b98745f6ce/05584361527-a1/05584361527-a1.jpg?ts=1703780849382"
                      },
                      "url": "https://static.zara.net/assets/public/29f8/338f/8920476b92b8/e9b98745f6ce/05584361527-a1/05584361527-a1.jpg?ts=1703780849382&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_2_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780818494",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a2",
                          "assetId": "c64bb4529d7f4b85b377f7b300dbe7eb",
                          "deliveryUrl": "https://static.zara.net/assets/public/c64b/b452/9d7f4b85b377/f7b300dbe7eb/05584361527-a2/05584361527-a2.jpg?ts=1703780848118",
                          "deliveryPath": "/assets/public/c64b/b452/9d7f4b85b377/f7b300dbe7eb/05584361527-a2/05584361527-a2.jpg?ts=1703780848118"
                      },
                      "url": "https://static.zara.net/assets/public/c64b/b452/9d7f4b85b377/f7b300dbe7eb/05584361527-a2/05584361527-a2.jpg?ts=1703780848118&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_2_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780815804",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a3",
                          "assetId": "0e43b929803d468dbf3db934bd864fd8",
                          "deliveryUrl": "https://static.zara.net/assets/public/0e43/b929/803d468dbf3d/b934bd864fd8/05584361527-a3/05584361527-a3.jpg?ts=1703780835589",
                          "deliveryPath": "/assets/public/0e43/b929/803d468dbf3d/b934bd864fd8/05584361527-a3/05584361527-a3.jpg?ts=1703780835589"
                      },
                      "url": "https://static.zara.net/assets/public/0e43/b929/803d468dbf3d/b934bd864fd8/05584361527-a3/05584361527-a3.jpg?ts=1703780835589&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_2_4_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780818940",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a4",
                          "assetId": "4b7f12ebfedc48e4af37f61ce794f628",
                          "deliveryUrl": "https://static.zara.net/assets/public/4b7f/12eb/fedc48e4af37/f61ce794f628/05584361527-a4/05584361527-a4.jpg?ts=1703780843204",
                          "deliveryPath": "/assets/public/4b7f/12eb/fedc48e4af37/f61ce794f628/05584361527-a4/05584361527-a4.jpg?ts=1703780843204"
                      },
                      "url": "https://static.zara.net/assets/public/4b7f/12eb/fedc48e4af37/f61ce794f628/05584361527-a4/05584361527-a4.jpg?ts=1703780843204&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_2_5_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780818220",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a5",
                          "assetId": "fb89321fae6f43c4a559bedb2f1b060b",
                          "deliveryUrl": "https://static.zara.net/assets/public/fb89/321f/ae6f43c4a559/bedb2f1b060b/05584361527-a5/05584361527-a5.jpg?ts=1703780843638",
                          "deliveryPath": "/assets/public/fb89/321f/ae6f43c4a559/bedb2f1b060b/05584361527-a5/05584361527-a5.jpg?ts=1703780843638"
                      },
                      "url": "https://static.zara.net/assets/public/fb89/321f/ae6f43c4a559/bedb2f1b060b/05584361527-a5/05584361527-a5.jpg?ts=1703780843638&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_6_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703759575965",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e1",
                          "assetId": "165965200c284bc0abc365289c6b62df",
                          "deliveryUrl": "https://static.zara.net/assets/public/1659/6520/0c284bc0abc3/65289c6b62df/05584361527-e1/05584361527-e1.jpg?ts=1703759622178",
                          "deliveryPath": "/assets/public/1659/6520/0c284bc0abc3/65289c6b62df/05584361527-e1/05584361527-e1.jpg?ts=1703759622178"
                      },
                      "url": "https://static.zara.net/assets/public/1659/6520/0c284bc0abc3/65289c6b62df/05584361527-e1/05584361527-e1.jpg?ts=1703759622178&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_6_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703759556802",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e2",
                          "assetId": "038eb9dad0f54b5185029216dee1bf68",
                          "deliveryUrl": "https://static.zara.net/assets/public/038e/b9da/d0f54b518502/9216dee1bf68/05584361527-e2/05584361527-e2.jpg?ts=1703759603814",
                          "deliveryPath": "/assets/public/038e/b9da/d0f54b518502/9216dee1bf68/05584361527-e2/05584361527-e2.jpg?ts=1703759603814"
                      },
                      "url": "https://static.zara.net/assets/public/038e/b9da/d0f54b518502/9216dee1bf68/05584361527-e2/05584361527-e2.jpg?ts=1703759603814&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_6_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703759559780",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e3",
                          "assetId": "48fed3796a8f47c180428209ee4f7811",
                          "deliveryUrl": "https://static.zara.net/assets/public/48fe/d379/6a8f47c18042/8209ee4f7811/05584361527-e3/05584361527-e3.jpg?ts=1703759618864",
                          "deliveryPath": "/assets/public/48fe/d379/6a8f47c18042/8209ee4f7811/05584361527-e3/05584361527-e3.jpg?ts=1703759618864"
                      },
                      "url": "https://static.zara.net/assets/public/48fe/d379/6a8f47c18042/8209ee4f7811/05584361527-e3/05584361527-e3.jpg?ts=1703759618864&w={width}"
                  }
              ],
              "shopcartMedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/527/2",
                      "name": "5584361527_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1703780817987",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "3ad1321328d84e588ee747c0bece815d",
                          "deliveryUrl": "https://static.zara.net/assets/public/3ad1/3213/28d84e588ee7/47c0bece815d/05584361527-p/05584361527-p.jpg?ts=1703780850686",
                          "deliveryPath": "/assets/public/3ad1/3213/28d84e588ee7/47c0bece815d/05584361527-p/05584361527-p.jpg?ts=1703780850686"
                      },
                      "url": "https://static.zara.net/assets/public/3ad1/3213/28d84e588ee7/47c0bece815d/05584361527-p/05584361527-p.jpg?ts=1703780850686&w={width}"
                  }
              ],
              "price": 995,
              "sizes": [
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 102,
                      "id": 2,
                      "name": "S",
                      "price": 995,
                      "reference": "0558436152702-V2024",
                      "sku": 316178873,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184103,
                              "reference": "0601936152702-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 103,
                      "id": 3,
                      "name": "M",
                      "price": 995,
                      "reference": "0558436152703-V2024",
                      "sku": 316178874,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184104,
                              "reference": "0601936152703-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 104,
                      "id": 4,
                      "name": "L",
                      "price": 995,
                      "reference": "0558436152704-V2024",
                      "sku": 316178875,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184105,
                              "reference": "0601936152704-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "low_on_stock",
                      "equivalentSizeId": 105,
                      "id": 5,
                      "name": "XL",
                      "price": 995,
                      "reference": "0558436152705-V2024",
                      "sku": 316178876,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_RUNNING_OUT",
                      "twinnedSkus": [
                          {
                              "sku": 323184106,
                              "reference": "0601936152705-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "out_of_stock",
                      "equivalentSizeId": 106,
                      "id": 6,
                      "name": "XXL",
                      "price": 995,
                      "reference": "0558436152706-V2024",
                      "sku": 316178877,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 323184107,
                              "reference": "0601936152706-V2024"
                          }
                      ]
                  }
              ],
              "description": "Camiseta slim fit. Cuello redondo y manga corta.",
              "rawDescription": "Camiseta slim fit. Cuello redondo y manga corta.",
              "extraInfo": {
                  "isStockInStoresAvailable": true,
                  "fitSizeMessage": "Este producto talla más pequeño de lo habitual.",
                  "highlightPrice": false
              },
              "tagTypes": [
                  {
                      "displayName": "POCAS UNIDADES",
                      "type": "FEW_ITEMS_LEFT"
                  }
              ],
              "attributes": [],
              "relations": [
                  {
                      "ids": [
                          287602994,
                          322351733,
                          276373553
                      ],
                      "type": "RECOMMENDED"
                  }
              ]
          },
          {
              "id": "916",
              "hexCode": "#D4D6C7",
              "productId": 342972116,
              "name": "Verde gris",
              "reference": "C05584361916000-V2024",
              "stylingId": "0",
              "xmedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536393517",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "5cf6ecc4ee534b9c92c181f28d81bca8",
                          "deliveryUrl": "https://static.zara.net/assets/public/5cf6/ecc4/ee534b9c92c1/81f28d81bca8/05584361916-p/05584361916-p.jpg?ts=1711536405817",
                          "deliveryPath": "/assets/public/5cf6/ecc4/ee534b9c92c1/81f28d81bca8/05584361916-p/05584361916-p.jpg?ts=1711536405817"
                      },
                      "url": "https://static.zara.net/assets/public/5cf6/ecc4/ee534b9c92c1/81f28d81bca8/05584361916-p/05584361916-p.jpg?ts=1711536405817&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_2_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536393201",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a1",
                          "assetId": "355e9b5604a541eb9eae92cea372bf94",
                          "deliveryUrl": "https://static.zara.net/assets/public/355e/9b56/04a541eb9eae/92cea372bf94/05584361916-a1/05584361916-a1.jpg?ts=1711536405791",
                          "deliveryPath": "/assets/public/355e/9b56/04a541eb9eae/92cea372bf94/05584361916-a1/05584361916-a1.jpg?ts=1711536405791"
                      },
                      "url": "https://static.zara.net/assets/public/355e/9b56/04a541eb9eae/92cea372bf94/05584361916-a1/05584361916-a1.jpg?ts=1711536405791&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_2_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536393198",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a2",
                          "assetId": "3ebdf19e47ee4831ba1910b4b3bceb6a",
                          "deliveryUrl": "https://static.zara.net/assets/public/3ebd/f19e/47ee4831ba19/10b4b3bceb6a/05584361916-a2/05584361916-a2.jpg?ts=1711536405994",
                          "deliveryPath": "/assets/public/3ebd/f19e/47ee4831ba19/10b4b3bceb6a/05584361916-a2/05584361916-a2.jpg?ts=1711536405994"
                      },
                      "url": "https://static.zara.net/assets/public/3ebd/f19e/47ee4831ba19/10b4b3bceb6a/05584361916-a2/05584361916-a2.jpg?ts=1711536405994&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_2_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536393159",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a3",
                          "assetId": "0ba53774760b4f8c86a7c3461552fdd8",
                          "deliveryUrl": "https://static.zara.net/assets/public/0ba5/3774/760b4f8c86a7/c3461552fdd8/05584361916-a3/05584361916-a3.jpg?ts=1711536406378",
                          "deliveryPath": "/assets/public/0ba5/3774/760b4f8c86a7/c3461552fdd8/05584361916-a3/05584361916-a3.jpg?ts=1711536406378"
                      },
                      "url": "https://static.zara.net/assets/public/0ba5/3774/760b4f8c86a7/c3461552fdd8/05584361916-a3/05584361916-a3.jpg?ts=1711536406378&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_2_4_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536393132",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a4",
                          "assetId": "e24c7047d1ff472ca7f082c2be0decdd",
                          "deliveryUrl": "https://static.zara.net/assets/public/e24c/7047/d1ff472ca7f0/82c2be0decdd/05584361916-a4/05584361916-a4.jpg?ts=1711536405848",
                          "deliveryPath": "/assets/public/e24c/7047/d1ff472ca7f0/82c2be0decdd/05584361916-a4/05584361916-a4.jpg?ts=1711536405848"
                      },
                      "url": "https://static.zara.net/assets/public/e24c/7047/d1ff472ca7f0/82c2be0decdd/05584361916-a4/05584361916-a4.jpg?ts=1711536405848&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_6_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711453907360",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e1",
                          "assetId": "3c6961efedb541be80a45b3865edc656",
                          "deliveryUrl": "https://static.zara.net/assets/public/3c69/61ef/edb541be80a4/5b3865edc656/05584361916-e1/05584361916-e1.jpg?ts=1711453914920",
                          "deliveryPath": "/assets/public/3c69/61ef/edb541be80a4/5b3865edc656/05584361916-e1/05584361916-e1.jpg?ts=1711453914920"
                      },
                      "url": "https://static.zara.net/assets/public/3c69/61ef/edb541be80a4/5b3865edc656/05584361916-e1/05584361916-e1.jpg?ts=1711453914920&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_6_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711453907356",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e2",
                          "assetId": "a034cf001df04d81bbfa09b49c233fef",
                          "deliveryUrl": "https://static.zara.net/assets/public/a034/cf00/1df04d81bbfa/09b49c233fef/05584361916-e2/05584361916-e2.jpg?ts=1711453915013",
                          "deliveryPath": "/assets/public/a034/cf00/1df04d81bbfa/09b49c233fef/05584361916-e2/05584361916-e2.jpg?ts=1711453915013"
                      },
                      "url": "https://static.zara.net/assets/public/a034/cf00/1df04d81bbfa/09b49c233fef/05584361916-e2/05584361916-e2.jpg?ts=1711453915013&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_6_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711453907378",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e3",
                          "assetId": "f4b6065bcab84b01a31576ecd0ab1205",
                          "deliveryUrl": "https://static.zara.net/assets/public/f4b6/065b/cab84b01a315/76ecd0ab1205/05584361916-e3/05584361916-e3.jpg?ts=1711453927377",
                          "deliveryPath": "/assets/public/f4b6/065b/cab84b01a315/76ecd0ab1205/05584361916-e3/05584361916-e3.jpg?ts=1711453927377"
                      },
                      "url": "https://static.zara.net/assets/public/f4b6/065b/cab84b01a315/76ecd0ab1205/05584361916-e3/05584361916-e3.jpg?ts=1711453927377&w={width}"
                  }
              ],
              "shopcartMedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/916/2",
                      "name": "5584361916_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536393517",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "5cf6ecc4ee534b9c92c181f28d81bca8",
                          "deliveryUrl": "https://static.zara.net/assets/public/5cf6/ecc4/ee534b9c92c1/81f28d81bca8/05584361916-p/05584361916-p.jpg?ts=1711536405817",
                          "deliveryPath": "/assets/public/5cf6/ecc4/ee534b9c92c1/81f28d81bca8/05584361916-p/05584361916-p.jpg?ts=1711536405817"
                      },
                      "url": "https://static.zara.net/assets/public/5cf6/ecc4/ee534b9c92c1/81f28d81bca8/05584361916-p/05584361916-p.jpg?ts=1711536405817&w={width}"
                  }
              ],
              "price": 995,
              "sizes": [
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 102,
                      "id": 2,
                      "name": "S",
                      "price": 995,
                      "reference": "0558436191602-V2024",
                      "sku": 342967782,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940020,
                              "reference": "0558426191602-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 103,
                      "id": 3,
                      "name": "M",
                      "price": 995,
                      "reference": "0558436191603-V2024",
                      "sku": 342967784,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940021,
                              "reference": "0558426191603-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 104,
                      "id": 4,
                      "name": "L",
                      "price": 995,
                      "reference": "0558436191604-V2024",
                      "sku": 342967786,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940022,
                              "reference": "0558426191604-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 105,
                      "id": 5,
                      "name": "XL",
                      "price": 995,
                      "reference": "0558436191605-V2024",
                      "sku": 342967788,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940023,
                              "reference": "0558426191605-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "coming_soon",
                      "equivalentSizeId": 106,
                      "id": 6,
                      "name": "XXL",
                      "price": 995,
                      "reference": "0558436191606-V2024",
                      "sku": 342967790,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940024,
                              "reference": "0558426191606-V2024"
                          }
                      ]
                  }
              ],
              "description": "Camiseta slim fit. Cuello redondo y manga corta.",
              "rawDescription": "Camiseta slim fit. Cuello redondo y manga corta.",
              "extraInfo": {
                  "isStockInStoresAvailable": true,
                  "fitSizeMessage": "Este producto talla más pequeño de lo habitual.",
                  "highlightPrice": false
              },
              "tagTypes": [],
              "attributes": [],
              "relations": [
                  {
                      "ids": [
                          344695881,
                          345136107,
                          345916970,
                          326817702
                      ],
                      "type": "RECOMMENDED"
                  }
              ]
          },
          {
              "id": "725",
              "hexCode": "#FCF5E8",
              "productId": 342972114,
              "name": "Mantequilla",
              "reference": "C05584361725000-V2024",
              "stylingId": "0",
              "xmedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155574",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "0ba2ba8a18084e258740e7546b2c069a",
                          "deliveryUrl": "https://static.zara.net/assets/public/0ba2/ba8a/18084e258740/e7546b2c069a/05584361725-p/05584361725-p.jpg?ts=1711541182110",
                          "deliveryPath": "/assets/public/0ba2/ba8a/18084e258740/e7546b2c069a/05584361725-p/05584361725-p.jpg?ts=1711541182110"
                      },
                      "url": "https://static.zara.net/assets/public/0ba2/ba8a/18084e258740/e7546b2c069a/05584361725-p/05584361725-p.jpg?ts=1711541182110&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_2_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155845",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a1",
                          "assetId": "90fb46f781a942d6a596d5d91384aef5",
                          "deliveryUrl": "https://static.zara.net/assets/public/90fb/46f7/81a942d6a596/d5d91384aef5/05584361725-a1/05584361725-a1.jpg?ts=1711541185064",
                          "deliveryPath": "/assets/public/90fb/46f7/81a942d6a596/d5d91384aef5/05584361725-a1/05584361725-a1.jpg?ts=1711541185064"
                      },
                      "url": "https://static.zara.net/assets/public/90fb/46f7/81a942d6a596/d5d91384aef5/05584361725-a1/05584361725-a1.jpg?ts=1711541185064&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_2_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541156050",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a2",
                          "assetId": "34b47d7c3d0f49b19bdce88399164a2f",
                          "deliveryUrl": "https://static.zara.net/assets/public/34b4/7d7c/3d0f49b19bdc/e88399164a2f/05584361725-a2/05584361725-a2.jpg?ts=1711541179832",
                          "deliveryPath": "/assets/public/34b4/7d7c/3d0f49b19bdc/e88399164a2f/05584361725-a2/05584361725-a2.jpg?ts=1711541179832"
                      },
                      "url": "https://static.zara.net/assets/public/34b4/7d7c/3d0f49b19bdc/e88399164a2f/05584361725-a2/05584361725-a2.jpg?ts=1711541179832&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_2_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155788",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a3",
                          "assetId": "9a341c611c7640d4a7a43724b3ed61bf",
                          "deliveryUrl": "https://static.zara.net/assets/public/9a34/1c61/1c7640d4a7a4/3724b3ed61bf/05584361725-a3/05584361725-a3.jpg?ts=1711541184540",
                          "deliveryPath": "/assets/public/9a34/1c61/1c7640d4a7a4/3724b3ed61bf/05584361725-a3/05584361725-a3.jpg?ts=1711541184540"
                      },
                      "url": "https://static.zara.net/assets/public/9a34/1c61/1c7640d4a7a4/3724b3ed61bf/05584361725-a3/05584361725-a3.jpg?ts=1711541184540&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_2_4_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541156330",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a4",
                          "assetId": "6763eb86eba241d2af62057effc4c02e",
                          "deliveryUrl": "https://static.zara.net/assets/public/6763/eb86/eba241d2af62/057effc4c02e/05584361725-a4/05584361725-a4.jpg?ts=1711541184378",
                          "deliveryPath": "/assets/public/6763/eb86/eba241d2af62/057effc4c02e/05584361725-a4/05584361725-a4.jpg?ts=1711541184378"
                      },
                      "url": "https://static.zara.net/assets/public/6763/eb86/eba241d2af62/057effc4c02e/05584361725-a4/05584361725-a4.jpg?ts=1711541184378&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_2_5_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541156345",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a5",
                          "assetId": "7ae9c27ce26a424c91b6e26bb67cd57b",
                          "deliveryUrl": "https://static.zara.net/assets/public/7ae9/c27c/e26a424c91b6/e26bb67cd57b/05584361725-a5/05584361725-a5.jpg?ts=1711541184397",
                          "deliveryPath": "/assets/public/7ae9/c27c/e26a424c91b6/e26bb67cd57b/05584361725-a5/05584361725-a5.jpg?ts=1711541184397"
                      },
                      "url": "https://static.zara.net/assets/public/7ae9/c27c/e26a424c91b6/e26bb67cd57b/05584361725-a5/05584361725-a5.jpg?ts=1711541184397&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_6_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536809798",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e1",
                          "assetId": "5c70cee02c904e8a97023c5747268592",
                          "deliveryUrl": "https://static.zara.net/assets/public/5c70/cee0/2c904e8a9702/3c5747268592/05584361725-e1/05584361725-e1.jpg?ts=1711536839440",
                          "deliveryPath": "/assets/public/5c70/cee0/2c904e8a9702/3c5747268592/05584361725-e1/05584361725-e1.jpg?ts=1711536839440"
                      },
                      "url": "https://static.zara.net/assets/public/5c70/cee0/2c904e8a9702/3c5747268592/05584361725-e1/05584361725-e1.jpg?ts=1711536839440&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_6_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536809135",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e2",
                          "assetId": "4742bef124b84e5c8f26055e6074a17e",
                          "deliveryUrl": "https://static.zara.net/assets/public/4742/bef1/24b84e5c8f26/055e6074a17e/05584361725-e2/05584361725-e2.jpg?ts=1711536829260",
                          "deliveryPath": "/assets/public/4742/bef1/24b84e5c8f26/055e6074a17e/05584361725-e2/05584361725-e2.jpg?ts=1711536829260"
                      },
                      "url": "https://static.zara.net/assets/public/4742/bef1/24b84e5c8f26/055e6074a17e/05584361725-e2/05584361725-e2.jpg?ts=1711536829260&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_6_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536810669",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e3",
                          "assetId": "58e3c5bb40174437a3839a55ce12c3e1",
                          "deliveryUrl": "https://static.zara.net/assets/public/58e3/c5bb/40174437a383/9a55ce12c3e1/05584361725-e3/05584361725-e3.jpg?ts=1711536834091",
                          "deliveryPath": "/assets/public/58e3/c5bb/40174437a383/9a55ce12c3e1/05584361725-e3/05584361725-e3.jpg?ts=1711536834091"
                      },
                      "url": "https://static.zara.net/assets/public/58e3/c5bb/40174437a383/9a55ce12c3e1/05584361725-e3/05584361725-e3.jpg?ts=1711536834091&w={width}"
                  }
              ],
              "shopcartMedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/725/2",
                      "name": "5584361725_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155574",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "0ba2ba8a18084e258740e7546b2c069a",
                          "deliveryUrl": "https://static.zara.net/assets/public/0ba2/ba8a/18084e258740/e7546b2c069a/05584361725-p/05584361725-p.jpg?ts=1711541182110",
                          "deliveryPath": "/assets/public/0ba2/ba8a/18084e258740/e7546b2c069a/05584361725-p/05584361725-p.jpg?ts=1711541182110"
                      },
                      "url": "https://static.zara.net/assets/public/0ba2/ba8a/18084e258740/e7546b2c069a/05584361725-p/05584361725-p.jpg?ts=1711541182110&w={width}"
                  }
              ],
              "price": 995,
              "sizes": [
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 102,
                      "id": 2,
                      "name": "S",
                      "price": 995,
                      "reference": "0558436172502-V2024",
                      "sku": 342967783,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR"
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 103,
                      "id": 3,
                      "name": "M",
                      "price": 995,
                      "reference": "0558436172503-V2024",
                      "sku": 342967785,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR"
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 104,
                      "id": 4,
                      "name": "L",
                      "price": 995,
                      "reference": "0558436172504-V2024",
                      "sku": 342967787,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR"
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 105,
                      "id": 5,
                      "name": "XL",
                      "price": 995,
                      "reference": "0558436172505-V2024",
                      "sku": 342967789,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR"
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 106,
                      "id": 6,
                      "name": "XXL",
                      "price": 995,
                      "reference": "0558436172506-V2024",
                      "sku": 342967791,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR"
                  }
              ],
              "description": "Camiseta slim fit. Cuello redondo y manga corta.",
              "rawDescription": "Camiseta slim fit. Cuello redondo y manga corta.",
              "extraInfo": {
                  "isStockInStoresAvailable": true,
                  "highlightPrice": false
              },
              "tagTypes": [],
              "attributes": [],
              "relations": [
                  {
                      "ids": [
                          314149438,
                          364768183,
                          356130267,
                          364855359,
                          341516636
                      ],
                      "type": "RECOMMENDED"
                  }
              ]
          },
          {
              "id": "409",
              "hexCode": "#A1B7C8",
              "productId": 342972115,
              "name": "Petróleo",
              "reference": "C05584361409000-V2024",
              "stylingId": "0",
              "xmedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155833",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "230d4bd580984d8bb7b0b29638117416",
                          "deliveryUrl": "https://static.zara.net/assets/public/230d/4bd5/80984d8bb7b0/b29638117416/05584361409-p/05584361409-p.jpg?ts=1711541179100",
                          "deliveryPath": "/assets/public/230d/4bd5/80984d8bb7b0/b29638117416/05584361409-p/05584361409-p.jpg?ts=1711541179100"
                      },
                      "url": "https://static.zara.net/assets/public/230d/4bd5/80984d8bb7b0/b29638117416/05584361409-p/05584361409-p.jpg?ts=1711541179100&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_2_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155891",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a1",
                          "assetId": "ffbaeb8d6a324c0fa32cb7553a654659",
                          "deliveryUrl": "https://static.zara.net/assets/public/ffba/eb8d/6a324c0fa32c/b7553a654659/05584361409-a1/05584361409-a1.jpg?ts=1711541182763",
                          "deliveryPath": "/assets/public/ffba/eb8d/6a324c0fa32c/b7553a654659/05584361409-a1/05584361409-a1.jpg?ts=1711541182763"
                      },
                      "url": "https://static.zara.net/assets/public/ffba/eb8d/6a324c0fa32c/b7553a654659/05584361409-a1/05584361409-a1.jpg?ts=1711541182763&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_2_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155828",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a2",
                          "assetId": "7ce2a8bae2e541c0b9333497958c3291",
                          "deliveryUrl": "https://static.zara.net/assets/public/7ce2/a8ba/e2e541c0b933/3497958c3291/05584361409-a2/05584361409-a2.jpg?ts=1711541180110",
                          "deliveryPath": "/assets/public/7ce2/a8ba/e2e541c0b933/3497958c3291/05584361409-a2/05584361409-a2.jpg?ts=1711541180110"
                      },
                      "url": "https://static.zara.net/assets/public/7ce2/a8ba/e2e541c0b933/3497958c3291/05584361409-a2/05584361409-a2.jpg?ts=1711541180110&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_2_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541156353",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a3",
                          "assetId": "6cb5d9d318794fad9d317236f0fcfe20",
                          "deliveryUrl": "https://static.zara.net/assets/public/6cb5/d9d3/18794fad9d31/7236f0fcfe20/05584361409-a3/05584361409-a3.jpg?ts=1711541180405",
                          "deliveryPath": "/assets/public/6cb5/d9d3/18794fad9d31/7236f0fcfe20/05584361409-a3/05584361409-a3.jpg?ts=1711541180405"
                      },
                      "url": "https://static.zara.net/assets/public/6cb5/d9d3/18794fad9d31/7236f0fcfe20/05584361409-a3/05584361409-a3.jpg?ts=1711541180405&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "other",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_2_4_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155601",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "a4",
                          "assetId": "58811e5bd05c48778cfbb4afdc691f8e",
                          "deliveryUrl": "https://static.zara.net/assets/public/5881/1e5b/d05c48778cfb/b4afdc691f8e/05584361409-a4/05584361409-a4.jpg?ts=1711541183118",
                          "deliveryPath": "/assets/public/5881/1e5b/d05c48778cfb/b4afdc691f8e/05584361409-a4/05584361409-a4.jpg?ts=1711541183118"
                      },
                      "url": "https://static.zara.net/assets/public/5881/1e5b/d05c48778cfb/b4afdc691f8e/05584361409-a4/05584361409-a4.jpg?ts=1711541183118&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_6_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536810707",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e1",
                          "assetId": "78936a26dade403e8c02b51031e021d6",
                          "deliveryUrl": "https://static.zara.net/assets/public/7893/6a26/dade403e8c02/b51031e021d6/05584361409-e1/05584361409-e1.jpg?ts=1711536834288",
                          "deliveryPath": "/assets/public/7893/6a26/dade403e8c02/b51031e021d6/05584361409-e1/05584361409-e1.jpg?ts=1711536834288"
                      },
                      "url": "https://static.zara.net/assets/public/7893/6a26/dade403e8c02/b51031e021d6/05584361409-e1/05584361409-e1.jpg?ts=1711536834288&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_6_2_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536809670",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e2",
                          "assetId": "8cdd79a5373f4fa6bb6d914d35184f9f",
                          "deliveryUrl": "https://static.zara.net/assets/public/8cdd/79a5/373f4fa6bb6d/914d35184f9f/05584361409-e2/05584361409-e2.jpg?ts=1711536848470",
                          "deliveryPath": "/assets/public/8cdd/79a5/373f4fa6bb6d/914d35184f9f/05584361409-e2/05584361409-e2.jpg?ts=1711536848470"
                      },
                      "url": "https://static.zara.net/assets/public/8cdd/79a5/373f4fa6bb6d/914d35184f9f/05584361409-e2/05584361409-e2.jpg?ts=1711536848470&w={width}"
                  },
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "plain",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_6_3_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711536811459",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "e3",
                          "assetId": "aa977d9a6c654676a27316b5df9d6208",
                          "deliveryUrl": "https://static.zara.net/assets/public/aa97/7d9a/6c654676a273/16b5df9d6208/05584361409-e3/05584361409-e3.jpg?ts=1711536852098",
                          "deliveryPath": "/assets/public/aa97/7d9a/6c654676a273/16b5df9d6208/05584361409-e3/05584361409-e3.jpg?ts=1711536852098"
                      },
                      "url": "https://static.zara.net/assets/public/aa97/7d9a/6c654676a273/16b5df9d6208/05584361409-e3/05584361409-e3.jpg?ts=1711536852098&w={width}"
                  }
              ],
              "shopcartMedia": [
                  {
                      "datatype": "xmedia",
                      "set": 2,
                      "type": "image",
                      "kind": "full",
                      "path": "/2024/V/0/2/p/5584/361/409/2",
                      "name": "5584361409_1_1_1",
                      "width": 2048,
                      "height": 3072,
                      "timestamp": "1711541155833",
                      "allowedScreens": [
                          "small",
                          "large"
                      ],
                      "gravity": "top",
                      "extraInfo": {
                          "originalName": "p",
                          "assetId": "230d4bd580984d8bb7b0b29638117416",
                          "deliveryUrl": "https://static.zara.net/assets/public/230d/4bd5/80984d8bb7b0/b29638117416/05584361409-p/05584361409-p.jpg?ts=1711541179100",
                          "deliveryPath": "/assets/public/230d/4bd5/80984d8bb7b0/b29638117416/05584361409-p/05584361409-p.jpg?ts=1711541179100"
                      },
                      "url": "https://static.zara.net/assets/public/230d/4bd5/80984d8bb7b0/b29638117416/05584361409-p/05584361409-p.jpg?ts=1711541179100&w={width}"
                  }
              ],
              "price": 995,
              "sizes": [
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 102,
                      "id": 2,
                      "name": "S",
                      "price": 995,
                      "reference": "0558436140902-V2024",
                      "sku": 342967770,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940005,
                              "reference": "0558426140902-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 103,
                      "id": 3,
                      "name": "M",
                      "price": 995,
                      "reference": "0558436140903-V2024",
                      "sku": 342967772,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940006,
                              "reference": "0558426140903-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 104,
                      "id": 4,
                      "name": "L",
                      "price": 995,
                      "reference": "0558436140904-V2024",
                      "sku": 342967774,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940007,
                              "reference": "0558426140904-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "low_on_stock",
                      "equivalentSizeId": 105,
                      "id": 5,
                      "name": "XL",
                      "price": 995,
                      "reference": "0558436140905-V2024",
                      "sku": 342967775,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_RUNNING_OUT",
                      "twinnedSkus": [
                          {
                              "sku": 365940008,
                              "reference": "0558426140905-V2024"
                          }
                      ]
                  },
                  {
                      "availability": "in_stock",
                      "equivalentSizeId": 106,
                      "id": 6,
                      "name": "XXL",
                      "price": 995,
                      "reference": "0558436140906-V2024",
                      "sku": 342967776,
                      "attributes": [
                          {
                              "type": "Mark",
                              "identifier": "PACKAGING",
                              "name": "",
                              "values": [],
                              "properties": {}
                          },
                          {
                              "type": "Valued",
                              "identifier": "CONFECTION",
                              "name": "",
                              "values": [
                                  "TR"
                              ],
                              "properties": {}
                          }
                      ],
                      "demand": "DEMAND_REGULAR",
                      "twinnedSkus": [
                          {
                              "sku": 365940009,
                              "reference": "0558426140906-V2024"
                          }
                      ]
                  }
              ],
              "description": "Camiseta slim fit. Cuello redondo y manga corta.",
              "rawDescription": "Camiseta slim fit. Cuello redondo y manga corta.",
              "extraInfo": {
                  "isStockInStoresAvailable": true,
                  "fitSizeMessage": "Este producto talla más pequeño de lo habitual.",
                  "highlightPrice": false
              },
              "tagTypes": [
                  {
                      "displayName": "POCAS UNIDADES",
                      "type": "FEW_ITEMS_LEFT"
                  }
              ],
              "attributes": [],
              "relations": [
                  {
                      "ids": [
                          360206832,
                          311302792,
                          313030935,
                          345643996
                      ],
                      "type": "RECOMMENDED"
                  }
              ]
          }
      ],
      "colorSelectorLabel": "Color",
      "multipleColorLabel": "+7",
      "detailedComposition": {
          "parts": [
              {
                  "description": "EXTERIOR",
                  "areas": [],
                  "components": [
                      {
                          "material": "algodón",
                          "percentage": "95%"
                      },
                      {
                          "material": "elastano",
                          "percentage": "5%"
                      }
                  ],
                  "microcontents": [],
                  "reinforcements": []
              }
          ],
          "exceptions": []
      }
  },
  "section": 2,
  "sectionName": "MAN",
  "familyId": 83,
  "familyName": "CAMISETA",
  "subfamilyId": 12477,
  "subfamilyName": "B. Camiseta",
  "extraInfo": {
      "isSizeRecommender": true,
      "hasSpecialReturnConditions": false,
      "hasInteractiveSizeGuide": true,
      "extraDetailTitle": "Composición, cuidados & origen",
      "isBracketingRestricted": true,
      "hasTipsOnExtraDetail": true,
      "highlightPrice": false
  },
  "seo": {
      "keyword": "camiseta-basica-slim-fit",
      "description": "Camiseta slim fit. Cuello redondo y manga corta.",
      "breadCrumb": [
          {
              "text": "CAMISETA BÁSICA SLIM FIT",
              "id": 0
          }
      ],
      "seoProductId": "05584361",
      "discernProductId": 315241755,
      "keyWordI18n": [
          {
              "langId": -1,
              "keyword": "basic-slim-fit-t-shirt"
          },
          {
              "langId": -5,
              "keyword": "camiseta-basica-slim-fit"
          },
          {
              "langId": -11,
              "keyword": "slim-fit-kamiseta-basikoa"
          },
          {
              "langId": -12,
              "keyword": "camiseta-basica-slim-fit"
          },
          {
              "langId": -13,
              "keyword": "samarreta-basica-slim-fit"
          }
      ]
  },
  "firstVisibleDate": "2023-12-01T08:32:04Z",
  "attributes": [],
  "sizeGuide": {
      "enabled": true
  }
}

const useProductInfo = create((set) => ({
  productInfo: defaultProductInfo,
  setProductInfo: (value) => set({ productInfo: value }),
  reset: () => set({ productInfo: null })
}));

export { useProductInfo };

