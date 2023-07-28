const INTIAL_STATE = {
    SaveAdd:[],  
};

export default function saveAddReducer(state=INTIAL_STATE , action){
    switch(action.type){
        case "SET_Save":
        return {...state, SaveAdd:action.payload }
       default:
        return state 
    }
}
