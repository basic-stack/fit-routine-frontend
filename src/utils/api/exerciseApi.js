// 랜덤 추출할 루틴 정보
const getMockData = () => {
    return [
        {
            todoNo: 1,
            repeatsDay: 3,
            templateNo: 1,
            dayNo: 1,
            weight: 60,
            exerciseList: [
                { id: 1, name: '런지', met: 3, category: '근력' },
                { id: 2, name: '크런치', met: 4, category: '근력' },
                { id: 3, name: '걷기', met: 3, category: '생활운동' },
                { id: 4, name: '달리기', met: 3, category: '유산소' },
                { id: 5, name: '수영', met: 3.5, category: '유산소' },
                { id: 6, name: '줄넘기', met: 3, category: '유산소' },
                { id: 7, name: '등산', met: 3, category: '생활운동' },
                { id: 8, name: '바벨 운동', met: 3, category: '상체' },
                { id: 9, name: '에어로빅', met: 3, category: '생활운동' },
                { id: 10, name: '스쿼트', met: 3, category: '하체' },
            ],
        },
        {
            todoNo: 1,
            repeatsDay: 3,
            templateNo: 2,
            dayNo: 2,
            weight: 60,
            exerciseList: [
                { id: 1, name: '런지', met: 3, category: '근력' },
                { id: 2, name: '크런치', met: 4, category: '근력' },
                { id: 3, name: '걷기', met: 3, category: '생활운동' },
                { id: 4, name: '달리기', met: 3, category: '유산소' },
                { id: 5, name: '수영', met: 3.5, category: '유산소' },
                { id: 6, name: '줄넘기', met: 3, category: '유산소' },
                { id: 7, name: '등산', met: 3, category: '생활운동' },
                { id: 8, name: '바벨 운동', met: 3, category: '상체' },
                { id: 9, name: '에어로빅', met: 3, category: '생활운동' },
                { id: 10, name: '스쿼트', met: 3, category: '하체' },
            ],
        },
        {
            todoNo: 1,
            repeatsDay: 3,
            templateNo: 3,
            dayNo: 3,
            weight: 60,
            exerciseList: [
                { id: 1, name: '런지', met: 3, category: '근력' },
                { id: 2, name: '크런치', met: 4, category: '근력' },
                { id: 3, name: '걷기', met: 3, category: '생활운동' },
                { id: 4, name: '달리기', met: 3, category: '유산소' },
                { id: 5, name: '수영', met: 3.5, category: '유산소' },
                { id: 6, name: '줄넘기', met: 3, category: '유산소' },
                { id: 7, name: '등산', met: 3, category: '생활운동' },
            ],
        },
    ];
};

// 공공데이터 정보
const getMockOpenData = () => {
    return [
        { id: 1, name: '런지', met: 3, category: '하체' },
        { id: 2, name: '크런치', met: 4, category: '상체' },
        { id: 3, name: '걷기', met: 3, category: '생활운동' },
        { id: 4, name: '달리기', met: 3, category: '유산소' },
        { id: 5, name: '수영', met: 3.5, category: '생활운동' },
        { id: 6, name: '줄넘기', met: 3, category: '유산소' },
        { id: 7, name: '등산', met: 3, category: '생활운동' },
        { id: 8, name: '바벨 운동', met: 3, category: '상체' },
        { id: 9, name: '에어로빅', met: 3, category: '생활운동' },
        { id: 10, name: '스쿼트', met: 3, category: '하체' },
        { id: 11, name: '계단 오르기', met: 3, category: '생활운동' },
        { id: 12, name: '벤치프레스', met: 3, category: '하체' },
        { id: 13, name: '플랭크', met: 3, category: '상체' },
        { id: 14, name: '레그프레스', met: 3, category: '하체' },
        { id: 15, name: '필라테스', met: 3, category: '유산소' },
    ];
};

export { getMockData, getMockOpenData };
