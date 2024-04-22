import React, { useEffect, useState } from 'react'
import './ProductDescription.css'
import getProductInfo from '../../service/productInfo/productInfoService';
import { useParams } from 'react-router-dom';

export default function ProductDescription() {
    const [productInfo, setProductInfo] = useState(null);
    const { productId } = useParams();

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
                    <img
                        className='productImage'
                        src={productInfo.imageUrl}></img>
                    <section>
                        <h3>
                            {productInfo.name}
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
            }
        </div>
    )
}
