import "./Hem.css";
import profilbild from "../../public/profilbild.png";
import blommor2 from "../../public/blommor2.jpg";
import Col from "react-bootstrap/Col";

const Hem = () => {
  return (
    <div>
      <div className="hero">
        <p>Välkommen till min sida!</p>
      </div>
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
        <img className="hem-blommor" src={blommor2} alt="blommor2" />

        {/* <ScrollRestoration /> */}
      </section>
      <div className="hem-profil">
        <div className="text-container">
          <h4>Om mig:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            adipisci provident voluptate, ad tenetur illo? Dignissimos
            recusandae hic sequi, minima omnis, eveniet iure, ipsa rem
            reprehenderit nostrum quia odio fugit!
          </p>
          <img className="img-profilbild" src={profilbild} alt="profilbild" />
        </div>
      </div>
    </div>
  );
};

export default Hem;
