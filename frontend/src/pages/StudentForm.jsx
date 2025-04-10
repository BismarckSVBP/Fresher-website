import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/authStore";
import { API_BASE_URL } from "../config";

const StudentForm = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate(); // ✅ Add navigate

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    collegeEmail: user?.email || "",
    phoneNumber: "",
    rollNumber: "",
    branch: "CSE",
    year: "",
    course: "B.Tech",
  });

  const [passportPhoto, setPassportPhoto] = useState(null);
  const [collegeIdCard, setCollegeIdCard] = useState(null);
  const [passportPreview, setPassportPreview] = useState(null);
  const [idCardPreview, setIdCardPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const years = ["1st Year"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, setFile, setPreview) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.imageUrl;
    } catch (error) {
      console.error("Upload to backend failed:", error.response?.data || error);
      throw new Error("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passportPhoto || !collegeIdCard) {
      toast.error("Please upload both images");
      return;
    }

    setLoading(true);

    try {
      const passportPhotoUrl = await uploadToCloudinary(passportPhoto);
      const collegeIdCardUrl = await uploadToCloudinary(collegeIdCard);

      const submissionData = {
        ...formData,
        passportPhotoUrl,
        collegeIdCardUrl,
      };

      await axios.post(`${API_BASE_URL}/submit`, submissionData);

      toast.success("🎉 Registered Successfully!");

      // Reset form
      setFormData({
        fullName: user?.name || "",
        collegeEmail: user?.email || "",
        phoneNumber: "",
        rollNumber: "",
        branch: "CSE",
        year: "",
        course: "B.Tech",
      });
      setPassportPhoto(null);
      setCollegeIdCard(null);
      setPassportPreview(null);
      setIdCardPreview(null);

      // ✅ Redirect to home page
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 bg-opacity-80 backdrop-blur-lg border border-gray-800 shadow-2xl p-8 rounded-xl max-w-4xl w-full"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
          Student Registration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            disabled
            className="p-3 bg-gray-700 text-white rounded-lg cursor-not-allowed"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            className="p-3 bg-gray-900 text-white rounded-lg"
          />
          <input
            type="email"
            name="collegeEmail"
            value={formData.collegeEmail}
            disabled
            className="p-3 bg-gray-700 text-white rounded-lg cursor-not-allowed"
          />
          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
            required
            maxLength={10}
            className="p-3 bg-gray-900 text-white rounded-lg"
          />
          <input
            type="text"
            name="branch"
            value={formData.branch}
            disabled
            className="p-3 bg-gray-700 text-white rounded-lg cursor-not-allowed"
          />
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="p-3 bg-gray-900 text-white rounded-lg"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="course"
            value={formData.course}
            disabled
            className="p-3 bg-gray-700 text-white rounded-lg cursor-not-allowed"
          />

          {/* Upload Passport Photo */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Passport-size Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleFileChange(e, setPassportPhoto, setPassportPreview)
              }
              required
              className="text-white"
            />
            {passportPreview && (
              <img
                src={passportPreview}
                alt="Passport Preview"
                className="mt-2 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>

          {/* Upload ID Card */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              College ID Card
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleFileChange(e, setCollegeIdCard, setIdCardPreview)
              }
              required
              className="text-white"
            />
            {idCardPreview && (
              <img
                src={idCardPreview}
                alt="ID Card Preview"
                className="mt-2 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
