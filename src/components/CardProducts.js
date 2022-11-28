import "./CardProducts.css";

    export default function CardProduct({productsData}){
    return(
        <div className="containerProduct">
            <img src={productsData.image_link} alt="Gambar Produk" className="productImage"/>
            <p id="nameProduct">{productsData.name}</p>
        </div>
    )
}