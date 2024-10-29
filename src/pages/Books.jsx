import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const books = () => {
 const [books,setBooks] = useState([]);
    useEffect(()=>
    {
        const fetchAllBooks = async()=>
        {
         try{
         const response = await axios.get('http://localhost:5000/books')
         setBooks(response.data);
        
         }
         catch(err)
         {
            console.log(err);
         }
        }
        fetchAllBooks();

    },[])
    console.log(books);
    const handleClick = async(id) =>
    {
       try
       {
        await axios.delete('http://localhost:5000/books/'+id)
        window.location.reload();
       }
       catch(error)
       {
        console.log("error");
       }
    }
  return (
    <>
    <div>
    <h1>Jena Book Store</h1>
    <div className="books">
        {books.map( book =>(
            <div className="book" key={book.id}>
                {book.imageUrl && <img src={book.imageUrl} alt="" />}
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <span>{book.price}</span>
                <button className='delete' onClick={()=>handleClick(book.id)}>Delete</button>
                <button className='update'><Link to={`/update/${book.id}`}>Update</Link> </button>
            </div>
        ) )}
    </div>
    <Link to='add'><button>Add Book</button></Link>
 
      </div>
    </>
  )
}

export default books
