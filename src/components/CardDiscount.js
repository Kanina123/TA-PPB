import "./CardDiscount.css";

    export default function CardDiscount({productsData}){
    return(
        <div className="containerProduct">
            <img src={productsData.image_link} alt="Gambar Produk" className="productImage"/>
            <p id="nameProduct">{productsData.name}</p>
        </div>
    )
}