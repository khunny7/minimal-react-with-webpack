import React from 'react'
import JakeTheDog from '../assets/jake.png'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      jakeCount: 0,
    }
  }

  addJake = () => {
    this.setState({
      jakeCount: this.state.jakeCount++,
    });
  }

  showJakes = () => {
    var rows = [];
    for (let i = 0; i < this.state.jakeCount; i++) {
      rows.push(<img src={JakeTheDog}></img>);
    }

    return (<div>{rows}</div>);
  }

  clearJake = () => {
    this.jakeCount = 0;
  }

  render() {
    const showJakeComponent = () => {
      if (this.state.isJakeVisible) {
        return (
          <img src={JakeTheDog} onClick={this.hideJake}></img>
        )
      } else {
        return (
          <button onClick={this.showJake}>Show Jake</button>
        )
      }
    }

    return (
      <div>
        <h1 className="tomato-color">
          {this.props.title}
        </h1>
        <h2>
          1. Only one jake should show up when we click Add Jake Button
        </h2>
        <h2>
          2. Clear Jake should clear Jakes
        </h2>
        <button onClick={this.addJake}>Add Jake</button>
        <button onClick={this.clearJake}>Clear Jake</button>
        {this.showJakes()}
      </div>
    )
  }
}

export default App
