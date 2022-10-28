import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Main=()=>{
return(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/about" component={About}/>
    </Switch>
);
}

export default Main;