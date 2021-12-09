import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllScores} from "../store/actionsCreator";

export const Leaderboards = () => {

    const score = useSelector(state => state.scores)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllScores())
    },[])

    const renderScores = () => {
        return (
        !score.length
            ?
                <div>Scores aren't loaded...</div>
            :
                score.map(s => <div key={s.id}>{s.score}</div>
                    )
        )
    }

    return (
            <>
                <div>Leaderboards</div>
                {renderScores()}
            </>
    )
}