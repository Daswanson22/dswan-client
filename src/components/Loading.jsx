import React from "react";

// Loading Spinner Component
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="h-16 w-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default LoadingSpinner;
