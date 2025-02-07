import React, {  useState } from "react";
import styles from "../FormPage1/formpage1.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormPage4() {
  const [form, setForm] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/user/edit/${id}`,
        form
      );
      if (response.status === 200) {
        navigate(`/formpage5`);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressDiv}>
        <div className={styles.progressHeading}>You have completed</div>
        <div className={styles.progressHeading2}>90%</div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentDiv}>
          <div className={styles.imageDisplayDiv}>
            <img src={image} alt="Couple" className={styles.image} />
          </div>

          <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>About your Friend's life</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              
              {/* Image Upload Section */}
              <div className={styles.imageUploadDiv}>
                <label className={styles.imageUploadLabel}>
                  <span className="material-icons">Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.imageUploadInput}
                    onChange={handleImageChange}
                  />
                </label>
                {selectedImage && (
                  <div className={styles.imagePreviewDiv}>
                    <img src={selectedImage} alt="Uploaded" className={styles.imagePreview} />
                  </div>
                )}
              </div>

              {/* Age Input Section */}
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Age</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      className={styles.input}
                      placeholder=""
                      value={form.age || ""}
                      onChange={handleChange}
                      name="age"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Hobbies</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder=""
                      value={form.hobbies || ""}
                      onChange={handleChange}
                      name="hobbies"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.btnDiv}>
                <button type="submit" className={styles.submitButton}>
                  Complete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Copyright © 2025. All rights reserved</p>
      </div>
      <link
       rel="stylesheet"
       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
     />
    </div>
  );
}
export default FormPage4;
