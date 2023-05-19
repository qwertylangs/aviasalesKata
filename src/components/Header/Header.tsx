import logo from "../../assets/Logo.svg"

import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
    </div>
  )
}
