import React ,{useState}from "react";
import  "../FormPage5/formpage5.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";

function Formpage5() {
    const [selected, setSelected] = useState("");
      const[selectedJathakam,setSelectedJathakam]=useState("");
      const btnSelected = (button) => {
        setSelected(button);
        console.log("hhaiii",button)
      };
      const btnSelectedJathakam=(button)=>{
        setSelectedJathakam(button)
      }
  return (
   <div className="main-container5">
         <div className="progressDiv5">
           <div className="progressHeading5">You have completed</div>
           <div className="progressHeading5_1">40%</div>
         </div>
         <div className="container5">
    
   
           {/* Main Content */}
           <div className="contentDiv5">
   
             <div className="imageDisplayDiv5">
               <img
                 src={image} // Replace with actual image URL
                 alt="Couple"
                 className={image}
               />
             </div>
   
             {/* Form Section */}
             <div className="formContainer5">
               <h3 className="formHeading5">
                 Fill up your religious details for Finding Right Match
               </h3>
   
               <form className="form5">
                 {/* <div className={styles.formGroup}>
                   <div className={styles.fieldGroup}>
                     <div className={styles.labelGroup}>
                       <label>Date Of Birth</label>
                     </div>
                     <div className={styles.inputGroup}>
                       <input
                         type="date"
                         className={styles.input}
                         placeholder="DD / MM / YY"
                         style={{ color: "#666" }}
                       />
                     </div>
                     <div className={styles.helperTextDiv}>
                       <p className={styles.helperText}>
                         Your friend's date of birth to find a perfect match
                       </p>
                     </div>
                   </div>
                 </div> */}
   
                 <div className="formGroup5">
                   <div className="fieldGroup5">
                     <div className="labelGroup5">
                       <label>Caste</label>
                       <p className="starHead5">*</p>
                     </div>
                     <div className="inputGroup5">
                       <select className="input5">
                         <option value="Ezhava">Ezhava</option>
                       </select>
                     </div>
                     <div className="helperTextDiv5"></div>
                   </div>
                 </div>
   
                 <div className="formGroup5">
                   <div className="fieldGroup5">
                     <div className="labelGroup5">
                       <label>SubCaste</label>
                       <p className="starHead5">*</p>
                     </div>
                     <div className="inputGroup5">
                       <select className="input5">
                         <option value="Thiyya">Thiyya</option>
                         <option value="Chekavars">Chekavars</option>
                         <option value="Vilaakkithala Nairs">
                           Vilaakkithala Nairs
                         </option>
                         <option value="Velar">Velar</option>
                         <option value="Kalari Panickers">Kalari Panickers</option>
                       </select>
                     </div>
                     <div className="helperTextDiv5"></div>
                   </div>
                 </div>
   
                 <div className="formGroup5">
                   <div className="fieldGroup5">
                     <div className="labelGroup5">
                       <label>Gothram</label>
                       <p className="starHead5">*</p>
                     </div>
                     <div className="inputGroup5">
                       <select className="input5">
                         <option value="Kashyapa">Kashyapa</option>
                         <option value="Vishwamitra">Vishwamitra</option>
                         <option value="Agastya">Agastya</option>
                       </select>
                     </div>
                     <div className="helperTextDiv5">
                       <div className="optionalDiv5">
                         <p className="optionalDivText5">Optional</p>
                       </div>
                     </div>
                   </div>
                 </div>
   
                 <div className="formGroup5">
                   <div className="fieldGroup5">
                     <div className="labelGroup5">
                       <label>Suddha Jathakam</label>
                     </div>
                     <div className="inputGroup5">
                       {/* <input
                         type="email"
                         className={styles.input}
                         placeholder="Enter email"
                       /> */}
                       <div className="optionButtonOuterDiv5">
                       <button
                           className={`${"optionSingleButton5"} ${
                             selectedJathakam === "Yes" ? "selected" : ""
                           }`}
                           onClick={(event)=>{
                               event.preventDefault();
                               btnSelectedJathakam("Yes")}}
                         >
                           Yes
                         </button>
                         <button  className={`${"optionSingleButton5"} ${
                             selectedJathakam === "No" ? "selected" : ""
                           }`}
                           onClick={(event)=>{
                               event.preventDefault();
                               btnSelectedJathakam("No")}}>No</button>
                         <button  className={`${"optionSingleButton5"} ${
                             selectedJathakam === "Don't Know" ? "selected" : ""
                           }`}
                           onClick={(event)=>{
                               event.preventDefault();
                               btnSelectedJathakam("Don't Know")}}>
                           Don't Know
                         </button>
                       </div>
                     </div>
                     <div className="helperTextDiv5">
                       <div className="optionalDiv5">
                         <p className="optionalDivText5">Optional</p>
                       </div>
                     </div>
                   </div>
                 </div>
   
                 <div className="formGroup5">
                   <div className="fieldGroup5">
                     <div className="labelGroup5">
                       <label>Dosham</label>
                     </div>
                     <div className="inputGroup5">
                       <div className="optionButtonOuterDiv5">
                         <button
                           className={`${"optionSingleButton5"} ${
                             selected === "Yes" ? "selected" : ""
                           }`}
                           onClick={(event)=>{
                               event.preventDefault();
                               btnSelected("Yes")}}
                         >
                           Yes
                         </button>
                         <button  className={`${"optionSingleButton5"} ${
                             selected === "No" ? "selected" : ""
                           }`}
                           onClick={(event)=>{
                               event.preventDefault();
                               btnSelected("No")}}>No</button>
                         <button  className={`${"optionSingleButton5"} ${
                             selected === "Don't Know" ? "selected" : ""
                           }`}
                           onClick={(event)=>{
                               event.preventDefault();
                               btnSelected("Don't Know")}}>
                           Don't Know
                         </button>
                       </div>
                     </div>
                     <div className="helperTextDiv5">
                       <div className="optionalDiv5">
                         <p className="optionalDivText5">Optional</p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="btnDiv5">
                   <button type="submit" className="submitButton5">
                     Continue
                   </button>
                 </div>
                 <div className="mandatoryField5">* Mandatory fields</div>
               </form>
             </div>
           </div>
         </div>
   
         {/* Footer */}
         <div className="footer5">
           <p>Copyright © 2025. All rights reserved</p>
         </div>
       </div>
  );
}

export default Formpage5;
