import React from "react";
import ReactDOM from "react-dom/client";
import { GeneralSection } from "./GeneralSection";
import { EducationSection } from "./EducationSection";
import { ProfessionalSection } from "./ProfessionalSection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralSection />
    <EducationSection />
    <ProfessionalSection />
  </React.StrictMode>,
);
