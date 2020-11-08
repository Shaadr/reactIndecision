let showing = false;

const onShowDetails = () => {
    showing = !showing
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{showing ? "Hide Details" : "Show Details"}</button> 
            {showing ? <p>More Details Shown!</p> : null}
        </div>
    )

    const appRoot = document.getElementById('app')
    ReactDOM.render(template, appRoot)
}

render();