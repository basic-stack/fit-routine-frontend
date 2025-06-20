import { useEffect, useState } from 'react';
import styles from './PopularPosts.module.css';
import BoardPreview from 'components/blog/BoardPreview/BoardPreview';
import { getPopularPostTop3 } from 'utils/api/mainApi.js';

function PopularPost() {
    const [postData, setPostData] = useState(
        [

        ]
    );

    useEffect(() => {
        const getboard = async () => {
            const result = await getPopularPostTop3();
            setPostData(result);
        }
        getboard();
    }, []);

    return (
        <>
            <div className={styles.title}>인기글 Top 3</div>
            <div className={styles.post}>
                {postData &&
                    postData.map(post => {
                        return (
                            <BoardPreview
                            imgSrc={post.originName}
                            boardWriter={post.nickname}
                            boardTitle={post.title}
                            boardId={post.boardId} />
                        )
                    })
                }
                {(!postData || postData.length === 0) &&
                    <p className={styles.error}>아직 조회되는 게시글이 없습니다.</p>
                }
            </div>
        </>
    );
}

export default PopularPost;
