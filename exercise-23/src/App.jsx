import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agreeToTerms: false,
    notifications: false
  });

  const [errors, setErrors] = useState({});

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager"
  ];

  const skillOptions = [
    "React", "JavaScript", "TypeScript", "Node.js",
    "Python", "Java", "UI Design", "API Development"
  ];

  const validateField = (name, value) => {
    let error = "";

    if (name === 'fullName') {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = "Please enter a valid name (2-30 characters, letters only)";
      }
    }

    if (name === 'email') {
      if (!value) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    }

    if (name === 'role') {
      if (!value) {
        error = "Please select a role";
      }
    }

    if (name === 'experience') {
      if (!value) {
        error = "Experience is required";
      } else if (isNaN(value) || value < 0 || value > 50) {
        error = "Please enter valid years of experience (0-50)";
      }
    }

    if (name === 'skills') {
      if (!value || value.length === 0) {
        error = "Please select at least one skill";
      }
    }

    if (name === 'agreeToTerms') {
      if (!value) {
        error = "You must agree to the terms";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    const error = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSkillChange = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];

    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));

    const error = validateField('skills', newSkills);
    setErrors(prev => ({
      ...prev,
      skills: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert("Application submitted successfully!");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#1e1b4b,_#0f172a_35%,_#020617_70%,_#000000_100%)] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-fuchsia-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-10 -translate-x-1/2"></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        ></div>
      </div>

      <div className="relative max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block mb-5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="text-cyan-300 text-sm font-semibold tracking-wide">
              Welcome to Our Team
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.25)]">
            Apply Now
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Showcase your talents and join our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-semibold">
              innovative team
            </span>
          </p>
        </div>

        {/* Form Card */}
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl opacity-30"></div>

          <div className="relative bg-white/8 backdrop-blur-3xl rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-8 sm:p-12 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400"></div>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Full Name */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <label className="text-base font-semibold text-slate-100 tracking-wide">
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-5 py-4 rounded-2xl bg-slate-900/70 border transition-all duration-300 text-white placeholder-slate-500 font-medium focus:outline-none focus:ring-2 hover:bg-slate-900/90 ${
                      errors.fullName
                        ? 'border-red-500/50 focus:ring-red-500/40'
                        : 'border-white/10 focus:ring-cyan-400/40 focus:border-cyan-400/40'
                    }`}
                  />
                  {!errors.fullName && formData.fullName && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 text-lg">✓</span>
                  )}
                </div>

                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400 font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <label className="text-base font-semibold text-slate-100 tracking-wide">
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full px-5 py-4 rounded-2xl bg-slate-900/70 border transition-all duration-300 text-white placeholder-slate-500 font-medium focus:outline-none focus:ring-2 hover:bg-slate-900/90 ${
                      errors.email
                        ? 'border-red-500/50 focus:ring-red-500/40'
                        : 'border-white/10 focus:ring-cyan-400/40 focus:border-cyan-400/40'
                    }`}
                  />
                  {!errors.email && formData.email && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 text-lg">✓</span>
                  )}
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Role */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <label className="text-base font-semibold text-slate-100 tracking-wide">
                    Select Your Role
                  </label>
                </div>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-2xl bg-slate-900/70 border transition-all duration-300 text-white font-medium focus:outline-none focus:ring-2 hover:bg-slate-900/90 appearance-none cursor-pointer ${
                    errors.role
                      ? 'border-red-500/50 focus:ring-red-500/40'
                      : 'border-white/10 focus:ring-cyan-400/40 focus:border-cyan-400/40'
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23cbd5e1' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="" className="bg-slate-950 text-slate-300">Select a role</option>
                  {roles.map(role => (
                    <option key={role} value={role} className="bg-slate-950 text-white">
                      {role}
                    </option>
                  ))}
                </select>

                {errors.role && (
                  <p className="mt-2 text-sm text-red-400 font-medium">{errors.role}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <label className="text-base font-semibold text-slate-100 tracking-wide">
                    Years of Experience
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    max="50"
                    className={`w-full px-5 py-4 rounded-2xl bg-slate-900/70 border transition-all duration-300 text-white placeholder-slate-500 font-medium focus:outline-none focus:ring-2 hover:bg-slate-900/90 ${
                      errors.experience
                        ? 'border-red-500/50 focus:ring-red-500/40'
                        : 'border-white/10 focus:ring-cyan-400/40 focus:border-cyan-400/40'
                    }`}
                  />
                  {!errors.experience && formData.experience && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 text-lg">✓</span>
                  )}
                </div>

                {errors.experience && (
                  <p className="mt-2 text-sm text-red-400 font-medium">{errors.experience}</p>
                )}
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-rose-600 flex items-center justify-center text-xs font-bold">
                    5
                  </div>
                  <label className="text-base font-semibold text-slate-100 tracking-wide">
                    Choose Your Skills
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {skillOptions.map(skill => (
                    <label
                      key={skill}
                      className="group relative flex items-center p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer hover:bg-slate-800/80 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                    >
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleSkillChange(skill)}
                        className="h-5 w-5 rounded accent-cyan-500 cursor-pointer"
                      />
                      <span className="text-sm text-slate-200 font-medium ml-3 group-hover:text-cyan-300 transition">
                        {skill}
                      </span>
                      {formData.skills.includes(skill) && (
                        <span className="ml-auto text-cyan-400 text-lg">★</span>
                      )}
                    </label>
                  ))}
                </div>

                {errors.skills && (
                  <p className="mt-2 text-sm text-red-400 font-medium">{errors.skills}</p>
                )}
              </div>

              {/* Divider */}
              <div className="relative py-3">
                <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-slate-900/50 rounded-full text-slate-400 text-sm">
                    Additional Info
                  </span>
                </div>
              </div>

              {/* Terms */}
              <div className="relative flex items-start p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-violet-400/30 transition-all duration-300 hover:bg-slate-800/80">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-5 w-5 mt-1 rounded accent-cyan-500 cursor-pointer"
                />
                <label className="text-sm text-slate-200 ml-3 font-medium">
                  I have read and agree to the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-semibold">
                    Terms & Conditions
                  </span>
                </label>
              </div>

              {errors.agreeToTerms && (
                <p className="text-sm text-red-400 font-medium">{errors.agreeToTerms}</p>
              )}

              {/* Notifications */}
              <div className="relative flex items-start p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-violet-400/30 transition-all duration-300 hover:bg-slate-800/80">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                  className="h-5 w-5 mt-1 rounded accent-cyan-500 cursor-pointer"
                />
                <label className="text-sm text-slate-200 ml-3 font-medium">
                  Keep me updated with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-semibold">
                    exciting opportunities
                  </span>{" "}
                  and news
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="relative w-full mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_rgba(139,92,246,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_60px_rgba(34,211,238,0.25)] active:scale-95 focus:outline-none focus:ring-4 focus:ring-cyan-400/20"
              >
                <span className="relative flex items-center justify-center gap-2 uppercase tracking-[0.25em]">
                  🚀 Submit Application ✨
                </span>
              </button>

              <p className="text-center text-slate-500 text-xs font-semibold uppercase tracking-widest">
                All fields are required • We respect your privacy
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-slate-500 text-sm font-light">
            Powered by modern web technology ⚡
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;