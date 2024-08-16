import {DataObj} from './DataObj.js'


//Add object in catagory. index specifies to insert object after existing object name
function add(name,value,catagory, index,data){
    const newData = new DataObj(name, value);
    const newMap = new Map(data);
    if(name === ''){
        console.error('name must not be empty');
        return newMap;
    }
    if(catagory === ''){
        console.error('catagory must not be empty');
        return newMap;
    }
    if(newMap.get(catagory) === undefined){
        newMap.set(catagory, [newData]);
    }
    else{
        if (!(newMap.get(catagory).every(item => item.name !== name))){
            console.error(name + ' already exists');
            return newMap;
        }
        if(index === ''){
            newMap.set(catagory, [newData, ...(newMap.get(catagory))]);
        }
        else{
            let addAfter = newMap.get(catagory).findIndex(item => item.name === index);
            if(addAfter >= 0){
                const added = [
                    ...newMap.get(catagory).slice(0, addAfter+1),
                    newData,
                    ...newMap.get(catagory).slice(addAfter+1)
                ];
                newMap.set(catagory, added);
            }
            else{
                console.error(index + ' not found');
            }
        }
    }
    return newMap;
}
function modify(name,value, catagory, index,data,){
    const newMap = new Map(data);

    if(newMap.get(catagory) !== undefined){
        if (newMap.get(catagory).every(item => item.name !== index)) {
            console.error("Name " + index + " does not exist");
            return newMap;
        }
        const newArr = (data.get(catagory)).map((item) => {
            if (item.name === index) {
                if(value === ''){
                    value = item.num;
                }
                if(name === ''){
                    name = item.name;
                }
                return item.edit(name,value);
            }
            return item;
        });
        newMap.set(catagory, newArr);
        return newMap;
    }
    else{
        console.error("catagory " + catagory +  " does not exist");
        return data;
    }
    

}
function del(catagory, index,data){
    const newMap = new Map(data);

    if(newMap.get(catagory) !== undefined){
        if (newMap.get(catagory).every(item => item.name !== index)) {
            console.error("Name " + index + " does not exist");
            return newMap;
        }

        const newArr = newMap.get(catagory).filter((item) => {
            if(item.name !== index){
                console.log(item);
                return true;
            }
            return false;
        });
        console.log(newArr,index);
        newMap.set(catagory, newArr);
        return newMap;
    }
    else{
        console.error("catagory " + catagory +  " does not exist");
        return data;
    }
    
}
const dataOperations = {
    add,
    modify,
    del
};


export default dataOperations;
