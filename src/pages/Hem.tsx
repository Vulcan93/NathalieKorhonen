import "./Hem.css";
import profilbild from "../../public/profilbild.jpg";

const Hem = () => {
  return (
    <div>
      <div className="hero">
        <p>Psykologmottagning Nathalie Korhonen</p>
      </div>
      <section className="grid auto-rows-auto min-[560px]:grid-cols-2 gap-8 xs:grid-cols-1 m-[2rem] mt-[5rem]">
        <img className="" src={profilbild} alt="bild" />
        <div>
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
      </section>
    </div>
  );
};

export default Hem;
