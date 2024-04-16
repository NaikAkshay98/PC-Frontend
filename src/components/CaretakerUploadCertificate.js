import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CaretakerUploadCertificate() {
  const [file, setFile] = useState(null);
  const [isUnderReview, setIsUnderReview] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const { caretakerId } = useParams();
  const [certificateDetails, setCertificateDetails] = useState({
    certificateProvider: '',
    courseName: '',
    trainerName: '',
    dateStarted: '',
    dateCompletion: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCertificateDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (!isUnderReview) {
      setFile(e.target.files[0]);
    } else {
      setError('Your previous certificate is under review. Please wait for the admin to process it.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUnderReview) {
      setError('Your certificate is currently being reviewed.');
      return;
    }

    if (!file || !certificateDetails.certificateProvider || !certificateDetails.courseName || !certificateDetails.trainerName || !certificateDetails.dateStarted || !certificateDetails.dateCompletion) {
      setError('Please provide all the required information.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    Object.entries(certificateDetails).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch(`http://localhost:6070/api/caretakers/${caretakerId}/uploadCertificate`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Upload failed with status: ${response.status}`);
      }

      setIsUnderReview(true);
      setUploadStatus('Certificate uploaded successfully. It is now under review by the admin.');
    } catch (error) {
      console.error('Upload failed: ', error.message);
      setUploadStatus('');
      setError('Upload failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Upload Certificate</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {uploadStatus && <p>{uploadStatus}</p>}
      {!isUnderReview && (
        <form onSubmit={handleSubmit}>
          <label>
            Select File:
            <input type="file" name="file" onChange={handleFileChange} required />
          </label>
          <label>
            Certificate Provider:
            <input type="text" name="certificateProvider" value={certificateDetails.certificateProvider} onChange={handleInputChange} required />
          </label>
          <label>
            Course Name:
            <input type="text" name="courseName" value={certificateDetails.courseName} onChange={handleInputChange} required />
          </label>
          <label>
            Trainer Name:
            <input type="text" name="trainerName" value={certificateDetails.trainerName} onChange={handleInputChange} required />
          </label>
          <label>
            Date Started:
            <input type="date" name="dateStarted" value={certificateDetails.dateStarted} onChange={handleInputChange} required />
          </label>
          <label>
            Date Completion:
            <input type="date" name="dateCompletion" value={certificateDetails.dateCompletion} onChange={handleInputChange} required />
          </label>
          <button type="submit">Upload Certificate</button>
        </form>
      )}
    </div>
  );
}

export default CaretakerUploadCertificate;
