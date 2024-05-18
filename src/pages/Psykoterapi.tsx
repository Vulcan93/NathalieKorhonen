import { useScrollRefs } from "../components/Layout";
import blommor from "../../public/blommor.jpg";
import psykologforetagarnaLogo from "../../public/psykologforetagarna.png";
// import { useEffect, useState } from "react";

const Psykoterapi = () => {
  const { psykoterapiRef } = useScrollRefs();
  const { omMigRef } = useScrollRefs();

  return (
    <div>
      <div
        id="omMigSectionId"
        ref={omMigRef}
        // className="grid auto-rows-auto min-[560px]:grid-cols-2 gap-8 xs:grid-cols-1 m-[2rem] mt-[5rem]"
        className="grid place-items-center 
        sm:gap-8 sm:grid-cols-2 
        m-[2rem] mt-[5rem] 
        md:m-[4rem] md:mt-[8rem] 
        lg:m-[6rem] lg:mt-[10rem] lg:gap-20
        xl:m-[8rem] xl:mt-[12rem] xl:gap-32
        xxl:m-[10rem] xxl:mt-[14rem] xxl:gap-36"
      >
        <div>
          <h2>Om mig</h2>
          <p className="md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px] lg:pt-[0rem]">
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
          className="w-[20rem] lg:w-[20rem] xl:w-[24rem] xl:w-[30rem] mt-[2rem]"
          src={blommor}
          alt="blommor"
        />
      </div>
      <div
        // id="psykoterapiSectionId"
        ref={psykoterapiRef}
        className="m-[2rem] mt-[5rem] 
        md:m-[4rem] md:mt-[8rem] 
        lg:m-[6rem] lg:mt-[10rem]
        xl:m-[8rem] xl:mt-[12rem]
        xxl:m-[10rem] xxl:mt-[14rem]"
      >
        <div>
          <h3>Psykoterapi</h3>
          <p className="mt-[1rem] md:text-[18px] lg:text-[22px] lg:pt-[0rem] xl:text-[26px] xxl:text-[30px]">
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
          <p className="py-[1rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
            Psykoterapi passar dig som exempelvis önskar hjälp med:
          </p>
          <ul className="pt-[1rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
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

          <p className="pt-[1rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
            Jag tar emot klienter som är över 18 år.
          </p>
          <p className="pt-[1rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
            Just nu erbjuder jag endast psykoterapi genom digitala samtal via
            samtalsplattformen Kaddio. Innan vårt samtal loggar du in med
            BankID. Inom en snar framtid kommer jag också kunna erbjuda fysiska
            besök i centrala Göteborg.
          </p>
          <p className="pt-[1rem] md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[30px]">
            Pris: 850 kr (45 minuter samtal)
          </p>
        </div>
      </div>
      <div
        className="grid place-items-center 
      gap-8 m-[2rem] mt-[5rem] text-[12px] 
      md:place-items-stretch md:grid-cols-2 
      md:m-[4rem] md:mt-[8rem] 
      lg:m-[6rem] lg:mt-[10rem] lg:gap-20
      xl:m-[8rem] xl:mt-[12rem] xl:gap-32
      xxl:m-[10rem] xxl:mt-[14rem] xxl:gap-36"
      >
        <div className="md:text-[14px] lg:text-[18px] xl:text-[20px] xxl:text-[24px]">
          Under vårt första samtal kommer jag att förklara hur vi tillsammans
          kan arbeta och vilka ramar som gäller under vår kontakt. Bra
          information att veta redan nu är:
          <ul>
            <li className="ml-[1rem]">Jag arbetar under tystnadsplikt.</li>
            <li className="ml-[1rem]">Jag journalför våra samtal.</li>
            <li className="ml-[1rem]">
              Jag är enligt lag skyldig att anmäla oro kring ett barn som far
              illa till socialtjänsten.
            </li>
            <li className="ml-[1rem]">
              Jag är medlem i Psykologförbundet och Psykologföretagarna.
            </li>
            <li className="ml-[1rem]">
              Du som patient skyddas därmed av patientförsäkring enligt
              patientsäkerhetslagen 2010:65.
            </li>
            <li className="ml-[1rem]">
              Jag står under tillsyn av Inspektionen för vård och omsorg.
            </li>
            <li className="ml-[1rem]">
              Jag behandlar dina personuppgifter enligt GDPR.
            </li>
            <p className="lg:pt-[0rem]">
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
          className="w-[18rem] 
          sm:w-[24rem] 
          md:w-[20rem] md:h-[12rem] 
          lg:w-[24rem] lg:h-[14rem]
          xl:w-[30rem] xl:h-[18rem]
          xxl:w-[36rem] xxl:h-[20rem]
          mt-[2rem] "
          src={psykologforetagarnaLogo}
        />
      </div>
    </div>
  );
};

export default Psykoterapi;
