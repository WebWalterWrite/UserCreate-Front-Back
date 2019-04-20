import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import component
import Header from './components/layout/Header';

// import routes
import AllRoutes from './routes';

// const MyRoutes = Routes.map(({ path, component, exact }, k) => <Route key={k} exact path={path} component={component} />
// )

// const AllRoutes = () => <Fragment><Switch><Header /><main>{MyRoutes}</main></Switch></Fragment>

// const App = () => <Router><Route path="/" component={AllRoutes}/></Router>
const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main>
                {children}
            </main>
        </Fragment>
    )
};

const MyRoute = ({ path, component }, k) => (
    <Route
        key={k}
        path={path}
        component={component}
        exact
    />
);

const Routes = () => (
    <Layout>
        <Switch>
            {AllRoutes.map(MyRoute)}
        </Switch>
    </Layout>
);

const App = () => (
    <Router>
        <Route path="/" component={Routes} />
    </Router>
);  
export default App;
