import "./styles/buyBooksStyles.css";
import SearchResults from "./SearchResults";

import { useState } from "react";

function BuyBooks() {

  const [submitted , setSubmitted] = useState(false);

  const [bookQuery , setBookQuery] = useState("");
  const [authorQuery , setAuthorQuery] = useState("");

  const handleBookNameChange = (event) => {
    setBookQuery(event.target.value);
  };

  const handleAuthorNameChange = (event) => {
    setAuthorQuery(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Search form submitted");
    setSubmitted(!submitted);
    // setBookQuery("");
    // setAuthorQuery("");
  };

  return (
    <section id="buybooks-section">
      <div className="buybooks-container">
        <h2>Looking for Books?</h2>

        <form className="buybooks-form" onSubmit={onFormSubmit}>
          <div className="buybooks-form-input-section">
            <input type="text" placeholder="Book name" value={bookQuery} onChange={handleBookNameChange} required />
            <input type="text" placeholder="Author name" value={authorQuery} onChange={handleAuthorNameChange} />
          </div>

          <button type="submit">Search</button>
        </form>

      </div>

      {submitted && <SearchResults bookQuery={bookQuery} authorQuery={authorQuery}/>}
    </section>

  );
}

export default BuyBooks;
