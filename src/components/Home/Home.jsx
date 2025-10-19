// import image

import HomeImage from "../../image/original-051635e627bd249a516e576c7e11a954.webp";

import AllLoader from "../../loader.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home">
          <div className="home-content">
            
            <div className="hero">
              <div className="left-content">
                <button>Hello Boss</button>
                <h2>
                  Use The Best CSS Animation and Loader Of Defferent Type Desing{" "}
                </h2>
                <p>
                  We Provide the Best Quality CSS Animaton Loader And Other
                  Products Fully Free{" "}
                </p>
                <div className="button">
                  <button>Ai products</button>
                  <button>icons</button>
                </div>
              </div>
              <div className="right-content">
                <img src={HomeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <AllLoader/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
