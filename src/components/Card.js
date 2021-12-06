import React, { useEffect } from "react";
import '../components/Card.css';




const Card = (props) => {
    return (
        <>
            <div className="col-sm col-md-4 col-lg-3 p-1">
                <div className="p-2 bg-white h-100">
                    <div className="bg-light text-center">
                        <img src={props.imgsrc} alt="SpaX" />
                    </div>
                    <div>
                        <h5 className="m-0 text-primary">{props.Heading}</h5>
                        <p className="m-0">Misson Ids:</p>
                        <ul className="m-0">
                            <li className="text-primary"> list Misson Ids </li>
                        </ul>
                        <p className="m-0" ><strong>Launch Year: </strong><span className="text-primary">{props.Lyear}</span> </p>
                        <p className="m-0"><strong>Successful Launch: </strong><span className="text-primary">{props.Slaunch}</span> </p>
                        <p className="m-0" ><strong>Successful Landing:</strong> <span className="text-primary">{props.Slanding}</span> </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;