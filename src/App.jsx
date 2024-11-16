import { useState } from "react";
import Field from "./components/Field";
import Languages from "./components/Languages";
import Translate from "./components/Translate";

export default function App() {
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <Field
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
      <Languages language={language} onLanguageChange={handleLanguageChange} />
      <Translate language={language} text={value} />
    </div>
  );
}
