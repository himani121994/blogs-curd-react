import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/update.css"; // Import the CSS file

const Update = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Number of posts per page
  
  const onLoad = () => {
    let url = 'http://localhost:3000/blogs';
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    onLoad();
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://localhost:3000/blogs/${id}`).then(() => {
      setData(data.filter(post => post.id !== id));
    });
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
  return (
    <div className="table-container">
      <h1 style={{textAlign:"center", color:"#ed2939",textDecoration:"underline"}}>Update the Content</h1>
      <table  class="table table-striped table-dark table table-bordered">
        <thead>
          <tr style={{textAlign:"center",fontSize:"26px"}}>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Image</th>
            <th>Article</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((key) => (
            <tr key={key.id}>
              <td>{key.id}</td>
              <td>{key.name}</td>
              <td>{key.email}</td>
              <td>{key.number}</td>
              <td><img src={key.image} alt="" /></td>
              <td>{key.article}</td>
              <td>{key.description}</td>
              <td>
                <Link to={`/edit/${key.id}`}><button className="edit" >Edit</button></Link>
                <button className="delete" onClick={() => deletePost(key.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
    </div>
  );
};

export default Update;
