import {useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {updateClick,updateData} from './redux/action.js';
import utils from'./utils.js'
function Data(){
    const dispatch = useDispatch();
    const name = useSelector(state => state.name);
    const value = useSelector(state => state.value);
    const catagory = useSelector(state => state.catagory);
    const click = useSelector(state => state.clicked);
    const index = useSelector(state => state.index);
    const [data, setData] = useState(new Map());
    const obj = Object.fromEntries(data);


    useEffect(() => {
        if(click === 'add'){
            const newMap = utils.add(name,value,catagory,index,data);
            setData(newMap);          
            dispatch(updateData(newMap));
            dispatch(updateClick(''));
        }
        if(click === 'edit'){
            const newMap = utils.modify(name,value,catagory,index,data);
            setData(newMap);          
            dispatch(updateData(newMap));
            dispatch(updateClick(''));
        }
        if(click === 'delete'){
            const newMap = utils.del(catagory,index,data);
            setData(newMap);          
            dispatch(updateData(newMap));
            dispatch(updateClick(''));
        }
    }, [click]); 



    return(
        <div style={{marginLeft: '5%'}}>
            {Object.entries(obj).map(([key, value]) => (
                <div key={key}>
                <h4>Catagory: {key}</h4>
                {value.map((item, index) => (
                    <div key={index}>
                        {item.name} : {item.num}
                    </div>
                )
                )}
                </div>
            ))}
        </div>
    )
}
export {Data}