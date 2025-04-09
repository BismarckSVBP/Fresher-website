import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { API_BASE_URL } from "../config";
const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const cardRefs = useRef({});
  const buttonRefs = useRef({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/student`);
        console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDownloadPDF = async (userId, userName) => {
    const card = cardRefs.current[userId];
    const button = buttonRefs.current[userId];

    if (card) {
      // Hide the download button temporarily
      if (button) button.style.display = "none";

      // Wait for DOM to update
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Render canvas
      const canvas = await html2canvas(card, {
        useCORS: true, // needed for cross-origin images
        allowTaint: true,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`ID_Card_${userName.replace(/\s+/g, "_")}.pdf`);

      // Show the button again
      if (button) button.style.display = "block";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white p-10">
      <h1 className="text-5xl font-extrabold text-pink-500 mb-4 text-center">Admin Panel</h1>
      <p className="text-center text-lg mb-10 text-purple-300">
        Welcome, Admin! Below are the ID cards of all registered users.
      </p>

      {loading && <p className="text-center text-xl text-white">Loading users...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user._id}
            ref={(el) => (cardRefs.current[user._id] = el)}
            className="bg-white text-black rounded-2xl shadow-xl p-4 w-full max-w-sm mx-auto relative"
          >
            <div className="flex flex-col items-center">
              <img
                crossOrigin="anonymous"
                src={user.passportPhotoUrl || "https://via.placeholder.com/100"}
                alt={user.fullName}
                className="w-24 h-24 rounded-full object-cover border-4 border-pink-500 mb-3"
              />
              <h2 className="text-xl font-bold text-center mb-2">{user.fullName}</h2>
              <div className="text-sm text-center space-y-1">
                <p><strong>Phone:</strong> {user.phoneNumber}</p>
                <p><strong>Email:</strong> {user.collegeEmail}</p>
                <p><strong>Roll No:</strong> {user.rollNumber}</p>
                <p><strong>Course:</strong> {user.course}</p>
                <p><strong>Branch:</strong> {user.branch}</p>
                <p><strong>Year:</strong> {user.year}</p>
              </div>
            </div>
            <button
              ref={(el) => (buttonRefs.current[user._id] = el)}
              onClick={() => handleDownloadPDF(user._id, user.fullName)}
              className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold"
            >
              Download ID Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
