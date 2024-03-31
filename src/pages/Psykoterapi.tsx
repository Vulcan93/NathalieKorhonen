import "./Psykoterapi.css";
import { useScrollRefs } from "../components/Layout";
import blommor from "../../public/blommor.jpg";
import psykologforetagarnaLogo from "../../public/psykologforetagarna.png";
// import { useEffect, useState } from "react";

const Psykoterapi = () => {
  const { psykoterapiRef } = useScrollRefs();
  const { omMigRef } = useScrollRefs();

  return (
    <div>
      <div id="omMigSectionId" ref={omMigRef} className="text-container">
        <div className="om-mig-beskrivning">
          <h2>Om mig</h2>
          <p>
            Jag är legitimerad psykolog med grundläggande psykoterapiutbildning
            i KBT (kognitiv beteendeterapi) och PDT (psykodynamisk terapi). Jag
            är utbildad på Göteborgs Universitet. Mitt sätt att arbeta är
            integrativt vilket betyder att jag försöker anpassa metod efter dina
            behov och förutsättningar. Att arbeta integrativt kan exempelvis
            vara genom att i en psykodynamisk terapi med fokus på exempelvis
            uppväxt och relationer också kombinera med hemuppgifter för att
            öva/utmana dig mellan våra samtal. Jag tror på vikten av en trygg
            relation mellan dig och din psykolog för att skapa bra
            förutsättningar för att våga utforska och prata om känslor som
            väcks.
          </p>
        </div>
        <img
          className="img-psykoterapi-blommor"
          src={blommor}
          alt="blommor2"
          width={255}
          height={400}
        />
      </div>
      <div
        // id="psykoterapiSectionId"
        ref={psykoterapiRef}
        className="psykoterapi-container"
      >
        <div className="psykoterapi-beskrivning">
          <h3>Psykoterapi</h3>
          <div className="priser-container"></div>
          <p className="psykoterapi-content">
            Alla kan ibland vara i behov av att få prata med någon utomstående
            om hur man har det. Tillsammans med någon annan reflektera kring ens
            val och livssituation. Ibland söker man en tydlig förändring, och
            ibland är målet att förstå sig själv bättre. Psykoterapi handlar i
            stort om att utforska det som blir svårt för dig här och nu och
            vilka mönster i ditt liv som kanske behöver förändras. Ett tydligt
            mål inom psykoterapi är att öka din förståelse kring dig själv så
            att du ska kunna ta mer medvetna val som rör ditt liv. I samtalen
            reflekterar vi tillsammans och du får en möjlighet att i din egen
            takt utforska, förstå och förändra. Ibland har vi ett tydligt fokus
            i vår kontakt, ex. en separation, relation, traumatisk händelse osv,
            och ibland är kontakten mer flytande och utforskande.
          </p>
          <p className="psykoterapi-one-liner-content">
            Psykoterapi passar dig som exempelvis önskar hjälp med:
          </p>
          <ul className="psykoterapi-content">
            <li>Relationsproblem.</li>
            <li>Ensamhet och svårigheter att skapa nära relationer.</li>
            <li>
              Stress, oro, ångest, sömnproblem, nedstämdhet och depression.
            </li>
            <li>
              Höga krav på sig själv och problem med hur du ser på dig själv och
              ditt värde.
            </li>
            <li>
              Kris, trauma, sorg och förluster av olika slag, skilsmässa,
              sjukdomar.
            </li>
            <li>
              Livsomställningar: att gå ur gymnasiet, att bli förälder,
              pensionering, arbetslöshet, att byta jobb, att flytta.
            </li>
          </ul>

          <p className="psykoterapi-content">
            Jag tar emot klienter som är över 18 år.
          </p>
          <p className="psykoterapi-content">
            Just nu erbjuder jag endast psykoterapi genom digitala samtal via
            samtalsplattformen Kaddio. Innan vårt samtal loggar du in med
            BankID. Inom en snar framtid kommer jag också kunna erbjuda fysiska
            besök i centrala Göteborg.
          </p>
          <p className="psykoterapi-content">
            Pris: 850 kr (45 minuter samtal)
          </p>
        </div>
      </div>
      <div className="psykologForetagarna-container">
        <div className="psykologForetagarna-content">
          Under vårt första samtal kommer jag att förklara hur vi tillsammans
          kan arbeta och vilka ramar som gäller under vår kontakt. Bra
          information att veta redan nu är:
          <ul>
            <li>Jag arbetar under tystnadsplikt.</li>
            <li>Jag journalför våra samtal.</li>
            <li>
              Jag är enligt lag skyldig att anmäla oro kring ett barn som far
              illa till socialtjänsten.
            </li>
            <li>Jag är medlem i Psykologförbundet och Psykologföretagarna.</li>
            <li>
              Du som patient skyddas därmed av patientförsäkring enligt
              patientsäkerhetslagen 2010:65.
            </li>
            <li>Jag står under tillsyn av Inspektionen för vård och omsorg.</li>
            <li>Jag behandlar dina personuppgifter enligt GDPR.</li>
            <p>
              Som medlem av Sveriges psykologförbund och Psykologföretagarna i
              Sverige arbetar jag enligt förbundets yrkesetiska principer för
              psykologer i Norden och kvalitetssäkrar mitt arbete Verksamheten
              lyder under Hälso- och sjukvårdslagen, sekretesslagen och
              journalföringslagen då behandlingen bedrivs av legitimerad
              personal.
            </p>
          </ul>
        </div>
        <img
          className="img-psykologForetagarna"
          src={psykologforetagarnaLogo}
          width={255}
          height={150}
        />
      </div>
    </div>
  );
};

export default Psykoterapi;
