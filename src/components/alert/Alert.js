import React, { useState } from "react";

const SuccessAlert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className="fixed bottom-0 right-0 m-4">
          <div
            className="flex items-center bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md"
            role="alert"
          >
            <span>{message}</span>
            <button
              className="ml-4 text-white font-bold"
              onClick={handleAlertClose}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessAlert;
