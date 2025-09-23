import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home/Home';
import Login from '../page/Login';
import Signup from '../page/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        children: [
          { index: true, element: <Home /> },
          { path: 'login', element: <Login /> },
          { path: 'signUp', element: <Signup /> },
        ],
      },
    ],
  },
]);

export default router;
