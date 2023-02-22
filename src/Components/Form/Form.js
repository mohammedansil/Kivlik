import React from 'react'
import style from './Form.module.css'
import {FiUpload} from 'react-icons/fi'
const Form = () => {
  return (
    <div className={style.FormContainer}>
        <div className={style.Career}>
            {/* <div className={style.Head}>
                <h1 className={style.Title}>Submit Your Resume</h1>
                <p className={style.Description}>Become discoverable for all our roles</p>
            </div> */}
            <form className={style.Form}>
                <h1 className={style.FormTitle}>Personal Details</h1>
                <p className={style.FormDescription}>Please complete the below form and attach a cv</p>
                <div className={style.Email}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="" id="email" />
                </div>
                <div className={style.BasicInfo}>
                    <div className={style.FirstName}>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="" id="fname" />
                    </div>
                    <div className={style.LastName}>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="" id="lname" />
                    </div>  
                    <div className={style.Telephone}>
                        <label htmlFor="telephone">Telephone</label>
                        <input type="number" name="" id="telephone" />
                        <p>Please include your country and area code</p>
                    </div>
                </div>
                <div className={style.Upload}>
                <label htmlFor="resume">Upload CV</label>
                <div className={style.FileWrapper}>
                    <p>Upload CV</p>
                    <input type="file" />
                    <FiUpload/>
                   
                </div>
                    <p>Select resume file (TXT, PDF or Word DOC)</p>
                </div>
                <div className={style.ButtonDiv}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default Form