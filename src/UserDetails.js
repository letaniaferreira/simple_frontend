import React from "react";

class UserDetails extends React.Component{
    // state = {
    //     user: ''
    // }

    let query = this.state.query;
    componentDidMount() {
        fetch(`http://127.0.0.1:5000/username?username=${query}`)
            .then(res=>res.json())
            .then((data) => {
                this.setState(
                    {user: data}
                )
            })
            .catch(console.log)
    }


    render() {
        return <div>this.state.user</div>
    }
}

export default UserDetails;
