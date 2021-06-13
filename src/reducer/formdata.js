
import { ADD_NEW_TRIP, FETCH_DATA_TRIP } from '../actions/const'

export default (state = {}, action) => {


    switch (action.type) {

        case ADD_NEW_TRIP:
            let val = {};

            const data = localStorage.getItem(ADD_NEW_TRIP);


            val = { ...JSON.parse(data), [action.payload.id]: action.payload };
            localStorage.setItem(ADD_NEW_TRIP, JSON.stringify(val));

            return { ...state, [action.payload.id]: action.payload };


        case FETCH_DATA_TRIP :

        return {...action.payload}

        default:
            return state;
    }


}