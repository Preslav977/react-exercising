/* eslint-disable react/jsx-key */
import { useState } from "react";

let nextId = 0;

function Input({ labelFor, label, name, placeholder }) {
  return (
    <label htmlFor={labelFor}>
      {label}
      <span>
        <input type="text" name={name} placeholder={placeholder} />
      </span>
    </label>
  );
}

function LivePreview({ fullName, email, phoneNumber, cityAndProvince }) {
  return (
    <>
      <h2>{fullName}</h2>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{cityAndProvince}</p>
    </>
  );
}

export function GeneralSection() {
  const [formDataGeneralObject, setFormDataGeneralObject] = useState([
    {
      fullName: "",
      email: "",
      phoneNumber: "",
      cityAndProvince: "",
      id: nextId,
    },
  ]);

  const [generalObjects, setGeneralObjets] = useState([formDataGeneralObject]);

  function handleSubmit(e) {
    e.preventDefault();
    const FormDataObject = new FormData(e.target);
    const fullNameData = FormDataObject.get("name");
    const emailData = FormDataObject.get("email");
    const phoneNumberData = FormDataObject.get("phone-number");
    const cityAndProvinceData = FormDataObject.get("city-and-province");
    const newFormDataGeneralObject = {
      ...formDataGeneralObject,
      fullName: fullNameData,
      email: emailData,
      phoneNumber: phoneNumberData,
      cityAndProvince: cityAndProvinceData,
      id: nextId++,
    };
    setFormDataGeneralObject([newFormDataGeneralObject]);
  }

  const saveFormDataObjValues = () => {
    setGeneralObjets([...generalObjects]);
  };

  return (
    <>
      <h2>General Information</h2>
      {generalObjects.map((generalSectionObj) => (
        <div key={generalSectionObj.id}>
          <form action="#" onSubmit={handleSubmit}>
            <Input
              labelFor="name"
              label="Name"
              name="name"
              placeholder="Name"
            />
            <Input
              labelFor="email"
              label="Email"
              name="email"
              placeholder="Email"
            />
            <Input
              labelFor="phone-number"
              label="Phone Number"
              name="phone-number"
              placeholder="Phone Humber"
            />
            <Input
              labelFor="city-and-province"
              label="City and Province"
              name="city-and-province"
              placeholder="City, Province"
            />
            <button type="submit" onClick={saveFormDataObjValues}>
              Send
            </button>
          </form>
        </div>
      ))}
      {formDataGeneralObject.map((formDataObject) => (
        <LivePreview
          fullName={formDataObject.fullName}
          email={formDataObject.email}
          phoneNumber={formDataObject.phoneNumber}
          cityAndProvince={formDataObject.cityAndProvince}
        ></LivePreview>
      ))}
    </>
  );
}
