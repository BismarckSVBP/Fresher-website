// import  { useState } from "react";
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { Loader } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useContactStore } from "../store/authStore"; // ✅ Make sure the path is correct

// const ContactUsPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const navigate = useNavigate();

//   const { contactUs, isLoading } = useContactStore();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;

//     try {
//       await contactUs(email, name, message);
//       toast.success("Message sent successfully.");
//       navigate("/");
//     } catch (error) {
//       console.error("Submit error:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen px-4">
//       <div className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 p-8 max-w-4xl w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
//         {/* Contact Info */}
//         <div className="bg-gradient-to-b from-emerald-600 to-green-500 text-white p-8 rounded-xl md:w-1/2 flex flex-col justify-between">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
//             <p className="text-sm mb-6 text-gray-100">
//               We'd love to hear from you! Reach out to us anytime.
//             </p>

//             <div className="space-y-4 text-sm">
//               <p className="flex items-center">📞 <span className="ml-2">+ (123) 456 7890</span></p>
//               <p className="flex items-center">✉ <span className="ml-2">contact@xyzwebsite.com</span></p>
//               <p className="flex items-center">📍 <span className="ml-2">11, Street 342, Abcd Fgh</span></p>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="flex space-x-4 mt-8 justify-center">
//             <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-200 transition"><FaTwitter /></a>
//             <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-200 transition"><FaFacebookF /></a>
//             <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-200 transition"><FaInstagram /></a>
//             <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-200 transition"><FaLinkedinIn /></a>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-gray-800 bg-opacity-50 rounded-xl shadow-md border border-gray-700 p-8 md:w-1/2">
//           <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
//             Get in Touch
//           </h3>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-gray-300 text-sm mb-2">Your Name</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange}
//                 className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="John Doe" required />
//             </div>
//             <div>
//               <label className="block text-gray-300 text-sm mb-2">Email Address</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange}
//                 className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="john@example.com" required />
//             </div>
//             <div>
//               <label className="block text-gray-300 text-sm mb-2">Message</label>
//               <textarea name="message" value={formData.message} onChange={handleChange}
//                 className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent h-32 resize-none"
//                 placeholder="Type your message here..." required />
//             </div>
//             <button type="submit"
//               className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
//               {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "SEND MESSAGE"}
//             </button>
//           </form>

//           {/* Link to Home Page */}
//           <div className="mt-6 text-center">
//             <button
//               onClick={() => navigate('/')}
//               className="text-sm text-gray-400 hover:text-white transition underline"
//             >
//               Go back to Home
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUsPage;
import { useState } from "react";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContactStore } from "../store/authStore"; // ✅ Ensure this is the correct path

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const { contactUs, isLoading } = useContactStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      await contactUs(email, name, message);
      toast.success("Message sent successfully.");
      navigate("/");
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 text-white">
      <div className="w-full max-w-5xl bg-gray-900 bg-opacity-90 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-8">
        
        {/* Left Section (Intro or visual can be added here later) */}
        <div className="hidden lg:flex flex-col justify-center items-start w-full lg:w-1/2 px-4">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Let’s Connect!
          </h2>
          <p className="text-gray-400 mb-6">
            We’d love to hear from you. Drop your queries, suggestions, or messages. We'll get back to you shortly!
          </p>
          <button
            onClick={() => navigate('/')}
            className="text-sm text-green-400 underline hover:text-green-300 transition"
          >
            ← Back to Home
          </button>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Get in Touch
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none"
                placeholder="Type your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transition-all"
            >
              {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "SEND MESSAGE"}
            </button>
          </form>

          {/* Mobile-only Back Link */}
          <div className="mt-6 text-center lg:hidden">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-gray-400 underline hover:text-white transition"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
