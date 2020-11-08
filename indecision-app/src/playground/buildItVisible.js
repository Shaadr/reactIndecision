let showing = false;

const onShowDetails = () => {
    showing = !showing
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            {!showing ? <button onClick={onShowDetails}>Show Details</button> : <button onClick={onShowDetails}>Hide Details</button>}
            {showing ? <p>More Details Shown!</p> : null}
        </div>
    )

    const appRoot = document.getElementById('app')
    ReactDOM.render(template, appRoot)
}

render();