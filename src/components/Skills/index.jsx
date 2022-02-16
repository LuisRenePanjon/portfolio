import { h } from 'preact';
import Styles from './styles.module.scss';


export const Skills = () => {
  return (<>
    <span className={Styles.title}>Front-end</span>
    <div className={Styles.iconcontainer}>

      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/html-5.png" />
        <p className={Styles.item}>HTML</p>
      </div>

      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/css-3.png" />
        <p className={Styles.item}>CSS</p>
      </div>

      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/js.png" />
        <p className={Styles.item}>JavaScript</p>
      </div>
      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/react.png" />
        <p className={Styles.item}>React</p>
      </div>

      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/angular.png" />
        <p className={Styles.item}>Angular</p>
      </div>
    </div>


    <span className={Styles.title}>Back-end</span>
    <div className={Styles.iconcontainer}>

      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/java.png" />
        <p className={Styles.item}>Java</p>
      </div>
      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/piton.png" />
        <p className={Styles.item}>Python</p>
      </div>
      <div className={Styles.itemcontainer}>
        <img className={Styles.spring} src="/assets/spring-boot.png" />
        <p className={Styles.item}>Spring Boot</p>
      </div>

      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/django.png" />
        <p className={Styles.item}>Django</p>

      </div>

    </div>

    <span className={Styles.title}>Database</span>
    <div className={Styles.iconcontainer}>

      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/postgres.png" />
        <p className={Styles.item}>PostgreSQL</p>
      </div>

      <div className={Styles.itemcontainer}>
        <img className={Styles.docker} src="/assets/mysql.png" />
        <p className={Styles.item}>MySQL</p>
      </div>

      <div className={Styles.itemcontainer}>
        <img className={Styles.socialicon} src="/assets/mongo.png" />
        <p className={Styles.item}>MongoDB</p>
      </div>

      <div className={Styles.itemcontainer}>
        <img className={Styles.firestore} src="/assets/firestore.png" />
        <p className={Styles.item}>Firestore</p>
      </div>

    </div>
    <span className={Styles.title}>Tools</span>
    <div className={Styles.iconcontainer}>

    <div className={Styles.itemcontainer}>
      <img className={Styles.socialicon} src="/assets/git.png" />
      <p className={Styles.item}>GIT</p>
    </div>
    <div className={Styles.itemcontainer}>
      <img className={Styles.docker} src="/assets/docker.png" />
      <p className={Styles.item}>Docker</p>
    </div>

    </div>
  </>
  );
}