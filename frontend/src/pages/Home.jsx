import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden rounded-xl">

      {/* Floating Bubbles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-white opacity-10 animate-float blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="h-screen flex items-center justify-center relative z-10 text-center px-4 animate-fade-in-up rounded-2xl"
      >
        <motion.div className="rounded-2xl" whileHover={{ scale: 1.02 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400 drop-shadow-lg rounded-xl">
            CSE Freshers Party 2025
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto rounded-lg">
            Where New Beginnings Meet Endless Possibilities. Join us for an unforgettable celebration!
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/dashboard"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-xl transition-all"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Event Highlights */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-4 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-3xl"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 rounded-xl"
        >
          Event Highlights
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 rounded-xl">
          {[
            { icon: "music", title: "Live Music", desc: "Groove to the beats of our amazing performers." },
            { icon: "utensils", title: "Gourmet Food", desc: "Savor delicious meals and refreshments." },
            { icon: "trophy", title: "Fun Games", desc: "Exciting games and amazing prizes to be won." },
            { icon: "camera", title: "Photo Booth", desc: "Capture memories with your new friends." },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 bg-opacity-70 p-8 rounded-2xl text-center shadow-md border border-gray-700 hover:border-green-500 transition-all"
            >
              <div className="text-4xl mb-5">
                <i className={`fas fa-${item.icon} text-green-400`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 rounded-md">{item.title}</h3>
              <p className="text-gray-300 rounded-md">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Event Timeline */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-4 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-3xl"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 rounded-xl"
        >
          Event Timeline
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6 rounded-xl">
          {[
            { time: "11:00 AM", event: "Welcome Reception" },
            { time: "12:30 PM", event: "Opening Ceremony" },
            { time: "1:00 PM", event: "Ice Breaking Sessions" },
            { time: "2:30 PM", event: "Lunch & Entertainment" },
            { time: "4:00 PM", event: "Closing Ceremony" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="flex bg-gray-700 bg-opacity-70 rounded-xl p-6 border border-gray-600 hover:border-green-400 transition"
            >
              <div className="w-32 font-semibold text-green-400 rounded-md">{item.time}</div>
              <div className="flex-1 text-white rounded-md">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-4 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-3xl"
      >
        <motion.div
          className="max-w-xl mx-auto text-center rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-8 rounded-md">
            Got any questions or suggestions? We'd love to hear from you!
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact-us"
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full shadow-lg transition"
            >
              Reach Out
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
