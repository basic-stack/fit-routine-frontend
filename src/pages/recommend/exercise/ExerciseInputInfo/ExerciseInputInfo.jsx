import RecommendForm from 'components/recommend/RecommendForm/RecommendForm';

function ExerciseInputInfo({ goToNext, formData, setFormData }) {
    return (
        <RecommendForm
            goToNext={goToNext}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

export default ExerciseInputInfo;
