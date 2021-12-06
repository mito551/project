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
        <div className="w-50 mx-auto mt-5">
            {/*<h3>Login</h3>*/}
            <form onSubmit={submitFormHandler}>
                {/* <div className="mb-3 row"></div> */}
                <label htmlFor="username" className="mb-3 row col-sm-2 col-form-label">Username</label>
                <input type="text" id="username" name="username" className="mb-3 row"
                       onChange={changeFieldHandler} placeholder="Vasya69" value={user.username}
                />
                <label htmlFor="email" className="mb-3 row col-sm-2 col-form-label">Email</label>
                <input type="email" id="email" name="email" className="mb-3 row"
                       onChange={changeFieldHandler} placeholder="email@email.com" value={user.email}
                />
                <label htmlFor="password" className="mb-3 row col-sm-2 col-form-label">Password</label>
                <input type="password" id="password" name="password" className="mb-3 row"
                       onChange={changeFieldHandler} value={user.password}
                />
                <button type="submit" className="btn btn-success">Sign In</button>
            </form>
        </div>
    )
}