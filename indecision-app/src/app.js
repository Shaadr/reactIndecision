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

class Option extends React.Component {
  render() {
    return (
      <div>
        Option Component Here
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption Component Here
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