import { useState } from "react";
import SelectInput from "./form-components/SelectInput";
import TextareaInput from "./form-components/TextareaInput";
import TextInput from "./form-components/TextInput";
import axios from "axios";
import { BASE_API_URL } from "../../api/axios";

function ContactForm( { SubmitFunc } ) {

    const API_URL = BASE_API_URL;

    const countries = [
        "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa",
        "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda",
        "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan",
        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
        "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory",
        "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
        "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic",
        "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands",
        "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of The",
        "Cook Islands", "Costa Rica", "Cote D'ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
        "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland",
        "France", "French Guiana", "French Polynesia", "French Southern Territories",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece",
        "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey",
        "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands",
        "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland",
        "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Isle of Man",
        "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait",
        "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho",
        "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Macao", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi",
        "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania",
        "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of",
        "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar",
        "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia",
        "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island",
        "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau",
        "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru",
        "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion",
        "Romania", "Russian Federation", "Rwanda", "Saint Helena", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and The Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "South Georgia and The South Sandwich Islands", "Spain",
        "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden",
        "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of",
        "Thailand", "Timor-leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands",
        "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands, British",
        "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
    ];

    const referralSources = [
        "Advertisements", "News Articles", "Social Media", "Google Search",
        "Friends & Family", "Bloggers", "OTAs", "Other Sources"
    ];

    const [ formData, setFormData ] = useState({
      name: "",
      email: "",
      mobile: "",
      gender: "",
      country: "",
      city: "",
      nationality: "",
      message: "",
      referral: "",
    });

    const [ errors, setErrors ] = useState({
      name: "",
      email: "",
      mobile: "",
      gender: "",
      country: "",
      city: "",
      nationality: "",
      message: "",
      referral: "",
    });

  const [loading, setLoading] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(validateForm()) {
      setLoading(true);

    try {

          const response = await axios.post(`${API_URL}/home-contact-forms`, formData, { headers: { 'Content-Type': 'application/json' } });
          console.log(response.data);

        } catch(error) {

          console.error("Error fetching data:", error);

        }

      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        SubmitFunc(true);
      }, 1500);
    }
  };

  function validateForm() {
        let valid = true;

        const errorsCopy = {...errors};

        const emailTrimmed = formData.email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const mobileTrimmed = formData.mobile.trim();
        const mobilePattern = /^\d{10}$/;

        if(formData.name.trim()){
            errorsCopy.name = "";
        } else {
            errorsCopy.name = "Name is required!";
            valid = false;
        }

        if(emailTrimmed && emailRegex.test(emailTrimmed)){
            errorsCopy.email = "";
        } else if (!emailTrimmed) {
            errorsCopy.email = "Email is required!";
            valid = false;
        } else {
            errorsCopy.email = "Please enter a valid email address.";
            valid = false;
        }

        if(mobilePattern.test(mobileTrimmed)){
            errorsCopy.mobile = "";
        } else {
            errorsCopy.mobile = "Please enter a valid 10-digit mobile number.";
            valid = false;
        }

        if(formData.gender.trim()){
            errorsCopy.gender = "";
        } else {
            errorsCopy.gender = "Gender is required!";
            valid = false;
        }

        if(formData.country.trim()){
            errorsCopy.country = "";
        } else {
            errorsCopy.country = "Country is required!";
            valid = false;
        }

        if(formData.city.trim()){
            errorsCopy.city = "";
        } else {
            errorsCopy.city = "City is required!";
            valid = false;
        }

        if(formData.nationality.trim()){
            errorsCopy.nationality = "";
        } else {
            errorsCopy.nationality = "Nationality is required!";
            valid = false;
        }

        if(formData.message.trim()){
            errorsCopy.message = "";
        } else {
            errorsCopy.message = "Message is required!";
            valid = false;
        }

        if(formData.referral.trim()){
            errorsCopy.referral = "";
        } else {
            errorsCopy.referral = "Referral is required!";
            valid = false;
        }

        setErrors(errorsCopy);

        if(valid) {
          setDisableBtn(true);
        } else {
          setDisableBtn(false);
        }

        return valid;
    }

  if (submitted) {
    return <div className="alert alert-success">Thank you for your submission!</div>;
  }

  return (
    <div>
        <form className="row g-lg-4 g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <div className="row g-4">
                    <TextInput label="Name" name="name" value={formData.name} error={ errors.name } maxlength={ "" } onChange={handleChange} required />
                    <TextInput label="Email" type="email" name="email" value={formData.email} error={ errors.email } maxlength={ "" } onChange={handleChange} />
                    <TextInput label="Mobile No" type="tel" name="mobile" value={formData.mobile} error={ errors.mobile } maxlength={ "" } onChange={handleChange} required />
                    <SelectInput label="Gender" name="gender" value={formData.gender} error={ errors.gender } onChange={handleChange} required options={["Male", "Female", "Others"]} />
                    <SelectInput label="Country" name="country" value={formData.country} error={ errors.country } onChange={handleChange} required options={countries} />
                </div>
            </div>
            <div className="col-md-6">
                <div className="row g-4">
                    <TextInput label="City" name="city" value={formData.city} maxlength={ "" } error={ errors.city } onChange={handleChange} required />
                    <TextInput label="Nationality" name="nationality" value={formData.nationality} error={ errors.nationality } maxlength={ "" } onChange={handleChange} required />
                    <TextareaInput label="Message" name="message" value={formData.message} error={ errors.message } cols={ "" } rows={ "4" } onChange={handleChange} />
                    <SelectInput label="How did you hear about us?" name="referral" value={formData.referral} error={ errors.referral } onChange={handleChange} required options={referralSources} />
                </div>
            </div>
            <div className="col-12 text-center">
                <button type="submit" className="home-enq-submit" disabled={disableBtn && loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    </div>
  );
}

export default ContactForm;
