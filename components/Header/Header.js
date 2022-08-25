import styles from './Header.module.css'

export default function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="https://www.transcendingwaves.com/" target="_blank">
          <img className={styles.logo} src="https://cdn.shopify.com/s/files/1/1705/0763/t/20/assets/newlg2.png?v=39179739055428901731559814596" />
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="https://www.transcendingwaves.com/" target="_blank">Home</a>
        <a href="https://www.transcendingwaves.com/collections/transcending-waves-planner" target="_blank">Shop</a>
        <a href="https://www.transcendingwaves.com/pages/password" target="_blank">Free PDF</a>
        <a href="https://www.transcendingwaves.com/pages/reps" target="_blank">Influencers</a>
        <a href="/link">Customer Service</a>
        <a href="https://www.transcendingwaves.com/pages/contact-us" target="_blank">Contact Us</a>
        <a href="https://www.transcendingwaves.com/blogs/productivity-positivity" target="_blank">Blog</a>
        <a href="https://www.transcendingwaves.com/search" target="_blank">
          <i className="fa-solid fa-search"></i>
        </a>
        <a href="https://www.transcendingwaves.com/cart" target="_blank">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </nav>
      <nav className={styles.mobileNav}>
      <i className="fa-solid fa-bars"></i>
      </nav>
    </header>
  )
}