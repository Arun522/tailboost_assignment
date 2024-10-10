// src/components/Dashboard.tsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Mock data for the chart
const data = [
  { name: 'Week 1', engagement: 4000 },
  { name: 'Week 2', engagement: 3000 },
  { name: 'Week 3', engagement: 2000 },
  { name: 'Week 4', engagement: 2780 },
  { name: 'Week 5', engagement: 1890 },
  { name: 'Week 6', engagement: 2390 },
  { name: 'Week 7', engagement: 3490 },
]

export default function Dashboard({ user }) {
  const [courses, setCourses] = useState([])
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch courses (mock data for this example)
    setCourses([
      { id: 1, title: 'Introduction to React' },
      { id: 2, title: 'Advanced JavaScript' },
      { id: 3, title: 'Web Design Fundamentals' },
    ])

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch weather data')
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="text-center mt-8">Loading...</div>
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <nav className="mt-4">
          <Link to="/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">My Courses</Link>
          <Link to="/dashboard/analytics" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Analytics</Link>
          <Link to="/dashboard/settings" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Account Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome back, {user.name}!</h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">My Courses</h2>
          <ul>
            {courses.map(course => (
              <li key={course.id} className="flex justify-between items-center mb-2">
                <span>{course.title}</span>
                <div>
                  <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="engagement" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {weatherData && (
          <div className="bg-white  shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Condition: {weatherData.weather[0].description}</p>
          </div>
        )}
      </main>
    </div>
  )
}