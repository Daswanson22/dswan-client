import React, { useState } from 'react';

function Contact() {
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // State to handle success animation

  const send = async (e) => {
    e.preventDefault();
    console.log('Sending email');

    const formData = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error sending email');
      }

      setIsSuccess(true); // Trigger success animation
      setTimeout(() => setIsSuccess(false), 3000); // Reset success animation after 3 seconds
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setError('');
    } catch (error) {
      console.log(error.message);
      setError('Internal Server Error - Please try again later');
    }
  };

  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <h2 className="text-4xl text-center bg-light-black w-full py-2 font-medium text-light-blue border-solid border-x-8 border-light-blue">
        Contact
      </h2>
      <form
        className="bg-light-black w-full space-y-4 p-2 text-xl rounded-lg border-solid border text-light-blue font-semibold"
        onSubmit={send}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <section className="flex flex-col w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              maxLength={20}
              className="bg-light-black text-white font-medium bg-opacity-80 border-solid border-b px-2"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </section>
          <section className="flex flex-col w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              maxLength={20}
              className="bg-light-black text-white font-medium bg-opacity-80 border-solid border-b px-2"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </section>
        </div>
        <section className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            maxLength={40}
            className="bg-light-black text-white font-medium bg-opacity-80 border-solid border-b px-2"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </section>
        <section className="flex flex-col">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            maxLength={40}
            className="bg-light-black text-white font-medium bg-opacity-80 border-solid border-b px-2"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </section>
        <section className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            maxLength={250}
            rows={10}
            className="bg-light-black text-white font-medium bg-opacity-80 border-solid border-b px-2"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </section>
        {error && <p className="bg-red-500 text-white p-4">{error}</p>}
        {isSuccess && <p className="bg-green-500 text-white p-4 animate-bounce">Message Sent Successfully!</p>}
        <section>
          <button
            type="submit"
            className="bg-light-blue p-4 text-white border-solid border border-light-blue rounded-md hover:bg-transparent duration-200 ease-in-out"
          >
            Send Message
          </button>
        </section>
      </form>
    </div>
  );
}

export default Contact;