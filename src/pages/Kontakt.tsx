import React from "react";
import "./Kontakt.css";

export default function Kontakt() {
  return (
    <section className="kontakt-container">
      <div className="kontakt-leftside">
        <h3>Kontakt</h3>
        <div className="span-container">
          <span>Nathalie Kornhonen</span>
          <span>
            Telefon:
            <a href="tel:+467XXXXXXXX">+467XXXXXXXX</a>
          </span>
          <span>
            Email:
            <a href="mailto:someone@example.com">someone@example.com</a>
          </span>
          <address>
            <p>Winter wonderland 56B</p> <p>415 98</p> <p> Göteborg</p>
          </address>
        </div>
      </div>
      <div className="kontakt-rightside">
        <form>
          <label>
            Namn:
            <input name="namn" />
          </label>
          <label>
            Email:
            <input name="email" />
          </label>
          <div>
            <label>
              Kort beskrivning om vad ärendet gäller:
              <textarea />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}
