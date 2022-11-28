import { useLocation } from "react-router";
import "./CardProductDetails.css";

const CardProductDetails = () => {
    const {state} = useLocation();
    const {image_link, price, description, product_link} = state;

    return(
        <div className="containerProductDetails">
            <div className="about">
                <p id="abouttext">ABOUT</p>
            </div>
            <div classsName="ProductImage">
                <img src={image_link} alt="Gambar Produk" className="GambarProduk"/>
            </div>
            <div className="ProductPrice">
                <p id="HargaProduk">${price}</p>
            </div>
            <div className="description">
                <p id="descriptiontext">PRODUCT DESCRIPTION</p>
            </div>
            <div className="ProductDescription">
                <p id="DeskripsiProduk">{description}</p>
            </div>
            <div className="storelink">
                <p id="storelinktext">STORE LINK</p>
            </div>
            <div className="ProductLink">
                <a href={product_link} target="_blank">
                    <p id="LinkProduk">{product_link}</p>
                </a>
            </div>
        </div>
    )
}

export default CardProductDetails;

// export default function CardProductDetails ({productsData}){
//     return(
//         <div className="containerProductDetails">
//             <div className="about">
//                 <p id="abouttext">ABOUT</p>
//             </div>
//             <div classsName="ProductImage">
//                 <img src={productsData.image_link} alt="Gambar Produk" className="GamberProduk"/>
//             </div>
//             <div className="ProductPrice">
//                 <p id="HargaProduk">${productsData.price}</p>
//             </div>
//             <div className="description">
//                 <p id="descriptiontext">PRODUCT DESCRIPTION</p>
//             </div>
//             <div className="ProductDescription">
//                 <p id="DeskripsiProduk">{productsData.description}</p>
//             </div>
//             <div className="storelink">
//                 <p id="storelinktext">STORE LINK</p>
//             </div>
//             <div className="ProductLink">
//                 <a href={productsData.product_link} target="_blank">
//                     <p id="LinkProduk">{productsData.product_link}</p>
//                 </a>
//             </div>
//         </div>
//     )
// }