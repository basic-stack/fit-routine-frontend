import { useState } from 'react';
import ExerciseInputInfo from './ExerciseInputInfo/ExerciseInputInfo';
import ExerciseRepeatsDay from './ExerciseRepeatsDay/ExerciseRepeatsDay';
import RecommendExercise from './RecommendExercise/RecommendExercise';

function AllExercisePages() {
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(0);

    const handleSubmit = () => {};

    const goToNext = () => {
        step === 2 ? handleSubmit() : setStep(step + 1);
    };

    return (
        <>
            {step === 0 && (
                <ExerciseInputInfo
                    goToNext={goToNext}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {step === 1 && (
                <ExerciseRepeatsDay
                    goToNext={goToNext}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {step === 2 && (
                <RecommendExercise
                    goToNext={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </>
    );
}

export default AllExercisePages;
