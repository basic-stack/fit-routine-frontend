import MyPageForm from 'components/member/mypage/MyPageForm';
import ReSign from 'components/member/mypage/ReSign/ReSign';
import styles from './MyPage.module.css';

function MyPage() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                마이페이지
            </div>
            <div className={styles.content}>
                {/* <MyPageForm /> */}
                <ReSign />
            </div>
        </div>
    );
}

export default MyPage;