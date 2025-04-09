import Student from '../models/student.model.js';

export const registerStudent = async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      collegeEmail,
      rollNumber,
      branch,
      year,
      course,
      passportPhotoUrl,
      collegeIdCardUrl,
    } = req.body;

    if (!fullName || !phoneNumber || !collegeEmail || !rollNumber || !branch || !year || !course || !passportPhotoUrl || !collegeIdCardUrl) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingStudent = await Student.findOne({ collegeEmail });
    if (existingStudent) {
      return res.status(409).json({ message: 'Student already registered.' });
    }

    const newStudent = new Student({
      fullName,
      phoneNumber,
      collegeEmail,
      rollNumber,
      branch,
      year,
      course,
      passportPhotoUrl,
      collegeIdCardUrl,
    });

    await newStudent.save();
    return res.status(201).json({ message: 'Student registered successfully.' });
  } catch (error) {
    console.error('Register Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
