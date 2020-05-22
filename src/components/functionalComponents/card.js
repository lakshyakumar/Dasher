import React from 'react';
import '../../styles/card.css';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card( props ){

  return(
    <div className="card-container">
      <div className="logo">
         <FontAwesomeIcon  className="font-icon" icon={props.icon} /> 
      </div>
      <div className="desc" >
        <p className="heading"> {props.title}</p>
        <div className="data-fields">
          <div className="data">
            <div className="value"><CountUp end={props.total}/></div>
              <div className="tag">{props.tag_1}</div>
           </div>
          {props.tag_2? <div className="data">
            <div className="value"><CountUp end={props.today}/></div>
              <div className="tag">{props.tag_2}</div>
          </div> : null}
        </div>
      </div>
      
    </div>
  );
}

export default Card;
