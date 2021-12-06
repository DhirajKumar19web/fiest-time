import React,{useState,useEffect} from "react";
import Filter from './Filter';
import Card from './Card';
import Footer from './Footer';
import CardData from './CardData';

// function cardValue(val){
//     return(
//         <>
//         <Card 
//                 imgsrc={val.imgsrc}
//                 Heading={val.Heading}
//                 Lyear={val.Lyear}
//                 Slaunch={val.Slaunch}
//                 Slanding={val.Slanding}
//            />
//         </>
//     );
// }


const Base=()=>{
    useEffect(() => {
        fetch("https://api.spaceXdata.com/v3/launches?limit=100").then((result) => {
            result.json().then((response) => {
                console.log(result, response)
            })
        })
    });




    function cardValue(val){
        return(
            <>
            <Card 
                    imgsrc={val.imgsrc}
                    Heading={val.Heading}
                    Lyear={val.Lyear}
                    Slaunch={val.Slaunch}
                    Slanding={val.Slanding}
               />
            </>
        );
    }
    return(
        <>
        <div className='container-fluid  bg-light'  >
             <div className='container' id='main_container'>
                  <h2 className="m-0">SpaceX Launch Programs</h2>
                  <div className='row row-cols-md-1' id='filters'>
                  <div className='col-sm -mx-sm-auto col-lg-2 p-1' id='filters_area'>
                  <Filter/>
                </div>
                <div className='col-sm col-lg-10'>
                <div className="row">
                {CardData.map(cardValue)}
                 
                </div>
                </div>  
            </div>
            <Footer/>
             </div>
        </div>
        </>
    );
}
export default Base;