import { React,Component } from "react";
import { Cell, Grid } from "react-mdl";
import CardItem from "./CardItem";

class Home extends Component{
    render(){
        return(
            <div className="home-class">
                <Grid>
                    <Cell col={4}>
                        <CardItem title="ashik" text="Software Engineer"/>
                    </Cell>

                    <Cell col={4}>
                        <CardItem title="shakil" text="content Writer"/>
                    </Cell>

                    <Cell col={4}>
                         <CardItem title="shams" text="App Developer"/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;