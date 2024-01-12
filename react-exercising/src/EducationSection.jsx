import { useState } from "react";
// import {v4 as uuid} from 'uuid'

let nextId = 0;

export function EducationSection() {
  const [formDataEducationObject, setFormDataEducationObject] = useState([
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

  const [educationObjects, setEducationObjects] = useState(
    formDataEducationObject,
  );

  function handleSubmit(e) {
    e.preventDefault();
    const formDataObject = new FormData(e.target);
    const degreeData = formDataObject.get("degree");
    const schoolData = formDataObject.get("school");
    const cityData = formDataObject.get("city");
    const countryData = formDataObject.get("country");
    const startDateData = formDataObject.get("start-date");
    const endDateData = formDataObject.get("end-date");
    const newFormDataEducationObject = {
      ...formDataEducationObject,
      degree: degreeData,
      school: schoolData,
      city: cityData,
      country: countryData,
      startDate: startDateData,
      endDateData: endDateData,
      id: nextId++,
    };
    setFormDataEducationObject([newFormDataEducationObject]);
  }

  const addMoreEducation = () => {
    let newEducationObject = {
      degree: "",
      school: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      id: nextId++,
    };
    setEducationObjects([...educationObjects, newEducationObject]);
  };

  return (
    <>
      <h2>Education Experience</h2>
      {educationObjects.map((educationSectionObj) => (
        <div key={educationSectionObj.id}>
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="degree">
              Degree
              <span>
                <input type="text" name="degree" placeholder="Degree" />
              </span>
            </label>
            <label htmlFor="school">
              School
              <span>
                <input type="text" name="school" placeholder="School" />
              </span>
            </label>
            <label htmlFor="city">
              City
              <span>
                <input type="text" name="city" placeholder="City" />
              </span>
            </label>
            Country
            <label htmlFor="country">
              <span>
                <input type="text" name="country" placeholder="Country" />
              </span>
            </label>
            <label htmlFor="start-date">
              Start Date
              <span>
                <input type="text" name="start-date" placeholder="Start Date" />
              </span>
            </label>
            <label htmlFor="end-date">
              End Date
              <span>
                <input type="text" name="end-date" placeholder="End Date" />
              </span>
            </label>
            <button type="submit">Send</button>
            <button
              onClick={() => {
                setEducationObjects(
                  educationObjects.filter(
                    (object) => object.id !== educationSectionObj.id,
                  ),
                );
              }}
            >
              Delete
            </button>
          </form>
        </div>
      ))}
      <div>
        <button onClick={addMoreEducation}>Education +</button>
      </div>
    </>
  );
}
