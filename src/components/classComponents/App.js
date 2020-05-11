import React from 'react';
import Nav from '../functionalComponents/Nav';
import Footer from '../functionalComponents/footer';
import TrackingArea from './TrackingArea';
import Desc from '../functionalComponents/desc';
import {get} from '../../utils/helper/requests';
import '../../styles/App.css';

class App extends React.Component{

  getRepo(data){
    this.setState(
      {
        repository: data["repository"],
        github: data["github"],
        chat: data["chat"],
      }
    )
  }

  constructor(props){
    super(props)
    this.state={
      url: "http://localhost:9000",
      repository: "Dasher",
      github: "",
      chat: "",
    }
    this.getRepo = this.getRepo.bind(this);
  }

  componentDidMount(){
    get(`${this.state.url}/api/repository/`, this.getRepo);
  }
  render(){
    return(
      <div className="App">
        <Nav/>
        <Desc repository={this.state.repository}/>
        <TrackingArea url={this.state.url}/> 
        <Footer chatLink={this.state.chat} githubLink={this.state.github}/>
      </div>
    );
  }
}

export default App;
