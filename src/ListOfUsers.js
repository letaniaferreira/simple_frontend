import React from "react";
import UserRow from "./UserRow";

class ListOfUsers extends React.Component{
    state = {
        users: {}
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/users')
            .then(res => res.json())
            .then((data) => {
                this.setState(
                    {users: data}
                )
            })
            .catch(console.log)
    }

    render() {
        return(
            <div>
                {Object.entries(this.state.users).map(([key, user]) => <UserRow user={user}></UserRow>)}
            </div>
        )
    }
}

export default ListOfUsers;
