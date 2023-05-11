import React, { Component } from 'react'
import Show from './components/Show';

class App extends Component {

  // state = {};

  constructor(props) {
    //to init the components state/data
    super(props); //---
    console.log("[App.js] constuctor");
    // console.log(props);
    this.state = {
      images: [],
      show: false
    }
  }

  // ----------------------------------------------------

  render() {
    // to load view(html/css without original data)
    // render will reload everytime when the view changes due to data
    console.log("[App.js] render");
    return (
      <div>
        <h1>This is App.js</h1>
        <hr />
        {this.state.show ? <Show /> : "no show"}
        <button onClick={() => { this.setState({ show: !this.state.show }) }}>
          Show
        </button>
      </div>
    )
  }

  // ----------------------------------------------------

  componentDidMount() {
    // data calling through api/internet
    // runs one in a lifetime in a component
    // as the data arrives, set the data into the state
    fetch("https://picsum.photos/v2/list")
      .then((d) => d.json())
      .then((data) => {
        // console.log(data);
        this.setState({ images: data });
      })
    console.log('[App.js] componentdidmount');
  }

  // ----------------------------------------------------


  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("[App.js] componentdidupdate");
  }

}

export default App