class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    return (
      <div>
        <Header title={title}/>
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
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
      Option Component here
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options Component Here
        <Option />
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))