const initialState =
[
      {
      id: 1,
      text: "Прочитать книгу",
      isComplete: false
      },
      {
      id: 2,
      text: "Купить книгу",
      isComplete: false
      },
      {
      id: 3,
      text: "Купить еды",
      isComplete: false
      }
]

const tasks = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    isComplete: action.isComplete
                }]
        case 'REMOVE_TASK':
            return [...state].filter(task => task.id !== action.id)
        case 'COMPLETE_TASK':
            return [...state].map(item => {
                if(item.id === action.id) {
                    item.isComplete = !item.isComplete
                } 
                return item
            })
        default:
            return state
    }
}

export default tasks