import { useEffect, useState } from 'react';
import useDebounce from 'utils/hooks/debounce';

import label from 'assets/styles/common/label.module.css';
import input from 'assets/styles/common/input.module.css';
import select from 'assets/styles/common/select.module.css';
import button from 'assets/styles/common/button.module.css';
import form from 'assets/styles/common/form.module.css';
import error from 'assets/styles/common/error.module.css';
import styles from './RecommendForm.module.css';

const getMissingRequiredErrors = (formData) => {
    const errors = {};

    const { purpose, startDate, endDate, tdee, goalWeight } = formData;

    if (!purpose || purpose === 'none') {
        errors.purpose = '목적을 선택해주세요.';
    }

    if (!startDate) {
        errors.startDate = '시작일을 입력해주세요.';
    }

    if (!endDate) {
        errors.endDate = '종료일을 입력해주세요.';
    }

    if (purpose === 'diet') {
        if (!tdee || tdee === 'none') {
            errors.tdee = '활동 수준을 선택해주세요.';
        }

        if (!goalWeight) {
            errors.goalWeight = '목표 몸무게를 입력해주세요.';
        }
    }

    return errors;
};

const getValidationErrors = async (formData) => {
    const errors = {};

    const { purpose, startDate, endDate, goalWeight } = formData;

    if (startDate && endDate && startDate > endDate) {
        errors.endDate = '종료일이 시작일보다 이릅니다.';
    }

    if (
        purpose === 'diet' &&
        goalWeight &&
        (goalWeight < 0 || goalWeight > 500)
    ) {
        errors.goalWeight = '목표 체중이 바르지 않습니다.';
    }

    return errors;
};

const RecommendForm = () => {
    const [formData, setFormData] = useState({
        purpose: '',
        startDate: '',
        endDate: '',
        tdee: '',
        goalWeight: '',
    });

    const [errors, setErrors] = useState({
        purpose: '',
        startDate: '',
        endDate: '',
        tdee: '',
        goalWeight: '',
    });

    const debouncedFormData = useDebounce(formData, 500);

    useEffect(() => {
        getValidationErrors(debouncedFormData).then((errors) =>
            setErrors(errors),
        );
    }, [debouncedFormData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const missingRequiredErrors = getMissingRequiredErrors(formData);
        setErrors(missingRequiredErrors);

        if (Object.keys(missingRequiredErrors).length > 0) {
            return;
        }

        const validationErrors = await getValidationErrors(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        // 임시 로직
        alert('제출 성공!');
    };

    return (
        <div className={`${form.form} ${styles.form} ${styles.container}`}>
            <h1 className={styles.title}>운동 추천</h1>

            <label
                className={`${label.label} ${styles.label}`}
                htmlFor="purpose">
                운동 목적
            </label>
            <select
                className={`${select.select} ${styles.select}`}
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}>
                <option value="none">== 선택 ==</option>
                <option value="healthy">체력 증진</option>
                <option value="weight">근력 강화</option>
                <option value="healthy">건강 유지</option>
                <option value="diet">체중 감량</option>
            </select>
            {errors.purpose && <p className={error.error}>{errors.purpose}</p>}

            <label
                className={`${label.label} ${styles.label}`}
                htmlFor="startDate">
                시작일
            </label>
            <input
                className={`${input.input} ${input.long}`}
                type="date"
                id="startDate"
                name="startDate"
                label="시작일"
                value={formData.startDate}
                error={errors.startDate}
                onChange={handleChange}
            />
            {errors.startDate && (
                <p className={error.error}>{errors.startDate}</p>
            )}

            <label
                className={`${label.label} ${styles.label}`}
                htmlFor="endDate">
                종료일
            </label>
            <input
                className={`${input.input} ${input.long}`}
                type="date"
                id="endDate"
                name="endDate"
                label="종료일"
                value={formData.endDate}
                error={errors.endDate}
                onChange={handleChange}
            />
            {errors.endDate && <p className={error.error}>{errors.endDate}</p>}

            {formData.purpose === 'diet' && (
                <>
                    <label
                        className={`${label.label} ${styles.label}`}
                        htmlFor="tdee">
                        활동 수준
                    </label>
                    <select
                        className={`${select.select} ${styles.select}`}
                        id="tdee"
                        name="tdee"
                        value={formData.tdee}
                        onChange={handleChange}>
                        <option value="none">== 선택 ==</option>
                        <option value="1">거의 하지 않음</option>
                        <option value="2">주 1~3회 운동</option>
                        <option value="3">주 4~5회 운동</option>
                        <option value="4">주 6~7회 운동</option>
                    </select>
                    {errors.tdee && (
                        <p className={error.error}>{errors.tdee}</p>
                    )}

                    <label
                        className={`${label.label} ${styles.label}`}
                        htmlFor="goalWeight">
                        목표 몸무게
                    </label>
                    <input
                        className={`${input.input} ${input.long}`}
                        type="number"
                        id="goalWeight"
                        name="goalWeight"
                        value={formData.goalWeight}
                        onChange={handleChange}
                    />
                    {errors.goalWeight && (
                        <p className={error.error}>{errors.goalWeight}</p>
                    )}
                </>
            )}
            <button
                className={`${button.button} ${button.long} ${styles.button}`}
                onClick={handleSubmit}>
                다음
            </button>
        </div>
    );
};

export default RecommendForm;
