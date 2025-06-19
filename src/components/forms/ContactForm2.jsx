import { useState } from "react";
import TextareaInput from "./form-components/TextareaInput";
import TextInput from "./form-components/TextInput";
import axios from "axios";
import { BASE_API_URL } from "../../api/axios";

function ContactForm2() {
  const API_URL = BASE_API_URL;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      try {
        const response = await axios.post(
          `${API_URL}/service-contact-forms`,
          formData,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
    }
  };

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    const emailTrimmed = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First Name is required!";
      valid = false;
    }

    if (formData.lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "First Name is required!";
      valid = false;
    }

    if (emailTrimmed && emailRegex.test(emailTrimmed)) {
      errorsCopy.email = "";
    } else if (!emailTrimmed) {
      errorsCopy.email = "Email is required!";
      valid = false;
    } else {
      errorsCopy.email = "Please enter a valid email address.";
      valid = false;
    }

    if (formData.message.trim()) {
      errorsCopy.message = "";
    } else {
      errorsCopy.message = "Comment is required!";
      valid = false;
    }

    setErrors(errorsCopy);

    if (valid) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }

    return valid;
  }

  if (submitted) {
    return (
      <div className="alert alert-success">Thank you for your submission!</div>
    );
  }

  return (
    <div>
      <form className="row g-lg-4 g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <TextInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            error={errors.firstName}
            maxlength={"225"}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <TextInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            error={errors.lastName}
            maxlength={"225"}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-12">
          <TextInput
            label="Email"
            name="email"
            value={formData.email}
            error={errors.email}
            maxlength={"254"}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-12">
          <TextareaInput
            label="Add Comment"
            name="message"
            value={formData.message}
            error={errors.message}
            cols={"40"}
            rows={"7"}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-lg-9 col-12">
              <p className="home-enq-desc">
                By clicking the Submit button near, you agree to receive
                communications via Email/Call/WhatsApp/SMS from Antara about
                this service.
              </p>
            </div>
            <div className="col-lg-3 col-12 text-center">
              <button
                type="submit"
                className="home-enq-submit"
                disabled={disableBtn && loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm2;
