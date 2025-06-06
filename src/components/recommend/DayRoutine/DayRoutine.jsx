import styles from './DayRoutine.module.css';
import input from 'assets/styles/common/input.module.css';
import button from 'assets/styles/common/button.module.css';
import label from 'assets/styles/common/label.module.css';

/**
 * @data 사용자에게 제공할 추천 리스트 [dayNo, kcal, name(메뉴|운동명), id(메뉴|운동ID)]
 * @onClick onClick 이벤트
 * @onChange onChange 이벤트
 * @kcal 현재 일차에 해당하는 계산된 칼로리 값
 * @returns {JSX.Element} n일차 루틴 추천 컴포넌트
 */
const DayRoutine = ({ data, checkedItems, onClick, handleCheckBoxClick, kcal }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.dayNo}>{data.dayNo}일차</span>
                <span className={styles.kcal}>{kcal}kcal</span>
            </div>

            {/* 식단|운동 추천 리스트  */}
            <div className={styles.formLeft}>
                {data.exerciseList
                    .filter(exercise => checkedItems.includes(exercise.id))
                    .map((exercise, index) => (
                        <div
                            key={`${exercise.id}_${index}`}
                            className={styles.boxContainer}>
                            <input
                                className={`${input.input} ${styles.box}`}
                                type="checkbox"
                                name={exercise.name}
                                value={exercise.id}
                                id={`${data.dayNo}_${exercise.id}`}
                                checked={checkedItems.includes(exercise.id)}
                                onChange={() => handleCheckBoxClick(exercise.id)}
                            />
                            <label
                                className={`${label.label} ${styles.label}`}
                                htmlFor={`${data.dayNo}_${exercise.id}`}>
                                {exercise.name}
                            </label>
                        </div>
                    ))}
            </div>

            <div className={styles.formRight}>
                <button
                    type="button"
                    className={`${button.button} ${styles.plusBtn}`}
                    onClick={onClick}>
                    +
                </button>
            </div>
        </div>
    );
};

export default DayRoutine;