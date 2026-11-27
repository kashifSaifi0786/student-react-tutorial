import { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    gender: "",
    course: "",
    skills: [],
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let updatedValue = value;

    if (type === "checkbox") {
      updatedValue = checked
        ? [...formData.skills, value]
        : formData.skills.filter((item) => item !== value);
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Enter valid email";
    }

    if (formData.age === "") {
      newErrors.age = "Age is required";
    } else if (formData.age < 18 || formData.age > 35) {
      newErrors.age = "Age must be between 18 and 35";
    }

    if (formData.phone === "") {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      newErrors.phone = "Enter 10 digit phone number";
    }

    if (formData.gender === "") {
      newErrors.gender = "Please select gender";
    }

    if (formData.course === "") {
      newErrors.course = "Please select course";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);

      setSuccess("Student registered successfully!");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
      phone: "",
      gender: "",
      course: "",
      skills: [],
    });

    setErrors({});
    setSuccess("");
  };

  return (
    <div className="student-form">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <p>{errors.age}</p>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <p>{errors.phone}</p>
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
        <p>{errors.gender}</p>
        <label>Course</label>
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="ReactJS">ReactJS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
        </select>
        <p>{errors.course}</p>
        <label>Skills</label>
        {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              name="skills"
              value={skill}
              checked={formData.skills.includes(skill)}
              onChange={handleChange}
            />
            {skill}
          </label>
        ))}
        <p>{errors.skills}</p>
        <button type="submit">Register</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        {success && <h3>{success}</h3>}
      </form>
    </div>
  );
};

export default StudentForm;
