import Student from "../models/student.model.js"; // Adjust the import path as necessary

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    console.log("Fetched students:", students);
    res.status(200).json(students);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
