import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <p className="text-center">About Us</p>
      <div className="flex justify-between">
        <span>Our Vision</span>
        <span>Our Mission</span>
        <div className="flex justify-between">
          <img src="./" alt="gambar orang" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, error
            veniam eius nam ipsam corrupti laboriosam nobis eaque aliquam neque
            autem commodi minus consequuntur architecto. Nemo in laborum
            veritatis unde?
          </p>
        </div>
    
        <div>
          <p>Why choose us</p>
          <p>Friendly Tour Guide</p>
          <p>World Wide</p>
          <p>Fast Respon</p>
          

        </div>
      </div>

      <Footer />
    </>
  );
}
