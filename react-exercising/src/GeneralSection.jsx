/* eslint-disable react/jsx-key */
import { useState } from "react";

let nextId = 0;

function GeneralForm({
  fullNameLabelFor,
  emailLabelFor,
  phoneNumberLabelFor,
  cityAndProvinceLabelFor,
  fullNameLabel,
  emailLabel,
  phoneNumberLabel,
  cityAndProvinceLabel,
  fullNameInputName,
  emailInputName,
  phoneNumberInputName,
  cityAndProvinceInputName,
  fullNameInputPlaceholder,
  emailInputPlaceholder,
  phoneNumberInputPlaceholder,
  cityAndProvinceInputPlaceholder,
}) {
  return (
    <div>
      <label htmlFor={fullNameLabelFor}>
        {fullNameLabel}
        <input
          type="text"
          name={fullNameInputName}
          placeholder={fullNameInputPlaceholder}
        />
      </label>
      <label htmlFor={emailLabelFor}>
        {emailLabel}
        <input
          type="text"
          name={emailInputName}
          placeholder={emailInputPlaceholder}
        />
      </label>
      <label htmlFor={phoneNumberLabelFor}>
        {phoneNumberLabel}
        <input
          type="text"
          name={phoneNumberInputName}
          placeholder={phoneNumberInputPlaceholder}
        />
      </label>
      <label htmlFor={cityAndProvinceLabelFor}>
        {cityAndProvinceLabel}
        <input
          type="text"
          name={cityAndProvinceInputName}
          placeholder={cityAndProvinceInputPlaceholder}
        />
      </label>
    </div>
  );
}

// function LivePreview({ fullName, email, phoneNumber, cityAndProvince }) {
//   return (
//     <div className="abc">
//       <h2>{fullName}</h2>
//       <div className="bcd">
//         <p>{email}</p>
//         <p>{phoneNumber}</p>
//         <p>{cityAndProvince}</p>
//       </div>
//     </div>
//   );
// }

export function GeneralSection() {
  const [formData, setFormData] = useState([
    {
      fullName: "",
      email: "",
      phoneNumber: "",
      cityAndProvince: "",
      id: nextId,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const FormDataObject = new FormData(e.target);
    const fullNameData = FormDataObject.get("full-name");
    const emailData = FormDataObject.get("email");
    const phoneNumberData = FormDataObject.get("phone-number");
    const cityAndProvinceData = FormDataObject.get("city-and-province");
    const newObjectSubmittedData = {
      ...formData,
      fullName: fullNameData,
      email: emailData,
      phoneNumber: phoneNumberData,
      cityAndProvince: cityAndProvinceData,
      id: nextId++,
    };
    setFormData([newObjectSubmittedData]);
  }

  return (
    <div className="form-container">
      {formData.map((formObj) => (
        <div className="sub-container" key={formObj.id}>
          <form action="#" onSubmit={handleSubmit}>
            <div className="a">
              <h2>General Information</h2>
              <GeneralForm
                fullNameLabelFor="fullName"
                fullNameLabel="Full Name"
                fullNameInputName="full-name"
                fullNameInputPlaceholder="Full Name"
                emailLabelForLabelFor="email"
                emailLabel="Email"
                emailInputName="email"
                emailInputPlaceholder="Email"
                phoneNumberLabelFor="phone-number"
                phoneNumberLabel="Phone Number"
                phoneNumberInputName="phone-number"
                phoneNumberInputPlaceholder="Phone Number"
                cityAndProvinceLabelFor="city-and-province"
                cityAndProvinceLabel="City and Province"
                cityAndProvinceInputName="city-and-province"
                cityAndProvinceInputPlaceholder="City, Province"
              ></GeneralForm>
              <button className="btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      ))}
      {/* <div className="container">
        <LivePreview
          fullName={formData.fullName}
          email={formData.email}
          phoneNumber={formData.phoneNumber}
          cityAndProvince={formData.cityAndProvince}
        ></LivePreview>
      </div> */}
    </div>
  );
}
