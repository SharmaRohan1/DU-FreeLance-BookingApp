import "./styles/sellBooksStyles.css";
import ListedBooks from "./ListedBooks";
import axios from "axios";
import { useState } from "react";

function SellBooks() {

  const [title , setTitle] = useState("");
  const [author , setAuthor] = useState("");
  const [edition , setEdition] = useState("");
  const [condition , setCondition] = useState("Like New");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleEditionChange = (event) => {
    setEdition(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    let submittedData = await axios.post("http://localhost:4000/api/addBook", {
      title: title,
      author: author,
      edition: edition,
      condition: condition,
      email: localStorage.getItem("userEmail")
    })
    setTitle("");
    setAuthor("");
    setEdition("");
    setCondition("Like New");
  };


  return (
    <section id="sellbooks-section">
      <div className="sellbooks-container">
        <h2>Sell Your Book</h2>

        <form className="sellBooks-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
          />

          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={author}
            onChange={handleAuthorChange}
            required
          />

          <input
            type="number"
            min="1950"
            max="2050"
            id="edition"
            name="edition"
            value={edition}
            onChange={handleEditionChange}
            placeholder="Edition(yyyy)"
          />


          <div className="condition-container">
            <label for="condition">Condition:</label>
            <select id="condition" name="condition" value={condition} onChange={handleConditionChange} required>
              <option value="like-new">Like New</option>
              <option value="very-good">Very Good</option>
              <option value="good">Good</option>
              <option value="acceptable">Acceptable</option>
            </select>
          </div>

          <button type="submit">Submit Listing</button>
        </form>
      </div>

      <ListedBooks />
    </section>
  );
}

export default SellBooks;
