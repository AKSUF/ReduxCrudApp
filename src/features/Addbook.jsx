import React, { useState } from 'react'
import "../style/Form.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from './BookSlice'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
const Addbook = () => {

    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const navigate=useNavigate();
    const dispatch=useDispatch();
const numberofBooks=useSelector((state)=>state.booksReducer.books.length)

const handleSubmit=(e)=>{
    e.preventDefault();
  
    const book={id:numberofBooks+1,title,author};
    dispatch(addBook(book));
    navigate("/show-books",{replace:true})

}

    return (
        <div>
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
          </div>
          <div className="form-field">
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required />
          </div>
          <div className="form-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      
    )
}

export default Addbook
