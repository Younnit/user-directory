import './App.css';
import React, {Component} from 'react'

// Components
import OuterBox from './components/OuterBox'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <OuterBox />
      </div>
    )
  }
}

export default App;
