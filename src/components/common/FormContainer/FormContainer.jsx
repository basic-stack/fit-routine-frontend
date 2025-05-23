import styles from './FormContainer.module.css';

const FormContainer = children => (
    <div className={styles.container}>
        {children}
    </div>
)

export default FormContainer