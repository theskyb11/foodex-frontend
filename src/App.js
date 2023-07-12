import React from 'react';
import SignUpForm from './SignUpForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-center mb-8">Sign Up</h1>
        <SignUpForm />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
