import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

export default function NewProject(){
  return(
    <div className={styles.newprojectContainer}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto"/>
    </div>
  )
}