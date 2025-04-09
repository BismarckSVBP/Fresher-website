import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden rounded-2xl">

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
      <section className="h-screen flex items-center justify-center relative z-10 text-center px-4 animate-fade-in-up rounded-2xl">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400 drop-shadow-lg">
            CSE Freshers Party 2025
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Where New Beginnings Meet Endless Possibilities. Join us for an unforgettable celebration!
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-24 px-4 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-2xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
          Event Highlights
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: "music", title: "Live Music", desc: "Groove to the beats of our amazing performers." },
            { icon: "utensils", title: "Gourmet Food", desc: "Savor delicious meals and refreshments." },
            { icon: "trophy", title: "Fun Games", desc: "Exciting games and amazing prizes to be won." },
            { icon: "camera", title: "Photo Booth", desc: "Capture memories with your new friends." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-8 rounded-2xl text-center shadow-md border border-gray-700 hover:border-green-500 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-5">
                <i className={`fas fa-${item.icon} text-green-400`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-24 px-4 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Event Timeline
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { time: "11:00 AM", event: "Welcome Reception" },
            { time: "12:30 PM", event: "Opening Ceremony" },
            { time: "1:00 PM", event: "Ice Breaking Sessions" },
            { time: "2:30 PM", event: "Lunch & Entertainment" },
            { time: "4:00 PM", event: "Closing Ceremony" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex bg-gray-700 bg-opacity-70 rounded-xl p-6 border border-gray-600 hover:border-green-400 hover:scale-105 transition"
            >
              <div className="w-32 font-semibold text-green-400">{item.time}</div>
              <div className="flex-1 text-white">{item.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-2xl">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-8">Got any questions or suggestions? We'd love to hear from you!</p>
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transition"
          >
            Reach Out
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
