import React, { useState } from 'react';
import resumeData from '../me/resume-data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faCircleCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : 'http://localhost:3001';

const INPUT_CLASS =
  'w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-fun-teal transition-colors duration-200 text-sm';

const LABEL_CLASS = 'block text-gray-400 text-sm font-medium mb-1.5';

const contactLinks = [
  {
    icon: faEnvelope,
    label: 'Email',
    value: resumeData.contact.email,
    href: `mailto:${resumeData.contact.email}`,
    color: 'text-fun-teal',
    bg: 'bg-fun-teal/10',
  },
  {
    icon: faLinkedin,
    label: 'LinkedIn',
    value: 'dylan-swanson-018223211',
    href: resumeData.contact.linkedin,
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
  },
  {
    icon: faGithub,
    label: 'GitHub',
    value: 'Daswanson22',
    href: resumeData.contact.github,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
];

function Contact() {
  const [firstName, setFirstName]   = useState('');
  const [lastName, setLastName]     = useState('');
  const [email, setEmail]           = useState('');
  const [subject, setSubject]       = useState('');
  const [message, setMessage]       = useState('');
  const [loading, setLoading]       = useState(false);
  const [isSuccess, setIsSuccess]   = useState(false);
  const [error, setError]           = useState('');

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${url}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, subject, message }),
      });

      if (!response.ok) throw new Error('Error sending email');

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
      setFirstName(''); setLastName(''); setEmail(''); setSubject(''); setMessage('');
    } catch (err) {
      setError('Something went wrong — please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Contact</h2>
        <p className="text-gray-400 mt-3 text-lg">Have a project in mind? Let's talk.</p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Left — contact info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Get in touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you're looking to build something new, need a consultant, or just want to connect — my inbox is always open.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {contactLinks.map(({ icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-fun-teal/40 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                  <FontAwesomeIcon icon={icon} className={`${color} text-lg`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs">{label}</span>
                  <span className="text-gray-200 text-sm group-hover:text-fun-teal transition-colors duration-200 truncate">
                    {value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={send}
            className="flex flex-col gap-5 p-6 rounded-xl bg-gray-900 border border-gray-800"
          >
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className={LABEL_CLASS}>First Name</label>
                <input
                  id="firstName"
                  type="text"
                  maxLength={20}
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={INPUT_CLASS}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className={LABEL_CLASS}>Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  maxLength={20}
                  placeholder="Smith"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={INPUT_CLASS}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={LABEL_CLASS}>Email Address</label>
              <input
                id="email"
                type="email"
                maxLength={60}
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={INPUT_CLASS}
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className={LABEL_CLASS}>Subject</label>
              <input
                id="subject"
                type="text"
                maxLength={60}
                placeholder="What's this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={INPUT_CLASS}
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={LABEL_CLASS}>Message</label>
              <textarea
                id="message"
                maxLength={500}
                rows={5}
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${INPUT_CLASS} resize-none`}
                required
              />
            </div>

            {/* Feedback */}
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                <FontAwesomeIcon icon={faTriangleExclamation} />
                {error}
              </div>
            )}
            {isSuccess && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                Message sent! I'll get back to you soon.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-fun-teal text-black font-semibold hover:bg-teal-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
