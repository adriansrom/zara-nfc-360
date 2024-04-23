import React, { useEffect, useState } from 'react'
import './ProductDescription.css'
import getProductInfo from '../../service/productInfo/productInfoService';
import { useParams } from 'react-router-dom';
import PrimaryButton from '../primaryButton/PrimaryButton';

export default function ProductDescription() {
    const [productInfo, setProductInfo] = useState(null);
    const [showDescription, setShowDescription] = useState(false)
    const { productId } = useParams();

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }

    useEffect(() => {
        if (productId) {
            getProductInfo(productId).then(data => {
                setProductInfo(data)
            });
        }
    }, [productId])
    return (
        <div className='productDescriptionContainer'>
            {productInfo !== null && 
                <>
                 {(!showDescription &&
                    <>
                        <section>
                            <h3>
                                {productInfo.name} - 34,99 EUR
                            </h3>
                            <p>Chaleco de punto de la <b>TALLA M</b> y <b>COLOR BEIGE</b>.</p>
                            <p>Tu talla habitual para este tipo de prendas es la L y en esta tienda tienes 3 unidades.</p>

                        </section>
                        <div className='buttonContainer'>
                            <PrimaryButton text='MAS INFORMACION' size='large' mode='dark' onClick={toggleDescription}></PrimaryButton>
                        </div>
                    </>
                 )}

                {(showDescription &&
                    <>
                        <div className='backBtn'>
                            <button className='dark' onClick={toggleDescription}>
                            <svg width="30" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.295 19.716a1 1 0 0 0 1.404-1.425l-5.37-5.29h13.67a1 1 0 1 0 0-2H6.336L11.7 5.714a1 1 0 0 0-1.404-1.424l-6.924 6.822a1.25 1.25 0 0 0 0 1.78l6.924 6.823Z" fill="#ffffff"/></svg>
                            </button>
                        </div>
                        <img
                        className='productImage'
                        src={productInfo.imageUrl}></img>
                        <section>
                            <h3>
                                {productInfo.name} - 34,99 EUR
                            </h3> 
                            <p>{productInfo.description}</p>
                        </section>
                        <section>
                            <h4>
                                COMPOSICIÓN
                            </h4>
                            <p>{productInfo.composition}</p>
                        </section>
                        <section>
                            <h4>
                                CUIDADOS
                            </h4>
                            <p>{productInfo.care}</p>
                        </section>
                        <section>
                            <h4>
                                ORIGEN
                            </h4>
                            <p>{productInfo.origin}</p>
                        </section>
                    </>
                )}



                </>
            }
        </div>
    )
}
