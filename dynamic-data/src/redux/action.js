export const UPDATE_DATA = 'UPDATE_DATA';
export const INPUT = 'INPUT';
export const CLICK = 'CLICK';
export const INDEX = 'INDEX';
export const updateData = (data) => ({
    type: UPDATE_DATA,
    payload: data
});

export const updateInput = (name, value, catagory, index,click) => ({
    type: INPUT,
    name: name,
    value: value,
    click: click,
    catagory: catagory,
    index: index

});

export const updateClick = (click) => ({
    type: CLICK,
    payload: click
});

