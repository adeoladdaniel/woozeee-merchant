import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminOrder from "./pages/AdminOrder";
import AdminCategories from "./pages/AdminCategories";
import AdminProducts from "./pages/AdminProducts";
import ViewProducts from "./pages/ViewProducts";
import Store from "./pages/Store";
import CreateProducts from "./pages/CreateProducts";
import EditStore from "./pages/EditStore";
const AdminDashboard = lazy(() => import("./pages/AdminDahboard"));

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<div>Loading ....</div>}>
        <Router>
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={AdminDashboard} />
              <Route path="/store" component={Store} />
              <Route path="/create" component={CreateProducts} />
              <Route path="/view" component={ViewProducts}/>
              <Route path="/edit" component={EditStore} />
              <Route path="/orders" component={AdminOrder} />
              <Route path="/categories" component={AdminCategories} />
              <Route path="/products" component={AdminProducts} />
            </Switch>
          </Provider>
        </Router>
      </Suspense>
    );
  }
}

export default App;
