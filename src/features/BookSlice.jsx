const { createSlice } = require("@reduxjs/toolkit")

const initialBooks={
    books:[
        {id:1,title:"Love Bangladesh",author:"Anisul Islam"},
        {id:2,title:"Love Bangladesh",author:"Anisul Islam"},
        
    ]
}
 export const bookSlice=createSlice({
name:"books",
initialState:initialBooks,
reducers:{
    showBooks:(state)=>state,
    addBook:(state,action)=>{
        state.books.push(action.payload);
    },
    updateBook:(state,action)=>{
        const {id,title,author}=action.payload
       const isBookExist= state.books.filter((book)=>book.id===id);
       if(isBookExist){
        isBookExist[0].title=title;
        isBookExist[0].title=title;
       }
    },
    deleteBook:(state,action)=>{
        const id=action.payload;
      state.books= state.books.filter(book=>book.id===id)
    },
}

})

export const {showBooks,addBook,deleteBook,updateBook}=bookSlice.actions;
export default bookSlice.reducer;
