import React from "react";

class UserDetails extends React.Component{
    state = {
        user: ''
    }

    // need to add a form
    componentDidMount() {
        let query = this.state.query;
        fetch(`http://127.0.0.1:5000/username?username=${query}`)
            .then(res=>res.json())
            .then((data) => {
                if (!data.message) {
                    this.setState(
                        {user: data}
                    )
                }
            })
            .catch((err) => { console.log('ohnoes: ' + err) })
    }


    render() {
        return <div>{this.state.user ? this.state.user : 'User not found'}</div>
    }
}

export default UserDetails;
