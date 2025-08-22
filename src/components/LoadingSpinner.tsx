import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Spinning loader */}
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        
        {/* Loading text */}
        <p className="text-lg text-gray-600 font-medium">Loading...</p>
        
        {/* Optional subtitle */}
        <p className="text-sm text-gray-500 mt-2">Please wait while we prepare your content</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;