//5. Writing your second ReactJS "Reusable" Component.

//Here we write our second ReactJS Component
//This time, instead of writing one single heading element inside of a div tag, we write 3 heading element inside of a div tag
//therefore we wrapped those 3 element into one by using the array square bracket [].
const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havaneese")
    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me !"),
        //Below we created the React.createElement but by passing the "Pet" keyword from the component above, 
        //which make the "Pet" component available in this "App" component and of course will be displayed in the screen along with the "Adopt Me !".
        //This is the meaning of "Component" a.k.a React Class || Reusable component. It's a "React Stamp !!"
        //----------------------------------------------//
        //Another thing is, because we have more than one element here, 
        //so we wraped the entire thning into one by using the bracket array notation,
        //like we did with the previous "Pet" component
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))