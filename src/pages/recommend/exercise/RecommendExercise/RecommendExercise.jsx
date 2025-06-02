import { useEffect, useState } from 'react';

import Category from 'components/common/Category/Category';
import DayRoutine from 'components/recommend/DayRoutine/DayRoutine';
import CategoryForm from 'components/recommend/CategoryForm/CategoryForm';

import styles from './RecommendExercise.module.css';
import button from 'assets/styles/common/button.module.css';
import error from 'assets/styles/common/error.module.css';
import { getMockData, getMockOpenData } from 'utils/api/exerciseApi';

const DAILY_BURN_KCAL = 400; // 하루 소모 칼로리(임의)
const EXERCISE_TIME = 0.25; // 운동 시간(임의)
const handleCalculateCarolie = (exerciseList, weight) => {
    return exerciseList.reduce((total, exercise) => {
        return total + exercise.met * weight * EXERCISE_TIME;
    }, 0);
};

function RecommendExercise({ goToNext, formData, setFormData }) {
    const [data, setData] = useState([]);
    const [openDataList, setOpenDataList] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [showCategory, setShowCategory] = useState({});
    const [showCheckList, setShowCheckList] = useState({});
    const [selectedCategory, setSelectCategory] = useState({});

    const categoryList = ['상체', '하체', '유산소', '생활운동'];

    // 렌더링과 동시에 가져 올 데이터 샘플
    useEffect(() => {
        const fetchData = async () => {
            const mockData = getMockData();
            const mockOpenData = getMockOpenData();

            // 각 날짜별 kcal 계산
            const updatedMockData = mockData.map((oneDayData) => {
                const kcal = handleCalculateCarolie(
                    oneDayData.exerciseList,
                    oneDayData.weight,
                );
                return {
                    ...oneDayData,
                    kcal,
                };
            });

            // 초기에 체크 상태일 데이터 리스트
            const initialCheckedData = mockData.reduce(
                (acc, oneDayData) => {
                    acc[oneDayData.dayNo] = oneDayData.exerciseList.map(
                        (exercise) => exercise.id,
                    );
                    return acc;
                },
                {},
            );

            setData(updatedMockData);
            setOpenDataList(mockOpenData);
            setCheckedItems(initialCheckedData);
        };

        fetchData();
    }, []);

    // 카테고리 표시
    const handleShowCategory = (dayNo) => {
        setShowCategory((prev) => ({ ...prev, [dayNo]: !prev[dayNo] }));
        setShowCheckList((prev) => ({ ...prev, [dayNo]: false }));
    };

    // 체크리스트 표시
    const handleShowCheckList = (dayNo, category) => {
        setSelectCategory((prev) => ({ ...prev, [dayNo]: category }));
        setShowCheckList((prev) => ({ ...prev, [dayNo]: true }));
    };

    // 카테고리에 따른 리스트 분류
    const filteredByCategory = (dayNo) => {
        const category = selectedCategory[dayNo];
        return category
            ? openDataList.filter((list) => list.category === category)
            : [];
    };

    // 체크박스 변경
    const handleCheckBoxClick = (
        dayNo,
        exerciseId,
        oneDayData,
        openDataList,
        checkedItems,
        setCheckedItems,
        setData,
    ) => {
        let items = checkedItems[dayNo] || [];

        let updateCheckedItems;
        let updateExerciseList;

        // 이미 리스트에 있으면 제거
        if (items.includes(exerciseId)) {
            updateCheckedItems = items.filter((id) => id !== exerciseId);
            updateExerciseList = oneDayData.exerciseList.filter(
                (exercise) => exercise.id !== exerciseId,
            );
        } else {
            // 리스트에 없으면 추가
            const addExercise = openDataList.find((ex) => ex.id === exerciseId);

            updateCheckedItems = [...items, exerciseId];
            updateExerciseList = [...oneDayData.exerciseList, addExercise];
        }

        setCheckedItems((prev) => ({ ...prev, [dayNo]: updateCheckedItems }));

        setData((prev) =>
            prev.map((dayData) =>
                dayData.dayNo === dayNo
                    ? {
                          ...dayData,
                          exerciseList: updateExerciseList,
                          kcal: handleCalculateCarolie(
                              updateExerciseList,
                              dayData.weight,
                          ),
                      }
                    : dayData,
            ),
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        for (const day of data) {
            const dayNo = day.dayNo;
            if (!checkedItems[dayNo] || checkedItems[dayNo].length === 0) {
                alert(`${dayNo}일차에 선택된 운동이 존재하지 않습니다.`);
                return;
            } else if (day.kcal < DAILY_BURN_KCAL) {
                alert(`${dayNo}일차 칼로리가 부족합니다.`);
                return;
            }
        }

        setFormData((prev) => ({
            ...prev,
            exerciseData: data,
        }));

        alert('폼 제출 완료');
        goToNext();
    };

    return (
        <form className={styles.container}>
            <p className={styles.title}>FIT-ROUTINE</p>

            {data.map((oneDayData, index) => {
                const dayNo = oneDayData.dayNo;

                return (
                    <div key={`${dayNo}_${index}`}>
                        <DayRoutine
                            data={oneDayData}
                            onClick={() => handleShowCategory(dayNo)}
                            checkedItems={checkedItems[dayNo]}
                            handleCheckBoxClick={(exerciseId) =>
                                handleCheckBoxClick(
                                    dayNo,
                                    exerciseId,
                                    oneDayData,
                                    openDataList,
                                    checkedItems,
                                    setCheckedItems,
                                    setData,
                                )
                            }
                        />
                        {oneDayData.kcal < DAILY_BURN_KCAL && (
                            <div className={styles.message}>
                                <p className={error.error}>
                                    칼로리가 부족합니다.
                                </p>
                                <p className={styles.burnKcal}>
                                    {oneDayData.kcal}/{DAILY_BURN_KCAL}
                                </p>
                            </div>
                        )}

                        {showCategory[dayNo] && (
                            <div className={styles.category}>
                                {categoryList.map((category, index) => (
                                    <Category
                                        key={`${category}_${index}`}
                                        text={category}
                                        onClick={() =>
                                            handleShowCheckList(dayNo, category)
                                        }
                                        isSelected={
                                            selectedCategory[dayNo] === category
                                        }
                                    />
                                ))}
                            </div>
                        )}

                        {showCheckList[dayNo] && (
                            <CategoryForm
                                dayNo={dayNo}
                                checkedItems={checkedItems[dayNo]}
                                openDataList={filteredByCategory(dayNo)}
                                handleCheckBoxClick={(exerciseId) =>
                                    handleCheckBoxClick(
                                        dayNo,
                                        exerciseId,
                                        oneDayData,
                                        openDataList,
                                        checkedItems,
                                        setCheckedItems,
                                        setData,
                                    )
                                }
                            />
                        )}
                    </div>
                );
            })}

            <button
                className={`${button.button} ${button.bold} ${styles.registButton}`}
                onClick={handleSubmit}>
                루틴 등록
            </button>
        </form>
    );
}

export default RecommendExercise;
