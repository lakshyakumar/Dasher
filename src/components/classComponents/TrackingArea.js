import React from 'react';
import '../../styles/trackingArea.css';
import Sec from './Sec';
import metrics from '../../utils/data/metrics';
import {getMetrics} from '../../utils/helper/requests';


class TrackingArea extends React.Component{
  constructor(props){
    super(props);
    this.state = metrics
    this.fetchData = this.fetchData.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(stateData, arrayname){
    this.setState((prevState)=>{
      let tempElement = {}
      let newElements = prevState.metrics[arrayname].filter((element)=>{
        if(element["name"]===stateData["name"] || !element["name"]){
          tempElement = element;
          return false
        }
        return true;
      })
      tempElement["today"] = stateData["today"];
      tempElement["total"] = stateData["total"];
      prevState.metrics[arrayname] = [...newElements,tempElement]
      return (prevState)
    })
  }

  fetchData(metricArray, arrayName){
    metricArray.forEach((listValue)=>{
      let apiUrl = `${this.props.url}/api/${listValue.name.split(" ").join("_").toLowerCase()}/`;
      getMetrics(apiUrl,this.updateState,arrayName)
    })
  }

  componentDidMount(){
    this.fetchData(this.state.metrics.visibility, "visibility");
    this.fetchData(this.state.metrics.maintenance, "maintenance");
  }

  render(){
    return(
      <div className="tracker-screen">
        <Sec cardsToShow={this.state.metrics.visibility} title={"Visibility Metrics"}/>
        <Sec cardsToShow={this.state.metrics.maintenance} title={"Maintenance Metrics"}/>
      </div>
    );
  }
}

export default TrackingArea;
