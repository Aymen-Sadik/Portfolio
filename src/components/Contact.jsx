'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'aymensadikpro@gmail.com',
      href: 'mailto:aymensadikpro@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/feed/',
      href: 'https://www.linkedin.com/feed/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/Aymen-Sadik',
      href: 'https://github.com/Aymen-Sadik'
    },
    {
      icon: '�',
      label: 'Instagram',
      value: '@aymeen_sadik',
      href: 'https://www.instagram.com/aymeen_sadik/?hl=fr'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="text-purple-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Let's Connect!</h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in hearing about new opportunities, exciting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Response Time</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24-48 hours. For urgent matters, 
                please mention it in your message subject.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">Send Me a Message</h3>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-400/50 rounded-lg">
                <p className="text-green-300">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4 text-center">
              * All fields are required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}