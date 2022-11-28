import "./CardAboutDetails.css";

export default function CardAboutDetails (){
    return(
        <div className="containerAboutDetails">
            <div className="namaPanjang">
                <p id="namaLengkap">Kanina Nadira Andriyani</p>
            </div>
            <div className="angkaNim">
                <p id="nim">21120120130025</p>
            </div>
            <a href="https://github.com/Kanina123" target="_blank">
                <div className="linkGit">
                    <p id="github">https://github.com/Kanina123</p>
                </div>
            </a>
        </div>
    )
}