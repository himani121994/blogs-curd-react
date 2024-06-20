import img from "../assets/images/image_0.jpg";
import "../assets/css/home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
    const [data, setData] = useState([]);
    const onLoad = () => {
        let url = 'http://localhost:3000/blogs';
        axios.get(url).then((res) => {
          setData(res.data);
        });
      };
    
      useEffect(() => {
        onLoad();
      }, []);

      const ans = data.map((key) => {
        return ( 
           
            <div className="col-md-3">
                    <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem", marginTop: "20px",marginLeft:"10px" }}>
                        <div class="card-header">{key.name}</div>
                        <div class="card-body">
                            <h5 class="card-title">{key.article}</h5>
                            <p class="card-text">{key.description}</p>
                        </div>
                    </div>
                </div>
        );
    });

    return (
        <div style={{ color: "black", }}>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ textDecoration: "underline" }}>Main Content Area</h2>
                <p >This is where your main content will go.</p></div>

            <div class="bg-image"></div>

            <div class="bg-text">
                <h1>I am John Doe</h1>
                <p>And I'm a Photographer</p>
            </div>


            <div class="card bg-dark text-white" style={{margin:"0px 10px"}}>
                <img class="card-img" src={img} alt="Card image" style={{ width: "100%", height: "300px",filter:"blur(3px)" }} />
                <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
          <hr />
            <div className="row --bs-gutter-x: -0.5rem;">
                {/* <div className="col-md-3">
                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", marginTop: "20px",marginLeft:"10px" }}>
                        <div class="card-header"> nature blog</div>
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">The Nature Conservancy's scientists are solving some of conservation's biggest challenges. We’re here to tell their stories.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem", marginTop: "20px" }}>
                        <div class="card-header">Himani Bhimte</div>
                        <div class="card-body">
                            <h5 class="card-title">Travel Blog</h5>
                            <p class="card-text">I love everything about Nomadic Matt. Everything from his website’s design to his personal writing voice makes for an engaging reading experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem", marginTop: "20px" }}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", marginTop: "20px" }}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> */}
                {ans}
            </div>
        </div>

    )
}
export default Home;