import { Header } from "./components/Header";
import { CustomForm } from "./components/Form";
import "./index.css";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        <div className="pattern1 absolute inset-0" />
        <div className="pattern2 absolute top-10 right-0" />
        <div className="pattern3 absolute bottom-0 left-0" />
      </div>
      <div className="container py-12 pb-18  px-3 m-auto">
         <Header showTitle={submitted} />
         <CustomForm onSubmitSuccess={() => setSubmitted(true)}  />
      </div>
    </div>
  );
}

export default App;
