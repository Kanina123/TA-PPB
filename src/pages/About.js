import { Fragment } from "react";
import CardAbout from "../components/CardAbout";
import "./About.css";

export default function About(){
    return (
        <div className="containerApp">
            <p id="captionAbout">MEET OUR STAFF</p>
            <CardAbout></CardAbout>
        </div>
    )
}