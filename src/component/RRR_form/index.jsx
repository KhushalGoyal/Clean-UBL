import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";

export default function RRRform() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    category: "",
    month:"",
    date:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here we will neviagte to the back page 
    navigate(-1);
    ///Here we will send the details to the back end

  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-3">
        <h2 className="mb-4 text-center text-success">Details of the Donar </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input type="number" className="form-control" name="amount" value={formData.amount} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select a category</option>
              <option value="Clothes">Clothes</option>
              <option value="Toys">Toys</option>
              <option value="Paper">Paper</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}
