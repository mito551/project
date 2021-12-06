import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./Dashboard";
import {Login} from "./Login";
import {Users} from "./Users";
import {Register} from "./Register";
import Navigation from "./Navigation"
import {useDispatch} from "react-redux";
import {doLogin} from "../store/actionsCreator";

const App = props => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('apiKeyToken')){
            dispatch(doLogin())
        }
    })

    return (
        <div className="container">
            <Navigation />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App