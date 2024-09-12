import orange_cat from "../assets/orange_cat.jpg";
import cat_pic from "../assets/cat_face.png";
import begal from "../assets/begal.png";
import doctor from "../assets/doctor.png";



const About = () => {
    return (
        <div className="about">
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={cat_pic} className="imgabout" alt="young brown tabby cat"/>
      <div className="carousel-caption d-md-block">
        < div className="slide">
        <h5 className="about">About</h5>
        <p>Pet Chart is an app to store your pets medical information to make vet trips less of a headache. </p></div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={begal} className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <div className="slide">
        <h5 className="about">Create Profiles</h5>
        <p>Create pet profiles for each of your pets to store their unique history.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={doctor}className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
      <div className="slide">
        <h5 className="about">Medical Information</h5>
        <p>Learn about certain medical information on the info page</p>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
    }

    export default About;