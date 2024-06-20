import React, { useState } from "react";
import axios from "axios";
import "../assets/css/insert.css"; // Import the CSS file

const Insert = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    article: "",
    description: "",
    image: "", // Will store image URL
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    let url = 'http://localhost:3000/blogs';
    axios.post(url, input).then((res) => {
      setInput({
        name: "",
        email: "",
        number: "",
        article: "",
        description: "",
        image: "",
      });
      alert("You have successfully registered");
    });
  };

  return (
    <div className="form-container-wrapper">
      <h2>Upload Blog</h2>
      <div className="form-container">
        <form onSubmit={submitHandle}>
          <div className="form-group">
            <label>Author Name</label>
            <input type="text" name="name" placeholder="Author Name" onChange={inputHandle} value={input.name} />
          </div>
          <div className="form-group" style={{ display: "flex", gap: "20px" }}>
            <div>
              <label>Author Email</label>
              <input type="email" name="email" placeholder="Author Email" onChange={inputHandle} value={input.email} />
            </div>
            <div>
              <label>Author Number</label>
              <input type="text" name="number" placeholder="Author Number" onChange={inputHandle} value={input.number} />
            </div>
          </div>
          <div className="form-group">
            <label>Blog Image URL</label>
            <input type="text" name="image" placeholder="Image URL" onChange={inputHandle} value={input.image} />
          </div>
          <div className="form-group">
            <label>Blog Article</label>
            <input type="text" name="article" placeholder="Blog Article" onChange={inputHandle} value={input.article} />
          </div>
          <div className="form-group">
            <label>Article Description</label>
            <textarea name="description" placeholder="Article Description" onChange={inputHandle} value={input.description}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Insert;
