'use client'
import { useState,useEffect} from 'react';
import styles from './page.module.scss';
import { useRouter,usePathname } from 'next/navigation';

const months: string[] = [
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
  const pathname = usePathname();
  const router = useRouter();
  const [month,changeMonth] = useState(0);
  const [day,changeDay] = useState(0);
  const [year,chageYear] = useState(0);
  const [cumulativeDay,cumulativeDayChange] = useState(0);
  
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
  }, []);//날짜 게산

  useEffect(() => {
    const storedDate = localStorage.getItem("lastDate");
    const storedCount = localStorage.getItem("count");

    if(storedCount){
      cumulativeDayChange(parseInt(storedCount, 10));
    }

    const today = new Date().toDateString();

    if(storedDate !== today){
      cumulativeDayChange((iter) => {
        const newCount = iter+ 1;
        localStorage.setItem("count",newCount.toString());
        localStorage.setItem("lastDate", today);
        return newCount;
      })
    }
  }, []); //누적 일수 계산

  
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <span><img src="https://static01.nyt.com/images/2022/03/02/crosswords/alpha-wordle-icon-new/alpha-wordle-icon-new-smallSquare252-v3.png?format=pjpg&quality=75&auto=webp&disable=upscale" alt="" /><span>Wordle</span></span>
      </div>
      <div className={styles.words}>
        <div>
          <h1>Hi Wordler</h1>
          <p>Get 6 chances to guess a 5-letter word.</p>
        </div>
        <div><span onClick={() => router.push('/wordle')}>Play</span></div>
        <div>
          <span>{months[month]} {day}, {year}</span>
          <span>No.{cumulativeDay}</span>
          <span>made by choi wuseck </span>
        </div>
      </div>
      
    </div>
  );
}
