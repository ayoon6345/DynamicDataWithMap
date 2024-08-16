
import { UPDATE_DATA, INPUT,CLICK} from './action.js';

const initialState = {
    data: (new Map()),
    clicked: '',
    name: '',
    value: '',
    catagory: '',
    index: ''
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {

    case UPDATE_DATA:
        return {
            ...state,
            data: action.payload
        };

    case INPUT:
        return{
            ...state,
            name: action.name,
            value: action.value,
            clicked: action.click,
            catagory: action.catagory,
            index: action.index
        };
    case CLICK:
        return{
            ...state,
            clicked: action.payload
        }
    default:
        return state;
    }
};

export default Reducer; 