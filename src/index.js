import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import './tachyons.css'
import './index.css'
import LiveSession from './liveSession'
import FileInput from './uploadSessionData'

const sessionData1 = {
  name: 'RACDS Exam',
  liveDuration: {
      number: 5,
      unit: 'days'
  },
  completionRate: {
      numerator: 12,
      denominator: 13
  }
}

const sessionData2 = {
  name: 'RO Vivas',
  liveDuration: {
      number: 1,
      unit: 'day'
  },
  completionRate: {
      numerator: 0,
      denominator: 10
  }
}



ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <div className='mt5'>
      <LiveSession sessionData={sessionData1}/>
      <LiveSession sessionData={sessionData2}/>
      <FileInput />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

