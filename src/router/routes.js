//import { routes as home } from '../components'
import { routes as auth } from '../modules/auth'
import Home from "@/components/Home";

export default [
    ...auth,
    {
        path: '/',
        name: 'Home',
        component: Home
      }
]
