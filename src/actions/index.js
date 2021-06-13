import { ADD_NEW_TRIP } from './const';


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