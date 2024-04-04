import React, { useEffect,useContext, useReducer } from "react"
import axios from 'axios'
import reducer from "../reducer/ProductReducer";

const AppContext=React.createContext()
const API="https://api.pujakaitem.com/api/products";
const initialState={
  isLoading:"false",
  isError:"false",
  Products:[],
  featuredProducts:[]

}

const AppProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialState);
const getProducts=async(url)=>{
  dispatch({type:"SET_LOADING"})
  try{
const res=await axios.get(url)
const Products=await res.data
console.log(Products)
dispatch({type:"SET_API_DATA",payload:"Products"})}
catch(error){
  dispatch({type:"API_ERROR"})  
}
}

 
useEffect(()=>{
getProducts(API)
  
 
},[])
    
return <AppContext.Provider value={{...state}}>
    {children}
</AppContext.Provider>
}
export {AppProvider,AppContext ,axios}