// Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you. Send us a message!</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t-2 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-gray-600 font-bold">Email</p>
                <p className="text-pink-600">info@example.com</p>
              </div>
              <div>
                <p className="text-gray-600 font-bold">Phone</p>
                <p className="text-pink-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-gray-600 font-bold">Address</p>
                <p className="text-pink-600">123 Main St, City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
