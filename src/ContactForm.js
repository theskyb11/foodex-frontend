import React, { useState, useEffect } from 'react';
import './contact.css';
import Footer from './footer';
import Navbar from './navbar';

function ContactForm() {
  const defaultDropdownValue = 'Difficulty in ordering online';
  const defaultName = '';
  const defaultEmail = '';
  const defaultDescription = '';

  const [dropdownValue, setDropdownValue] = useState(defaultDropdownValue);
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [description, setDescription] = useState(defaultDescription);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setDropdownValue(defaultDropdownValue);
      setName(defaultName);
      setEmail(defaultEmail);
      setDescription(defaultDescription);
    }, 3500);
  };

  useEffect(() => {
    return () => {
      setIsSubmitted(false);
    };
  }, []);

  return (
    <div align="center">
      <Navbar />
     
      <form className="contact-form" action="https://getform.io/f/1de4d37f-ed41-4e14-b129-2fc61c5360cd" method="post">   
           <h3>Your problems are our problems, please tell us what bothers you!!</h3>
        <select name="dropdown" value={dropdownValue} onChange={handleDropdownChange}>
          <option value="Difficulty in ordering online">Difficulty in ordering online</option>
          <option value="Want to give suggestions/feedback">Want to give suggestions/feedback</option>
          <option value="Problems faced while running the app/website">
            Problems faced while running the app/website
          </option>
          <option value="Information incorrect/outdated">Information incorrect/outdated</option>
        </select>
        <br />
        <br />
        Enter Your Full Name
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        <br />
        <br />
        Enter Your Email
        <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} />
        <br />
        <br />
        <textarea
          rows="5"
          cols="60"
          placeholder="Enter your problem"
          name="description"
          id="text"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
       
     
        {isSubmitted ? (
          <div>
            <img src={'https://media.giphy.com/media/ampHpuzoo6IeQvFqFi/giphy.gif'} alt="Submit Button" />
            <br />
            <br />
            <span>Thank you for your submission!</span>
          </div>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
      <Footer />
    </div>
  );
}

export default ContactForm;
