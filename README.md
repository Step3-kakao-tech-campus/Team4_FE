# [MatGPT] 외국인을 위한 음식점 정보 제공 및 주문 도움 서비스 - 부산대 4조 FE

**배포 주소**

https://k4cd71a7a9c51a.user-app.krampoline.com/landing

### 프로젝트 소개

우리의 혁신적인 음식 리뷰 플랫폼은 다국적 사용자들에게 다양한 언어로 맛과 멋을 소개하며, ChatGPT를 활용한 개인 맞춤 주문 도움말과 음식에 달린 태그를 통해 사용자들은 손쉽게 원하는 음식을 발견하고 주문할 수 있습니다. 눈으로 먼저 맛보는 차원의 음식 탐험을 지금 시작하세요!

### 개발 동기

해외여행을 가서 음식점에 대한 정보를 얻기 힘들며, 원하는 음식을 제대로 주문하기 쉽지 않았습니다. 리뷰를 봐도 이 음식이 그 음식인지 모르는 경우도 빈번했습니다.

### 기대 효과

외국인이 음식점의 좋은 리뷰 요약과 안 좋은 리뷰 요약을 통해 음식점의 전반적인 평가를 알 수 있으며, 여러 나라의 언어로 번역하여 제공되는 서비스이기 때문에 어느 나라에서도 서비스를 사용할 수 있습니다. 또한, 음식 리뷰에 달린 태그를 통해 해당 음식이 어떤 음식인지 확실히 알 수 있습니다. 작성된 리뷰를 보고 해당 음식을 주문하고 싶은 외국인은 그 음식을 바로 요구할 수 있으며 해당 나라의 음식 문화에 맞게 ChatGPT가 주문을 도와줌으로써 주문을 더 수월하게 가능하게 하는 효과를 기대합니다.

### 개발 기간

2023.09.15 ~ 2023.11.11

### 팀원

