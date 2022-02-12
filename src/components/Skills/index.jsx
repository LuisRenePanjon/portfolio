import { h } from 'preact';
import Styles from './styles.module.scss';


export const Skills = () => {
  return (<>
    <span className={Styles.title}>Front-end</span>
    <div className={Styles.iconcontainer}>
      <img className={Styles.socialicon} src="/assets/html-5.png"/>
      <img className={Styles.socialicon} src="/assets/css-3.png" />
      <img className={Styles.socialicon} src="/assets/js.png" />
      <img className={Styles.socialicon} src="/assets/react.png" />
      <img className={Styles.socialicon} src="/assets/angular.png" />
    </div>
    <span className={Styles.title}>Back-end</span>
    <div className={Styles.iconcontainer}>
      <img className={Styles.socialicon} src="/assets/java.png" />
      <img className={Styles.socialicon} src="/assets/piton.png" />
      <img className={Styles.spring} src="/assets/spring-boot.png" />
      <img className={Styles.socialicon} src="/assets/django.png" />
    </div>
    <span className={Styles.title}>Tools</span>
    <div className={Styles.iconcontainer}>
      <img className={Styles.socialicon} src="/assets/git.png" />
      <img className={Styles.docker} src="/assets/docker.png" />
    </div>
  </>
  );
}