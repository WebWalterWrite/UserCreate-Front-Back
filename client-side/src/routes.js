// import component
import Homepage from './component/homepage/Homepage';
import SignIn from './component/form/SignIn';
import Profile from './component/user/Profile';

const Routes = [
    {
        path:'/',
        component:Homepage,
        exact: true
    },
    {
        path:'/se-connecter',
        component: SignIn,
        exact:true
    },
    {
        path:'/profile/:user',
        component: Profile,
        exact: true
    }
];

export default Routes;