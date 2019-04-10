import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import component
import Header from './component/layout/Header';

// import routes
import Routes from './routes';

// Récupérer les routes
const MyRoutes = Routes.map(({path, component, exact}, k) => <Route key={k} path={path} component={component} exact={exact}/>
)

//  Routes
const AllRoutes = () => <Fragment><Header /><main>{MyRoutes}</main></Fragment>

// Envelopper les routes dans le Router
const App = () => <Router><Route path="/" component={AllRoutes}/></Router>

export default App;
