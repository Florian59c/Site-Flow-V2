import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './screens/Home';
import NotFound from './screens/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;