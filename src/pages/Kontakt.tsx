import "./Kontakt.css";
import { useScrollRefs } from "../components/Layout";
import { FormEvent, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Kontakt = () => {
  const { kontaktRef } = useScrollRefs();
  const [skicka, setSkicka] = useState<string>("Skicka");
  const [isSkicka, setIsSkicka] = useState<boolean>(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSkicka("Skickar....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_API_KEY);
    formData.append("from_name", "Nathalie Psykolog AB");
    formData.append("replyto", "notify@web3forms.com");
    formData.append("subject", "Du har fått ett nytt meddelande!");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSkicka("Skickad");
      toast.success("Meddelandet är skickat!");
      setIsSkicka(true);
      setTimeout(() => {
        setSkicka(skicka);
        setIsSkicka(false);
      }, 3000);
      event.currentTarget?.reset();
    } else {
      console.log("Error", data);
      setSkicka("Ej skickad!");
      toast.error("Meddelandet är inte skickat!");
    }
  };

  // const sendConfirmationEmail = async (email: string) => {
  //   try {
  //     const response = await fetch("YOUR_EMAIL_SERVICE_ENDPOINT", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         to: email,
  //         subject: "Confirmation Email",
  //         text: "Thank you for contacting us!",
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "YOUR_API_KEY", // If required by your email service
  //       },
  //     });

  //     if (response.ok) {
  //       console.log("Confirmation email sent successfully");
  //     } else {
  //       console.error("Failed to send confirmation email");
  //     }
  //   } catch (error) {
  //     console.error("Error sending confirmation email:", error);
  //   }
  // };

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
      <form className="form-container" onSubmit={onSubmit}>
        <div className="form-label">
          <label />
          Namn: <input type="text" name="namn" />
        </div>
        <div className="form-email-label">
          <label />
          Efternamn: <input type="text" name="efternamn" required />
        </div>
        <div className="form-label">
          <label />
          Email: <input type="email" name="email" required />
        </div>
        <div className="textarea-container">
          <label>Kort beskrivning om vad ditt ärendet gäller:</label>
          <textarea name="message" required />
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
