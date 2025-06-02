const calcTotalCalorie = (prop) => {
    let sum = 0;
    if (prop.category === 'menu') {
        prop.list.forEach((element) => {
            sum += element.calorie;
        });
    } else if (prop.category == 'exercise') {
        prop.list.forEach((element) => {
            sum += element.met;
        });
    }
    return sum;
};

const calcTotalPeriod = (startAt, endAt) => {
    const end = new Date(endAt);
    const start = new Date(startAt);
    const diff = end - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
};

const calcDay = (date) => {
    const now = new Date();
    const day = now - date;
    return Math.floor(day / (1000 * 60 * 60 * 24));
}

// mainpage-calculator 유효성 검사 함수
const checkForm = (formData) => {
    const errors = {};

    const { age, gender, height, weight } = formData;

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
}

export {
    calcTotalCalorie,
    calcTotalPeriod,
    calcDay,
    checkForm, 
};