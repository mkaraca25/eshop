import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const logo=(
  <div className={styles.logo}>
          <Link to="/">
            <h2>
              e<span>Shop</span>.
            </h2>
          </Link>
        </div>
)
const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </nav>
      </div>

    </header>
  )
}

export default Header