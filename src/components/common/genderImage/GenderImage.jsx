import { VscAccount } from "react-icons/vsc";
import styles from './GenderImage.module.css';

/**
 * 성별 이미지 컴포넌트
 * 
 * @param {string} gender - 성별 (male, female) 
 */
function GenderImage(
    {
        gender
    }
) {

    return (
        <div className={`${styles[gender]}`}>
            <VscAccount />
        </div>
    )
}

export default GenderImage;