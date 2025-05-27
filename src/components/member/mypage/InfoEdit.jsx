import Info from 'components/common/Info/Info';
import styles from './InfoEdit.module.css';
import Input from 'components/common/Input/Input';
import Button from 'components/common/Button/Button';
import { useState } from 'react';

const checkForm = (formData) => {
    const errors = {};

    const {
        nickname,
        password,
        phoneNumber,
        height,
        weight,
    } = formData;

    if (!nickname) {
        errors.nickname = '닉네임을 입력해주세요';
    }
    if (!phoneNumber) {
        errors.phoneNumber = '전화번호를 입력해주세요';
    }
    if (!height) {
        errors.height = '신장을 입력해주세요';
    }
    if (!weight) {
        errors.weight = '체중을 입력해주세요';
    }
    
    return errors;
}

function InfoEdit() {
    const [formData, setFormData] = useState({
        nickname: '',
        password: '',
        phone1: '',
        phone2: '',
        phone3: '',
        phoneNumber: '',
        height: '',
        weight: '',
    });

    const [errors, setErrors] = useState({
        nickname: '',
        password: '',
        phoneNumber: '',
        height: '',
        weight: '',
    })

    // 새 비밀번호, 비밀번호 확인 입력 요소의 readOnly 값 상태관리 (기본: true)
    const [readOnly, setReadOnly] = useState(true);

    // 입력 요소 입력 시 onChange 핸들러
    const handleOnChange = (event) => {
        const { name, value } = event.target;
      
        setFormData((prev) => {
          const updated = {
            ...prev,
            [name]: value,
          };
      
          // 만약 전화번호 부분이 변경되었으면 phoneNumber도 업데이트
          if (['phone1', 'phone2', 'phone3'].includes(name)) {
            updated.phoneNumber = `${updated.phone1}-${updated.phone2}-${updated.phone3}`;
          }
      
          return updated;
        });
      };

      // 기존 비밀번호 인증 시 새 비밀번호/비밀번호 확인 입력요소 활성화 (readOnly값을 false로 변경)
      const handleCheckCurrentPassword = (event) => {
        const currentPassword = event.target.value;

        if (currentPassword.trim() !== '') {
            // 비밀번호가 현재 비밀번호가 맞는지 확인 로직 TODO
            // => 일치하면 setReadOnly(false); 해야됨.
            setReadOnly(false);
        } else {
            // 새 비밀번호, 비밀번호 확인 입력 요소의 value값 ''(빈값)으로 변경
            setReadOnly(true);
        }
      }
      
      // 수정 버튼 클릭 시 핸들러
      const handleEditProfileInfo = () => {
        // 입력받은 값을 가지고 회원 정보 update 로직 TODO
        const checkErrors = checkForm(formData);
        setErrors(checkErrors);

        if (Object.keys(checkErrors).length > 0) {
            return;
        }
      }

      // 취소 버튼 클릭 시 핸들러
      const handleRedirectProfile = () => {
        // 프로필로 다시 돌아가기 TODO
      }

    return (
        <>
            <div className={styles.subTitle}>정보 수정</div>
            <div className={styles.table}>
                <Info kind="nickName" text="닉네임">
                    <Input
                        size="long"
                        type="text"
                        id="nickname"
                        name="nickname"
                        value={formData.nickname}
                        error={errors.nickname}
                        onChange={handleOnChange}
                    />
                </Info>
                <Info kind="password" text="비밀번호">
                    <Input
                        label="기존 비밀번호"
                        size="long"
                        type="password"
                        id="pwd"
                        name="pwd"
                        error={errors.password}
                        onChange={handleCheckCurrentPassword}
                    />
                    <Input
                        label="새 비밀번호"
                        size="long"
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        readOnly={readOnly}
                    />
                    <Input
                        label="비밀번호 확인"
                        size="long"
                        type="password"
                        id="checkPassword"
                        name="checkPassword"
                        readOnly={readOnly}
                    />
                </Info>
                <Info kind="phone" text="휴대폰">
                    <Input 
                        size="short" 
                        type="number" 
                        id="phone1" 
                        name="phone1"
                        value={formData.phone1}
                        error={errors.phoneNumber}    
                        onChange={handleOnChange} 
                    />
                    <Input 
                        size="short" 
                        type="number" 
                        id="phone2" 
                        name="phone2"
                        value={formData.phone2}    
                        onChange={handleOnChange} 
                    />
                    <Input 
                        size="short" 
                        type="number" 
                        id="phon3" 
                        name="phone3"
                        value={formData.phone3}    
                        onChange={handleOnChange} 
                    />
                </Info>
                <Info kind="body" text="신장/체중">
                    <div className={styles.body}>
                        <Input
                            label="신장"
                            size="short"
                            type="number"
                            id="height"
                            name="height"
                            value={formData.height}
                            error={errors.height}
                            onChange={handleOnChange}
                        />
                        <p className={styles.p}>cm</p>
                    </div>
                    <div className={styles.body}>
                        <Input
                            label="체중"
                            size="short"
                            type="number"
                            id="weight"
                            name="weight"
                            value={formData.weight}
                            error={errors.weight}
                            onChange={handleOnChange}
                        />
                        <p className={styles.p}>kg</p>
                    </div>
                </Info>
            </div>
            <div className={styles.btnArea}>
                <div className={styles.btn}>
                    <Button 
                        size="short" 
                        text="수정" 
                        onClick={handleEditProfileInfo}
                    />
                    <Button 
                        size="short" 
                        text="취소" 
                        onClick={handleRedirectProfile}
                    />
                </div>
            </div>
        </>
    );
}

export default InfoEdit;
