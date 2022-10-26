import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";
import Courses from "../layout/Courses";
import Error from "../components/Error";
import CourseDetails from "../components/CourseDetails";
import CourseCards from "../components/CourseCards";
import Checkout from "../components/Checkout";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/courses',
            element: <Courses />,
            loader: () => fetch('https://learn-cs-server.vercel.app/courses'),
            errorElement: <Error />,
            children: [
               {
                  path: '/courses',
                  element: <CourseCards />,
                  loader: () => fetch('https://learn-cs-server.vercel.app/courses')
               },
               {
                  path: '/courses/:id',
                  element: <CourseDetails />,
                  loader: ({ params }) => fetch(`https://learn-cs-server.vercel.app/courses/${params.id}`)
               }
            ]
         },
         {
            path: '/checkout/:id',
            element: <ProtectedRoute><Checkout /></ProtectedRoute>,
            loader: ({ params }) => fetch(`https://learn-cs-server.vercel.app/courses/${params.id}`)
         }
      ]
   }
])


export default router;