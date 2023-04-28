import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layout/Navbar'
import BooksView from '../features/BooksView';
import Addbook from '../features/Addbook'
import Editbook from '../features/Editbook'
const Index = () => {
    return (
     <BrowserRouter>
     <Navbar/>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="*" element={<Error/>}/>
<Route path="/show-books" element={<BooksView/>}/>
<Route path="/add-books" element={<Addbook/>}/>
<Route path="/edit-book" element={<Editbook/>}/>
<Route path="/" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    )
}

export default Index
