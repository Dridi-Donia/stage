import { BrowserRouter, Route, Switch } from "react-router-dom";
import Produits from "./Produits";
import Produit from "./Produit"; 
   

function App() {
  return (
    <BrowserRouter>
    <Switch>
           <Route exact path="/products">
              <Produits />
            </Route>
            <Route exact path="/products/:id">
                <Produit/>
            </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
