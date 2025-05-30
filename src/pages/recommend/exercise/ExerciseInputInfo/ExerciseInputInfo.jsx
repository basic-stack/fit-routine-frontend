import styles from './ExerciseInputInfo.module.css'
import RecommendForm from 'components/recommend/RecommendForm/RecommendForm';

const ExerciseInputInfo = ({
    goToNext,
}) => {
    return (
        <div className={styles.container}>
            <RecommendForm 
            goToNext={goToNext}/>
        </div>
    );
};

export default ExerciseInputInfo;