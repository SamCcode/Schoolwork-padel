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
export {addInitialCourts, addNewCourt, addInitialPlayers, addNewPlayer}
