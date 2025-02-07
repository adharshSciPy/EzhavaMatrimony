import React, { useState,useEffect } from "react";
import styles from "./formpage3.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormPage3() {
  const { id } = useSelector((state) => state.user);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [familyValues, setFamilyValues] = useState("");
  const [physicallyChallenged, setPhysicallyChallenged] = useState("");
  const [form, setForm] = useState({});
    const [userProfie, setUserProfile] = useState([]);
  
  const navigate = useNavigate();
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
      maritalStatus,
      familyStatus,
      familyType,
      familyValues,
      physicallyChallenged,
    };
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/user/edit/${id}`,
        formData
      );
      if (response.status === 200) {
        navigate(`/formpage4`);
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

    const dataBinding = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/user/usercarddetails/${id}`
        );
        console.log("he hee heee", response.data.data);
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
          
          height: userProfie.height || "",
        }));
        setMaritalStatus(userProfie.maritalStatus || ""); 
        setFamilyStatus(userProfie.familyStatus||"");
        setFamilyType(userProfie.familyType||"");
        setFamilyValues(userProfie.familyValues||"");
        setPhysicallyChallenged(userProfie.physicallyChallenged||"")
        // setSelectedJathakam(userProfie.dosham || "");
      }
    }, [userProfie]);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressDiv}>
        <div className={styles.progressHeading}>You have completed</div>
        <div className={styles.progressHeading2}>60%</div>
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
                    <label>Maritial Status</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroupButtons}>
                    <div className={styles.optionButtonOuterDiv}>
                      {renderOptionButtons(
                        [
                          "Never Married",
                          "Widowed",
                          "Divorced",
                          "Awaiting Divorce",
                        ],
                        maritalStatus,
                        setMaritalStatus
                      )}
                    </div>
                  </div>
                  {/* <div className={styles.helperTextDiv}></div> */}
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Height</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      className={styles.input}
                      placeholder=""
                      value={form.height || ""}
                      onChange={handleChange}
                      name="height"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Family Status</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroupButtons}>
                    <div className={styles.optionButtonOuterDiv}>
                      {renderOptionButtons(
                        [
                          "Middle Class",
                          "Upper Middle Class",
                          "High Class",
                          "Rich/Affluent",
                        ],
                        familyStatus,
                        setFamilyStatus
                      )}
                    </div>
                  </div>
                  {/* <div className={styles.helperTextDiv}></div> */}
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Family NetWorth</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select
                      className={styles.input}
                      name="familyIncome"
                      value={form.value}
                      onChange={handleChange}
                    >
                      <option value="less_than_1M">Less than $1M</option>
                      <option value="1M_to_5M">$1M to $5M</option>
                      <option value="5M_to_10M">$5M to $10M</option>
                      <option value="10M_to_50M">$10M to $50M</option>
                      <option value="above_50M">Above $50M</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Family Type</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.optionButtonOuterDiv}>
                      {renderOptionButtons(
                        ["Joint", "Nuclear"],
                        familyType,
                        setFamilyType
                      )}
                    </div>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Family Values</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroupButtons}>
                    <div className={styles.optionButtonOuterDiv}>
                      {renderOptionButtons(
                        ["Orthodox", "Traditional", "Moderate", "Liberal"],
                        familyValues,
                        setFamilyValues
                      )}
                    </div>
                  </div>
                  {/* <div className={styles.helperTextDiv}></div> */}
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Disabled</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.optionButtonOuterDiv}>
                      {renderOptionButtons(
                        ["Nope", "Physically Challenged"],
                        physicallyChallenged,
                        setPhysicallyChallenged
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

export default FormPage3;
