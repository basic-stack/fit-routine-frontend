import { useEffect, useState } from 'react';

import styles from './ReSign.module.css';
import label from 'assets/styles/common/label.module.css';
import input from 'assets/styles/common/input.module.css';
import textarea from 'assets/styles/common/textarea.module.css';
import button from 'assets/styles/common/button.module.css';
import ReSignInfo from 'components/common/Info/ResignInfo';
import { Link, useNavigate } from 'react-router-dom';

function ReSign() {
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        email: 'squatqueen@gymfit.com',
        nickName: '스쿼트요정',
    });

    useEffect(() => {
        // 이메일과 닉네임을 불러오는 api요청: TODO
        const fetchInfo = async () => {
            // const result = await getInfo();
            // console.log(result);
            // setInfo(result);
        };
        fetchInfo();
    });

    const handleResign = async () => {
        alert("회원 탈퇴 클릭됨");
        // 1) 탈퇴 사유가 있다면 '탈퇴사유' 저장 api함수: TODO
        // 2) 해당 회원 탈퇴 api함수: TODO
        // 3) 토큰 삭제
        // 4) navigate('/');    // 메인 페이지로 이동
    };

    return (
        <>
            <div className={styles.subTitle}>회원 탈퇴</div>
            <div className={styles.table}>
                <ReSignInfo text="아이디" info={info.email} />
                <ReSignInfo text="닉네임" info={info.nickName} />
            </div>
            <div className={styles.reSignReason}>
                <div className={styles.reasontitle}>
                    Fit-Routine을 탈퇴하는 이유는 무엇인가요?
                </div>
                <div className={styles.reasonSubTitle}>
                    회원님께서 Fit-Routine을 탈퇴하는 사유를 알려주시면 보다
                    좋은 서비스 제공을 위해 노력 하겠습니다.
                </div>
                <div className={styles.reasonInput}>
                    <div className={styles.checkBox}>
                        <div className={styles.checkInput}>
                            <input
                                className={`${input.input}`}
                                type="checkbox"
                                id="badService"
                                name="reSignReason"
                                value="badService"
                            />
                            <label className={label.label} for='badService'>서비스 불만족</label>
                        </div>
                        <div className={styles.checkInput}>
                            <input
                                className={`${input.input}`}
                                type="checkbox"
                                id="personalInfo"
                                name="reSignReason"
                                value="personalInfo"
                            />
                            <label className={label.label} for='personalInfo'>개인정보 보호 우려</label>
                        </div>
                        <div className={styles.checkInput}>
                            <input
                                className={`${input.input}`}
                                type="checkbox"
                                id="downUseFrequency"
                                name="reSignReason"
                                value="downUseFrequency"
                            />
                            <label className={label.label} for='downUseFrequency'>사용 빈도 감소</label>
                        </div>
                        <div className={styles.checkInput}>
                            <input
                                className={`${input.input}`}
                                type="checkbox"
                                id="lack of contents"
                                name="reSignReason"
                                value="lack of contents"
                            />
                            <label className={label.label} for='lack of contents'>콘텐츠 내용 부족</label>
                        </div>
                        <div className={styles.checkInput}>
                            <input
                                className={`${input.input}`}
                                type="checkbox"
                                id="other"
                                name="reSignReason"
                                value="other"
                            />
                            <label className={label.label} for='other'>기타</label>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <textarea 
                            className={`${textarea.textarea} ${styles.textArea}`} 
                            name="reSignReason" 
                            id="reason" 
                            text="" 
                        />
                    </div>
                </div>
            </div>
            <div className={styles.btnArea}>
                <div className={styles.btns}>
                    <button 
                        className={`${button.button} ${styles.smallBtn}`}
                        onClick={handleResign}
                    >
                        회원 탈퇴
                    </button>
                    <button 
                        className={`${button.button} ${styles.smallBtn}`}
                        onClick={() => navigate('/mypage')}
                    >
                        탈퇴 취소
                    </button>
                </div>
            </div>
        </>
    );
}

export default ReSign;
