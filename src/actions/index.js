import { ADD_NEW_TRIP , FETCH_DATA_TRIP} from './const';


export const AddTripData = (data) => {
    const id = Math.random().toString(36).replace(/[^a-z]+/g, "");

    const dat = {
        id: id,
        ...data
    }

   return {
        type: ADD_NEW_TRIP,
        payload: dat
    }

}

export const FetchTripData = ()=>{

    const data = localStorage.getItem(ADD_NEW_TRIP)

    return {
        
        type : FETCH_DATA_TRIP,
        payload : JSON.parse(data)

    }

}