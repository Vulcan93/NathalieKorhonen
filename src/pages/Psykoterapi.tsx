import "./Psykoterapi.css";
import { useScrollRefs } from "../components/Layout";
import profilbild from "../../public/profilbild.png";
import bicycle from "../../public/bicycle.jpg";
const Psykoterapi = () => {
  const { psykoterapiRef } = useScrollRefs();
  const { omMigRef } = useScrollRefs();

  return (
    <div>
      <div className="psykoterapi-container">
        <img className="img-psykoterapi" src={bicycle} />
        <div ref={psykoterapiRef} className="psykoterapi-beskrivning">
          <h3>Beskrivning:</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            dolorum, fugiat aliquam officiis natus sapiente eligendi aliquid
            quidem, in similique ex eum sed, nesciunt accusamus? Temporibus
            soluta nisi consequuntur quas. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Facere debitis, officia cumque cum
            explicabo vel esse minima nihil maiores reprehenderit animi eos
            aliquam? Voluptatem, necessitatibus asperiores in accusamus placeat
            similique?
          </p>
        </div>
      </div>
      <div className="text-container">
        <div ref={omMigRef} className="om-mig-beskrivning">
          <h4>Om mig:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            adipisci provident voluptate, ad tenetur illo? Dignissimos
            recusandae hic sequi, minima omnis, eveniet iure, ipsa rem
            reprehenderit nostrum quia odio fugit!
          </p>
        </div>
        <img className="img-profilbild" src={profilbild} alt="profilbild" />
      </div>
    </div>
  );
};

export default Psykoterapi;
