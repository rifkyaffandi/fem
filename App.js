//Just moving the App component to a seperate file, in this case App.js

const App = () => {
    return React.createElement("div", {},
        React.createElement("h1", {}, "Adopt Me !"),
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))