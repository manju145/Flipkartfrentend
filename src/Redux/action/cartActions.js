import axios from "axios"
import * as actionType from "../constants/cartConstant"


const URL= 'https://flipkartbackend-u4mz.onrender.com';

export const addToCart =(id,quantity)=> async(dispatch) =>{
try{
let {data} = await axios.get(`${URL}/product/${id}`);

dispatch({type: actionType.ADD_TO_CART, payload:{...data,quantity}});
}
catch(err){
    dispatch({type: actionType.ADD_TO_CART_ERROR, payload:err.message});
}
}


export const removeFromCart =(id)=>(dispatch)=>{
    dispatch({type: actionType.REMOVE_FROM_CART,payload: id });
}


export const updateQty = (productId, qty) => {
  return {
    type: actionType.UPDATE_QTY,
    payload: {
      productId,
      qty,
    },
  };
}