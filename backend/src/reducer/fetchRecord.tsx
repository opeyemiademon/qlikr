
const records = {
    category:[],
    users:[]
}

export const rootReducer =(state = records, action:any)=>{
    switch(action.type){
        case 'SET_RECORDS':
            return {...state, [action.name]:action.data}
        case 'FETCH_RECORDS':
            return state;
            default:
                return state
    }
}