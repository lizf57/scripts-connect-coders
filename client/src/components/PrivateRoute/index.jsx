import { Navigate } from "react-router-dom"
// import { useLocalState } from "../../utils/useLocalStorage"

import Auth from '../../utils/auth'

const PrivateRoute = ({ children }) => {

    // const [id_token, setId] = useLocalState('', 'id_token')
    // console.error()

    const id = localStorage.getItem('id_token')

    return (
        id ? children : <Navigate to='/login'></Navigate>
    )
}

export default PrivateRoute