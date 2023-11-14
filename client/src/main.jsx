import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import User from './pages/User.jsx'
import Post from './pages/Post.jsx'
import Signup from './pages/Signup';
import Login from './pages/Login';
import ErrorPage from './pages/Error';
import About from './pages/About.jsx'
import Developers from './pages/Developers.jsx'
import Careers from './pages/Careers.jsx'
import EditProfile from './pages/editProfile.jsx';
import PrivateRoute from './components/PrivateRoute/index.jsx';
import CodeFriends from './pages/CodeFriends.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PrivateRoute>
            <Home />
          </PrivateRoute>
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profiles/:profileId',
        element: <PrivateRoute>
          <User />
        </PrivateRoute>
      },
      {
        path: '/:profileId/post/:postId',
        element: <Post />
      },
      {
        path: '/editProfile',
        element: <EditProfile />,
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
      },
      {
        path: '/codefriends',
        element: <CodeFriends />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
