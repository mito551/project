import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/actionsCreator";

const Navigation = props => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.isAuth)

    const logoutClickHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/')
    }

    const renderInAuth = () => {
        return (
            <>
                <NavLink className="nav-link" to="users">Users</NavLink>
                <button className="nav-link btn btn-link" onClick={() => {
                    dispatch(logout())
                }}>LogOut
                </button>
            </>
        )
    }

    const renderOutAuth = () => {
        return (
            <>
            <NavLink className="nav-link" to="/login">
                Login
            </NavLink>
            <NavLink className="nav-link" to="/signup">
                Register
            </NavLink>
            </>
        )
    }

    return (
        <nav className="nav">
            <NavLink className="nav-link" to="/">
                Dash
            </NavLink>

            {
                isAuth
                    ? renderInAuth()
                    : renderOutAuth()
            }
        </nav>
    )
}

export default Navigation