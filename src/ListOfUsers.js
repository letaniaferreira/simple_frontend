import React from "react";
import UserRow from "./UserRow";

class ListOfUsers extends React.Component{
    state = {
        users: {}
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/message')
            .then(res => res.json())
            .then((data) => {
                console.log(Object.entries(data))
                this.setState(
                    {users: data}
                )
            })
            .catch(console.log)
    }

    render() {
        return(
            <div>
                {Object.entries(this.state.users).map(([key, user]) => <UserRow user={user} key={key} myKey={key}></UserRow>)}
            </div>
        )
    }
}

export default ListOfUsers;
