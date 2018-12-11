//7. FUNCTION COMPONENT VS CLASS COMPONENT

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ])
}

class App extends React.Component {

    handleTitleClick () {
        return alert('you click the title')
    }

    render () {
        return React.createElement("div", {}, [
            React.createElement("h1", { onClick : this.handleTitleClick }, "Adopt Me !"),
            React.createElement(Pet, {
                name : "Luna",
                animal : "Dog",
                breed : "Havaneese" 
            }),
            React.createElement(Pet, {
                name : "Pepper",
                animal : "Bird",
                breed : "Cockatiel"
            }),
            React.createElement(Pet, {
                name : "Doink",
                animal : "Cat",
                breed : "Mixed" 
            })
        ])
    }
}

//here, our old friend--the render function.
ReactDOM.render(React.createElement(App), document.getElementById("root"))