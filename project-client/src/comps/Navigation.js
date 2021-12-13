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
                <NavLink className="nav_item icon icon-users" to="users"> </NavLink>
                <div className="nav_item icon icon-logout" onClick={() => {
                    dispatch(logout())
                }}>
                </div>
            </>
        )
    }

    const renderOutAuth = () => {
        return (
            <>
            <NavLink className="nav_item icon icon-login" to="/login">

            </NavLink>
            <NavLink className="nav_item icon icon-signup" to="/signup">

            </NavLink>
            </>
        )
    }

    return (
        <nav className="nav">
            <NavLink className="nav_item icon icon-home" to="/">

            </NavLink>
            <NavLink className="nav_item icon icon-mine" to="/minesweeper">

            </NavLink>
            <NavLink className="nav_item icon icon-leader" to="/leaderboards">

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