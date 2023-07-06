import React from "react";
import styles from "./work.module.css";
import WebIcons from "./WebIcons";
import img1 from './twitter_clone.jpg';
import img2 from './kanaban_board.png';
import img3 from './google_docs.png';
import img4 from './gym_website.jpg';

function Work() {
  return (
    <div className={styles.main}>
      <div>
        <a className={styles.anchor}>
          Work speaks <a className={styles.louder}>louder</a>{" "}
        </a>
        <a className={styles.anchor}>than words.</a>
      </div>
      <p className={styles.para}>
        I’ll help <a style={{ color: "red" }}>visualize your creative ideas.</a>{" "}
        From web design to developing user friendly wesites.
      </p>
      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Twitter Clone</p>
          <div className={styles.lorem1}>
            <ul>
              <li>
                User Registration and Authentication: Users can create accounts,
                provide necessary information, and authenticate themselves to
                access the platform securely.
              </li>
              <li>
                The project typically includes user profiles, hashtags, trending
                topics, search functionality & direct messaging.
              </li>
              <li>
                It allows users to create accounts, post short messages
                (tweets), follow other users, engage in conversations through
                likes, retweets, and comments, and receive notifications.
              </li>
            </ul>
          </div>
          <a href="https://github.com/PARTHAKMEHRA/Twitter_Clone" target="_blank" className={styles.para3}>GITHUB LINK</a>
          <a href="http://twitter-clone-c9x6pjqhs-parthakmehra.vercel.app/" target="_blank" className={styles.para3}>VISIT WEBSITES</a>
          <div className={styles.buttons1}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr1}>2023</p>
        </div>
        <div className={styles.page2}>
          <img src={img1} alt="twitter clone project" className={styles.projectImg} />
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Kanban Board</p>
          <div className={styles.lorem2}>
            <ul>
              <li>
                Kanban board projects can be developed as web or mobile
                applications and often utilize technologies such as HTML, CSS,
                and JavaScript for the Front-End interface.
              </li>
              <li>
                It provides a visual board with lists representing different
                stages of work, typically including "To Do", "In Progress" &
                "Done".
              </li>
            </ul>
          </div>
          <a href="https://github.com/Deva127-dot/kanban_project" target="_blank" className={styles.para3}>GITHUB LINK</a>
          <a href="https://group19-kanban-project-7mq8.vercel.app/" target="_blank" className={styles.para3}>VISIT WEBSITES</a>
          <div className={styles.buttons2}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr2}>2023</p>
        </div>
        <div className={styles.page2}>
        <img src={img2} alt="twitter clone project" className={styles.projectImg} />
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Google Docs</p>
          <div className={styles.lorem3}>
            <ul>
              <li>
                Users can create, edit, and collaborate on documents in
                real-time, similar to Google's popular document creation and
                editing tool.
              </li>
              <li>
                Utilized ReactJS, JavaScript, HTML, and CSS to develop the
                project.
              </li>
            </ul>
          </div>
          <a href="https://github.com/Deva127-dot/google_docs" target="_blank" className={styles.para3}>GITHUB LINK</a>
          <a href="https://google-docs-deva.vercel.app/" target="_blank" className={styles.para3}>VISIT WEBSITES</a>
          <div className={styles.buttons3}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr3}>2023</p>
        </div>
        <div className={styles.page2}>
        <img src={img3} alt="twitter clone project" className={styles.projectImg} />
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>GYM Website</p>
          <div className={styles.lorem2}>
            <ul>
              <li>
              The Gym Website Project using ReactJS is a responsive and visually appealing website that showcases a gym's services, facilities, and trainers.
              </li>
              <li>
              It offers features like membership sign-up, class schedules, and a blog section to engage visitors and promote online presence.
              </li>
            </ul>
          </div>
          <a href="https://github.com/Deva127-dot/gym_website_project" target="_blank" className={styles.para3}>GITHUB LINK</a>
          <a href="https://gym-website-project-devendra-parsharam.vercel.app/" target="_blank" className={styles.para3}>VISIT WEBSITES</a>
          <div className={styles.buttons2}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr2}>2023</p>
        </div>
        <div className={styles.page2}>
        <img src={img4} alt="twitter clone project" className={styles.projectImg} />
        </div>
      </div>

      <div className={styles.div3}>
        <p className={styles.webHead}>
          On the <a className={styles.web}>web</a>
        </p>
        <a className={styles.webAnchor}>Find me on social media</a>
        <br />
        <WebIcons />
      </div>
    </div>
  );
}

export default Work;
