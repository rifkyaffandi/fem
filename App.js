//6. USING THE "PROPS" FOR EVEN MORE USEFUL COMPONENT

/* 
    Earlier we are using the second component to stamped-on our first component. That's great. 
    But, how if we want to make those stamping machine (component) even more useful.
    The answer is by using the "props".
    Props is a shorthand for property. 
    It's a parameter that we using in our 'funtion component' that will be passed later to that component 
    and append with a dot "." the extension of the 'later will be use' props 'stuff'.
*/

//Here is the example
const Pet = (props) => {
    return React.createElement("div", {}, [
        //we use the props as a parameter above, pass that props (parameter) above
        //to the code below and append those 'props' with dot ".", so it will be later reusable.
        React.createElement("h2", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me !"),

        //here is the usage from that props. 
        //We put this props at the attribute place for our header tag component.
        //seperate them with the commas, assign a value to them with a colon ":"
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

//here, our old friend--the render function.
ReactDOM.render(React.createElement(App), document.getElementById("root"))