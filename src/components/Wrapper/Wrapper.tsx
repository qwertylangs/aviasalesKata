import styles from "./Wrapper.module.scss"

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => <div className={styles.wrapper}>{children}</div>
