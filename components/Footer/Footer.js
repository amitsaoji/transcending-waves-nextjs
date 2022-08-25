import styles from './Footer.module.css'

export default function Header() {
  return(
    <footer className={styles.footer}>
      <div className={styles.linkGroup}>
        <h3 className={styles.linkGroupTitle}>
          Sign Up To Get 50% Off Your First Order!
        </h3>
        <div className={styles.linkGroupFormContainer}>
          <form className={styles.linkGroupForm}>Crush your productivity goals today with 25% off your first order!</form>
          <label className={styles.linkGroupLabel}>Sign Up</label>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <h3 className={styles.linkGroupTitle}>
          About Us
        </h3>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/pages/who-we-are" target="_blank">
          Our Story
        </a>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/blogs/productivity-positivity" target="_blank">
          Lifestyle Blog
        </a>
      </div>
      <div className={styles.linkGroup}>
        <h3 className={styles.linkGroupTitle}>
          Shop
        </h3>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/products/best-productivity-planners-books" target="_blank">
          Undated Planner
        </a>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/products/best-executive-planners-books-padfolios-portfolios-for-entrepreneurs" target="_blank">
          Padfolio Portfolio
        </a>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/products/best-bullet-journals-dotted-grid-notebooks?variant=19549165486173" target="_blank">
          Lined Journal
        </a>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/products/best-bullet-journals-dotted-grid-notebooks?variant=19782244335709" target="_blank">
          Bullet Journal
        </a>
      </div>
      <div className={styles.linkGroup}>
        <h3 className={styles.linkGroupTitle}>
          Resources
        </h3>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/pages/password" target="_blank">
          Free PDF
        </a>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/pages/reps" target="_blank">
          Influencers
        </a>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/pages/privacy-policy" target="_blank">
          Privacy Policy
        </a>
        <a className={styles.linkGroupLink} href="https://www.transcendingwaves.com/pages/terms-of-sale" target="_blank">
          Terms of Sale
        </a>
      </div>
      <div className={styles.linkGroup}>
        <h3 className={styles.linkGroupTitle}>
          Contact Us
        </h3>
        <a className={styles.linkGroupLink} href="" target="_blank">
          <i className="fa-solid fa-phone"></i> 1-802-466-2727
        </a>
        <a className={styles.linkGroupLink} href="" target="_blank">
          support@transcendingwaves.com
        </a>
        <div className={styles.socialMediaContainer}>
          <a className={styles.linkGroupLink} href="https://www.facebook.com/people/Transcending-Waves/100071428150068/" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a className={styles.linkGroupLink} href="https://www.instagram.com/transcendingwaves/?hl=en" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a className={styles.linkGroupLink} href="https://www.youtube.com/channel/UCe-St9-8PdMi-AYD2u9edRg" target="_blank">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a className={styles.linkGroupLink} href="https://www.pinterest.com/transcendingwaves/" target="_blank">
            <i class="fa-brands fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}