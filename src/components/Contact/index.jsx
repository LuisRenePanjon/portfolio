import Styles from './styles.module.scss';
// import { h,  } from 'preact';
// import  {useState} from 'react';
// import {useState } from '@astrojs/renderer-react';
export const Contact = () => {
  // const [mail, setMail] = useState('')
  const sendEmail = () => {
    console.log('send');
  }
  return <div className={Styles.formcontainer}>
    <span className={Styles.title}>Contact me</span>
    {/* <div> */}
    {/* <input type="text" className={Styles.input} /> */}
    <button onClick={sendEmail}/>
    {/* </div> */}
    <div>
      <p>s</p>

    </div>
  </div>
}