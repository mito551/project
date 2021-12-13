import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {submitScore} from "../store/actionsCreator";

const initScore = {
    userID: 2,
    score: 1011,
    gameTime: 10,
}

export const Minesweeper = () => {

    const isAuth = useSelector(state => state.isAuth)
    const dispatch = useDispatch()
    const [score, setScore] = useState(initScore)

    const changeFieldHandler = event => {
        setScore(
            {
                ...score,
                [event.target.name]: event.target.value
            }
        )
    }

    const sendScore = () => {
        dispatch(submitScore(score))
        setScore(0)
    }

    const renderInAuth = () => {
        return (
            <>
                <form className="form">
                    <label htmlFor="score" className="form-item">Score to set:</label>
                    <input type="text" id="score" name="score" className="form-item"
                           placeholder="100" value={score.score} onChange={changeFieldHandler}
                    />
                    <label htmlFor="gameTime" className="form-item">Game time to set:</label>
                    <input type="text" id="gameTime" name="gameTime" className="form-item"
                           placeholder="100" value={score.gameTime} onChange={changeFieldHandler}
                    />
                </form>
                <button onClick={sendScore} className="form-item">Set Score</button>
            </>
        )
    }

    const renderNotAuth = () => {
        return (
            <div>You need to be logged in to see this page!</div>
        )
    }

    return (
        <div className="wrapper-dapper">
        <h1 className="title">Minesweeper</h1>
            {
                isAuth
                    ? renderInAuth()
                    : renderNotAuth()
            }

        </div>
    )
}