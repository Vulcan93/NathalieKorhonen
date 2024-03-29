import "./Kontakt.css";
import { useScrollRefs } from "../components/Layout";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

const Kontakt = () => {
  const { kontaktRef } = useScrollRefs();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert("Your message has been sent!");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div id="kontaktSectionId" ref={kontaktRef}>
      <div className="kontakt-container">
        <div className="kontakt-info">
          <h4 className="kontakt-h3">Kontakt</h4>
          <p>Vid frågor är du välkommen att maila mig på </p>
          <div className="span-container">
            <span>
              <a href="mailto:nathaliekorhonen.psykolog@gmail.com">
                nathaliekorhonen.psykolog@gmail.com
              </a>
            </span>
          </div>
          <p>
            Om du skulle vilja boka ett första samtal vänliga fyll i
            intresseanmälan nedan
          </p>
        </div>
      </div>
      <div>
        <form ref={form} className="form-container" onSubmit={sendEmail}>
          <div className="namn-label">
            <label>
              Namn: <input type="text" name="user_firstName" />
            </label>
          </div>
          <div className="efternamn-label">
            <label>
              Efternamn: <input type="text" name="user_lastName" required />
            </label>
          </div>
          <label className="email-label">
            Email: <input type="email" name="user_email" required />
          </label>
          <div className="textarea-label">
            <label>
              Kort beskrivning om vad ditt ärendet gäller:
              <textarea name="message" required />
            </label>
            <button>Skicka</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Kontakt;
