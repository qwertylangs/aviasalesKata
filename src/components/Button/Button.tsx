import styles from "./Button.module.scss"

interface ButtonProps {
  title: string
  classNames?: string[]
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ title, classNames, selected, onClick, disabled = false }: ButtonProps) => {
  let style = styles.button
  if (classNames) {
    style += " " + classNames.join(" ")
  }
  if (selected) {
    style += " " + styles.selected
  }

  return (
    <button className={style} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}
