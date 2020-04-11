import React from "react"

const ProductCard = (props) => {
    let {product} = props
    let {author, title, review, desc, price, discount, image, stock} = product

    const renderButton = () => {
        if (stock > 0) {
            return  <input className="mt-3 btn-block btn-buy" type="button" value="BUY NOW"/>
        }
        else {
            return <input className="mt-3 btn-block btn-buy" type="button" value="BUY NOW" disabled/>
        }
    }

    return (
        
        <div className="col-6 mt-4 mb-5">
            <div className="row text-left">    
                    <div className="col-5">
                        <img src={image} className="img-fluid" alt="Cover Buku"/>
                    </div>

                    <div className="col-7 pr-5">
                        <p className="text-grey mb-0">{author}</p>
                        <p className="text-title mb-0">{title}</p>
                        <p><small>{review} / 5 Review</small></p>
                        <p className="text-justify text-grey">{desc}</p>
                        {
                            discount > 0 ? (
                            <p className="text-price mb-0">${(price - (price * (discount / 100))).toFixed(2)} &nbsp;&nbsp; <s className="text-muted font-weight-normal">${price}</s></p>

                            ) : <p className="text-price mb-0">${price}</p>
                        }

                        {renderButton()}
                    </div>
            </div>
        </div>
    )
    
}

export default ProductCard