import styles from "./Main.module.scss"

interface MainProps {
  children: React.ReactNode
}

export const Main = ({ children }: MainProps) => <main className={styles.main}>{children}</main>
