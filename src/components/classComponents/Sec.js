import React from 'react';
import '../../styles/Sec.css';
import Card from '../functionalComponents/card';

class Sec extends React.Component{

  render(){
    return(
      <div className="container">
        <div className="title">{this.props.title}</div>
        <div className="bar"></div>
        <div className="displayCards">
        {this.props.cardsToShow.map((value,i)=>{
          return(<Card total={value.total} today={value.today} key={i} title={value.name} tag_1={value.tag_1} tag_2={value.tag_2} icon={value.icon} />)
        })}
        </div>
      </div>
    );
  }
}

export default Sec;