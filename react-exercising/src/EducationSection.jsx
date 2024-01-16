/* eslint-disable react/prop-types */
import { useState } from "react";

import styles from "./EducationSection.module.css";

let nextId = 0;

function EducationalForm({
  degreeLabelFor,
  schoolLabelFor,
  cityLabelFor,
  countryLabelFor,
  startDateLabelFor,
  endDateDateLabelFor,
  degreeLabel,
  schoolLabel,
  cityLabel,
  countryLabel,
  startDateLabel,
  endDateLabel,
  degreeInputName,
  schoolInputName,
  cityInputName,
  countryInputName,
  startDateInputName,
  endDateInputName,
  degreeInputPlaceholder,
  schoolInputPlaceholder,
  cityInputPlaceholder,
  countryLInputPlaceholder,
  startDateInputPlaceholder,
  endDateInputPlaceholder,
}) {
  return (
    <>
      <label htmlFor={degreeLabelFor}>
        {degreeLabel}
        <input
          type="text"
          name={degreeInputName}
          placeholder={degreeInputPlaceholder}
        />
      </label>
      <label htmlFor={schoolLabelFor}>
        {schoolLabel}
        <input
          type="text"
          name={schoolInputName}
          placeholder={schoolInputPlaceholder}
        />
      </label>
      <label htmlFor={cityLabelFor}>
        {cityLabel}
        <input
          type="text"
          name={cityInputName}
          placeholder={cityInputPlaceholder}
        />
      </label>
      <label htmlFor={countryLabelFor}>
        {countryLabel}
        <input
          type="text"
          name={countryInputName}
          placeholder={countryLInputPlaceholder}
        />
      </label>
      <label htmlFor={startDateLabelFor}>
        {startDateLabel}
        <input
          type="text"
          name={startDateInputName}
          placeholder={startDateInputPlaceholder}
        />
      </label>
      <label htmlFor={endDateDateLabelFor}>
        {endDateLabel}
        <input
          type="text"
          name={endDateInputName}
          placeholder={endDateInputPlaceholder}
        />
      </label>
    </>
  );
}

function LivePreview({ degree, school, city, country, startDate, endDate }) {
  return (
    <div>
      <h2>{degree}</h2>
      <div>
        <p>{school}</p>
        <p>{city}</p>
        <p>{country}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
      </div>
    </div>
  );
}

export function EducationSection() {
  const [formData, setFormData] = useState([
    {
      degree: "",
      school: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      id: nextId,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const formDataObject = new FormData(e.target);
    const degreeData = formDataObject.get("degree");
    const schoolData = formDataObject.get("school");
    const cityData = formDataObject.get("city");
    const countryData = formDataObject.get("country");
    const startDateData = formDataObject.get("start-date");
    const endDateData = formDataObject.get("end-date");
    const newObjectSubmittedData = {
      ...formData,
      degree: degreeData,
      school: schoolData,
      city: cityData,
      country: countryData,
      startDate: startDateData,
      endDate: endDateData,
      id: nextId++,
    };

    setFormData([newObjectSubmittedData]);
  }

  return (
    <div className={styles.formContainer}>
      <h2>Education Experience</h2>
      {formData.map((formObj) => (
        <div key={formObj.id}>
          <form onSubmit={handleSubmit}>
            <EducationalForm
              degreeLabelFor="degree"
              degreeLabel="Degree"
              degreeInputName="degree"
              degreeInputPlaceholder="Degree"
              schoolLabelFor="school"
              schoolLabel="School"
              schoolInputName="school"
              schoolInputPlaceholder="School"
              cityLabelFor="city"
              cityLabel="City"
              cityInputName="city"
              cityInputPlaceholder="City"
              countryLabelFor="country"
              countryLabel="Country"
              countryInputName="country"
              countryLInputPlaceholder="Country"
              startDateLabelFor="start-date"
              startDateLabel="Start Date"
              startDateInputName="start-date"
              startDateInputPlaceholder="Start Date"
              endDateDateLabelFor="end-date"
              endDateLabel="End Date"
              endDateInputName="end-date"
              endDateInputPlaceholder="End Date"
            ></EducationalForm>
            <button type="submit">Send</button>
          </form>
        </div>
      ))}
      <div>
        <LivePreview
          degree={formData[0].degree}
          school={formData[0].school}
          city={formData[0].city}
          country={formData[0].country}
          startDate={formData[0].startDate}
          endDate={formData[0].endDate}
        ></LivePreview>
      </div>
    </div>
  );
}
