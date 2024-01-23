import React from "react";
import { Button } from "react-bootstrap";

class ButtonComponent extends React.Component{
    render(){
        return <Button variant="btn btn-success" onClick={this.props.action}>{this.props.title}</Button>
    }
}

export default ButtonComponent