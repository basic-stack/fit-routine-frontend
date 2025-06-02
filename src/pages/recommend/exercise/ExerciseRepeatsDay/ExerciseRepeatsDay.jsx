import { useState } from 'react';

import styles from 'pages/recommend/exercise/ExerciseRepeatsDay/ExerciseRepeatsDay.module.css';
import input from 'assets/styles/common/input.module.css';
import label from 'assets/styles/common/label.module.css';
import error from 'assets/styles/common/error.module.css';
import form from 'assets/styles//common/form.module.css';
import button from 'assets/styles/common/button.module.css';

const checkRepeatRequired = (repeat) => {
    const errors = {};

    if (!repeat) {
        errors.repeat = '반복일을 입력해주세요.';
    }

    return errors;
};

// 종료일-시작일 구하기
const getDayDiff = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1;

    return diffInDays;
};

function ExerciseRepeatsDay({ goToNext, formData, setFormData }) {
    const [errors, setErrors] = useState({});

    const dayDiff = getDayDiff(formData.startDate, formData.endDate);
    const repeatDay = Array.from({ length: dayDiff }, (_, i) => i + 1);

    const handleChange = (event) => {
        const repeat = event.target.value;
        setFormData((prev) => ({
            ...prev,
            repeatDay: repeat,
        }));
    };

    const handleSubmit = () => {
        const validationResult = checkRepeatRequired(formData.repeatDay);
        setErrors(validationResult);

        if (Object.keys(validationResult).length > 0) {
            return;
        }

        alert('제출 성공');
        goToNext();
    };

    return (
        <form className={`${form.form} ${styles.form}`}>
            <h1 className={styles.title}>반복일</h1>
            {repeatDay.slice(0, 7).map((day, index) => (
                <label
                    className={`${label.label} ${styles.container}`}
                    key={`${day}_${index}`}>
                    <span className={styles.dayNo}>{day}일 반복</span>
                    <input
                        type="radio"
                        className={`${input.common} ${styles.radio}`}
                        id={day}
                        name="selectRepeats"
                        value={day}
                        onChange={handleChange}
                    />
                </label>
            ))}
            {errors.repeat && <p className={error.error}>{errors.repeat}</p>}

            <button
                type="button"
                className={`${button.button} ${button.long} ${styles.button}`}
                onClick={handleSubmit}>
                다음
            </button>
        </form>
    );
}
export default ExerciseRepeatsDay;
