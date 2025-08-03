"use client";

import { FormActionProps, submitForm } from "@/actions/formActions";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ClickedRadio from "@/components/icons/ClickedRadio";
import UnclickedRadio from "@/components/icons/UnclickedRadio";
import TextField from "@/components/TextField";
import { useSignUpStore } from "@/stores/useSignUpStore";
import { manropeFont } from "@/utils/fonts";
import React, { useState } from "react";

const Form = () => {
  const { setStatus } = useSignUpStore();
  const [formData, setFormData] = useState<FormActionProps>({
    name: "",
    mobile: "",
    message: "",
    email: "",
    isSigned: true,
  });

  const handleFormValidation = () => {
    if (
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.message.length === 0 ||
      formData.mobile.length === 0
    )
      return false;

    if (!formData.email.includes("@")) return false;

    if (!Number.isInteger(Number.parseInt(formData.mobile))) return false;

    return true;
  };

  const handleFormSubmission = async () => {
    console.log("in handler");

    const isFormValidated = handleFormValidation();
    if (!isFormValidated) {
      alert("Invalid values submitted in the form!");
      return;
    }
    const responseFromAction = await submitForm(formData);
    console.log(responseFromAction);

    if (responseFromAction) {
      alert("Form submitted successfully!");

      if (localStorage.getItem("download-brochure") === "yes") {
        const link = document.createElement("a");
        link.href = "/assets/certificates/Brochure.pdf";
        link.download = "Brochure.pdf";
        link.click();
      }
      document.getElementById("rare-living")?.scrollIntoView({ behavior: "smooth" })
      setStatus();
      localStorage.setItem("download-brochure", "no");
    }
  };

  return (
    <div className="f-c-col lg:w-[60%] py-[20px] gap-[36px]">
      <div className="flex flex-col lg:grid grid-cols-2 gap-[24px] w-full">
        <TextField
          name="name"
          label="Name"
          placeholder="Enter full name"
          value={formData.name}
          type="text"
          onChanged={(e) => {
            setFormData((prevdata) => {
              const { name, value } = e.target;
              const updatedFormData = {
                ...prevdata,
                [name]: value,
              };
              return updatedFormData;
            });
          }}
          className="col-span-1"
        />
        <TextField
          name="mobile"
          maxLength={10}
          label="Mobile Number"
          placeholder="Enter mobile number"
          value={formData.mobile}
          type="tel"
          onChanged={(e) => {
            setFormData((prevdata) => {
              const { name, value } = e.target;
              const updatedFormData = {
                ...prevdata,
                [name]: value,
              };
              return updatedFormData;
            });
          }}
          className="col-span-1"
        />
        <TextField
          name="message"
          label="Message"
          placeholder="Type your message"
          value={formData.message}
          type="text"
          onChanged={(e) => {
            setFormData((prevdata) => {
              const { name, value } = e.target;
              const updatedFormData = {
                ...prevdata,
                [name]: value,
              };
              return updatedFormData;
            });
          }}
          className="col-span-2"
        />
        <TextField
          name="email"
          label="Email"
          placeholder="Enter email address"
          value={formData.email}
          type="text"
          onChanged={(e) => {
            setFormData((prevdata) => {
              const { name, value } = e.target;
              const updatedFormData = {
                ...prevdata,
                [name]: value,
              };
              return updatedFormData;
            });
          }}
          className="col-span-2"
        />
      </div>

      <div
        className={`flex items-center lg:flex-row lg:justify-center self-start gap-3 text-[20px] text-primary ${manropeFont.className}`}
      >
        <div
          className="cursor-pointer"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              isSigned: !formData.isSigned,
            }))
          }
        >
          {formData.isSigned ? <ClickedRadio /> : <UnclickedRadio />}
        </div>
        <p>Sign up to newsletter for construction updates</p>
      </div>

      <PrimaryButton
        text="Submit Form"
        onTap={handleFormSubmission}
        className={`p-[20px_40px] lg:self-start self-center max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${manropeFont.className} bg-submit text-secondary hover:bg-submit/90
          `}
      />
    </div>
  );
};

export default Form;
