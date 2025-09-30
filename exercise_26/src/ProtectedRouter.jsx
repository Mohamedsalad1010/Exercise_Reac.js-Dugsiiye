import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router"
const ProtectedRouter = ({element}) => {
    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated) {
        return <Navigate to= '/login' />
    }
  return element
}

export default ProtectedRouter
