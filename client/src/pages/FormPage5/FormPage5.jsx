import React, { useState, useEffect } from "react";
import styles from "../FormPage3/formpage3.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/slice";
import Loader from "../../component/Loader/Loadertext.jsx";
import baseUrl from "../../baseUrl.js";

function FormPage5() {
  const { id ,token,role} = useSelector((state) => state.user);
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [residentStatus, setResidentStatus] = useState("");
  const [form, setForm] = useState({});
  const [userProfie, setUserProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      ...form,
      employmentStatus,
      residentStatus,
    };
    try {
      

      const response = await axios.patch(
        `${baseUrl}:8000/api/v1/user/edit/${id}`,
        formData
      );
      if (response.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
          dispatch(setUser({ id: id ,token:token,role:role}));
          navigate(`/dashboard/${id}`);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
      setIsLoading(false);
    }
  };

  const renderOptionButtons = (options, selectedOption, setSelectedOption) =>
    options.map((option) => (
      <button
        key={option}
        type="button"
        className={`${styles.optionSingleButton} ${
          selectedOption === option ? styles.selected : ""
        }`}
        onClick={() => setSelectedOption(option)}
      >
        {option}
      </button>
    ));
  const dataBinding = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}:8000/api/v1/user/usercarddetails/${id}`
      );
      setUserProfile(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    dataBinding();
  }, [id]);
  useEffect(() => {
    if (userProfie) {
      setForm((prevForm) => ({
        ...prevForm,

        education: userProfie.education || "",
        educationDetails: userProfie.educationDetails || "",
        annualIncome: userProfie.annualIncome || "",
        occupation: userProfie.occupation || "",
        state: userProfie.state || "",
        location: userProfie.location || "",
        citizenship: userProfie.citizenship || "",
      }));
      setEmploymentStatus(userProfie.employmentStatus || "");
      setResidentStatus(userProfie.residentStatus || "");
    }
  }, [userProfie]);

  const citizenships = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Other",
  ];
  return (
    <div className={styles.mainContainer}>
      {isLoading && <Loader />}
      <div className={styles.progressDiv}>
        <div className={styles.progressHeading}>You have completed</div>
        <div className={styles.progressHeading2}>90%</div>
      </div>
      <div className={styles.container}>
        {/* Progress Bar */}

        {/* Main Content */}
        <div className={styles.contentDiv}>
          {/* Image Section */}

          <div className={styles.imageDisplayDiv}>
            <img
              src={image} // Replace with actual image URL
              alt="Couple"
              className={styles.image}
            />
          </div>

          {/* Form Section */}

          <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>
              Tell us about your friends personal details
            </h3>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Highest Education</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select
                      className={styles.input}
                      required
                      value={form.education || ""}
                      onChange={handleChange}
                      name="education"
                    >
                      <option>Select Your Highest Education</option>
                      <option value="Below 10">Below 10th</option>
                      <option value="10th">10th (SSLC/Matriculation)</option>
                      <option value="12th Science">12th - Science</option>
                      <option value="12th Humanities">12th - Humanities</option>
                      <option value="12th Commerce">12th - Commerce</option>
                      <option value="Diploma">Diploma</option>
                      <option value="BSc">BSc (Bachelor of Science)</option>
                      <option value="BA">BA (Bachelor of Arts)</option>
                      <option value="BCom">BCom (Bachelor of Commerce)</option>
                      <option value="BTech">
                        BTech (Bachelor of Technology)
                      </option>
                      <option value="BE">BE (Bachelor of Engineering)</option>
                      <option value="BBA">
                        BBA (Bachelor of Business Administration)
                      </option>
                      <option value="BCA">
                        BCA (Bachelor of Computer Applications)
                      </option>
                      <option value="LLB">LLB (Bachelor of Law)</option>
                      <option value="MBBS">
                        MBBS (Bachelor of Medicine & Surgery)
                      </option>
                      <option value="BPharm">
                        BPharm (Bachelor of Pharmacy)
                      </option>
                      <option value="BDS">
                        BDS (Bachelor of Dental Surgery)
                      </option>
                      <option value="MSC">MSc (Master of Science)</option>
                      <option value="MA">MA (Master of Arts)</option>
                      <option value="MCom">MCom (Master of Commerce)</option>
                      <option value="MTech">
                        MTech (Master of Technology)
                      </option>
                      <option value="ME">ME (Master of Engineering)</option>
                      <option value="MBA">
                        MBA (Master of Business Administration)
                      </option>
                      <option value="MCA">
                        MCA (Master of Computer Applications)
                      </option>
                      <option value="LLM">LLM (Master of Law)</option>
                      <option value="MD">MD (Doctor of Medicine)</option>
                      <option value="MS">MS (Master of Surgery)</option>
                      <option value="MPhil">
                        MPhil (Master of Philosophy)
                      </option>
                      <option value="PhD">PhD (Doctorate)</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Education in Detail</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Education in Details"
                      name="educationDetails"
                      onChange={handleChange}
                      value={form.educationDetails || ""}
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Employed in</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroupButtons}>
                    <div className={styles.optionButtonOuterDiv}>
                      {renderOptionButtons(
                        [
                          "Government",
                          "Private",
                          "Business",
                          "Defence",
                          "SelfEmployed",
                          "NotWorking",
                        ],
                        employmentStatus,
                        setEmploymentStatus
                      )}
                    </div>
                  </div>
                  {/* <div className={styles.helperTextDiv}></div> */}
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Annual Income</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select
                      className={styles.input}
                      required
                      value={form.annualIncome || ""}
                      onChange={handleChange}
                      name="annualIncome"
                    >
                      <option value="">Select Your Annual Income</option>
                      <option value="under_15000">Under £15,000</option>
                      <option value="15000_25000">£15,000 - £25,000</option>
                      <option value="25000_35000">£25,000 - £35,000</option>
                      <option value="35000_50000">£35,000 - £50,000</option>
                      <option value="50000_75000">£50,000 - £75,000</option>
                      <option value="75000_100000">£75,000 - £100,000</option>
                      <option value="100000_150000">£100,000 - £150,000</option>
                      <option value="150000_250000">£150,000 - £250,000</option>
                      <option value="over_250000">Over £250,000</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Occupation</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select
                      className={styles.input}
                      required
                      value={form.occupation || ""}
                      onChange={handleChange}
                      name="occupation"
                    >
                      <option>Select Your Occupation</option>

                      <option value="Doctor">Doctor</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Pharmacist">Pharmacist</option>
                      <option value="Dentist">Dentist</option>
                      <option value="Paramedic">Paramedic</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Care Worker">Care Worker</option>

                      <option value="Software Engineer">
                        Software Engineer
                      </option>
                      <option value="Civil Engineer">Civil Engineer</option>
                      <option value="Mechanical Engineer">
                        Mechanical Engineer
                      </option>
                      <option value="Electrical Engineer">
                        Electrical Engineer
                      </option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="It Consultant">IT Consultant</option>

                      <option value="Teacher">Teacher</option>
                      <option value="Lecturer">University Lecturer</option>
                      <option value="Teaching Assistant">
                        Teaching Assistant
                      </option>

                      <option value="Accountant">Accountant</option>
                      <option value="Banker">Banker</option>
                      <option value="Financial Analyst">
                        Financial Analyst
                      </option>
                      <option value="Solicitor">Solicitor</option>
                      <option value="Barrister">Barrister</option>

                      <option value="Electrician">Electrician</option>
                      <option value="Plumber">Plumber</option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Mechanic">Mechanic</option>

                      <option value="Police Officer">Police Officer</option>
                      <option value="Firefighter">Firefighter</option>
                      <option value="Armed Forces">Armed Forces</option>
                      <option value="Social Worker">Social Worker</option>

                      <option value="Chef">Chef</option>
                      <option value="Hotel Manager">Hotel Manager</option>
                      <option value="Retail Manager">Retail Manager</option>
                      <option value="Customer Service">
                        Customer Service Representative
                      </option>

                      <option value="Journalist">Journalist</option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Actor">Actor</option>
                      <option value="Musician">Musician</option>

                      <option value="Truck Driver">Truck Driver</option>
                      <option value="Delivery Driver">Delivery Driver</option>
                      <option value="Airline Pilot">Airline Pilot</option>

                      <option value="Self Employed">Self-Employed</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Student">Student</option>
                      <option value="Retired">Retired</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>State</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select
                      className={styles.input}
                      required
                      value={form.state || ""}
                      onChange={handleChange}
                      name="state"
                    >
                      <option>Select Your State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="Delhi">Delhi</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>City</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="city"
                      value={form.location || ""}
                      name="location"
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Citizenship</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select
                      className={styles.input}
                      name="citizenship"
                      value={form.citizenship || ""}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Citizenship
                      </option>
                      {citizenships.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              ;
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Resident Status</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.optionButtonOuterDiv}>
                      {renderOptionButtons(
                        [
                          "Permanent Resident",
                          "Work Permit",
                          "Temporary Visa",
                          "Student Visa",
                        ],
                        residentStatus,
                        setResidentStatus
                      )}
                    </div>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.btnDiv}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading}
                >
                  Complete
                </button>
              </div>
              <div className={styles.mandatoryField}>* Mandatory fields</div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>Copyright © 2025. All rights reserved</p>
      </div>
    </div>
  );
}

export default FormPage5;
