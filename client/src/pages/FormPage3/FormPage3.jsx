import React, { useState } from "react";
import styles from "./formpage3.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";

function FormPage3() {
  const [selected, setSelected] = useState("");
  const [martial, setMarital] = useState("");
  const [family, setFamily] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [familyValues, setFamilyValues] = useState("");
  const [physicallyChallenged, setPhysicallyChallenged] = useState("");


  const btnSelected = (button) => {
    setSelected(button);
    console.log("hhaiii", button);
  };
  //   const btnSelectedJathakam = (button) => {
  //     setSelectedJathakam(button);
  //   };
  const martialStatus = (button) => {
    setMarital(button);
    console.log("hai", button);
  };
  const familyStatus = (button) => {
    setFamily(button);
  };
  const familyTypeSelected = (button) => {
    setFamilyType(button);
  };
  const familyValuesSelected = (button) => {
    setFamilyValues(button);
  };
  const physicallyChallengedSelected=(button)=>{
    setPhysicallyChallenged(button)
  }

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

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Maritial Status</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroupButtons}>
                    <div className={styles.optionButtonOuterDiv}>
                      <button
                        className={`${styles.optionSingleButton} ${
                          martial === "Married" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Married");
                        }}
                      >
                        Married
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          martial === "Widowed" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Widowed");
                        }}
                      >
                        Widowed
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          martial === "Divorced" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Divorced");
                        }}
                      >
                        Divorced
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          martial === "Awaiting Divorce" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          martialStatus("Awaiting Divorce");
                        }}
                      >
                        Awaiting Divorce
                      </button>
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
                      type="text"
                      className={styles.input}
                      placeholder="Height In Centimeters"
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
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
                      <button
                        className={`${styles.optionSingleButton} ${
                          family === "Middle Class" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyStatus("Middle Class");
                        }}
                      >
                        Middle Class
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          family === "Upper Middle Class" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyStatus("Upper Middle Class");
                        }}
                      >
                        Upper Middle Class
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          family === "High Class" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyStatus("High Class");
                        }}
                      >
                        High Class
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          family === "Rich" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyStatus("Rich");
                        }}
                      >
                        Rich/Affluent
                      </button>
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
                    <select className={styles.input}>
                      <option value="less_than_1M">Less than $1M</option>
                      <option value="1M_to_5M">$1M to $5M</option>
                      <option value="5M_to_10M">$5M to $10M</option>
                      <option value="10M_to_50M">$10M to $50M</option>
                      <option value="above_50M">Above $50M</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}>
                  
                  </div>
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
                      <button
                        className={`${styles.optionSingleButton} ${
                          familyType === "Joint" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyTypeSelected("Joint");
                        }}
                      >
                        Joint
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          familyType === "Nuclear" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyTypeSelected("Nuclear");
                        }}
                      >
                        Nuclear
                      </button>
                    </div>
                  </div>
                  <div className={styles.helperTextDiv}>

                  </div>
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
                      <button
                        className={`${styles.optionSingleButton} ${
                          familyValues === "Orthodox" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyValuesSelected("Orthodox");
                        }}
                      >
                        Orthodox
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          familyValues === "Traditional" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyValuesSelected("Traditional");
                        }}
                      >
                        Traditional
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          familyValues === "Moderate" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyValuesSelected("Moderate");
                        }}
                      >
                        Moderate
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          familyValues === "Liberal" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          familyValuesSelected("Liberal");
                        }}
                      >
                        Liberal
                      </button>
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
                      <button
                        className={`${styles.optionSingleButton} ${
                          physicallyChallenged === "Nope" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          physicallyChallengedSelected("Nope");
                        }}
                      >
                        Nope
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          physicallyChallenged === "Physically Challenged" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          physicallyChallengedSelected("Physically Challenged");
                        }}
                      >
                        Physically Challenged
                      </button>
                    </div>
                  </div>
                  <div className={styles.helperTextDiv}>
                    
                  </div>
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
