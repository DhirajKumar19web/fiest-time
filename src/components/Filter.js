import React from "react";
import '../components/Filter.css'






const Filter=()=>{
const numbers = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
const listItems = numbers.map((number) =>
<li key={number.toString()}><a href="-">{number}</a>

</li>
);
    
    return(
        <> 
        



                        <div className="p-2 bg-white" id="filter_seting" key="id">
                            <h5 className="p-0">Filters</h5>
                            <p className="text-center border_btm">Launch Year</p>
                            <ul className="list-unstyled d-flex justify-content-between flex-wrap" >
                                {listItems}
                            </ul>
                            <p className="text-center border_btm">Successful Launch</p>
                            <ul className="list-unstyled d-flex justify-content-between">
                                    <li><a href="-">True </a></li>
                                    <li><a href="-">False </a></li>
                            </ul>
                            <p className="text-center border_btm">Successful Landing</p>
                            <ul className="list-unstyled d-flex justify-content-between">
                                    <li><a href="-">True </a></li>
                                    <li><a href="-">False </a></li>
                            </ul>
                        </div>
        </>

    );
}
export default Filter;