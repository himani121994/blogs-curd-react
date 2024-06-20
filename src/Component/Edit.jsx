import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: '',
    email: '',
    number: '',
    image: '',
    article: '',
    description: ''
  });

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:3000/blogs/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/blogs/${id}`, post);
    navigate('/');
  };

  return (
    <div className="form-container-wrapper">
      <h2>Update Blog Post</h2>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={post.name} onChange={handleChange} required />
        </div>
        <div className="form-group" style={{ display: "flex", gap: "20px" }}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={post.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number</label>
          <input type="text" name="number" value={post.number} onChange={handleChange} required />
        </div>
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" name="image" value={post.image} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Article</label>
          <input type="text" name="article" value={post.article} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={post.description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Update Post</button>
      </form>
      </div>
    </div>
  );
};

export default Edit;
