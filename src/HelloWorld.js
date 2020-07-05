import React from 'react';

class HelloWorld extends React.Component {

    state = {
        greeting: 'Hello World!!!!'
    }

    componentDidMount() {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ greeting: data['message']})
            })
            .catch((console.log))
    }

    render() {
        return <h2>{this.state.greeting}</h2>
    }
}

export default HelloWorld;
