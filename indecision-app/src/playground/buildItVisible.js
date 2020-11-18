// let showing = false;

// const onShowDetails = () => {
//     showing = !showing
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetails}>{showing ? "Hide Details" : "Show Details"}</button> 
//             {showing && <p>More Details Shown!</p>}
//         </div>
//     )

//     const appRoot = document.getElementById('app')
//     ReactDOM.render(template, appRoot)
// }

// render();

//VisibiltiyToggle - render, constructor, handleToggleVisibility
//state: visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibiltiy Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>More Details Shown!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))