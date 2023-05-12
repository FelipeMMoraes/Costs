import styles from './Container.module.css'

function Container({children, ...props}){
  return(
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {children}
    </div>
  )
}

export default Container