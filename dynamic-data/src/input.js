import {useRef} from 'react';
import { useDispatch } from 'react-redux';
import {updateInput} from './redux/action.js';
function Input(){
    const dispatch = useDispatch();
    const name = useRef();
    const value = useRef();
    const catagory = useRef();
    const index = useRef();
    function submitData(){
        dispatch(updateInput(name.current.value, value.current.value, catagory.current.value,index.current.value,'add'));
        name.current.value = '';
        value.current.value = '';
        catagory.current.value = '';
        index.current.value = '';
    }
    function editData(){
        dispatch(updateInput(name.current.value, value.current.value, catagory.current.value,index.current.value,'edit'));
        name.current.value = '';
        value.current.value = '';
        catagory.current.value = '';
        index.current.value = '';
    }
    function del(){
        dispatch(updateInput(name.current.value, value.current.value, catagory.current.value,index.current.value,'delete'));
        name.current.value = '';
        value.current.value = '';
        catagory.current.value = '';
        index.current.value = '';
    }
    return(
        <div id="inp">
            <label htmlFor="name">Name:</label>
            <input type="text" htmlFor="name" id="nameInp" ref={(e) => name.current = e} />  
            <label htmlFor="number">Value:</label>
            <input type="text" name="number" id="numInp" ref={(e) => value.current = e} /> 
            <label htmlFor="catagory">Catagory:</label>
            <input type="text" name="catagory" id="catInp" ref={(e) => catagory.current = e} /> 
            <label htmlFor="index">Name index:</label>
            <input type="text" name="index" id="indInp" ref={(e) => index.current = e} /> 
            <button onClick={submitData}>Submit Data</button>
            <button onClick={editData}>Edit Data</button>
            <button onClick={del}>Delete</button>
        </div>
    )
}
export {Input}