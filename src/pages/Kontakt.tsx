import "./Kontakt.css";
import { useScrollRefs } from "../components/Layout";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Kontakt = () => {
  const { kontaktRef } = useScrollRefs();
  const [namn, setNamn] = useState("");
  const [efterName, setEfterName] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skicka, setSkicka] = useState("Skicka");
  const [isSkicka, setIsSkicka] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSkicka("Skickar....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_API_KEY);
    formData.append("from_name", "Nathalie Psykolog AB");
    formData.append("subject", "Du har fått ett nytt meddelande!");

    const fetchEmailJSON = async () => {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      setIsSkicka(true);
      toast.success("Meddelandet är skickat!");
      setSkicka("Skickad");
      setNamn("");
      setEfterName("");
      setEmail("");
      setMeddelande("");
    };

    fetchEmailJSON()
      .then(() => {
        setIsSkicka(false), setSkicka(skicka);
      })
      .catch(() => {
        setSkicka("Ej skickad!");
        toast.error("Meddelandet är inte skickat!");
      });
  };

  return (
    <div id="kontaktSectionId" ref={kontaktRef}>
      <div className="kontakt-container">
        <div className="kontakt-info">
          <h4 className="kontakt-h3">Kontakt</h4>
          <p>Vid frågor är du välkommen att maila mig på </p>
          <div className="span-container">
            <span>
              <a href="mailto:kontakt@nathaliekorhonenpsykolog.se">
                kontakt@nathaliekorhonenpsykolog.se
              </a>
            </span>
          </div>
          <p>
            Om du skulle vilja boka ett första samtal vänliga fyll i
            intresseanmälan nedan
          </p>
        </div>
      </div>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="form-label">
          <label />
          Namn:
          <input
            type="text"
            name="namn"
            placeholder="Namn:"
            value={namn}
            onChange={(e) => setNamn(e.target.value)}
            required
          />
        </div>
        <div className="form-email-label">
          <label />
          Efternamn:
          <input
            type="text"
            name="efternamn"
            placeholder="Efternamn:"
            value={efterName}
            onChange={(e) => setEfterName(e.target.value)}
            required
          />
        </div>
        <div className="form-label">
          <label />
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="textarea-container">
          <label>Kort beskrivning om vad ditt ärendet gäller:</label>
          <textarea
            name="message"
            placeholder="Message:"
            value={meddelande}
            onChange={(e) => setMeddelande(e.target.value)}
            required
          />
          <button className="btn-submit" disabled={isSkicka}>
            {skicka}
          </button>
          <ToastContainer autoClose={3000} />
        </div>
      </form>
    </div>
  );
};
export default Kontakt;
