# Git 규칙

**GitHub Flow**를 사용하도록 합니다.

<hr/>

### 브랜치 명

: 케밥 케이스 사용

- 개인 작업 브랜치 : feature/작업내용-동작(추가/수정/삭제)
- Issue등록 후 fix브랜치 : fix/작업내용-동작
  <br/>

ex) feature/main-page-calculator-추가
ex) fix/main-page-calculator-수정

<hr/>

### 커밋 메세지

: 명확하게 작업한 기능 + 동작(추가/수정/삭제)
<br/>

ex) mainPage완성 / 공통 button 컴포넌트 수정

 <hr/>

### 그 외 규칙

- main브랜치가 최대한 최신버전을 유지할 수 있도록 브랜치 생성 시 작업하는 브랜치 기능을 자세하게 나누어 생성 후 작업하기

 <br/>

- 각자 기능/페이지 완성하면 바로 PR생성 하고 카카오톡으로 공유하기

 <br/>
 
 - 생성된 PR은 코드리뷰 후 2명이상 확인 시 메인으로 merge하기

 <br/>
 
 - 작업 중간에 공통으로 영향이 가는 부분에 수정이 생기는 경우 <br>
 기존 작업 하던 브랜치에서 commit해놓고, main브랜치로 이동하여<br> 
 새로운 수정 브랜치 생성해서 수정사항 적용 후 PR 생성하여<br>
 공유하고 main브랜치로 병합하기

 <br/>

- 최대한 자주 main브랜치 상태 pull받기
