import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../store/actionsCreator";

export const Users = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.isAuth)
    const users = useSelector(state => state.users)


    useEffect(() => {
        if (isAuth) {
            dispatch(getAllUsers())
        }
    }, [isAuth])

    return !users.length
        ? (
            <h3 className="wrapper-dapper">No Users available</h3>
        )
        : (
            <div className="wrapper-dapper">
                {users.map(u => <div key={u.id} className="list-group-item">{u.email}</div>)}
            </div>
        )
}