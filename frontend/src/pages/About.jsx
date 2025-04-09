
const developers = [
  {
    name: "Abhay",
    title: "Backend Developer and Coder",
    role: "CSE B.Tech 2nd Year",
    year: "Main Developer",
    image: "/abhay.jpg",
    linkedin: "https://www.linkedin.com/in/abhay-kumar-4aa26b282",
    isMain: true,
  },
  {
    name: "Parv Agarwal",
    title: "Frontend Enthusiast & Learner",
    role: "Passionate about UI/UX and React",
    year: "CSE B.Tech 2nd Year",
    image: "/parv.jpg",
    linkedin: "https://www.linkedin.com/in/ravi-kumar/",
    isMain: false,
  },
  {
    name: "Utsav Mishra",
    title: "React Developer",
    role: "Frontend Intern",
    year: "CSE B.Tech 2nd Year",
    image: "/utsav3.jpg",
    linkedin: "https://linkedin.com/in/neha-singh",
    isMain: false,
  },
  {
    name: "Umang Yadav",
    title: "UI Designer & Coder",
    role: "Creative Designer",
    year: "CSE B.Tech 2nd Year",
    image: "/umang.jpg",
    linkedin: "https://linkedin.com/in/aman-yadav",
    isMain: false,
  },
  {
    name: "Yashvardhan Ojha",
    title: "JavaScript Enthusiast",
    role: "Web Developer",
    year: "CSE B.Tech 2nd Year",
    image: "/ojha.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma",
    isMain: false,
  },{
    name: "Devang Agarwal",
    title: "JavaScript Enthusiast",
    role: "Web Developer",
    year: "CSE B.Tech 2nd Year",
    image: "/devang.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma",
    isMain: false,
  },{
    name: "Utkarsh Shukla",
    title: "JavaScript Enthusiast",
    role: "Web Developer",
    year: "CSE B.Tech 2nd Year",
    image: "/utkarsh.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma",
    isMain: false,
  },{
    name: "Abhishek Singh",
    title: "JavaScript Enthusiast",
    role: "Web Developer",
    year: "CSE B.Tech 2nd Year",
    image: "/abhishek.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma",
    isMain: false,
  },
];

const About = () => {
  const mainDev = developers.find((dev) => dev.isMain);
  const juniorDevs = developers.filter((dev) => !dev.isMain).slice(0, 7); // Only 7 junior devs

  return (
      <div className="w-full max-w-6xl bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800 p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-10">Meet the Developers</h1>

        {/* Main Developer */}
        {mainDev && (
          <div className="bg-gradient-to-br from-emerald-600 to-green-500 text-white rounded-xl p-8 text-center mb-10 shadow-xl">
            <div className="w-28 h-28 rounded-full overflow-hidden mx-auto border-4 border-white mb-4">
              <img src={mainDev.image} alt={mainDev.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold">{mainDev.name}</h2>
            <p className="text-sm">{mainDev.role}</p>
            <p className="text-md">{mainDev.title}</p>
    
            <a
              href={mainDev.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-white text-sm underline hover:text-gray-100"
            >
              LinkedIn →
            </a>
          </div>
        )}

        {/* Junior Developers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {juniorDevs.map((dev, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-90 text-gray-200 rounded-xl p-6 text-center border border-gray-700 hover:scale-105 transition shadow-md"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-400 mb-3 mx-auto">
                <img src={dev.image} alt={dev.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold">{dev.name}</h3>
              <p className="text-sm text-gray-400">{dev.year}</p>
              
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <a
            href="/contact-us"
            className="text-sm text-gray-400 hover:text-white underline"
          >
            Contact the team →
          </a>
        </div>

        
      </div>
    
  );
};

export default About;
