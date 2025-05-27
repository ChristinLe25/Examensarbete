import "./Home.css";
import bakgroundIMG from "../assets/Bakground till sidomeny.png";
import UseresearchIMG from "../assets/Useresearch-Persona.png";
import DesignRamverkIMG from "../assets/UX honeycomb.png";

function Home() {

  return (
    <div>
      <div></div>
      <div className="hero">
        <h1>Hur man gör en bra och tillgänglig sidomeny</h1>
      </div>
      <div className="card">
        <img
          className="img-Siez"
          src={bakgroundIMG}
          alt="bild av hero, om hur vi kom fram till sidomeny"
        />

        <div className="card-text">
          <h2>
            Bakground <br />
            Hur vi kom fram till Sidomenyn?
          </h2>
          <p>
            Sedan starten av projektet Listina innehöll webbplatsen en toppmeny
            (navbar) med de senaste listade fastigheterna från olika webbplatser
            samt vissa filter. Det fanns också en smart chattfunktion högst upp
            på sidan för att ge användaren en överblick över de tillgängliga
            alternativen direkt (med fokus på tillgänglighet). Men i takt med
            att projektet utvecklades och nya funktioner som vinstberäkning,
            elektronisk signering av dokument, virtuella visningar, värdering av
            fastigheter i olika valutor, med mera, lades till. Utifrån vår
            Market research ser vi att det är väldigt vanligt med sidomenyer som
            navigerings alternativ vid ai verktyg – kom vi fram till idén att
            förbättra navigeringen genom att ha kvar toppmenyn på AI verktyg
            sidan samt att lägga till en sidomeny (sidebar) som kan visas och
            döljas vid behov. Vi har även tagit fram möjliga lösningar för
            framtiden, ifall fler funktioner läggs till som kan göra toppmenyn
            överbelastad. Våra två föreslagna lösningar är:
            <p>
              1. För att särskilja olika verktyg och göra det tydligare och
              enklare för användaren, kan vi gruppera liknande verktyg under
              passande rubriker. Det här alternativet är bra för att minska
              antalet klick på sidan.
            </p>
            <p>
              2. Om antalet fastighetsvärderingsverktyg i framtiden ökar
              markant, kan dessa rubriker fungera som dropdown-menyer med
              underliggande verktyg. På så sätt kan användaren klicka på
              rubriken för att visa eller dölja relaterade verktyg. Detta är det
              bästa alternativet för att undvika för mycket scrollande på sidan
              vid många funktioner..
            </p>
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-text">
          <h2>
            Useresearch <br /> Användarinsikter: Fastighetsmäklare i en digital
            tidsålder
          </h2>
          <p>
            Vår research visar ett tydligt behov: fastighetsmäklare, oavsett
            teknisk vana, efterfrågar digitala plattformar som är enkla,
            tidseffektiva och stödjer deras vardag. I ett yrke där relationer
            och snabb service är avgörande – särskilt inom det växande
            lyxsegmentet – krävs lösningar som kombinerar användarvänlighet med
            smart teknologi. Mäklare vill ha verktyg som:
            <p>* Förenklar beslutsfattande och kunddialog</p>
            <p>* Integrerar AI, CRM och datavisualisering</p>
            <p>* Stärker deras roll som rådgivare i en global marknad</p>
            Samtidigt finns en oro bland äldre mäklare att tekniken kan minska
            den personliga kontakten. Här ser vi en möjlighet: att bygga
            digitala lösningar som bevarar yrkets mänskliga värden – genom
            tydlig design, enkel navigering och funktioner som kompletterar
            snarare än ersätter det personliga mötet. Vår slutsats: framtidens
            mäklare behöver både teknisk kraft och mänsklig närvaro – och
            digitala verktyg måste stödja båda.
          </p>
        </div>
        <img className="img-Siez" src={UseresearchIMG} alt="Bild på Persona" />
      </div>
      <div className="card">
        <img
          className="img-Siez"
          src={DesignRamverkIMG}
          alt="Bild på UX honeycomb Ramverk"
        />

        <div className="card-text">
          <h2>
            Design
            <br />
            UX-förbättringar enligt Peter Morville’s UX Honeycomb
          </h2>
          <p>
            För att skapa en mer effektiv och användarvänlig upplevelse i
            Listina har vi utvärderat gränssnittet utifrån sju centrala
            UX-principer:{" "}
            <ul>
              <li>
                Användbarhet: Vi ersatte den traditionella toppmenyn med en
                sidomeny som kan fällas ut – vilket ger bättre överblick och
                mindre kognitiv belastning.
              </li>
              <li>
                Sökbarhet: Funktioner har grupperats logiskt med möjlighet till
                dropdown-menyer, så att användare snabbt hittar rätt verktyg
                utan att behöva scrolla.
              </li>
              <li>
                Användningsbarhet: Varje menyval kopplas till faktiska behov –
                som chatt, e-signering eller vinstberäkning – vilket ger
                verkligt värde i mäklarens vardag.
              </li>
              <li>
                Attraktionskraft: Den nya menyn ger ett modernare, mer flexibelt
              intryck, och möjligheten att dölja innehåll skapar en ren visuell
              upplevelse.
              </li>
              <li>
                Tillgänglighet: Navigeringen är intuitiv även för
                mindre tekniskt vana användare, vilket gör systemet inkluderande
                och lättanvänt.
              </li>
              <li>Trovärdighet: En tydlig och professionellt
              strukturerad meny stärker användarnas förtroende för plattformen.</li>
              <li>Värde: Resultatet är ett gränssnitt som inte bara ser bra ut, utan
              också bidrar till snabbare processer och bättre affärsresultat –
              för både användare och företag.</li>
            </ul>
          </p>
        </div>
      </div>
      <p>litte täxt och sådant</p>
    </div>
  );
}

export default Home;