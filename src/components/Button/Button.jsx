import clsx from 'clsx'
import css from './Button.module.css'

const Button = ({ variant, children }) => {
  const classnames = clsx(css.btn, variant === 'primary' && css.primary)
  return <button className={classnames}>{children}</button>
}

export default Button
