import './App.css';
import Navbar from './components/Navbar';
import React,{ Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
  pageSize = 5;
  state = {
    progress: 100
  }
  setProgress = (prog)=>{
    this.setState({
      progress: prog
    })
  }
  render(){
  return (
    <>
      <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>

          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" country="in" pageSize={this.pageSize} category='general'/>}>
          </Route>
          <Route exact  path="/business" element={<News setProgress={this.setProgress} key="business" country="in" pageSize={this.pageSize} category='business'/>}>
          </Route>
          <Route exact  path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country="in" pageSize={this.pageSize} category='entertainment'/>}>

          </Route>
          <Route exact  path="/general" element={<News setProgress={this.setProgress} key="general" country="in" pageSize={this.pageSize} category='general'/>}>

          </Route>
          <Route exact key="health" path="/health" element={<News setProgress={this.setProgress} key="health" country="in" pageSize={this.pageSize} category='health'/>}>

          </Route>
          <Route exact key="science" path="/science" element={<News setProgress={this.setProgress} key="science" country="in" pageSize={this.pageSize} category='science'/>}>

          </Route>
          <Route exact key="sports" path="/sports" element={<News setProgress={this.setProgress} key="sports" country="in" pageSize={this.pageSize} category='sports'/>}>

          </Route>
          <Route exact key="technology" path="/technology" element={<News setProgress={this.setProgress} key="technology" country="in" pageSize={this.pageSize} category='technology'/>}>

          </Route>

        </Routes>
      </Router>
      </>

  );
}
}

export default App
