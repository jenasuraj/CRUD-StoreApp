import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const update = () => {
    const [book,setBook] = useState({
        title:"",
        description:"",
        price:null,
        imageUrl:"",
    });
const navigate = useNavigate();
const location = useLocation();
const BookId = location.pathname.split('/')[2];

const handleChange =(e) =>
{
    setBook(prev =>({...prev,[e.target.name]:e.target.value}));
}
console.log(book);

const handleClick = async(e)=>
{
    e.preventDefault();
    try{
await axios.put('http://localhost:5000/books/'+BookId ,book)
navigate('/');
    }
    catch(err)
    {
        console.log(err);
    }
}

  return (
   <>
    <div className='form'>
     <h1>Update New Book</h1>
     <input type="text" placeholder='title' onChange={handleChange} name='title' />
     <input type="text" placeholder='description'onChange={handleChange} name='description' />
     <input type="number" placeholder='price' onChange={handleChange} name='price'/>
     <input type="text" placeholder='image' onChange={handleChange} name='imageUrl'/>
     <button onClick={handleClick}>Update</button>
      </div>
   </>
  )
}

export default update
