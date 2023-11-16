import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
	const id = localStorage.getItem('id_token')

	return (
		id ? children : <Navigate to='/login'></Navigate>
	)
}

export default PrivateRoute