import styles from './FormTitle.module.css'

const FormTitle = text => (
    <div className={styles.container}>
        {text}
    </div>
)

export default FormTitle