### FE
김선우 [@coririri](https://github.com/coririri)
  
이동현 [@HENOZIWD](https://github.com/HENOZIWD)
  
### BE
공희찬 [@nimunsang](https://github.com/nimunsang)

이승현 [@pigglehyun](https://github.com/pigglehyun)

조민기 [@ChoMinGi](https://github.com/ChoMinGi)

조영진 [@jinc20](https://github.com/jinc20)

## 기술 스택

### 개발 환경

[**Create-React-App**](https://create-react-app.dev/)

### 라이브러리

- **react 18.2.21**
- T**ypescript 4.9.5**
    - 좀 더 명시적이고 안전한 타입 활용으로 생산성을 높이기 위해 사용했습니다.
- **eslint 8.49.0**
    - 원활한 협업과 코드 컨벤션을 준수하기 위해 사용했습니다.
- **tailwindcss 3.3.3**
    - 별도의 CSS 파일 관리 없이 생산성을 높이며 스타일링을 적용시키기 위해 사용하였습니다.
    - eslint 플러그인과 함께 사용하여 동일한 컨벤션을 준수하도록 작업했습니다.
- [@react-google-maps/api 2.19.2](https://www.npmjs.com/package/@react-google-maps/api)
    - 지도 기반 UI를 통해 전 세계 사용자들에게 향상된 음식점 찾기 경험을 제공하기 위해 사용 됨.
- **[reduxjs/toolkit 1.9.7](https://redux-toolkit.js.org/)**
    - 모달 처럼 다양한 컴포넌트에서 공통으로 사용되는 상태 값을 전역으로 효과적으로 관리하기 위해 사용하였습니다.
- **[axios 1.5.1](https://axios-http.com/kr/)**
    - 효과적이고 편리하게 네트워크 요청을 관리하기 위해 사용 됨.
    - 대표적 활용 예시: 요청,응답 intercecpt, 데이터 자동 JSON 변환, 직관적인 코드
- **[react-query 3.39.3](https://tanstack.com/query/latest)**
    - 데이터 캐싱과 api 요청을 효율적으로 처리 하기 위해 사용 됨.
    - 무한 스크롤을 구현하기 위해 해당 라이브러리의 `useInfiniteQuery` hook을 사용했습니다.
- **[react-i18next 23.5.1](https://react.i18next.com/)**
    - 글로벌 사용자들에게 각 국가에 맞는 언어로 서비스를 제공하기 위해 사용했습니다.
    - 컴포넌트에 사용되는 정적인 콘텐츠들을 사용하는 언어에 맞게 제공합니다.
- **[react-easy-crop 5.0.2](https://www.npmjs.com/package/react-easy-crop)**
    - 리뷰 작성 시 이미지 크기를 손쉽게 조절할 수 있도록 도와주기 위해 사용하였습니다.

## 집중했던 부분들

### **접근성**

- aria 속성들을 최대한 활용하고, 모달이 열려있을 때 focus가 모달 밖으로 나가지 않도록 하는 등 웹 접근성을 고려하여 구현해보았습니다.

- 색상 대비등을 고려하여 가시성을 해치지 않도록 노력했습니다.

- 서비스 특성 상 모바일 사용자들이 많을 것으로 예상하여 우선 모바일 화면에 맞추어 UI를 구성했습니다.

### **서비스 브랜딩 UI/UX 경험**

- *통일된 브랜드 색상 사용*
    
    
    `lightblue: '#C9D2FF'`
  
    ![lightblue](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/bb96e12e-e3f0-44c9-bb7b-225120c3d04b)

    
    `gray: '#808080’`
    
    ![gray](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/e1ba8a02-4376-42fd-b6fc-9df38841a7ef)

    
    `blue: '#5b76ff'`
    
    ![blue](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/801c8871-61a7-46a1-a8d4-7808d7025262)

    
    `red: '#ff5d5d'`
    
    ![red](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/128fca3a-450a-4351-8942-5d16e376cc4f)

    
- *자주 사용 되는 UI의 통일*
    - 버튼
        
        ![cancelButton](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/c65c1aa9-5149-4524-b341-5f83a9ef12dd)

        ![deleteButton](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/cf0b3e0a-8859-4fc3-92cd-e8ce713f1fbc)

        ![okButton](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/ee7603c8-b13d-4085-a4e2-01612a0c6f68)

        
    - 페이지 제목 카드
        
        ![pageTitleCard](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/b55139d9-807e-4eb6-b1f7-6f92d86c5806)

        

### 비동기 요청 에러 처리

- 비동기 요청에서 에러 발생 시에 빈 화면이 렌더링되는 등 UX를 해치는 동작을 방지하기 위해 데이터 유효성 검사, 에러 캐칭 등을 적용하여 구현했습니다.

## 주요 기능 및 구현 방법

### 기능1. **지도 범위 내 음식점 검색**

1. **동작 과정 영상**
    
    

    https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/68d694fc-cd4f-4de1-8a44-dab61e0744c9


    
- **구현 방법**
    - 구글 지도 라이브러리를 이용하여 현재 지도 화면의 좌하단 좌표(최소 경위도), 우상단 좌표(최대 경위도)를 얻은 뒤 해당 값과 함께 백엔드에 요청을 보내 범위 내 음식점을 가져오도록 구현하였습니다.

### 기능2. 다국어 지원

- **동작 설명**
    1. **랜딩 페이지 또는 하단 네비게이션 바 에서 본인의 서비스 언어를 선택 합니다.**
        
        ![lang1](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/4861bbdb-757c-4a29-9a6c-db76b6482e20)

        
    2. **페이지의 서비스는 사용자가 선택한 언어로 번역되어 제공됩니다.**
        
        ![lang2](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/fd28f2ca-de30-41b5-8c9c-e731233fca72)

        
    3. **리뷰 내용을 사용자가 선택한 언어로 번역할 수 있는 기능을 제공합니다.**
        
        

        https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/c90d7806-3c33-4e9e-b589-55d40bb32acf


        
- **구현 방법**
    - 사용자의 언어 설정을 i18-next를 통해 불러와 리뷰 내용과 함께 구글 번역 API로 요청을 보냅니다.
    - 원문 내용, 번역된 내용을 함께 보관하여 토글 방식으로 보여줄 수 있도록 구현하였습니다.
    - 번역 되었는지 여부를 알려주는 flag를 선언하여 이미 한 번 번역되었다면 다시 번역 요청을 보내는 것이 아니라 저장된 번역 내용을 보여주어 불필요한 API 요청을 방지합니다.

## 주문 프롬프트 생성 기능

- **기능 설명**
    - 음식점 리뷰에서 메뉴 태그를 선택하여 주문 프롬프트에 메뉴를 추가할 수 있습니다.
- **동작 과정 영상**
    
    

    https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/7cab8a8d-3c90-438f-b47f-e7b128010265


    
- **구현 방법**
    - 사용자가 리뷰를 작성 할 때, 사진의 원하는 위치에 메뉴 태그를 삽입할 수 있게 합니다.
    - 리뷰 상세 페이지에서는 메뉴 태그를 선택하여 원하는 메뉴들을 메뉴 프롬프트에 추가할 수 있습니다.

### 전역 모달 구현 (검색&언어 선택)

- **기능 설명**
    
    전역 페이지에서 공통으로 쓰이는 모달들을 하단 네비게이션 바에 등록해 어느 페이지에서나 사용할 수 있도록 구현하였습니다.
    
    아래 영상의 하단 네비게이션 바의 4번째 버튼과 5번째 버튼이 각각 검색 모달을 띄우는 버튼, 언어 선택 모달을 띄우는 버튼입니다.
    
- **동작 과정 영상**
    
    

    https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/eb0a4bfa-cf8d-41d0-8f4e-54dfa35dd366


    
- **구현 방법**
    
    redux를 이용해 모달 상태를 관리하고, 커스텀 hook을 만들어 브라우저 해시를 통해 모달을 구현하였습니다.
    
    ```tsx
    /* src/hooks/modal.ts */
    import { useEffect } from 'react';
    import { useDispatch } from 'react-redux';
    import { ModalType } from '../types/modal';
    import { open, close } from '../store/slices/modalSlice';
    
    export function useModal(type: ModalType) {
      const dispatch = useDispatch();
    
      useEffect(() => {
        const { hash } = window.location;
        if (hash === `#${type}`) {
          dispatch(open(type));
        }
      }, []);
    
      useEffect(() => {
        const handleModalOpen = () => {
          const { hash } = window.location;
          if (hash === `#${type}`) {
            dispatch(open(type));
          } else {
            dispatch(close(type));
          }
        };
        window.addEventListener('hashchange', handleModalOpen);
    
        return () => window.removeEventListener('hashchange', handleModalOpen);
      }, [type]);
    
      const openModal = () => {
        window.location.hash = type;
      };
    
      return { openModal };
    }
    ```
    

## 리뷰 작성 기능

- **기능 설명**
    - 사용자는 메뉴 사진들, 방문 인원, 사용 금액, 리뷰 내용, 그리고 메뉴 태그들을 입력하여 리뷰를 작성할 수 있습니다.
    - 메뉴 사진은 업로드 하면 캐러셀 UI를 사용해 다른 업로드 한 이미지들을 확인할 수 있습니다.
- **동작 과정 영상**
    

    https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/a62d342d-f32f-4f08-a748-9cf67d3e225d


- **구현 방법**
    - input file을 통해 이미지 파일을 입력받은 후, 파일 타입과 크기를 검사하여 문제가 없다면 이미지를 자르는 모달을 띄웁니다.
    - react-easy-crop 라이브러리를 이용하여 이미지를 자른 뒤 Blob 데이터를 저장합니다.
    - 리뷰 내용과 방문 인원, 사용한 금액을 적고 작성 완료 버튼을 누르면 백엔드 API 응답으로 S3 presignedUrl이 이미지 개수에 맞게 제공됩니다.
    - 전달받은 S3 presignedUrl에 각 이미지를 업로드하고 해당 경로와 이미지에 생성한 메뉴 태그를 묶어 백엔드로 전송합니다.

## 그 외 부가기능들

### 음식점&리뷰 좋아요 하기

- **기능 설명**
    
    로그인 상태에서 음식점 상세 페이지와 리뷰 상세 페이지에서 좋아요를 눌러 저장할 수 있습니다.
    
- **동작 과정 영상**
    
    

    https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/9c7c64f4-b05a-483a-8896-06d5955d6605


    
- **구현 방법**
    - 리뷰, 음식점 상세 페이지를 렌더링하는 요청을 할 때, 사용자의 토큰을 보내 해당 하는 곳을 좋아요 했는지도 함께 받아 옵니다.
    - 로그인 한 사용자가 리뷰나 음식점 상세 페이지에서 좋아요 버튼을 클릭 할 시 서버로 해당 하는 곳의 좋아요 요청을 보냅니다.
    - 사용자가 좋아요 한 상태를 관리해 좋아요한 상태라면 꽉찬 하트 아이콘으로 그렇지 않다면 빈 하트 아이콘을 표시 합니다.

### 최근에 본 맛집

- **기능 설명**
    
    로그인 시 최근에 본 음식점을 저장하여 보여줍니다.
    
- **동작 과정 이미지**
    
    ![recent](https://github.com/Step3-kakao-tech-campus/Team4_FE/assets/89011648/d2ccfcfc-d794-4703-846d-bb4e99c3ad41)

    
- **구현 방법**
    
    - 음식점 상세 페이지에 접속할 때 localStorage에 해당 음식점 정보를 음식점 목록 컴포넌트에 필요한 데이터로 압축해 저장합니다.
    - 저장 시 중복을 확인하여 같은 음식점이 여러 개 저장되지 않도록 구현했습니다.
    - 마이페이지의 최근에 본 음식점 페이지에서 localStorage에 저장된 해당 음식점들을 가져와 보여줍니다.

---

# Team4
4조
## 카카오 테크 캠퍼스 3단계 진행 보드

</br>

## 배포와 관련하여

```

최종 배포는 크램폴린으로 배포해야 합니다.

하지만 배포 환경의 불편함이 있는 경우를 고려하여 

임의의 배포를 위해 타 배포 환경을 자유롭게 이용해도 됩니다. (단, 금액적인 지원은 어렵습니다.)

아래는 추가적인 설정을 통해 (체험판, 혹은 프리 티어 등)무료로 클라우드 배포가 가능한 서비스입니다.

ex ) AWS(아마존), GCP(구글), Azure(마이크로소프트), Cloudtype 

```
## Notice

```
필요 산출물들은 수료 기준에 영향을 주는 것은 아니지만, 
주차 별 산출물을 기반으로 평가가 이루어 집니다.

주차 별 평가 점수는 추 후 최종 평가에 최종 합산 점수로 포함됩니다.
```

![레포지토리 운영-001 (1)](https://github.com/Step3-kakao-tech-campus/practice/assets/138656575/acb0dccd-0441-4200-999a-981865535d5f)
![image](https://github.com/Step3-kakao-tech-campus/practice/assets/138656575/b42cbc06-c5e7-4806-8477-63dfa8e807a0)

[git flowchart_FE.pdf](https://github.com/Step3-kakao-tech-campus/practice/files/12521045/git.flowchart_FE.pdf)


</br>

## 필요 산출물
<details>
<summary>Step3. Week-1</summary>
<div>
    
✅**1주차**
    
```
    - 5 Whys
    - 마켓 리서치
    - 페르소나 & 저니맵
    - 와이어 프레임
    - 칸반보드
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-2</summary>
<div>
    
✅**2주차**
    
```
    - ERD 설계서
    
    - API 명세서
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-3</summary>
<div>
    
✅**3주차**
    
```
    - 최종 기획안
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-4</summary>
<div>
    
✅**4주차**
    
```
    - 4주차 github
    
    - 4주차 노션
```
    
</div>
</details>

---
<details>
<summary>Step3. Week-5</summary>
<div>
    
✅**5주차**
    
```
    - 5주차 github
    
    - 5주차 노션
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-6</summary>
<div>
    
✅**6주차**
    
```
    - 6주차 github
    
    - 중간발표자료
    
    - 피어리뷰시트
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-7</summary>
<div>
    
✅**7주차**
    
```
    - 7주차 github
    
    - 7주차 노션
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-8</summary>
<div>
    
✅**8주차**
    
```
    - 중간고사
    
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-9</summary>
<div>
    
✅**9주차**
    
```
    - 9주차 github
    
    - 9주차 노션
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-10</summary>
<div>
    
✅**10주차**
    
```
    - 10주차 github
    
    - 테스트 시나리오 명세서
    
    - 테스트 결과 보고서
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-11</summary>
<div>
    
✅**11주차**
    
```
    - 최종 기획안
    
    - 배포 인스턴스 링크
```
    
</div>
</details>

---

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다.
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다.
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.

```

</br>

## **코드리뷰 관련: review branch로 PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> PR 제목 : 부산대_0조_아이템명_0주차
> 

</br>

</div>

---
