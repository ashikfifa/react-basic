import { Component } from "react";
import { Card, CardText, CardTitle } from "react-mdl";
class CardItem extends Component{
    render(){
        return(
            <div className="CardItem-class">
                <Card shadow={5} style={{border:"1px solid red",width:"98%"}}>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>{this.props.text}</CardText>
                </Card>
            </div>
        );
    }
}

export default CardItem;