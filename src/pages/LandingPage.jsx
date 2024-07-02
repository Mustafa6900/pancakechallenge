import React, { useEffect, useState } from 'react';
import data from '../data/strings.json';
import { isPalindrome, isPurePalindrome } from '../utils/palindrome';
import { FaCheck, FaTimes } from 'react-icons/fa';

function LandingPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const checkPalindromes = () => {
      return data.map(text => ({
        text,
        is_pure_palindrome: isPurePalindrome(text),
        is_palindrome: isPalindrome(text)
      }));
    };

    setResults(checkPalindromes());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 py-4">Palindrome Checker</h1>
      <div className="flex justify-center mt-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-left">Text</th>
                <th className="py-3 px-4 text-left">Pure Palindrome</th>
                <th className="py-3 px-4 text-left">Palindrome</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index} className={
                  result.is_pure_palindrome
                    ? 'bg-green-100'
                    : result.is_palindrome
                      ? 'bg-yellow-100'
                      : 'bg-white'
                }>
                  <td className="py-3 px-4 border-b border-gray-200">{result.text}</td>
                  <td className="py-3 px-4 border-b border-gray-200">
                      {result.is_pure_palindrome ? <FaCheck /> : <FaTimes style={{ color: 'red' }} />}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                      {result.is_palindrome ? <FaCheck /> : <FaTimes style={{ color: 'red' }} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
