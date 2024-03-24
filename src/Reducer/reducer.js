export const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_FAV':
            return{...state,
            favs: [...state.favs, action.payload]}
        case 'VIEW_LIST':
            return{...state, data: action.payload}
        case 'CARD_SELECTED':
            return{...state, dentistaSelect: action.payload}        
    }
    
}