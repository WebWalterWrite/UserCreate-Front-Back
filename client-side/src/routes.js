// import component
import Homepage from './components/homepage/Homepage';
import SignIn from './components/form/SignIn';
import Profile from './components/user/Profile';
import NotFound from './components/notfound/NotFound';

const Routes = [
    {
        path:'/',
        component:Homepage,
    },
    {
        path:'/se-connecter',
        component: SignIn,
    },
    {
        path:'/profile/:user',
        component: Profile,
    },
    {
        component: NotFound
    }
];

export default Routes;