import styles from './Calculator.module.css';
import button from 'assets/styles/common/button.module.css';
import input from 'assets/styles/common/input.module.css';
import error from 'assets/styles/common/error.module.css';
import label from 'assets/styles/common/label.module.css';
import DoughnutChart from 'components/common/DoughnutChart/DoughnutChart';
import { FcCalculator } from 'react-icons/fc';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 유효성 검사
const checkForm = (FormData) => {
    const errors = {};

    const { age, gender, height, weight } = FormData;

    if (!age) {
        errors.age = '나이를 입력해주세요';
    }
    if (!gender) {
        errors.gender = '성별을 입력해주세요';
    }
    if (!height) {
        errors.height = '신장을 입력해주세요';
    } else {
        if (height < 100 || height > 251) {
            errors.height = '올바르지 않은 값입니다';
        }
    }
    if (!weight) {
        errors.weight = '체중을 입력해주세요';
    } else {
        if (weight < 20 || weight > 635) {
            errors.weight = '올바르지 않은 값입니다';
        }
    }

    return errors;
};

function Calculator() {

    const navigate = useNavigate();

    // 입력한 사용자의 정보 (나이, 성별, 신장, 체중)
    const [userData, setUserData] = useState({
        age: '', // 나이
        gender: '', // 성별
        height: '', // 신장
        weight: '', // 체중
    });

    const [errors, setErrors] = useState({
        age: '',
        gender: '',
        height: '',
        weight: '',
    });

    // 계산 결과 (탄수화물, 단백질, 지방)
    const [result, setResult] = useState({
        carb: 0, // 탄수화물
        protein: 0, // 단백질
        fat: 0, // 지방
    });

    // 입력값 변경 핸들러
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 차트의 새로 랜더링 하기위한 키 값
    const [chartKey, setChartKey] = useState(0);

    // 일일 권장 섭취량 계산 핸들러
    const calculatorHandler = () => {
        const { age, gender, height, weight } = userData;

        // 값 유효성 검사
        const checkErrors = checkForm(userData);
        setErrors(checkErrors);

        if (Object.keys(checkErrors).length > 0) {
            return;
        }

        // 문자열 → 숫자 변환
        const ageNum = Number(age);
        const heightNum = Number(height);
        const weightNum = Number(weight);
        const activity = 1.55;

        // BMR 계산 (Harris-Benedict 공식)
        let bmr = 0;
        if (gender === '남') {
            bmr =
                66.47 + 13.75 * weightNum + 5.003 * heightNum - 6.755 * ageNum;
            bmr =
                66.47 + 13.75 * weightNum + 5.003 * heightNum - 6.755 * ageNum;
        } else if (gender === '여') {
            bmr = 655.1 + 9.563 * weightNum + 1.85 * heightNum - 4.676 * ageNum;
            bmr = 655.1 + 9.563 * weightNum + 1.85 * heightNum - 4.676 * ageNum;
        }

        // TDEE 계산
        const tdee = bmr * activity;

        const carbKcal = tdee * 0.5; // 탄수화물: 50%
        const proteinKcal = tdee * 0.2; // 단백질: 20%
        const fatKcal = tdee * 0.3; // 지방: 30%

        // kcal → gram 환산
        const carbGram = Math.round(carbKcal / 4);
        const proteinGram = Math.round(proteinKcal / 4);
        const fatGram = Math.round(fatKcal / 9);

        //  결과 값 상태 업데이트
        setResult({
            carb: carbGram,
            protein: proteinGram,
            fat: fatGram,
        });

        // DoughnutChart 새로 랜더링
        setChartKey((prev) => prev + 1);
        setChartKey((prev) => prev + 1);
    };

    // 식단 추천 페이지로 이동 핸들러
    const handleNavigateFoodRecommend = () => {
        navigate('/diet');
    };

    return (
        <div className={styles.border}>
            <div className={styles.title}>
                <div className={styles.calIcon}>
                    <FcCalculator />
                </div>
                <div className={styles.bold}>일일 권장 섭취량 계산기</div>
            </div>
            <div className={styles.container}>
                <div className={styles.leftArea}>
                    <form className={styles.inputAreas}>
                        <div className={styles.inputArea}>
                            <div
                                className={`${styles.input} ${styles.calcContainer}`}>
                                <label
                                    className={`${label.label} ${label.input} ${styles.label}`}
                                    htmlFor="age">
                                    나이
                                </label>
                                <input
                                    className={`${input.input} ${input.short}`}
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={userData.age}
                                    onChange={inputHandler}
                                />
                            </div>
                            {errors.age && (
                                <p className={error.error}>{errors.age}</p>
                            )}
                        </div>
                        <div className={styles.inputArea}>
                            <div
                                className={`${styles.input} ${styles.calcContainer}`}>
                                <label
                                    className={`${label.label} ${label.input} ${styles.label}`}
                                    htmlFor="gender">
                                    성별
                                </label>
                                <input
                                    className={`${input.input} ${input.short}`}
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    value={userData.gender}
                                    onChange={inputHandler}
                                />
                            </div>
                            {errors.gender && (
                                <p className={error.error}>{errors.gender}</p>
                            )}
                        </div>
                        <div className={styles.bodyInputs}>
                            <div className={styles.inputArea}>
                                <div
                                    className={`${styles.bodyInput} ${styles.calcContainer}`}>
                                    <label
                                        className={`${label.label} ${label.input} ${styles.label}`}
                                        htmlFor="gender">
                                        신장
                                    </label>
                                    <input
                                        className={`${input.input} ${input.short}`}
                                        type="number"
                                        id="height"
                                        name="height"
                                        value={userData.height}
                                        onChange={inputHandler}
                                    />
                                </div>
                                {errors.height && (
                                    <p className={error.error}>
                                        {errors.height}
                                    </p>
                                )}
                            </div>
                            <div className={styles.inputArea}>
                                <div
                                    className={`${styles.bodyInput} ${styles.calcContainer}`}>
                                    <label
                                        className={`${label.label} ${label.input} ${styles.label}`}
                                        htmlFor="gender">
                                        체중
                                    </label>
                                    <input
                                        className={`${input.input} ${input.short}`}
                                        type="number"
                                        id="weight"
                                        name="weight"
                                        value={userData.weight}
                                        onChange={inputHandler}
                                    />
                                </div>
                                {errors.weight && (
                                    <p className={error.error}>
                                        {errors.weight}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={styles.buttonArea}>
                            <div className={styles.btn}>
                                <button
                                    type="button"
                                    className={`${button.button} ${button.short}`}
                                    onClick={calculatorHandler}>
                                    확인
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles.rightArea}>
                    <div className={styles.resultArea}>
                        <div className={styles.doughnutArea}>
                            <DoughnutChart
                                key={chartKey}
                                labels={['탄수화물', '단백질', '지방']}
                                data={[result.carb, result.protein, result.fat]}
                            />
                        </div>
                        <div className={styles.kcalArea}>
                            <p className={styles.p}>
                                탄수화물 : <u className={styles.bold}>{result.carb}</u> kcal
                            </p>
                            <p className={styles.p}>
                                단백질 : <u className={styles.bold}>{result.protein}</u> kcal
                            </p>
                            <p className={styles.p}>
                                지방 : <u className={styles.bold}>{result.fat}</u> kcal
                            </p>
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <div className={styles.btn}>
                            <Link to='diet'>
                                <button
                                    className={`${button.button} ${button.bold}`}
                                    onClick={handleNavigateFoodRecommend}>
                                    루틴 추천 받으러 가기
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
