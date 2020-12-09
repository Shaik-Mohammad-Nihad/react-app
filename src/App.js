
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ListProductComponent from './Components/ListProductComponent';
import CreateProductComponent from './Components/CreateProductComponent';
import UpdateComponent from './Components/UpdateComponent';

function App() {
  return (
    <div >
     <Router>
       <div className="container">
         <Switch>
           <Route path='/' exact component={ListProductComponent} />
           <Route path='/products' component={ListProductComponent} />
           <Route path='/add-product' component={CreateProductComponent} />
           <Route path='/update-product/:id' component={UpdateComponent} />
       </Switch>
       </div>
       </Router>
    </div>
  );
}

export default App;
