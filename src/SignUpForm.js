// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const SignUpForm = () => {
//   const [username, setUsername] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8085/user', {
//         username,
//         address,
//         email,
//         name,
//         password,
//         phoneNo,
//       });
//       console.log(response);
//       toast.success('Sign-up successful!');
//       // Clear form fields
//       setUsername('');
//       setAddress('');
//       setEmail('');
//       setName('');
//       setPassword('');
//       setPhoneNo('');
//     } catch (error) {
//       toast.error('Error signing up.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Phone Number"
//         value={phoneNo}
//         onChange={(e) => setPhoneNo(e.target.value)}
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8085/user', {
        username,
        address,
        email,
        name,
        password,
        phoneNo,
      });
      toast.success('Sign-up successful!');
      // Clear form fields
      setUsername('');
      setAddress('');
      setEmail('');
      setName('');
      setPassword('');
      setPhoneNo('');
    } catch (error) {
      toast.error('Error signing up.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNo" className="block text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNo"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
