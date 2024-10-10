// src/components/Login.tsx
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

export default function Login({ setUser }) {
  const onSuccess = (response) => {
    const userObject = jwtDecode(response.credential);
    setUser(userObject);
    // Redirect to dashboard or update state to show dashboard
  };

  const onFailure = (error) => {
    console.log('Login failed:', error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onFailure}
          useOneTap
          auto_select
          size="large"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
}
