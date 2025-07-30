import styles from './TopHeader.module.css';

export default function TopHeader() {
  return (
    <div className={styles.topHeaderArea}>
      <div className={styles.containerFluid}>
        <div className={styles.row}>
          <div className={styles.left}>
            <ul className={styles.infoList}>
              <li>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-x-line"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill"></i>
                  </a>
                  <a href="https://bd.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-youtube-line"></i>
                  </a>
                  <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-pinterest-line"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.mailInfo}>
                  <i className="ri-mail-line"></i>
                  <a href="mailto:mediaonafrica@gmail.com">mediaonafrica@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.callInfo}>
              <i className="ri-phone-line"></i>
              <a href="tel:00201068710594">+(0000) 0000-0000-0000</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
                                                                                 