import "./Hem.css";
import profilbild from "../../public/profilbild.jpg";
import Col from "react-bootstrap/Col";

//Todo: reda ut alt biten
// Todo: hidden virtual grejs

const Hem = () => {
  return (
    <div>
      <div className="hero">
        <p>Psykologmottagning Nathalie Korhonen</p>
      </div>
      <section className="hem-container">
        <img className="img-profilbild" src={profilbild} alt="profilbild" />
        <div className="hem-beskrivning">
          <article>
            <h1 className="visuallyhidden"></h1>
            <p>
              Mitt namn är Nathalie Korhonen och jag arbetar som legitimerad
              psykolog. Jag erbjuder psykoterapi för dig som kanske fastnat i
              nedstämdhet, oro, ångest, stress eller är i kris och behöver hjälp
              att ta dig vidare. Jag erbjuder både kortare och längre terapier,
              med ett integrativt arbetssätt för att anpassa metod efter dina
              behov och förutsättningar.
            </p>
          </article>
        </div>

        {/* <ScrollRestoration /> */}
      </section>
    </div>
  );
};

export default Hem;
