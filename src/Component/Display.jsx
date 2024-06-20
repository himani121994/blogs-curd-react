import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "../assets/css/display.css"; 

const Display = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const onLoad = () => {
    let url = 'http://localhost:3000/blogs';
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    onLoad();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const ans = data.map((key) => {
    return (
      <tr key={key.id} class="table-secondary">
        <td>{key.id}</td>
        <td>{key.name}</td>
        <td>{key.email}</td>
        <td>{key.number}</td>
        <td><img src={key.image} alt="Image" style={{ width: '50px', height: '50px' }} /></td>
        <td>{key.article}</td>
        <td>{key.description}</td>
      </tr>
    );
  });

  return (
    <div className="table-container">
      <h1 style={{textAlign:"center", color:"#ed2939",textDecoration:"underline"}}>Display the Content</h1>
      <Table responsive="lg" class="table table-striped table table-bordered">
        <thead>
          <tr class="table-dark" style={{textAlign:"center",fontSize:"26px"}}>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>number</th>
            <th>image</th>
            <th>artical</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody >{ans}</tbody>
      </Table>
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
}

export default Display;
