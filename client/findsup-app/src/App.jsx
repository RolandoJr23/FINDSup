import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Verify from './pages/Verify';
import VerifyEmail from './pages/VerifyEmail';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/verify',
      element: <VerifyEmail/>
    },
    {
      path: '/verify/:token',
      element: <Verify/>
    },
    {
      path: '/signin',
      element: <Signin/>
    },
    {
      path: '/',
      element: <Home/>
    },
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;

