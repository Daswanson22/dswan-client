import React, { useState } from 'react';
import Loading from './Loading';

const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : 'http://localhost:3001';

function Contact() {
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // State to handle success animation
  const [loading, setLoading] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Sending email');

    const formData = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch(`${url}/api/send-email`, {
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
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setError('Internal Server Error - Please try again later');
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-4xl text-start w-full border-b pb-2">CONTACT</h2>
      <form
        className="bg-gray-800 bg-opacity-50 w-full space-y-4 p-2 rounded-lg text-light-blue font-light"
        onSubmit={send}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <section className="flex flex-col w-full">
            <label htmlFor="firstName" className='text-md'>First Name</label>
            <input
              type="text"
              maxLength={20}
              className="bg-transparent text-white text-xl bg-light-gray border-solid border-b p-2 focus:outline-none"
              id="firstName"
              name="firstName"
              placeholder='John'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </section>
          <section className="flex flex-col w-full">
            <label htmlFor="lastName" className='text-md'>Last Name</label>
            <input
              type="text"
              maxLength={20}
              className="bg-transparent text-white text-xl bg-light-gray border-solid border-b p-2 focus:outline-none"
              id="lastName"
              name="lastName"
              placeholder='Smith'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </section>
        </div>
        <section className="flex flex-col">
          <label htmlFor="email" className='text-md'>Email Address</label>
          <input
            type="email"
            maxLength={40}
            className="bg-transparent text-white text-xl bg-light-gray border-solid border-b p-2 focus:outline-none"
            id="email"
            name="email"
            placeholder='example@domain.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </section>
        <section className="flex flex-col">
          <label htmlFor="subject" className='text-md'>Subject</label>
          <input
            type="text"
            maxLength={40}
            className="bg-transparent text-white text-xl bg-light-gray border-solid border-b p-2 focus:outline-none"
            id="subject"
            name="subject"
            placeholder="Your subject here"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </section>
        <section className="flex flex-col">
          <label htmlFor="message" className='text-md'>Message</label>
          <textarea
            type="text"
            maxLength={250}
            rows={10}
            className=" text-white text-xl bg-black bg-opacity-50 p-2 focus:outline-none"
            id="message"
            name="message"
            placeholder='Write me a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </section>
        {error && <p className="bg-red-500 text-white p-4">{error}</p>}
        {loading ? (
          <Loading />
        ) : (
          <section className='flex gap-8'>
            <button
              type="submit"
              className="bg-transparent p-4 text-white border-solid border border-light-blue rounded-md hover:bg-light-blue duration-200 ease-in-out"
            >
              Send Message
            </button>
            {isSuccess && <p className="text-green-400 p-4">Message Sent Successfully!</p>}

          </section>
        )}
        
      </form>
    </div>
  );
}

export default Contact;