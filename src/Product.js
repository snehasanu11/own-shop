import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoGridSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import axios from 'axios';
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from './context/Carts';
import { useContext } from 'react'




const Product = () => {
  const { cartItems, addToCart } = useContext(CartContext)
  const baseUrl=  "https://api.pujakaitem.com/api/products"
  const[showData,SetShowData]=useState([])
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get(baseUrl)
    .then((response)=>{console.log(response.data)
    setData(response.data)})
  },[])

  const handleLowest=()=>{
    let datas=[...data]
    const result = datas.sort((a, b) => b.price - a.price);
    SetShowData([...result])
    console.log([...result])
  }
  return (
    <div className='product'>
      <div className='product1'>
        <div className='psearch'><input type='search' width='20px' placeholder='search here...'/></div><br/>
        <div className='pcategory'>
          <h3>category</h3><br/>
          <Link>all</Link><br/><br/>
          <p>mobile</p><br/>
          <p>laptop</p><br/>
          <p>computer</p><br/>
          <p>accessories</p><br/>
          <p>watch</p><br/>
        </div><br/>
        <div className='pcompany'>
        <h3>Company</h3><br/>
        <select >
  <option value="all">all</option>
  <option value="lenovo">lenovo</option>
  <option value="samsung">samsung</option>
  <option value="acer">Acer</option>
</select>
        </div><br/>
        <h3>Colors</h3>
        <div className='clr'>
        <p>all</p>
        <div className='color r '></div>
        <div className='color y'></div>
        <div className='color b'></div>
        <div className='color g'></div>
        <div className='color p'></div>
        </div><br/>
        <div className='price'><h3>Price</h3>
        <input type='range' min='10,000' max='1,00,000'/></div><br/>
        <div className='btn'><button>clear filter</button></div>

     </div>
      <div className='product2'>
      <div className='productc1'>
        <div className='productc1c'>
          <div>
        <IoGridSharp />
        <IoMdMenu /></div>
        <h3>12 total products</h3>
        <select className='select'>
  <option value="lowest" onClick={handleLowest}>price(lowest)</option>
  <option value="highest">price(highest)</option>
  <option value="reset">Reset</option>
  </select>
        </div>
      </div>
      <div className='productc2'>
      <table>
      <tr>
        
        <th>photo</th>
        <th>name</th>
        <th>company</th>
        <th>price</th>

        <th>category</th>
        <h3>cart</h3>



        
      </tr>
      {
        data.map(item=>(
          
          <tr >
          <Link to='/Post' ><img src={item.image} alt='logo' height='100px'width='200px' classname='pimg'/></Link>
            <td>{item.name}</td> 
          <td>{item.company}</td>
          
          <td>{item.price}</td>
          
          <td>{item.category}</td>
          <td><Link to='/Cart'className='links pcart'id='navl' onClick={() => addToCart(Product)}><FaCartShopping role="button" /></Link></td>
          </tr>
          
        ))
      }
       </table>
    
      </div>
      </div>
  
    </div>
  )
}

export default Product