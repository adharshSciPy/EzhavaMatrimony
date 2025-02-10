import React, { useState } from "react";
import styles from "../FormPage1/formpage1.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormPage4() {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const { id } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (imageFile) {
      formData.append("image", imageFile);
    }
    formData.append("about", form.about || "");
    formData.append("age", form.age || "");
    formData.append("hobbies", form.hobbies || "");

    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/user/uploads/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
        {/* Main Content */}
        <div className={styles.contentDiv}>
          {/* Image Section */}
          <div className={styles.imageDisplayDiv}>
            <img src={image} alt="Couple" className={styles.image} />
          </div>

          <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>About your Friend's life</h3>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.textAreaDiv}>
                <label className={styles.leftLabel}>About your friend</label>
                <textarea
                  className={styles.textArea}
                  placeholder="Type here..."
                  value={form.about || ""}
                  onChange={handleChange}
                  name="about"
                ></textarea>
              </div>

              <div className={styles.imageUploadDiv}>
                <label className={styles.imageUploadLabel}>
                  <span className="material-icons">Upload Your Profile Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.imageUploadInput}
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Age</label>
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

      {/* Footer */}
      <div className={styles.footer}>
        <p>Copyright © 2025. All rights reserved</p>
      </div>
    </div>
  );
}

export default FormPage4;
