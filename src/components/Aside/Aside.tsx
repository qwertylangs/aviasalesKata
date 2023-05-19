import styles from "./Aside.module.scss"

interface AsideProps {
  children: React.ReactNode
}

export const Aside = ({ children }: AsideProps) => {
  return <aside className={styles.aside}>{children}</aside>
}
