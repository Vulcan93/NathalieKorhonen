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
    <div
      id="kontaktSectionId"
      ref={kontaktRef}
      className="m-[2rem] md:m-[4rem] md:mt-[8rem]
      lg:m-[6rem] lg:mt-[10rem]
      xl:m-[8rem] xl:mt-[12rem]
      xxl:m-[10rem] xxl:mt-[14rem]"
    >
      <div
        className="text-left 
      mt-[5rem] mb-[1rem]"
      >
        <h4 className="leading-[3rem]">Kontakt</h4>
        <p className="md:text-[18px] lg:text-[22px] lg:pt-[0rem] xl:text-[26px] xxl:text-[30px]">
          Vid frågor är du välkommen att maila mig på
        </p>
        <span className="mt-[1rem] mb-[1rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
          <a
            className="text-blue-700 no-underline"
            href="mailto:kontakt@nathaliekorhonenpsykolog.se"
          >
            kontakt@nathaliekorhonenpsykolog.se
          </a>
        </span>
        <p className="mb-[2rem] md:text-[18px] lg:text-[22px] lg:pt-[0rem] xl:text-[26px] xxl:text-[30px]">
          Om du skulle vilja boka ett första samtal vänligen fyll i
          intresseanmälan nedan. För att värna om sekretessen, beskriv ditt
          ärende kortfattat och utelämna personliga detaljer och känslig
          information.
        </p>
      </div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4 ">
          <label className="py-1.5 sm:pl-[12rem] md:text-[18px] xl:pl-[22rem] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
            Namn:
          </label>
          <input
            className="border-solid border-2 py-1.5 border-[#938484] rounded max-w-60"
            type="text"
            name="namn"
            placeholder="Namn"
            value={namn}
            onChange={(e) => setNamn(e.target.value)}
            required
          />
          <label className="py-1.5 sm:pl-[12rem] xl:pl-[22rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
            Efternamn:
          </label>
          <input
            className="border-solid border-2 py-1.5 border-[#938484] rounded max-w-60"
            type="text"
            name="efternamn"
            placeholder="Efternamn"
            value={efterName}
            onChange={(e) => setEfterName(e.target.value)}
            required
          />
          <label className="py-1.5 sm:pl-[12rem] xl:pl-[22rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
            Email:
          </label>
          <input
            className="border-solid border-2 py-1.5 border-[#938484] rounded max-w-60"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid">
          <label className="text-center mb-[1rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
            Kort beskrivning om vad ditt ärendet gäller:
          </label>
          <textarea
            className="w-4/5 place-self-center min-h-[100px] border-2 border-[#938484] rounded mb-[1rem] max-w-4xl"
            name="message"
            placeholder="Message"
            value={meddelande}
            onChange={(e) => setMeddelande(e.target.value)}
            required
          />
          <button
            className="w-2/5 place-self-center bg-green-400 rounded p-2 mb-[5rem] hover:bg-sky-400 active:bg-rose-600 md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]"
            disabled={isSkicka}
          >
            {skicka}
          </button>
          <Modal
            className="bg-sky-200 text-center m-[2rem] sm:m-[4rem]  
            lg:m-[8rem] xl:m-[12rem] xl:m-[16rem]
            md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]"
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
          >
            <p className="text-left mt-[15rem] p-[2rem] font-bold">
              Tack för ditt meddelande!{" "}
            </p>
            <p className="text-left p-[2rem]">
              Jag kommer att kontakta dig inom några dagar via den mail som du
              angett. Ibland hamnar svar i skräpmail så kolla gärna där också.
            </p>
            <button
              className="w-2/5 bg-green-400 rounded p-2 mb-[5rem] hover:bg-sky-400 active:bg-rose-600 md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]"
              onClick={() => setIsOpen(false)}
            >
              Stäng
            </button>
          </Modal>
        </div>
      </form>
    </div>
  );
};
export default Kontakt;
