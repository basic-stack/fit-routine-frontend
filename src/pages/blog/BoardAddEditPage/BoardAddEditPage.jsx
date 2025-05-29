import Input from 'components/common/Input/Input';
import { useState } from 'react';
import styles from './BoardAddEditPage.module.css';
import CategorySelect from 'components/blog/CategorySelect/CategorySelect';
import Button from 'components/common/Button/Button';

/**
 * 게시물 추가 및 수정 페이지
 */
export default function BoardAddEditPage() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const options = [
        { label: '근육 증진', value: 'muscle' },
        { label: '체중 감량', value: 'diet' },
        { label: '체력 증진', value: 'stamina' },
    ];

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const categoryHandler = (event) => {
        setCategory(event.target.value);
    };

    const contentHandler = (event) => {
        setContent(event.target.value);
    };

    return (
        <div className={styles.pageContainer}>
                <div className={styles.formHeader}>
                    <input className={`${styles.long}`}
                        placeHolder="*제목을 입력하세요."
                        type="text"
                        value={title}
                        onChange={event=>titleHandler(event)}
                    />
                    <CategorySelect
                        options={options}
                        value={category}
                        onChange={event=>categoryHandler(event)}
                    />
                </div>
                <div className={styles.attachFile}>
                    <input
                        type="file"
                        className={styles.fileInputBtn}
                        id="fileInput"
                    />
                    <label htmlFor="fileInput">
                        <button className={`${styles.short}`} type="button">파일첨부</button>
                    </label>
                    <div className={styles.imgContainer}>
                        <table className={styles.table}>
                            <tr>
                                <td>
                                    <img src="/jae3.jpg" />
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <textarea
                    className={styles.boardContent}
                    value={content}
                    onChange={event=>contentHandler(event)}></textarea>

                <div className={styles.btnContainer}>
                    <button className={`${styles.short}`}>등록</button>
                    <button className={`${styles.short}`}>취소</button>
                </div>
        </div>
    );
}
