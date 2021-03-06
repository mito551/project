import {FETCH_SCORES, FETCH_USERS, LOGIN, LOGOUT, SUBMIT_SCORE} from "./actions";

const URL = "http://localhost:8080/api"

export const login = (user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/auth/signin`,
                {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type" : "application/json"
                    },
                })
            const data = await response.json()
            console.log(response.status)
            if (response.status === 200) {
                localStorage.setItem('apiKeyToken', data.accessToken)
                dispatch(doLogin())
            } else {
                alert(data.message)
            }
        }
        catch (e) {
            console.log(e.message)
        }
    }
}

export const register = user => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/auth/signup`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            if (response.status === 200) {
                dispatch(login(user))
            } else {
                alert(data.message)
            }
        }
        catch (e) {
            console.log(e.message)
        }
    }
}

export const submitScore = score => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/scores`, {
                method: "POST",
                body: JSON.stringify(score),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            if (response.status === 200) {
                dispatch(setScore(data))
            }
        }
        catch (e) {
            console.log(e.message)
        }
    }
}

export const getAllUsers = () => {
    return async dispatch => {
        try{
            const response = await fetch(`${URL}/users`, {
                headers: {
                    "Content-Type" : "application/json",
                    "x-access-token": localStorage.getItem("apiKeyToken"),
                }
            })
            const data = await response.json()
            dispatch(setAllUsers(data))
        }
        catch (e) {
            console.log(e.message)
        }

    }
}

export const getAllScores = () => {
    return async dispatch => {
        try{
            const response = await fetch(`${URL}/scores`, {
                headers: {
                    "Content-Type" : "application/json",
                    "x-access-token": localStorage.getItem("apiKeyToken"),
                }
            })
            const data = await response.json()
            dispatch(setAllScores(data))
        }
        catch (e) {
            console.log(e.message)
        }

    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("apiKeyToken")
        dispatch(doLogout())
        dispatch(setAllUsers([]))
    }
}

export const setAllUsers = data => (
    {
        type: FETCH_USERS,
        payload: data
    }
)

export const setAllScores = data => (
    {
        type: FETCH_SCORES,
        payload: data
    }
)

export const setScore = data => (
    {
        type: SUBMIT_SCORE,
        payload: data
    }
)

export const doLogin = () => {
    return {
        type: LOGIN
    }
}

const doLogout = () => {
    return {
        type: LOGOUT
    }
}