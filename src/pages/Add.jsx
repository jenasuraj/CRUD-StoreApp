import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const add = () => {
    const [book,setBook] = useState({
        title:"",
        description:"",
        price:null,
        imageUrl:"",
    });
const navigate = useNavigate();
const handleChange =(e) =>
{
    setBook(prev =>({...prev,[e.target.name]:e.target.value}));
}
console.log(book);

const handleClick = async(e)=>
{
    e.preventDefault();
    try{
await axios.post('http://localhost:5000/books',book)
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
     <h1>Add Books</h1>
     <input type="text" placeholder='title' onChange={handleChange} name='title' />
     <input type="text" placeholder='description'onChange={handleChange} name='description' />
     <input type="number" placeholder='price' onChange={handleChange} name='price'/>
     <input type="text" placeholder='image' onChange={handleChange} name='imageUrl'/>
     <button onClick={handleClick}>Add</button>
      </div>
   </>
  )
}

export default add
