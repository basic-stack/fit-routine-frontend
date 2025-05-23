import {useState} from 'react';
import styles from './BoardDetail.module.css';
import {VscTriangleLeft, VscTriangleRight, VscEdit, VscTrash, VscIndent } from "react-icons/vsc";
import Button from 'components/common/Button/Button';
import Likes from 'components/common/Likes/Likes';
import ReplyInput from 'components/blog/ReplyInput/ReplyInput';
import Reply from 'components/blog/Reply/Reply';
import { useNavigate } from 'react-router-dom';

export default function BoardDetail({boardId}) {

    const [imgCount, setImgCount] = useState(0);
    const navigate = useNavigate();

    const imgList = [
        {   /* 예시 이미지 리스트 */
            src:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALUAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA/EAABAwIDBQUFBgQFBQAAAAABAAIDBBESITEFE0FRYQYiMnGRFEJSgaEzYnKxwfAVI0PRU1SCkqIWRFXh8f/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAmEQACAgEEAQQDAQEAAAAAAAAAAQIRAwQSITFBBRMUUSIyUkIV/9oADAMBAAIRAxEAPwDdCRmLxtxKTctOZaD8lYuoYHHFhwnmFw00YZZpJPNdj1GNeTzfam/BXmCIssY2H/SFU1lXRxd1lEHu5ltlom0ruqlbRxHxRB/mov1DTruYXpMjXCME+8z7sgwj7oXWU9S7+hbzavQPZ4RpFGo30sT9WtHzU36xp15MvTchi4dm1Je3E23zWlptlShrLFgJtcclYR7OgBxFxKKe5rBZhyTx1ryq4opDQ7XyNp6aOmZcEOkGrinuG98SHmnAbcZHmE2KqDvFkuec2zuhBQXAYCGjCdU0PF78VFvgTcqN0jeaWxgzEonOtHYZBDb/AKppn6rGoke4jQXUUkMr9JAzzalvwnCRp1N0QFVU0M9rxyMJ5AWQUUj4qpjZhax4rRSNbI27deapNqQSNYb3czg4ZkLBRbwPcKdrg3eOPwnVVFRBtNkpkp6RznF2bTI0cURsurD4RnqbDqdSrgShS1Ooy4Y7oeBY4YSlTKdzdsv0o4W/imshptn7bnfd/s7Bp4j/AGWiMgXN8F5z9VzvyW+Jj+jNR7A2uP8Au6dn4QSpY+zNW77bajh+Bv8A7V/vWtyJy4Fc349NOqSXqWof+hlpsa8FL/0sf/J1X0SVx7Q1JJ87N/Q3xofySl7OQ9E0yAaKO6Y5zea86U5MvtSJTOUwzFQOkxaArl3dUv5y6RuCbeHmUsfVQjH0XHEsw4jfEeCvh02WWSO5cCynEsQ/uKF7wNFxr8LM0LNLfTJfUNpRo4qtkMtQceH3VEZ+q5KgZX20Umx6LEVf3j6pwn6qobMFI2fqjZqLPf8AVc3vVV3tAUzJW80bBQQZupXPamt1chJZgNFX1M1uJWsFGihrW/EFPIYai/e11WWjkLdSETFUuGjreSZMDQfSxezymMhuEOxR4RoTqrVrrtschzVGKguLS4gnFwVjHMHx+/b3TwTbVOLi/IOU7C7fePqukdXIZ0nVNMi4fjYr/UtvkEFsZFi53qm4WfE71UBk6ppl6ofHw/yHdIJ7nVJC77qkj7GL+TXL7D8JOr7JjsDOR80x5xjDoULviJd1KLOGh5qcNNix+A7pMKMgGiaJFA54abHTmmF+7kzPdOiq6XQHbCsfVRul/msHBoTA7PFwULXN3mJxv5Ip8gosL4hhDtdEDNIQ91iO7knPe1rZJCbFuTQEC4kNJcbk63VZPgCRyoqcPEqlq9qRR6vy65ILtdtKpoNmSuowHVDnNY0u0bfK68lqK8yOlkqZqiecnJ5lLbdbD9+a0Y7gt0ex020Gy2s4G+luKKFSG6leadja+V2JhmkeScnF1xpotw10jxe2fJaqCHNrB3s0RHVjCqh8ErGl1j3nj9EREx48WWV1gUHvqOqq6vaMcb24ingTzNxNBaz4jkFRbdFPBB35Xb4ZXb3rfL+6IC2btON3H0zCMgqmc14v/FKyKpvDV1UdnG38zLXiMvqt52Y2tLtKiIqWhtTE6zi3IPFsimapGTTNk2owPaYySMWivKedrs2OyOZF8xl5XWQpJnGdrDlc2C0VG3BLK0ZWNx1Fk0GK0WjZMUId7wyKaXobZ8m9ilP3suo/ZUpUp9jLofjXMXVRkrl1MYkxJKLEksag5kzi/dyZPGh5qOqG9bceNn1UlbGXN3kerfqhRLne+aD7pmR2OUSR4Xap2LGN0/hoSh3nC+7dE5z8WYU0xh7pHNhcOKioJA5zg5OlfiicQg6YlswzPeyQT5N4D6yRjhFGLXvdyCq6gM7jM3fRR1tQTWOwsAytkFAVWTAkUPaWnlqtnS7sYnxkSBvOxBP0uvPqfZENZWti9lqXB5viicW287h35L15sTnnCGEjm0Zq12dsrZ8IEsdM+N+pLm5/I8E2N0adGV7N9hY6WAvbUVDXPdiLHtAI9Lg/TyWqg2C2PCXXPUqxDo4zcOt5qo232tg2fJ7My0k+viyZyHUqnbEstZNkQvzMYDbB1uoyQ8uzGNFmRtc85dGrOf8AXExbZ4h/FcgI7ZvaiCpcGyOAc82uDkeWaekB2GVGxnzC0k4A+6sL2s7F1swD6apiwtde7zhIy6ar0UVBl8BCjnpaicWxQ25PBWS5M2fOW0dmmirTC64DOOEjF1HTqtf2Rgnpo3zyNw7x/dB1wgAX9VuNsdj2TzNqXUccj2eHdOv/AMT+ip3xOgcY3xOaR7p1SzlwNBIOoY97WC3ui6voZSYnSHJ4iNzcKn2PcMknAuW5K1ktHs8tDiMRDc+X7sjF0hZdhOxbuDmjF4Tw6Ityr9jG02WWaNe7Dq4JJhicK4ml33guYm81MJ1JcxN5pLGC9+6N26dc20PNBymz8slJVPxWcPE1QON9Uk3Yw8PXLrgCSnTNY9pxBwGigtZ4twdkpYnd9dLMT8kY8MIC5stRWkRg4i7Tgrem2ZEz7UOldyGgU1HTxwA3tikzKMZMR4BZWSsRs42EMFmtDRyAUb2Fp6/VSumAzb3nc9B6IaWbK9zfkqKkJyB15cGOsCfkvDu1NTJLtlksT5Hyh5L8jbXRe11j3OYbfNeP9rKSso6yURML4nEvBGueSZDXRSbWrnPjc2J58eduCtOy1WNy2F9QC597NLxcEaWCzrXveHMawlxdcn5LWdiqIOkfNVMaATaMBg4eI+eY/ZT8UBSdnp3Z99Q+Fu8c4vy4LTQOmGrSfqsnQSOeyPvESNyOevXqriGte4WcPmlsBeuYyVn8yNpVJtjYzJ2jDcge7/Y8PqOnFFQ1b+YRYqMWov5LOjGViojR07QwPDXuu+47w6ELu0fDEzkMR/fyC0lREyXvMEZd1aFntqFrZnB0TmnS4OXoUPBvJ3ZDw2a188tBki6lobLI0jR5/NV+z3He2vx+iuNqQmMMqBmyWxvydbNGSuJkwKw5BKybvAnh4UjWcwpJ2JJbaNZI/vPyUbwppG4FE8qcg2IJriliUUj1OzHd5gRwFjibnxVO+RWdDM2WDXvAWKK7DaDoyAcTjd51vwXJKkA2GY5qF6GecrKjdG7CDUFRuke43yQ7npb3D3uCG81D6hw5rIdoN21jnSixN7kG9hrf5ZAdbLRSvc/wZrP7W2JUVLd44StJdjyBzP5W6c8/JlM20x1PQU8c75m4CMQuL5AHUfp6LR7IbBiBjIIDsbcOoOv1BP58DbO12xJu9FDHuWtaSI2tJFzYEgk56DIknzyCs9gUdVCd5GHteAA6N5yIBvkelzlwVJTVWCjZUVsEbr95hIcORBsrAPx97R3RVUYsS4ZB2eXP9gIpkpJu4WUvcGosYpVYU8ttFRNeeaMpp+qdTTEouBJnc5Yc/NUW3HgvsLg2ueXzVm9+KHEPFhVFXSPe6xdf/wCJxaG0ZLX90k/otjTUw2js8QSd0OaXB1j3Xc1jaQW0W02M8+z3cQTfUKsOeASMlUtlpKl1PMLStNiPyKTZfvK27fUM4pm7Uo2h74gGzMPw8HfL9VgRtOrb/RafJLLDPwiMssY9s1e9HxFJZn+I1n+E31K4h7WT6B8jH9m5nQj3IqpdhZmqerrYoBikd8gubIndIvaXYQ+UBCzVAHIeZVHVbZmlfaFojZ11VdNNPL9o8nyKMNPNkZ6mKNBLWxf4rfVR0m3I4Klu6eHEkDABe+azojx+6Vr+wGw99VO2hUs7sWUQI1dz+Sr8ZIWGolN0jROa8Cz24Xa2KgmjI8Oav9oUZmbjbm5v/IKoGQwvaL6aJZxo7Eyrka9QPL3OsL25K4fEHaAeiFdT20C55QaHBGhx8It5JzWyDR7vVGthDU0sUraGoEMAJuWgnyTH0wGjR6Ipxw6oYVZ3uBzQRzCNsxDuLCwCQiKLfZJoHeyTAB2sKmhYcaiOPHfFlyRlIwuxEi4tzsVWMRGTYnYXZZ6dVUVQbwbfhy6K8c20OEjCdLWOqpqsEuw/vn+S6UIRQXxrXbFfaF1mjhw4rKxAd3pqtLsEl5LLnw+ipj7Fl0Xkbo5mOjfchws4HiOSz1f2Ri7z9nu3ZGsb9PXgr5rcBuioy12pv5rqTpkJwjNcmB/gu0P8qfp/dJehbsc0k/uM5/ix+zz/AG1UinhJOp0Cxs5kmkc55JvpcrQ9o3GWpZED4QqkRfGuWGJd+Rc+Vt14AGwB3AoqKhaNQT5omCIM8ZUj52cCuiOM5JZBkFIJXsijj77yAMl6XsyjZR0cNPCLbsa8ysd2SZ7TtLfaiIXz4Fb3FhYpZKTo9DSR/Dcxk825Zl4lRytu/NWVRmbnMoQwvf4R6rjm7Z3x6BSE0ow03VNEDVNjoDLHO0CW6cPtLfJEyyRxC124uSAlqsX2Y9VzyGIZ2YtFGynjj7xPeUmN3JNIubnNZBGOez3RiUL5JD4SB5BSlpTwzdi7xc8AE3QtEMcQDMcoNho0cUSJGte02GLQt5jJMll3eZzPIKFvfkxcEYyp8AaLMm0eEZHIt65Kqqruku2wvYi6MfLiyBzw/v6IZ0d9RfhmulMUjjjINhmforzs+/d1LQTlcZqrZGALA2R1C/dTNPBPF0xZLg1k0aga50b80RTyNmw53yTpmsw3yuutckXwR+0j4Xf7V1DYmdPVJawHne0Ly18htxte/RDyM8PdKbMS6rleJffP5ogGRzMjdVhHg8fJL8mCSwyP1fh+SElpXjwvxfOysZHlupAULg54sA0u5BUcoonHHJ+C+7CMdH7TcjUfktdPOMGHisV2XkfCZi4Wa4jPqr51S5+XFcGaX5M9rTRrErLJj973uA1U9rmwyHMqukrIdnQ4HkPldnhHAqrq9r1lT3W2iZyZr6rkckjtUXRe1MsMDf50gaeXFVFVtTH3aVoA+IqpFQQ68ri6+rnG5CjkmDJLcOajKTY6iGXLzdxJPMrpCHima7ipTIpOwtEoXCoHTgeJwCgfXxjQ3QbZtrLBgbfE/RQS1DQcsz8XBV7q4vFjIAo/bIm6vZ6oqw0w0HO6lbkzLJU8m2aSLxSj1uoXbe3mVPBLIfutJCpHauwOLL9uRxOcAuS1EMXiePmqEO2pWDOGZjfhDHN+qLpNk1zv6Dh5uH910J8CNJB5rY/cBREEznP4plPsOrAvI6Fg88/yVtSbJbH9rVM+TQP1T7ortiO/BdbCZIYHySXto2/JP2lVGGOzbOcQcLdLlOjqooYmRMc3D0BUUwo5n45mPe8DDYkgW8lT5mCK/Yi4Sb6POpp+1G9f/LcO8cm6fJJeiWov8uPQJI/9DB9kfh5Ptnm2KISvBvixG4I0N+Kdvt3E5wyWtmo4toR3qYmtcdJND8lV1HZhslJuo6203xYRh9L3VIa3FXLo5suhyJ8Ix+16x1Kxr3hzr6N4kquodrzuqY2GFguQLsJGvmtftHstW1MAuYH4dC2TM+WSDoOytdG0SNp2NIN2ieQA3+Wak80G/wBjqhicV0aWmp91RtwjU4l1s+6a6XxYRkDxPVG0sUjYGsmw4mtsbOFj9VC+hZiP81gafENQufJnx/0dMIP6Kh75C4yyElz8zc8VBJWBowtBKt5KNhbZ0lxzay6F/h1ODkZXHqQFwZNbgj3I61GX0U8lRIRZzSEPNVvwZk/LNaL2Rjvc/wBxS9mDfDl5Ljl6nhXQygzOQz1fuwSg8y02U/tO1Xi0dM0fee8WVvuPvFRiE3vx5qUvU14Q6xlI6l2lK/FUVULOjL5fkpY9lvP2lTKfwAD81cthapmsHILml6jLwhqKduxqc+J07v8AWR+SIj2JQM1pQfx3KtWtHJSxjExyi/UM76NQJBQU0XhpYB5NCKju0Wa1o8gusapN2mjqdTL/AEJSExz/AIh6J4c/43eqfuiG4gpxC3ArKWR9sFIiwEHEM0VHH73BdhaLWsFMwZYUyi32Ckda1PzXAUiU+0w5JcxBdVBQCOMMY1t810tHNDmU8yuGXqVwLLDottJ3MGeeqjlyZllc2HkohK46pjpXOlA4N4LSzIG0IcMLM0nDuKFzydSV0yOSvImFRHyDK3Dko3MaG5FJ7jzKYubLJS8DJURFMPhUjwmlqgrCQFNAUpam4EyMMAUjV1saexiZRbAdgGNzmp9P4nDglCME7XcDqnPbuprt05LrxwSpiNj3swPUxaN1e2aZI7FFfjzXI5bx4SbrrW1ChLCHQ6LsLwWZ5oaKTC63DkkJMDrcEdxgyOQNfmn7zO6BdJ1SdL1KHuUag4yJGVAmU8ylveqX3TBe+PJJCb3qUk/uAoZZcskkvMXZYQTI83uPUpJJZdsx26kCSSqooB3AEsAXUlXbGgDJGBMDAkkl2oxxrAuYBhXUku1GOhoXcISSTpAEQEnLiSawHATa3BMBtokklk2E7ddcV1JJuZhElNJXUkjkzHAVwlJJK2wjrpJJK9sWj//Z'
        },
        {
            src:'https://i.namu.wiki/i/rJiPULKVCLRA6iNpP5RJ1od8cGu8oaXEPeunN-BForUSvlqwjAPZlKqJ7sYjHZN-gT-YP9zPG5UagsP0u4c1eA-3uXNc1wjQpa2E7oexlZSiRpPqdCw_jBhDGyWk-fB6l9S-OkfRQsiCUJJj9TSyCw.webp'
        },
        {
            src:'data:image/jpeg;base64,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'
        }
    ];

    const prevImgHandler = () => {
        const count = (imgCount === 0) ? (imgList.length - 1) : (imgCount - 1);
        setImgCount(count);
    }

    const nextImgHandler = () => {
        const count = ((imgList.length - 1) === imgCount) ? 0 : (imgCount + 1);
        setImgCount(count);
    }

    // 수정 클릭시 해당 게시물에대한 수정 페이지로 이동 함수
    const boardEditHandler = () => {
        // navigate('/board/edit?boardId='+boardId);
    }

    // 삭제 클릭시 삭제 여부 + 삭제 api 요청 함수
    const boardDeleteHandler = () => {
        const isDelete = window.confirm('해당 게시물을 삭제하시겠습니까?');
        if(isDelete === true) {
            alert('삭제!');
            // api요청
        }
    }
    
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.boardTitle}>
                    <span>운동 인증을 하는 이유</span>
                    <div className={styles.boardEditContainer}>
                        <div className={styles.editBtns}>
                            <Button size='small' text='수정' onClick={boardEditHandler}/>
                        </div>
                        <div className={styles.deleteBtns}>
                            <Button size='small' text='삭제' onClick={boardDeleteHandler}/>
                        </div>
                    </div>
                </div><br/>
                <div className={styles.nameDate}>
                    일김현 / 25.05.01
                </div>

                
            </div>

            

            <div className={styles.flex}>
                <div className={styles.imageContainer}>
                    <button className={styles.imgBtn} onClick={prevImgHandler}><VscTriangleLeft /></button>
                    <div className={styles.image}>
                        <img className={styles.img} src={imgList[imgCount].src}/>
                    </div>
                    <button className={styles.imgBtn} onClick={nextImgHandler}><VscTriangleRight /></button>
                </div>
            </div>
            <br/>
            <div className={styles.boardContent}>
                {
                        ("안녕하세요, 김일현입니다. 저는 소통과 협업을 중시하는 개발자로, 팀워크 속에서 성장하는 것을 즐깁니다.\n현재는 React, Node.js 기반의 웹 개발에 주력하고 있으며, 사용자 중심의 UI/UX 설계에도 많은 관심을 가지고 있습니다. \n새로운 기술에 대한 호기심이 많아 꾸준히 학습하고, 문제 해결을 위해 논리적으로 사고하려 노력합니다. \n틈틈이 운동을 하며 건강도 챙기고, 다양한 사람들과의 교류를 통해 시야를 넓히고 있습니다.")
                            .split('\n')
                            .map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                            ))
                }
            </div>
            
            <div className={styles.heartContainer}>
                <Likes count={213} isBig={true}/>
            </div>
            
            <ReplyInput/>

            <div className={styles.replyListContainer}>
                <Reply/>
                <Reply/>
                <Reply/>
            </div>

        </div>
    )
}