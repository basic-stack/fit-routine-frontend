import GenderImage from 'components/common/GenderImage/GenderImage';
import styles from './Like.module.css';
import button from 'assets/styles/common/button.module.css';
import BlogGrade from 'components/common/BlogGrade/BlogGrade';
import { useNavigate } from 'react-router-dom';
import { deleteFollow } from 'utils/api/profileApi.js';

function Like({ memberId, gender, nickName, grade, fetchLikeList }) {
    const navigate = useNavigate();

    const handleDeleteFollow = async () => {
        const result = await deleteFollow(memberId);
        fetchLikeList();
        console.log(result);
    }

    return (
        <div className={styles.likeContainer}>
            <div className={styles.iconArea}>
                <div className={styles.icon}>
                    <div className={styles.genderIcon}>
                        <GenderImage gender={gender} />
                    </div>
                    <div className={styles.grade}>
                        <BlogGrade grade={grade} />
                    </div>
                </div>
                <div 
                    className={styles.nickName}
                    onClick={() => {navigate(`/blogs/${memberId}`)}}
                >
                    {nickName}
                </div>
            </div>
            <div className={styles.cutBtn}>
                <button
                    className={`${button.button} ${styles.deleteBtn}`}
                    onClick={handleDeleteFollow}
                >
                    관심 끊기
                </button>
            </div>
        </div>
    );
}

export default Like;
