import { FC, forwardRef } from "react";
import "./Psykoterapi.css";
import { ScrollRefProps } from "../interfaces/Interface";

const Psykoterapi: FC<ScrollRefProps> = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="psykoterapi-container">
      <h3>Beskrivning:</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
        dolorum, fugiat aliquam officiis natus sapiente eligendi aliquid quidem,
        in similique ex eum sed, nesciunt accusamus? Temporibus soluta nisi
        consequuntur quas. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Facere debitis, officia cumque cum explicabo vel esse minima nihil
        maiores reprehenderit animi eos aliquam? Voluptatem, necessitatibus
        asperiores in accusamus placeat similique?
      </p>
    </div>
  );
};

export default Psykoterapi;
