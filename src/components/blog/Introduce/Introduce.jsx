import { VscEdit } from 'react-icons/vsc';
import styles from './Introduce.module.css';
import buttons from 'assets/styles/common/button.module.css';
import { useState } from 'react';
import IntroduceEdit from 'components/blog/IntroduceEdit/IntroduceEdit';
import { editIntroduce } from 'utils/api/blogApi';

/**
 * 소개글 컴포넌트
 * 
 * @param {string} intro 블로그 소개글 내용
 *  
 */
function Introduce({intro, nickname}) {
    const [isEditClick, setIsEditClick] = useState(false);
    const [introduce, setIntroduce] = useState(intro);

    const handleEditClick = () => {
        setIsEditClick(true);
    }

    // 소개글 수정 후 수정버튼까지 클릭했을때
    const handleEditCompleteClick = async (content) => {
        const result = await editIntroduce(content, nickname);
        setIntroduce(result.introduce);
        setIsEditClick(false);
    }
    
    const cancelClick = () => {
        setIsEditClick(false);
    }

    return (
        <div className={styles.introduceContainer}>
            { !isEditClick && 
                <div>
                    <div className={styles.introduceHeader}>
                        <button className={`${buttons.button} ${styles.editBtn}`} onClick={handleEditClick}>
                            <VscEdit/>
                        </button>
                    </div>
                    <div className={styles.introduceText}>
                        {introduce}
                    </div>
                </div>
            }
            {isEditClick && 
                <IntroduceEdit introduce={introduce} onClick={handleEditCompleteClick} cancelClick={cancelClick}/>
            }


        </div>
    )
}

export default Introduce;