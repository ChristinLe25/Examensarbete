import "./Home.css";
import ListinaImg from "../assets/logga-listina.png";

function Home() {

  return (
    <div>
      <div>
      </div>
      <div className="hero">
        <h1>Hur man gör en bra och tillgänglig sidomeny</h1>
      </div>
      <div className="card">
        <img className="img-Siez" src={ListinaImg} alt="bild på loggan" />

        <div className="card-text">
          <h2>Struktur – Vad ska finnas i en bra sidomeny?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            autem temporibus animi maxime nihil pariatur, blanditiis inventore
            odio vero cum cumque voluptas sit voluptates debitis consequuntur
            assumenda tenetur nulla facilis.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-text">
          <h2>Design – Hur gör man den snygg och användbar?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            autem temporibus animi maxime nihil pariatur, blanditiis inventore
            odio vero cum cumque voluptas sit voluptates debitis consequuntur
            assumenda tenetur nulla facilis.
          </p>
        </div>
        <img className="img-Siez" src="" alt="" />
      </div>
      <div className="card">
        <img className="img-Siez" src="" alt="" />

        <div className="card-text">
          <h2>Interaktivitet – Hur det fungerar tekniskt</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            autem temporibus animi maxime nihil pariatur, blanditiis inventore
            odio vero cum cumque voluptas sit voluptates debitis consequuntur
            assumenda tenetur nulla facilis.
          </p>
        </div>
      </div>
      <p>litte täxt och sådant</p>
    </div>
  );
}

export default Home;