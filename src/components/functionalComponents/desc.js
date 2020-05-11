import React from 'react';
import '../../styles/desc.css';

function Desc(props){
  return(
    <div className="desc-container">
        <div className="description" >
            <div className="description-name">
                DashER
            </div>
            <div className="description-tag">
               Dashboard for Every Repository
            </div>
        </div>
        <div className="description-repository" >
            <div className="description-name">
                {props.repository.split("-").join(" ").toUpperCase()}
            </div>
        </div>
    </div>
  );
}

export default Desc;
