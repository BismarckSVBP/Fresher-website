import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    collegeEmail: { type: String, required: true, unique: true },
    rollNumber: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    course: { type: String, required: true },
    passportPhotoUrl: { type: String, required: true },
    collegeIdCardUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
