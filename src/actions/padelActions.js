const addInitialCourts = (data) => {
    return {
        type: "ADD_INITIAL_COURTS",
        payload: data
    }
}

const addNewCourt = (data) => {
    return {
        type: "ADD_NEW_COURT",
        payload: data
    }
}

const addInitialPlayers = (data) => {
    return {
        type: "ADD_INITIAL_PLAYERS",
        payload: data
    }
}

const addNewPlayer = (data) => {
    return {
        type: "ADD_NEW_PLAYER",
        payload: data
    }
}

const addActivePlayer = (data) => {
    return {
        type: "ADD_ACTIVE_PLAYER",
        payload: data
    }
}

const changePlayerInfo = (data) => {

    return {
        type: "CHANGE_PLAYER_INFO",
        payload: data
    }
}

const deletePlayer = (data) => {

    return {
        type: "DELETE_PLAYER",
        payload: data
    }
}
export {addInitialCourts, addNewCourt, addInitialPlayers, addNewPlayer, addActivePlayer, changePlayerInfo, deletePlayer}
