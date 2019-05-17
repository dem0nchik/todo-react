const initialState = { currentList: 'Today'}

const list = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LIST':
                return ( {}, { currentList: action.category })
        default:
            return state
    }
}

export default list