import "./Hem.css";
import profilbild from "../../public/profilbild.png";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import fish from "../../public/fish.jpg";

const Hem = () => {
  return (
    <div>
      <img className="hero-img" src={fish} />
      <section className="hem-container">
        <div className="hem-beskrivning">
          {/* <h1></h1> */}
          <article>
            <h3>Sidans beskrivning:</h3>
            <p className="p-Content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              ad suscipit totam. In eligendi dolorum magni modi laborum quia
              nesciunt atque at nemo optio numquam quas, iure nihil delectus
              quos? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ducimus ad suscipit totam. In eligendi dolorum magni modi laborum
              quia nesciunt atque at nemo optio numquam quas, iure nihil
              delectus quos? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ducimus ad suscipit totam. In eligendi dolorum magni modi
              laborum quia nesciunt atque at nemo optio numquam quas, iure nihil
              delectus quos? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ducimus ad suscipit totam. In eligendi dolorum magni modi
              laborum quia nesciunt atque at nemo optio numquam quas, iure nihil
              delectus quos?
            </p>
          </article>
        </div>
        <div className="hem-profil">
          <Col>
            <Image
              className="img-profilbild"
              src={profilbild}
              alt="profilbild"
            />
          </Col>
          <div className="text-container">
            <h4>Om mig:</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              adipisci provident voluptate, ad tenetur illo? Dignissimos
              recusandae hic sequi, minima omnis, eveniet iure, ipsa rem
              reprehenderit nostrum quia odio fugit!
            </p>
          </div>
        </div>
        {/* <ScrollRestoration /> */}
      </section>
    </div>
  );
};

export default Hem;
