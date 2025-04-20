import React, { useState } from "react";

export default function useErrorBoundary() {
  const [error, setError] = useState(null);

  const ErrorBoundary = ({ children }) => {
    if (error) {
      return <div>Error: {error}</div>;
    }
    return children;
  };

  const handleError = (error) => {
    setError(error);
  };

  return { ErrorBoundary, handleError };
}
