import React from 'react';
import styles from './work.module.css'
import WebIcons from './WebIcons';

function CompleteWebIcon() {
  return (
    <div>
      <div className={styles.div3}>
        <p className={styles.webHead}>
          On the <a className={styles.web}>web</a>
        </p>
        <a className={styles.webAnchor}>Find me on social media</a>
        <br />
        <WebIcons/>
      </div>
    </div>
  )
}

export default CompleteWebIcon
