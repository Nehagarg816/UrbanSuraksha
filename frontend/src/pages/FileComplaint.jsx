import React from "react";
import "../styles/FileComplaint.css"; // optional

const FileComplaint = () => {
  return (
    <div className="file-complaint-container">
      <p>Please speak your complaint clearly. The system will categorize and log it.</p>

      
      <iframe
        src="https://poorvaahuja2004.pythonanywhere.com/"
        title="Voice Complaint App"
        width="100%"
        height="500px"
        style={{ border: "2px solid #f3b1d4", borderRadius: "10px" }}
      />
    </div>
  );
};

export default FileComplaint;
