import { Outlet } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import item from "./item.jpg";
import "./books.css";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState();

  // BookList

  const getBooks = async () => {
    const request = await fetch("http://127.0.0.1:4400/book", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      mode: "cors",
    });
    const result = await request.json();
    // console.log(result);
    setBooks(result);
  };

  useEffect(() => {
    getBooks();
  }, []);

  // search

  const filteredSearch = search
    ? books.filter((i) => i.title.includes(search))
    : books;

  return (
    <>
      <Outlet />
      <div>
        <h1>Search</h1>
        <input
          className="search"
          type={"text"}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <h1 style={{ borderBottom: "2px solid orange", textAlign: "center" }}>
          Books List
        </h1>
        {/* <navbar>
          <div className="navbar">Favorite</div>
          <div className="navbar">Add to read</div>
          <div className="navbar">was read</div>
        </navbar> */}
        <div className="container">
          <ul>
            {filteredSearch.map((i) => (
              <li className="container-li" key={i}>
                {i.done ? i.title : i.title}
                <img src={item} style={{ width: "100px", height: "100px" }} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  quod rerum suscipit dolorum enim magnam eligendi beatae iure
                  nihil. Cum voluptate hic laudantium beatae ipsa non quas.
                  Corrupti, iure deserunt!
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Books;
