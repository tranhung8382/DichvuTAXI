import update from "react-addons-update";
import constants from "./actionConstants";

const { SET_NAME } = constants;

export function setName(){
  return {
    type:SET_NAME,
    payload:"Tran Hung"
  }
}

function hanldeSetName(state, action){
  return update(state, {
    name:{
      $set:action.payload
    }
  })
}

const ACTION_HANDLERS = {
    SET_NAME:hanldeSetName
}
const initialState = {};

export function HomeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
