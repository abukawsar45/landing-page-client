import {createBrowserRouter} from "react-router-dom";
import Main from './../layout/Main';
import ErrorPage from './../component/ErrorPage/ErrorPage';
import Home from './../component/Home/Home';



const router = createBrowserRouter([
  {
  path: '/',
  element: <Main/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: '/',
      element: <Home/>
    }
  ]
}
]);


export default router;