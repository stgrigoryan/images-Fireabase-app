import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Content } from './components/Layout';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Content />
      </Router>
    </Fragment>
  );
}

export default App;
