'use client'
import { useState,useEffect, use } from 'react';
import styles from './page.module.scss';
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export default function Home() {
  let today = new Date();
  const [month,changeMonth] = useState(0);
  const [day,changeDay] = useState(0);
  const [year,chageYear] = useState(0);
  useEffect(() => {
    changeMonth(today.getMonth());
    changeDay(today.getDate());
    chageYear(today.getFullYear());
    const interval = setInterval(() => {
      today = new Date();
      changeMonth(today.getMonth());
      changeDay(today.getDate());
      chageYear(today.getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <span><img src="https://static01.nyt.com/images/2022/03/02/crosswords/alpha-wordle-icon-new/alpha-wordle-icon-new-smallSquare252-v3.png?format=pjpg&quality=75&auto=webp&disable=upscale" alt="" /><span>Wordle</span></span>
      </div>
      <div className={styles.words}>
        <div>
          <h1>Hi Wordler</h1>
          <p>Great job on today’s puzzle! Check out your progress.</p>
        </div>
        <div><span>See Stats</span></div>
        <div>
          <span>{months[month]} {day}, {year}</span>
          <span>No.</span>
          <span>made by choi wuseck </span>
        </div>
      </div>
      
    </div>
  );
}
