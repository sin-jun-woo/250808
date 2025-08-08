import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";

console.log("AlexaImage", AlexaImage);
console.log("SiriImage", SiriImage);

function App() {
  return (
    <div>
      <p>hello image</p>
      <img src={AlexaImage} alt="alexa" width={500} height={500} />
      <img src={SiriImage} alt="siri" style={{ width: 500, height: 500 }} />
    </div>
  );
}

export default App;
