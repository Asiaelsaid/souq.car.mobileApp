const INTIAL_STATE={
    carsData:[]
};
export default function getCarsDataReducer(state=INTIAL_STATE,action){
    switch(action.type){
        case "SET_carsData":
            return {...state,carsData: action.payload}

        default:
            return state;
    }
}