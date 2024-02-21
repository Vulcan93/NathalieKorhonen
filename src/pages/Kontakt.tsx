import "./Kontakt.css";
import blommor1 from "../../public/blommor1.jpg";
import { useScrollRefs } from "../components/Layout";

const Kontakt = () => {
  const { kontaktRef } = useScrollRefs();

  return (
    <div ref={kontaktRef}>
      <div className="kontakt-container">
        {/* <div className="kontakt-img-container"> */}
        <img
          className="img-kontakt"
          src={blommor1}
          alt="todopicture/100px250"
          width={240}
          height={400}
          loading="lazy"
        />
        {/* </div> */}
        <div className="kontakt-info">
          <h4 className="kontakt-h3">Kontakt</h4>
          <p>Om du vill komma i kontakt med mig och har frågor</p>
          <div className="span-container">
            <span>
              Email:
              <br />
              <a href="mailto:nathaliekorhonen.psykolog@gmail.com">
                nathaliekorhonen.psykolog@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div>
        <form className="form-container">
          <div className="namn-label">
            <label>
              Namn: <input type="text" />
            </label>
          </div>
          <label className="email-label">
            Email: <input type="email" />
          </label>
          <div className="textarea-label">
            <label>
              Kort beskrivning om vad ärendet gäller: <textarea />
            </label>
            <button>Skicka</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Kontakt;
