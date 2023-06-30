import Man from "../images/man.jpg"
import "../styles/heroSection.css"


function Hero() {
    return (
      <div className="heroContainer" >
        <div className="textContainer">
            <h1> We are CodeRunner From the USA in thi</h1>
        </div>
        <div className="imgContainer">
            <img  style={{ width: 550, height: 675, marginTop:30 }} src={Man} alt="Man" />
        </div>
         
    
      </div>
    );
  }
  
  export default Hero;