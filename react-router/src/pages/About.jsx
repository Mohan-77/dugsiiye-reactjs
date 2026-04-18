// About.jsx
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to our amazing website! We are a team of dedicated professionals passionate about creating outstanding digital experiences.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our mission is to deliver innovative solutions that help businesses grow and succeed in the digital world. With years of experience and expertise, we pride ourselves on quality and customer satisfaction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in continuous improvement and staying ahead of the curve with the latest technologies and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h3>
            <p className="text-gray-600">To be the leading provider of innovative digital solutions that transform businesses and create lasting value for our clients.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Values</h3>
            <p className="text-gray-600">Integrity, innovation, excellence, and customer-centricity guide everything we do. We're committed to delivering exceptional results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
