import React from "react";
import "./home.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

export const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="left">
          <div className="left-nav">
            <h1 className="logo">Festive</h1>
            <h3>
              <i className="fa fa-search"></i>
            </h3>
          </div>
          <div className="left-bg">
            <h1 className="left-t">
              It's time to <br /> enjoy the Music
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              ratione nisi at atque totam molestiae, consequatur beatae harum
              quasi officiis, dolor numquam enim ad inventore similique sit
              possimus error saepe!
            </p>
            <div className="watch">
              <div className="watch-icon">
                <i className="fa fa-play-circle"></i>
              </div>
              <span className="watch-text">Watch Video</span>
            </div>
            <div className="left-social">
              <ul>
                <li>
                  <i className="fa fa-facebook"></i>
                </li>
                <li>
                  <i className="fa fa-instagram"></i>
                </li>
                <li>
                  <i className="fa fa-twitter"></i>
                </li>
                <li>
                  <i className="fa fa-pinterest"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-nav">
            <ul>
              <li>Explore</li>
              <li>Things to do</li>
              <li>Plan your trip</li>
            </ul>
            <a href="#">Book your trip</a>
          </div>
          <div className="right-bg">
            <h1 className="title">Real Night Festival</h1>
            <h4>Lorem ipsum dolor sit</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              esse veniam ad, velit consectetur libero tempore ipsa ducimus
              dolore ipsum id reiciendis harum rem facilis delectus officia
              aliquam saepe impedit?
            </p>
            <button className="learn"> Learn More</button>
          </div>
          <div className="right-footer">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              doloribus illo iusto repellat ipsam ut amet molestiae. Similique
              ducimus, rerum aut esse iure?
            </p>
            <div className="line"></div>
            <ul>
              <li>
                <img src={img1} alt="img1" />
              </li>
              <li>
                <img src={img2} alt="img2" />
              </li>
            </ul>
            <button className="next">
              <i className="fa fa-angle-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
