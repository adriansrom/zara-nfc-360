import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPhysicalStock from '../../service/physicalStock/physicalStockService';
import getProductInfo from '../../service/productInfo/productInfoService';
import { useProductInfo } from '../../store/product/productInfo';
import PrimaryButton from '../primaryButton/PrimaryButton';
import './ProductDescription.css';

export default function ProductDescription() {
    const { productInfo, setProductInfo } = useProductInfo();
    const [showDescription, setShowDescription] = useState(false)
    const [productStock , setProductStock] = useState(null);
    const { productId } = useParams();

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }

    useEffect(() => {
        if (productId) {
            getProductInfo(productId)
                .then(async data => {
                    setProductInfo(data)
                })
                .catch(error => {
                    console.error(error)
                })
            getPhysicalStock(`${productId}-V2024`).then(data => {
                    setProductStock(data)
                }).catch(error => {
                    console.error(error)
                })
        }
    }, [productId])
    return (
        <div className='productDescriptionContainer'>
            {productInfo !== null && productStock !== null &&
                <>
                 {(!showDescription &&
                    <>
                        <section>
                            <h3 autoFocus>
                                {productInfo.name} - {productInfo.price} EUR
                            </h3>
                            <p>{productInfo.shortDescription} de la <b>TALLA {productInfo.detail.size}</b> y <b>COLOR {productInfo.detail.color.toUpperCase()}</b>.</p>
                            <p>Tu talla habitual para este tipo de prendas es la {productInfo.recommendedSize} y en esta tienda tienes {productStock} unidades.</p>
                        <div className='buttonContainer'>
                            <PrimaryButton text='MAS INFORMACION' size='large' mode='dark' onClick={toggleDescription}></PrimaryButton>
                        </div>

                        </section>
                    </>
                 )}

                {(showDescription &&
                    <>
                        <div className='backBtn'>
                            <button className='dark' aria-label='Atras' onClick={toggleDescription}>
                            <svg width="30" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.295 19.716a1 1 0 0 0 1.404-1.425l-5.37-5.29h13.67a1 1 0 1 0 0-2H6.336L11.7 5.714a1 1 0 0 0-1.404-1.424l-6.924 6.822a1.25 1.25 0 0 0 0 1.78l6.924 6.823Z" fill="#ffffff"/></svg>
                            </button>
                        </div>
                        <img
                        className='productImage'
                        src={productInfo.detail.url}
                        alt={productInfo.description}
                        ></img>
                        <section>
                            <h3>
                                {productInfo.name} - {productInfo.price} EUR
                            </h3>
                            <p>{productInfo.description}</p>
                        </section>
                        <section>
                            <h4>
                                COMPOSICIÓN
                            </h4>
                            <p>Trabajamos con programas de seguimiento para garantizar el cumplimiento de nuestros estándares sociales, medioambientales y de seguridad y salud de nuestros productos. Para evaluar su cumplimiento hemos desarrollado un programa de auditorías y planes de mejora continua.</p>
                            <h5>Exterior</h5>
                            <ul>
                                {
                                    productInfo.detail.composition.map((item) => (
                                        <li key={item.percentage}>{item.percentage} - {item.material} </li>
                                    ))
                                }
                            </ul>
                        </section>
                        <section>
                            <h4>
                                CUIDADOS
                            </h4>
                            <p>Cuidar de tus prendas es cuidar del medioambiente. Lava tus prendas sólo cuando sea necesario, a veces es suficiente con ventilarlas. Los procesos de lavado desgastan poco a poco los tejidos, reduciéndo los lavados alargamos la vida de nuestras prendas y reducimos el consumo de agua y energía en procesos de cuidado.</p>
                        </section>
                        <section>
                            <h4>
                                ORIGEN
                            </h4>
                            <p>Trabajamos con nuestros proveedores, trabajadores, sindicatos y organismos internacionales para desarrollar una cadena de suministro en la que se respetan y promueven los derechos humanos, contribuyendo a los Objetivos de Desarrollo Sostenible de Naciones Unidas. Gracias a la colaboración con nuestros proveedores, trabajamos para conocer las instalaciones y procesos que se emplean para fabricar nuestros productos con el objetivo de conocer su trazabilidad. Hecho en China</p>
                        </section>
                    </>
                )}



                </>
            }
        </div>
    )
}
