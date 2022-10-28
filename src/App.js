import Main from './Component/Main';
import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';
import { Link, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">

        <div>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
    </Layout>
</div>
      
    </div>
  );
}

export default App;
