const initialState = 
    [
      {
      id: 1,
      text: "Прочитать книгу",
      },
      {
      id: 2,
      text: "Купить книгу"
      },
      {
      id: 3,
      text: "Купить еды"
      }
]

const tasks = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state, {
                    id: action.id,
                    text: action.text
                }
            ]
        default:
            return state
    }
}

export default tasks