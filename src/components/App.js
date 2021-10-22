import '../styles/App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {

  return (
    <Router>
    <div className="surreal-estate">
      <NavBar />
    </div>
    <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} /> 
    </Switch>
    </Router>
  );
};

export default App;
