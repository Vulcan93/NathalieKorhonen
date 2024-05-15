import { useScrollRefs } from "../components/Layout";
import { FormEvent, useState } from "react";
import Modal from "react-modal";

const Kontakt = () => {
  const { kontaktRef } = useScrollRefs();
  const [namn, setNamn] = useState("");
  const [efterName, setEfterName] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skicka, setSkicka] = useState("Skicka");
  const [isSkicka, setIsSkicka] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

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
      setSkicka("Skickad");
      setNamn("");
      setEfterName("");
      setEmail("");
      setMeddelande("");
      setIsOpen(true);
    };

    fetchEmailJSON()
      .then(() => {
        setIsSkicka(false), setSkicka(skicka);
      })
      .catch(() => {
        setSkicka("Ej skickad!");
      });
  };

  return (
    <div id="kontaktSectionId" ref={kontaktRef} className="m-[2rem]">
      <div className="text-left mt-[5rem] mb-[1rem]">
        <h4 className="text-[2rem] leading-[3rem]">Kontakt</h4>
        <p>Vid frågor är du välkommen att maila mig på </p>
        <span className="mt-[1rem] mb-[1rem]">
          <a
            className="text-blue-700 no-underline"
            href="mailto:kontakt@nathaliekorhonenpsykolog.se"
          >
            kontakt@nathaliekorhonenpsykolog.se
          </a>
        </span>
        <p className="mb-[2rem]">
          Om du skulle vilja boka ett första samtal vänliga fyll i
          intresseanmälan nedan
        </p>
      </div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4 ">
          <label className="py-1.5">Namn:</label>
          <input
            className="border-solid border-2 py-1.5 border-[#938484] rounded"
            type="text"
            name="namn"
            placeholder="Namn"
            value={namn}
            onChange={(e) => setNamn(e.target.value)}
            required
          />
          <label className="py-1.5">Efternamn:</label>
          <input
            className="border-solid border-2 py-1.5 border-[#938484] rounded"
            type="text"
            name="efternamn"
            placeholder="Efternamn"
            value={efterName}
            onChange={(e) => setEfterName(e.target.value)}
            required
          />
          <label className="py-1.5">Email:</label>
          <input
            className="border-solid border-2 py-1.5 border-[#938484] rounded"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid">
          <label className="text-center mb-[1rem]">
            Kort beskrivning om vad ditt ärendet gäller:
          </label>
          <textarea
            className="w-4/5 place-self-center min-h-[100px] border-2 border-[#938484] rounded mb-[1rem]"
            name="message"
            placeholder="Message"
            value={meddelande}
            onChange={(e) => setMeddelande(e.target.value)}
            required
          />
          <button
            className="w-2/5 place-self-center bg-[rgb(190,187,181)] rounded p-2 mb-[5rem] hover:bg-sky-400 active:bg-rose-600"
            disabled={isSkicka}
          >
            {skicka}
          </button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
            <p>Tack för ditt meddelande! </p>
            <p>
              Jag kommer att kontakta dig inom några dagar via den mail som du
              angett. Ibland hamnar svar i skräpmail så kolla gärna där också.
            </p>
            <button onClick={() => setIsOpen(false)}>Stäng</button>
          </Modal>
        </div>
      </form>
    </div>
  );
};
export default Kontakt;
