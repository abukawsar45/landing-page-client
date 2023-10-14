import {createBrowserRouter} from "react-router-dom";
import Main from './../layout/Main';
import ErrorPage from './../component/ErrorPage/ErrorPage';
import Home from './../component/Home/Home';
import About from './../component/About/About'
import Login from './../component/Login/Login'
import Solutions from './../component/Solutions/Solutions'
import Features from './../component/Features/Features'
import Register from './../component/Register/Register';
import CardDetails from './../component/CardDetails/CardDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/solutions',
        element: <Solutions />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: 'cardDetails/:id',
        element: <CardDetails />,
        loader: ({ params }) =>
          fetch('/data.json')
      },
      // {
      //   path: '/cardDetails/:id',
      //   element: <InfoCard/>,
      //   loader: ({ params }) => fetch('data.json').then(res=>res.json()).then(data=>{
      //     console.log(data)
      //   })
      // }
    ],
  },
]);


export default router;