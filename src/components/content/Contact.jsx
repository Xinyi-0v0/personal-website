import React, { useState } from 'react';
import './Contact.css'

function Contact({ modalRef, isLight }) {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: "",
            occupation: "",
            otherOccupation:""

        }
    )

    const [isNameValid, setIsNameValid] = useState(true);
    const [emailError, setIsEmailError] = useState("");
    const [isSend, setIsSent] = useState(false);
    const [isOtherShown, setIsOtherShown] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "name") {
            setIsNameValid(isFilled(value));
        }
        if (name === "email") {
            checkEmail(formData.email);
        }
        if (name === "occupation"){
            if(value === "other"){
                setIsOtherShown(true);
            } else {
                setIsOtherShown(false); 
            }
        }
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function checkInput(event) {
        event.preventDefault();
        //check the value
        if (formData.name && formData.email && isValidEmail(formData.email)) {
            setIsSent(true);
        }
        setIsNameValid(isFilled(formData.name));
        checkEmail(formData.email);
    }

    function checkEmail(email) {
        if (!isFilled(email)) {
            setIsEmailError("This field is required.");
        } else if (!isValidEmail(email)) {
            setIsEmailError("Email is not valid.");
        } else {
            setIsEmailError("");
        }
    }


    function isFilled(string) {
        return string.trim() !== "";
    }

    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }


    function closeModal() {
        modalRef.current.close();
        setIsNameValid(true);
        setIsEmailError("");
        setIsOtherShown(false);
        if(!isSend){
            setFormData(
                {
                    name: "",
                    email: "",
                    message: "",
                    occupation: "",
                    otherOccupation:""
        
                }
            );
        }
    }

    return (
        <dialog className={`contact-modal ${isLight ? "modal-light" : "modal-dark"}`} ref={modalRef}>
            <div className="container">
                <h2 className="page-title">Let's get in touch!</h2>
                {!isSend && <small className='form-label'>* Indicates a required field</small>}
                {!isSend && <form className="meassage">
                    <div className='message-name'>
                        <label htmlFor="name"><small>*</small> Name</label>
                        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} />
                        {!isNameValid && <small>This field is required.</small>}
                    </div>
                    <div className='message-email'>
                        <label htmlFor="email"><small>*</small> Email</label>
                        <input type="text" id="email" name="email" onChange={handleChange} value={formData.email} />
                        {emailError && <small>{emailError}</small>}
                    </div>
                    <div className="occupation">
                        <label htmlFor="select">Occupation</label>
                        <select id="select"
                            value={formData.occupation}
                            onChange={handleChange}
                            name="occupation">
                            <option value="">----choose----</option>
                            <option value="softwa-engineer">Softwa Engineer</option>
                            <option value="product-manager">Product Manager</option>
                            <option value="student">Student</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    {isOtherShown && <div className='occupation-detail'>
                        <label htmlFor="occupation">Please specify </label>
                        <input type="text" id="occupation" name="otherOccupation" onChange={handleChange} value={formData.otherOccupation} />
                    </div>}
                    <div className='message-content'>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" id="message" name="message" onChange={handleChange} value={formData.message} />
                    </div>
                    <button className="modal-submit" type="submit" onClick={checkInput}>Send Message</button>
                    <button className="modal-cancel" type="reset" onClick={closeModal}>Cancel</button>
                </form>}
                {isSend && <div className="reply">
                    <p className='reply-name'>Hi, {formData.name} ! </p>
                    <p className='reply-content'>Thank you for messaging me! I'll reply you as soon as possible!</p>
                    <button className="modal-cancel" onClick={closeModal}>Cancel</button>
                </div>}
            </div>
        </dialog>
    );
}

export default Contact;