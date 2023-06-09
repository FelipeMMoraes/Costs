import styles from './Select.module.css'

export default function Select({ text, name, option, handleOnChange, value }){
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
        {option.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}