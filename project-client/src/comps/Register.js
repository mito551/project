import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../store/actionsCreator";
import {useNavigate} from "react-router-dom";

const initUser = {
    email: "",
    password: ""
}

export const Register = () => {

    const navigate = useNavigate()
    const isAuth = useSelector(state => state.isAuth)
    const [user, setUser] = useState(initUser)
    const dispatch = useDispatch()
    const changeFieldHandler = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (isAuth){
            navigate('/')
        }
    }, [isAuth])

    const submitFormHandler = event => {
        event.preventDefault()
        dispatch(register(user))
        setUser(initUser)
        // navigate('/')
    }

    return (
        <div className="wrapper-dapper">
            {/*<h3>Login</h3>*/}
            <form onSubmit={submitFormHandler} className="form">
                {/* <div className="mb-3 row"></div> */}
                <label htmlFor="username" className="form-item">Username</label>
                <input type="text" id="username" name="username" className="form-item"
                       onChange={changeFieldHandler} placeholder="Vasya69" value={user.username}
                />
                <label htmlFor="email" className="form-item">Email</label>
                <input type="email" id="email" name="email" className="form-item"
                       onChange={changeFieldHandler} placeholder="email@email.com" value={user.email}
                />
                <label htmlFor="password" className="form-item">Password</label>
                <input type="password" id="password" name="password" className="form-item"
                       onChange={changeFieldHandler} value={user.password}
                />
                <button type="submit" className="form-item">Sign In</button>
            </form>
        </div>
    )
}