import "./intro.css";
import Typical from "react-typical";

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("resume.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "adityawaskar.pdf";
      alink.click();
    });
  });
};

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Aditya Waskar</h1>
          <h3>
            Freelancer,{" "}
            <Typical
              className="text_animation"
              loop={Infinity}
              wrapper="b"
              steps={[
                "Coder",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
            />
          </h3>
          <div className="buttons">
            <button onClick={onButtonClick}>Download CV</button>
            <button>Let's Talk</button>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="sas " />
        </a>
      </div>
    </div>
  );
};

export default Intro;
