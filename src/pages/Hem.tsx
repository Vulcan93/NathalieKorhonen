import "./Hem.css";

import blommor2 from "../../public/blommor2.jpg";
import Col from "react-bootstrap/Col";

//Todo: reda ut alt biten

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
            <p>
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
        <img
          className="img-hem"
          src={blommor2}
          alt="blommor2"
          width={400}
          height={900}
        />
        {/* <ScrollRestoration /> */}
      </section>
    </div>
  );
};

export default Hem;
