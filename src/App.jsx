import { useState } from "react";
import "./App.css";

// Components ///
import Form from "./Components/Form";
import StepTwo from "./Components/StepTwo";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Create account</h1>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
