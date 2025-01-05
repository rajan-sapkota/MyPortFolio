import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isSending, setIsSending] = useState(false); // To show sending status

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setIsSending(true); // Show loading status

    // Sending email via EmailJS
    emailjs
      .send(
        'sendmeAnemail21', // Replace with your EmailJS service ID
        'template_varuw0w', // Replace with your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        '2tE8iZLveUXxrJwos' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsSending(false);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          setIsSending(false);
          setIsError(true);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        {isSubmitted && (
          <div className="mb-4 text-green-500 text-center">
            <p>Your message has been sent successfully!</p>
          </div>
        )}
        {isError && (
          <div className="mb-4 text-red-500 text-center">
            <p>Failed to send message. Please try again.</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`w-full py-3 font-semibold rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ${
                isSending
                  ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
              }`}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
         {/* Social Media Links */}
         <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/rajan-sapkota/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100004750637024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/3185579521"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;