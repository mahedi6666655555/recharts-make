import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// here is recharts import 
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// here is recharts import 


function App() {

  const users = [
    { id: 1, name: "mahedi", age: 20, khan: 600 },
    { id: 2, name: "nir", age: 10, khan: 111 },
    { id: 3, name: "jhanker sir", age: 40, khan: 100 }
  ];



  return (
    <div className="App">
      <div>


        <LineChart width={500} height={500}
          data={users}

        >

          <YAxis />
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="age" stroke="#8888" />
          <Line type="monotone" dataKey="khan" stroke="#82ca9d" />
        </LineChart>



      </div>
    </div>
  )
}

export default App
