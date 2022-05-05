import React from 'react';
import  '../assets/css/Date.css';

function activeDay(e) {
  const todayDate = new Date();
  const calendarDate = document.querySelectorAll('.dateNumber');
  console.log(todayDate);
  e.target.classList.toggle('active');
}

function Day() {
  for(let i = 0; i >= 10; i++) {
    return (
      <div className="date" key={i} onClick={activeDay}>
        <div className="dateNumber">01</div>
      </div>
    )
  }
 
}

export default Day