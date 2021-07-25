import {
  SignIn,
  SignUp
} from '../Containers';

const AuthRoute = (
  [
    {
      key: 'Auth',
      path: '/auth',
      isProtected: false,
      children: [
        {
          key: 'SignIn',
          path: '/Signin',
          exact: true,
          component: SignIn,
          isProtected: false,
        },
        {
          key: 'Signup',
          path: '/signup',
          exact: true,
          component: SignUp,
          isProtected: false,
        },
      ],
    },
  ]
);

export default AuthRoute;
