import { useNavigate } from 'react-router-dom';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/clerk-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            SYNCA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Project Management Made Simple
          </p>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-lg p-8 space-y-6">
          <SignedOut>
            <div className="space-y-4">
              <SignUpButton mode="modal">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Sign Up
                </button>
              </SignUpButton>
              
              <SignInButton mode="modal">
                <button className="w-full bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 text-gray-800 dark:text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Sign In
                </button>
              </SignInButton>
            </div>
            
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-300">Welcome back! You are already signed in.</p>
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Go to Dashboard
              </button>
            </div>
          </SignedIn>
        </div>
        
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© 2025 SYNCA. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;