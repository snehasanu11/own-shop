import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'


 
  const App = () => {
    const baseUrl=  "https://api.pujakaitem.com/api/products"
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get(baseUrl)
      .then((response)=>{console.log(response.data)
      setData(response.data)})
    },[])
     const handleDelete=(id)=>{
      axios.delete(`${baseUrl}/${id}`)

      const result=data.filter(item=>item.id!==id)

      setData(result)
}
const edit=(id)=>{
  axios.put(`${baseUrl}/${id}`,{
    title:"hii",
    body:"hello"
  })
  .then((response)=>{console.log(response.data)
  setData(response.data)})
  .catch((err)=>{console.log("error")})

  
}
     
    return (
      <div>
      {/** <table >
      <tr>
        
        <th>title</th>
        <th>body</th>

        
      </tr>
      {
        data.map(item=>(
          
          <tr>{item.id}
          <td>{item.title}</td>
          <td>{item.body}</td>
          </tr>
          
        ))
      }
       </table>
    
    **/}
    
        {
          data.map(item=>(
            <>
            <li>{item.id}<br/>
            {item.name}<br/>
            {item.company}<br/>
            <img src={item.image} alt='logo' height='50px'width='50px'/>
            </li>
            <button onClick={()=>handleDelete(item.id)} >delete</button>
            <button onClick={()=>edit(item.id)}>edit post</button>
            </>
          ))
        }
      
     
      </div>
    )
  }
  
  export default App
      
    
  
 
  