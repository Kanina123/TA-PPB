import "./CardAbout.css";

export default function CardAbout (){
    return(
        <div className="containerAbout" onClick={event => window.location.href='/Aboutdetail'}>
            <img className="pfp" src="pfp.png"/>
            <p id="nama">KANINA NADIRA A.</p>
            <p id="job">DEVELOPER</p>
        </div>
    )
}