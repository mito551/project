import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllScores, getAllUsers} from "../store/actionsCreator";

export const Leaderboards = () => {

    const isAuth = useSelector(state => state.isAuth)
    const score = useSelector(state => state.scores)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllScores())
        dispatch(getAllUsers())
    }, [])

    const getCorrectUser = scoreUserID => {
        const result = users.find(u =>
            (u.id === scoreUserID)
        )
        if (result === undefined) {
            return "Error!"
        }
        return result.email
    }

    const renderScores = () => {
        return (
            !score.length
                ?
                <div>Scores aren't loaded...</div>
                :
                score.map(s => <div key={s.id}>User:{getCorrectUser(s.userID)} Score:{s.score}.
                    Gametime:{s.gameTime}</div>
                )
        )
    }

    return (
        <div className="wrapper-dapper leader">
            <h1 className="title">Leaderboards</h1>
            {
                isAuth
                    ? renderScores()
                    : <div>You need to be logged in to see this page!</div>
            }

        </div>
    )
}