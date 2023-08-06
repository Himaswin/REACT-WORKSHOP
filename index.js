import React from "react";
import  ReactDOM from "react-dom/client";
import "./index.css";


const books = [
  {id: 1,
    img:"https://m.media-amazon.com/images/I/71KnOamOInL._AC_UL480_FMwebp_QL65_.jpg",
  title:"The Family Across the Street",
author:"Nicole Trope",
},
{id: 2,
  img:"https://m.media-amazon.com/images/I/81zlbsnFiYL._AC_UL480_FMwebp_QL65_.jpg",
title:"The Psycology of Money",
author:"Morgan Housel",
},
{id: 3,
  img:"https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UL480_FMwebp_QL65_.jpg",
title:"Atominc Habits",
author:"James Clear",
},
];

function BookList(){
  return(
    <section className="bookList">
      {
        books.map((book)=>{
          const {img, title,author} = book;
          return <Book book = {book} key = {book.id}/>;
        })
      }
    </section>
  )
}

const Book = (props) =>{
  const {img,title,author} = props.book;

  const clickHandler = (e) =>{
    console.log(e);
    alert("You clicked the button!");
  };

  const Know = (author) => {
    console.log(author);
  };
  return(
    <article className="book">
      <img onMouseOver ={() =>console.log(title)}src={img} alt=""/>
      <h1 onClick ={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>

      <button onClick = {clickHandler}>Click Me!</button>
      <button onClick = {() =>Know(author)}>Know the Author</button>
    </article>
    
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList/>);