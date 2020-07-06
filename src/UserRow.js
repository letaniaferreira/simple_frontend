import React from "react";

class UserRow extends React.Component {

    render(){
        return <div>{this.props.myKey} = {this.props.user.name}</div>
    }
}

export default UserRow;
