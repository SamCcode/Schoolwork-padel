const initialState = {
    courts: [],
    players: [],
    activePlayer:{},
}

const padelReducer =(state = initialState, action) => {
    let players = [...state.players]
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

        case "ADD_ACTIVE_PLAYER": {
            return {
                ...state,
                activePlayer: action.payload
            }
        }
            
        case "CHANGE_PLAYER_INFO": {
            
            const changedActivePlayer = action.payload;
            const updatedPlayers = state.players.map((player)=> {
                if (player.id === changedActivePlayer.id) {
                    return changedActivePlayer;
                }
                return player;
            });
            
            return {
                ...state,
                players: updatedPlayers,
                activePlayer: changedActivePlayer
            }
        }

        default:
           return state
    }
}

export default padelReducer;