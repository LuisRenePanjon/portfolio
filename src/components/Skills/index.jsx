import { h } from 'preact';
import Styles from './styles.module.scss';


export const Skills = () => {
  return (<>
    <span className={Styles.title}>Front-end</span>
    <div className={Styles.iconcontainer}>

      <div className={Styles.itemcontainer}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
      </div>
    </div>


    <span className={Styles.title}>Back-end</span>
    <div className={Styles.iconcontainer}>

      <div className={Styles.itemcontainer}>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>Spring Boot</li>
          <li>Django</li>
        </ul>
      </div>


    </div>

    <span className={Styles.title}>Database</span>
    <div className={Styles.iconcontainer}>

      <div className={Styles.itemcontainer}>
        <ul>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Firestore</li>
        </ul>
      </div>

    </div>
    <span className={Styles.title}>Tools</span>
    <div className={Styles.iconcontainer}>

      <div className={Styles.itemcontainer}>
        <ul>
          <li>Git</li>
          <li>Docker</li>
        </ul>
      </div>

    </div>
  </>
  );
}