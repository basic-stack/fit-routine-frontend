import styles from './ExerciseInputInfo.module.css';
import RecommendForm from 'components/recommend/RecommendForm/RecommendForm';

const ExerciseInputInfo = () => {
    return (
        <div className={styles.container}>
            <RecommendForm title="운동 추천" />
        </div>
    );
};

export default ExerciseInputInfo;
