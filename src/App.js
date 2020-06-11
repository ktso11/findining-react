import React, { Component } from 'react'; 
import Button from './components/Button';


class App extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => {console.log("clicked")}}
          btnStyle = "primary"
          btnSize = "medium"
          text = "Primary"
        />
      </div>
    );
  }
}

export default App;
