import "./Hem.css";
import profilbild from "../../public/profilbild.jpg";

const Hem = () => {
  return (
    <div>
      <div className="hero py-500px">
        <p className="text-[36px] md:text-[40px] lg:text-[50px] xl:text-[60px] xxl:text-[80px]">
          Psykologmottagning Nathalie Korhonen
        </p>
      </div>
      <section
        className="grid place-items-center 
      grid-cols-1 
      sm:place-items-stretch sm:grid-cols-2 m-[2rem] 
      mt-[5rem] 
      md:m-[4rem] md:mt-[8rem] 
      lg:m-[6rem] lg:mt-[10rem]
      xl:m-[8rem] xl:mt-[12rem]
      xxl:m-[10rem] xxl:mt-[14rem]"
      >
        <img
          className="w-[16rem] lg:w-[20rem] xl:w-[24rem] xl:h-[24rem] mb-[2rem]"
          src={profilbild}
          alt="bild"
        />
        <div>
          <article>
            <h1 className="visuallyhidden"></h1>
            <p className="md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
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
