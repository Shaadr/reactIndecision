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
    render() {
        
        return (
            <div>
                VisibiltiyToggle
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))