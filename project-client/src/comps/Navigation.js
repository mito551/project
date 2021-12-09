import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/actionsCreator";
import './Navigation.pcss'

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
                <NavLink className="nav_item" to="users">Users</NavLink>
                <button className="nav_item" onClick={() => {
                    dispatch(logout())
                }}>LogOut
                </button>
            </>
        )
    }

    const renderOutAuth = () => {
        return (
            <>
            <NavLink className="nav_item" to="/login">
                Login
            </NavLink>
            <NavLink className="nav_item" to="/signup">
                Register
            </NavLink>
            </>
        )
    }

    return (
        <nav className="nav">
            <NavLink className="nav_item" to="/">
                Dash
            </NavLink>
            <NavLink className="nav_item" to="/minesweeper">
                Minesweeper
            </NavLink>
            <NavLink className="nav_item" to="/leaderboards">
                Leaderboards
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