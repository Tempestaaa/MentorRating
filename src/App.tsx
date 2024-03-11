import { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [selected, setSelected] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);

  return (
    <div className="min-h-svh grid place-items-center bg-VeryDarkBlue">
      <Rating
        selected={selected}
        setSelected={setSelected}
        isSubmitted={isSubmitted}
        setisSubmitted={setisSubmitted}
      />
      <ThankYou selected={selected} isSubmitted={isSubmitted} />
    </div>
  );
}

export default App;
