import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './components/Home';
import User from './pages/User.jsx'
import Post from './pages/Post.jsx'
import Signup from './pages/Signup';
import Login from './pages/Login';
import ErrorPage from './pages/Error';
import About from './pages/About.jsx'
import Developers from './pages/Developers.jsx'
import Careers from './pages/Careers.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        // TODO: change later, only so I can see what I'm doing design-wise
        path: '/username',
        element: <User />
      },
      {
        path: '/:username/post/:postId',
        element: <Post />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/developers',
        element: <Developers />
      },
      {
        path: '/careers',
        element: <Careers />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
