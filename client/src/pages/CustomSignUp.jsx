import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const CustomSignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Join our project management platform
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <SignUp 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "bg-transparent shadow-none",
                headerTitle: "text-xl font-semibold text-gray-900 dark:text-white",
                headerSubtitle: "text-gray-600 dark:text-gray-300",
                socialButtonsBlockButton: "bg-blue-500 hover:bg-blue-600 text-white",
                formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
                footerActionLink: "text-blue-500 hover:text-blue-600",
                formFieldInput: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                formFieldLabel: "text-gray-700 dark:text-gray-300",
              }
            }}
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            afterSignUpUrl="/dashboard"
          />
        </div>
        
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            Already have an account?{' '}
            <Link to="/sign-in" className="text-blue-500 hover:text-blue-600 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSignUp;