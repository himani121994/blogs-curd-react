import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/search.css"; 


const Search = () => {
    const [article, setArticle] = useState("");
    const [myData, setMyData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        let url = "http://localhost:3000/blogs";
        axios.get(url).then((res) => {
            setMyData(res.data);
        });
    };

    const handleSearch = () => {
        const filtered = myData.filter((item) =>
            item.article.toLowerCase().includes(article.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Search Page</h1>
            <div className="search-container">

                <div className="row">
                    <div className="col-md-4">
                        <h1>Search for Blog Posts by Author Name</h1>
                        <label>
                            Enter the Author Name:
                            <input
                                type="text"
                                value={article}
                                onChange={(e) => setArticle(e.target.value)}
                            />
                        </label>
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className="col-md-8"> {filteredData.length > 0 ? (
                        filteredData.map((key) => (

                            <div key={key.id} className="result-item row">
                                <div className="col-8">
                                    <h2 style={{ textDecoration: "underline" }}>Author Name: {key.name}</h2>
                                    <h5>Author Email: {key.email}</h5>
                                    <h5>Author Number: {key.number}</h5>
                                    <hr />
                                    <h5 style={{ color: "red" }}>Blog Article: {key.article}</h5>
                                </div>
                                <div className="col-4"><img src={key.image} style={{ width: "250px", height: "150px" }} alt="Blog" /></div>
                                <h6>Blog Designation: {key.description}</h6>
                            </div>
                        ))
                    ) : (
                        <h2>No records found</h2>
                    )}</div>
                </div>

                <hr />
            </div>
        </div>
    );
};

export default Search;
