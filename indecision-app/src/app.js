class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I Do?</button>
      </div>
    )
  }
}

//Options -> render static text
//AddOption -> render static text

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option Component Here</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>AddOption Component Here</p>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Option />
    <AddOption />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))