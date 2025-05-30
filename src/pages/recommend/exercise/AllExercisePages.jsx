import { useState } from 'react';
import ExerciseInputInfo from './ExerciseInputInfo/ExerciseInputInfo';
import ExerciseRepeatsDay from './ExerciseRepeatsDay/ExerciseRepeatsDay';
import RecommendExercise from './RecommendExercise/RecommendExercise';

function AllExercisePages() {
    const [formData, setFormData] = useState({
        purpose: '',
        startDate: '',
        endDate: '',
        tdee: '',
        goalWeight: '',
        repeatDay: '',
        exerciseData: [
            {},
        ],
    });

    const [step, setStep] = useState(0);

    const performData = () => {};

    const goToNext = () => {
        step === 2 ? performData() : setStep(step + 1);
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
                    goToNext={goToNext}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </>
    );
}

export default AllExercisePages;
