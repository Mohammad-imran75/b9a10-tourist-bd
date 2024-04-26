import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
const PrivateRoutes = ({children}) => {
    const {loading,user} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (<span className="loading loading-spinner text-neutral"></span>)
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};
PrivateRoutes.propTypes ={
    children:PropTypes.node
}
export default PrivateRoutes;