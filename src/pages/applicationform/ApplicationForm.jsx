import { useEffect, useState } from 'react';
import { FiAlertCircle, FiUpload } from 'react-icons/fi';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    institution: '',
    status: '',
    income: '',
    purpose: '',
    photo: null,
    identity: null,
    marksheet: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle file changes
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, [field]: file }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.institution.trim()) newErrors.institution = 'Institution is required';
    if (!formData.status.trim()) newErrors.status = 'Current status is required';
    if (!formData.income.trim()) newErrors.income = 'Annual income is required';
    if (!formData.purpose.trim()) newErrors.purpose = 'Purpose of scholarship is required';
    if (!formData.photo) newErrors.photo = 'Photo is required';
    if (!formData.identity) newErrors.identity = 'Identity proof is required';
    if (!formData.marksheet) newErrors.marksheet = 'Marksheet is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form (optional)
      setFormData({
        fullName: '',
        country: '',
        institution: '',
        status: '',
        income: '',
        purpose: '',
        photo: null,
        identity: null,
        marksheet: null,
      });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Scholarship Application Form
        </h1>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-600 text-center mb-6">
            Fill out the form carefully. Any incorrect information may result in application termination.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter your country"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.country}
                </p>
              )}
            </div>

            {/* Institution */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">University / School / College</label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleInputChange}
                placeholder="Enter your university, college, or school"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.institution && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.institution}
                </p>
              )}
            </div>

            {/* Current Status */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">Current Status</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                placeholder="Enter your education status (e.g., school, college)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.status && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.status}
                </p>
              )}
            </div>

            {/* Annual Income */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">Annual Income</label>
              <input
                type="text"
                name="income"
                value={formData.income}
                onChange={handleInputChange}
                placeholder="Enter your annual income"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.income && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.income}
                </p>
              )}
            </div>

            {/* Purpose of Scholarship */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">Purpose of Scholarship</label>
              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="Enter your purpose of scholarship"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.purpose && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.purpose}
                </p>
              )}
            </div>

            {/* File Uploads */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Attach Documents</h3>
              <div>
                <label className="block text-gray-900 font-medium mb-2">Passport Size Photograph</label>
                <label className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition duration-300">
                  <FiUpload size={20} />
                  Upload Photo
                  <input
                    type="file"
                    name="photo"
                    onChange={(e) => handleFileChange(e, 'photo')}
                    className="hidden"
                  />
                </label>
                {formData.photo && <p className="text-gray-600 text-sm mt-1">{formData.photo.name}</p>}
                {errors.photo && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FiAlertCircle size={16} /> {errors.photo}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-2">Identity Proof Document</label>
                <label className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition duration-300">
                  <FiUpload size={20} />
                  Upload Identity Proof
                  <input
                    type="file"
                    name="identity"
                    onChange={(e) => handleFileChange(e, 'identity')}
                    className="hidden"
                  />
                </label>
                {formData.identity && <p className="text-gray-600 text-sm mt-1">{formData.identity.name}</p>}
                {errors.identity && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FiAlertCircle size={16} /> {errors.identity}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-2">10th or Current Class Marksheet</label>
                <label className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition duration-300">
                  <FiUpload size={20} />
                  Upload Marksheet
                  <input
                    type="file"
                    name="marksheet"
                    onChange={(e) => handleFileChange(e, 'marksheet')}
                    className="hidden"
                  />
                </label>
                {formData.marksheet && <p className="text-gray-600 text-sm mt-1">{formData.marksheet.name}</p>}
                {errors.marksheet && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FiAlertCircle size={16} /> {errors.marksheet}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;