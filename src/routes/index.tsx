import { RouteObject } from 'react-router-dom'
import App from '../App'
import MyError from '../components/MyError'
import AboutMe from '../screens/AboutMe'
import Experience from '../screens/Experience'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <MyError />,
    children: [
      { path: '/', element: <AboutMe /> },
      { path: 'experience', element: <Experience /> },
    ],
  },
]

export default routes
