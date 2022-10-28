import { Component } from "react";
import { Cell, Grid } from "react-mdl";
import CardItem from "./CardItem";

class About extends Component{
    render(){
        return(
            <div className="about-class">
                <Grid>
                    <Cell col={6}>
                         <CardItem title="ashik" text="Software Engineer"/>
                    </Cell>

                    <Cell col={6}>
                      <CardItem title="ashik" text="Software Engineer"/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;