'use client'
import styles from '../styles/wordle.module.scss'
import { MenuIcon,HelpIcon, SettingIcon } from '../Compoments/svgs/svgs'

export async function getServerSideProps() {
    const word = 'example';  // 가져오고 싶은 단어
    const apiKey = 'YOUR_API_KEY';  // Wordnik API 키
    const url = `https://api.wordnik.com/v4/word.json/${word}/definitions?apiKey=${apiKey}`;
  
    const res = await fetch(url);
    const data = await res.json();
  
    return {
      props: {
        wordData: data,
      },
    };
  }
  

export default function wordle(){
    return(
        <div className={styles.main}>

          <div className={styles.nav}>
            <div className={styles.navLeft}>
                <span><MenuIcon></MenuIcon></span>
            </div>
            <div className={styles.navRight}>
                <span><HelpIcon></HelpIcon></span>
                <span><SettingIcon></SettingIcon></span>
            </div>
          </div>

        </div>
    )
}