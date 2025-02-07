import React, { useState } from "react";
import styles from "../FormPage3/formpage3.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/slice";

function FormPage5() {
  const { id } = useSelector((state) => state.user);
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [residentStatus, setResidentStatus] = useState("");
  const [form, setForm] = useState({});
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
    const formData = {
      ...form,
      employmentStatus,
      residentStatus,
    };
    try {
      console.log(id);
      console.log(employmentStatus);

      const response = await axios.patch(
        `http://localhost:8000/api/v1/user/edit/${id}`,
        formData
      );
      if (response.status === 200) {
        dispatch(setUser({ id: id }));
        navigate(`/dashboard/${id}`);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
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

  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressDiv}>
        <div className={styles.progressHeading}>You have completed</div>
        <div className={styles.progressHeading2}>80%</div>
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
                      value={form.value}
                      onChange={handleChange}
                      name="education"
                    >
                      <option value="">Select Your Highest Education</option>
                      <option value="below_10">Below 10th</option>
                      <option value="10th">10th (SSLC/Matriculation)</option>
                      <option value="12th_science">12th - Science</option>
                      <option value="12th_humanities">12th - Humanities</option>
                      <option value="12th_commerce">12th - Commerce</option>
                      <option value="diploma">Diploma</option>
                      <option value="bsc">BSc (Bachelor of Science)</option>
                      <option value="ba">BA (Bachelor of Arts)</option>
                      <option value="bcom">BCom (Bachelor of Commerce)</option>
                      <option value="btech">
                        BTech (Bachelor of Technology)
                      </option>
                      <option value="be">BE (Bachelor of Engineering)</option>
                      <option value="bba">
                        BBA (Bachelor of Business Administration)
                      </option>
                      <option value="bca">
                        BCA (Bachelor of Computer Applications)
                      </option>
                      <option value="llb">LLB (Bachelor of Law)</option>
                      <option value="mbbs">
                        MBBS (Bachelor of Medicine & Surgery)
                      </option>
                      <option value="bpharm">
                        BPharm (Bachelor of Pharmacy)
                      </option>
                      <option value="bds">
                        BDS (Bachelor of Dental Surgery)
                      </option>
                      <option value="msc">MSc (Master of Science)</option>
                      <option value="ma">MA (Master of Arts)</option>
                      <option value="mcom">MCom (Master of Commerce)</option>
                      <option value="mtech">
                        MTech (Master of Technology)
                      </option>
                      <option value="me">ME (Master of Engineering)</option>
                      <option value="mba">
                        MBA (Master of Business Administration)
                      </option>
                      <option value="mca">
                        MCA (Master of Computer Applications)
                      </option>
                      <option value="llm">LLM (Master of Law)</option>
                      <option value="md">MD (Doctor of Medicine)</option>
                      <option value="ms">MS (Master of Surgery)</option>
                      <option value="mphil">
                        MPhil (Master of Philosophy)
                      </option>
                      <option value="phd">PhD (Doctorate)</option>
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
                      value={form.value}
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
                      value={form.value}
                      onChange={handleChange}
                      name="annual_income"
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
                      value={form.value}
                      onChange={handleChange}
                      name="occupation"
                    >
                      <option value="">Select Your Occupation</option>

                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="dentist">Dentist</option>
                      <option value="paramedic">Paramedic</option>
                      <option value="physiotherapist">Physiotherapist</option>
                      <option value="care_worker">Care Worker</option>

                      <option value="software_engineer">
                        Software Engineer
                      </option>
                      <option value="civil_engineer">Civil Engineer</option>
                      <option value="mechanical_engineer">
                        Mechanical Engineer
                      </option>
                      <option value="electrical_engineer">
                        Electrical Engineer
                      </option>
                      <option value="data_scientist">Data Scientist</option>
                      <option value="it_consultant">IT Consultant</option>

                      <option value="teacher">Teacher</option>
                      <option value="lecturer">University Lecturer</option>
                      <option value="teaching_assistant">
                        Teaching Assistant
                      </option>

                      <option value="accountant">Accountant</option>
                      <option value="banker">Banker</option>
                      <option value="financial_analyst">
                        Financial Analyst
                      </option>
                      <option value="solicitor">Solicitor</option>
                      <option value="barrister">Barrister</option>

                      <option value="electrician">Electrician</option>
                      <option value="plumber">Plumber</option>
                      <option value="carpenter">Carpenter</option>
                      <option value="mechanic">Mechanic</option>

                      <option value="police_officer">Police Officer</option>
                      <option value="firefighter">Firefighter</option>
                      <option value="armed_forces">Armed Forces</option>
                      <option value="social_worker">Social Worker</option>

                      <option value="chef">Chef</option>
                      <option value="hotel_manager">Hotel Manager</option>
                      <option value="retail_manager">Retail Manager</option>
                      <option value="customer_service">
                        Customer Service Representative
                      </option>

                      <option value="journalist">Journalist</option>
                      <option value="graphic_designer">Graphic Designer</option>
                      <option value="actor">Actor</option>
                      <option value="musician">Musician</option>

                      <option value="truck_driver">Truck Driver</option>
                      <option value="delivery_driver">Delivery Driver</option>
                      <option value="airline_pilot">Airline Pilot</option>

                      <option value="self_employed">Self-Employed</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="student">Student</option>
                      <option value="retired">Retired</option>
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
                      value={form.value}
                      onChange={handleChange}
                      name="state"
                    >
                      <option value="">Select Your State</option>
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
                      value={form.value}
                      name="city"
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
                    <input
                      type="text"
                      className={styles.input}
                      placeholder=""
                      name="citizenship"
                      value={form.value}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
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
                <button type="submit" className={styles.submitButton}>
                  Continue
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
