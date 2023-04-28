const initialState = {
    courts: [],
    players: [],
}

const padelReducer =(state = initialState, action) => {
    switch (action.type) {
        case "ADD_INITIAL_COURTS": {
            return {
                ...state,
                courts: [...state.courts, ...action.payload] 
            }
        }

        case "ADD_NEW_COURT": {
            return {
                ...state,
                courts: state.courts + action.payload 
            }
        }

        case "ADD_INITIAL_PLAYERS": {
            return {
                ...state,
                players: [...state.players, ...action.payload] 
            }
        }

        case "ADD_NEW_PLAYER": {
            return {
                ...state,
                players: [...state.players, action.payload]
            }
        }

            
    
        default:
           return state
    }
}

export default padelReducer;