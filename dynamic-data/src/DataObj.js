

class DataObj{
    constructor(name,value) {
        this.num = value; 
        this.name = name;
    }
    edit(name, val){

        return new DataObj(name, val);
    }
    printData(){
        console.log("Name: ",this.name);
        console.log("Value: ",this.value);
    }
}
export { DataObj };