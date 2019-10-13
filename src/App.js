import React from 'react';

class App extends React.Component {

    state = {
        peopleInSpace: []
    }


    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
            // console.log(this.state)
        })
    }


    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}

export default App

// componentDidMount happens to be a great place for making fetch requests. By putting a fetch() within componentDidMount, when the data is received, we can use setState to store the received data. This causes an update with that remote data stored in state. Once App mounts, a fetch is called to an API. Once data is returned to the API, the simplest way to store some or all of it is to put it in state.

// Initialize the state that starts equal to an empty array

// Use setState in the last .then to update the state with the info received from an API. If you have JSX content reliant on that state information, when setState is called and the component re-renders, the content will appear.

// Map over an array of objects and create an array of components for each object