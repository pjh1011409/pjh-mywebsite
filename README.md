# PJH WebSite!!!
😀 개인 포트폴리오 사이트입니다. 저에 대한 개인적인 정보와 커리어가 담긴 사이트이며, 더하여 개발스택 공부, CS지식, 면접준비, 회고 등의 글을 게시할 수 있는 개발 블로그를 탑재하고 있습니다.

<img width="410" alt="mywebsite1" src="https://user-images.githubusercontent.com/81337674/187109367-dcde33d0-1d24-4d79-927d-ed0d9a82e69b.png">  <img width="410" alt="mywebsite2" src="https://user-images.githubusercontent.com/81337674/187109401-6d9f59ac-4bd4-494f-b6ad-ba1775a3c613.png">
<img width="410" alt="mywebsite3" src="https://user-images.githubusercontent.com/81337674/187109409-cd87daac-2160-4730-a061-3f810669855b.png">  <img width="410" alt="mywebsite4" src="https://user-images.githubusercontent.com/81337674/187109420-ac5c5eef-23fb-4dd5-a0ec-61e2fbb812d6.png">
<img width="410" alt="mywebsite5" src="https://user-images.githubusercontent.com/81337674/187109428-bd158530-deac-446f-b0e5-741d08c29b6d.png">  <img width="410" alt="mywebsite6" src="https://user-images.githubusercontent.com/81337674/187109433-e520d247-8eef-4c09-9d81-1e0f5a8abaf8.png">
<img width="410" alt="mywebsite7" src="https://user-images.githubusercontent.com/81337674/187109439-822dde38-98f1-4f0a-aab7-687df6aba256.png">  <img width="410" alt="mywebsite8" src="https://user-images.githubusercontent.com/81337674/187109445-5b3dfdd2-e49b-4707-a181-20852f550ba0.png">
<img width="410" alt="mywebsite9" src="https://user-images.githubusercontent.com/81337674/187109451-6be960c9-0971-4a95-9018-2a5985669306.png">

# 🗓 프로젝트 기간

- 2022.06.20 ~ 2022. 
-  1차 배포: 
-  2차 배포:

# 📎 Links
- Project homepage: 


# 💻 Service Architecture

<details>
<summary>About Detail Architecture Flow</summary>

### 1. AWS S3
build한 파일들을 S3라는 온라인 스토리지 서비스에 저장하여 다른 사용자들에게 인터넷을 통해 제공하기 위해 사용( = 컨텐츠를 저장하고 배포할 때 사용)


###2. Cloud Front
CDN 서비스를 이용하여 캐싱을 통해 사용자에게 콘텐츠를 빠르게 지원하기 위해 사용

### 3. Amazon Route 53
웹사이트의 도메인 이름을 등록하고, 도메인 이름 입력 시 브라우저를 웹사이트에 연결하도록 도우며, 인터넷을 통해 웹 서버 같은 리소스로 자동화된 요청을 보내어 접근 및 사용이 가능하고 정상 작동 중인지를 확인하기 위해 사용

### 4. Github Actions
최신화에 맞춰서 배포를 자동화하는 기능을 위해 사용

### 5. Amazon EC2
가상 서버를 구축하고 보안 및 네트워킹을 구성하여, 쉽게 웹 규모의 클라우드 컴퓨팅 작업을 할 수 있도록 설계하여 빠르게 애플리케이션을 개발하고 배포하기 위해 사용

### 6. Nginx
WAS의 부담을 줄여, 작은 자원의 사용으로 높은 성능과 높은 동시성을 위해 웹서버사용

### 7. Gunicorn Server
Nginx와 Django 사이의 Request을 처리해주기위해 WSGI사용

### 8. Redis*
캐시를 통해 ORM의 결과를 가져와서 DB의 부하를 줄여주기 위해 NoSQL 사용


### 9. Amazon RDS
EC2에 직접 구축하는 것보다 더 많은 부분을 관리할 수 있고 편리하게 사용하기 위해 AWS 관계형 데이터베이스 사용

### 10. AWS S3 File Upload
정적페이지를 서비스하는 S3에 프로젝트 내의 이미지파일들을 업로드하기 위해 사용.</br>
클라이언트 쪽에서 UUID 방식으로 파일명을 변경하여 업로드.


📎 상세내용 : [MyWebSite 배포과정](https://velog.io/@pjh1011409/MyWebSite-%EB%B0%B0%ED%8F%AC%EA%B3%BC%EC%A0%95)


</details>

<img width="820" alt="프로젝트 아키텍처" src="https://user-images.githubusercontent.com/81337674/187406487-c00194b8-ca1b-4834-927a-bc6bec2385ef.png">

# 📄 Project Architecture
<img width="815" alt="Project Structure(screen)" src="https://user-images.githubusercontent.com/81337674/187407159-99f39119-20ed-4b69-830d-efb4cd18b246.png">



# 🔧 프로젝트 구현사항



<details>
<summary>👉 필자의 이력 및 자기소개와 개발 프로젝트를 소개하는 페이지 구성</summary>

- 메인 프로필 창(profile) 및 세부 신상사항(information)
- 자기소개(aboutMe)
- 기술스택(techStack)
- 프로젝트 소개(project)
- Q&A (question)

</details>
<details>
<summary>👉 게시판 사용을 위한 로그인 기능</summary>
</br>
Login Architecture 
</br>
<img width="956" alt="Login Architecture(screen)" src="https://user-images.githubusercontent.com/81337674/187105940-ff6adda2-1c5e-4581-bd52-83b570d5cf2d.png">
</br>
Token 만료 시, 서버에서 만료 신호(401)를 반환한다. 이 점을 보완하자!
Interceptor를 통하여 토큰의 만료유무를 미리 판별하여, 만료 시 Refresh Token을 통한 새로운 Acess Token을 받는다.
</br>
<img width="738" alt="Login Architecture(screen2)" src="https://user-images.githubusercontent.com/81337674/187105948-874ca1bf-627d-452a-8889-4120a35822c7.png">

> 📎 상세내용 : [로그인 구현 - React](https://velog.io/@pjh1011409/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84-React)(velog) / 
[로그인 구현 - Django](https://velog.io/@pjh1011409/%EB%A1%9C%EA%B7%B8%EC%9D%B8)(velog)

</details>
<details>
<summary>👉 CRUD(입력,조회,수정,삭제)기능과 검색 및 필터 기능이 포함된 게시판 </summary>


- 글 목록(StudyMainPage)
- 글 상세(StudyDetailPage)
- 글 작성(StudyWritePage)
- 글 수정(StudyUpdatePage)
- 글 삭제(StudyDelete)
<img width="623" alt="redux-thunk Architecture(screen)" src="https://user-images.githubusercontent.com/81337674/187114368-9897277e-be75-4af0-aa13-9947ec1a1f07.png">

</details>
<details>
<summary>👉 navigationBar & footerBar</summary>

- 메뉴바(header)
- 하단바(footer)
</details>


# DB & API 설계


# 🛠 Tools

## Front-end Tools
<p>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
    <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> 
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <br>
   <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
   <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">

  <br>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
   <br>
  <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white">
 <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white">
<img src="https://img.shields.io/badge/CloudFront-D05C4B?style=for-the-badge&logo=Amazon AWS&logoColor=white">
  <br>
  

</p>


## Back-end Tools
<p> 
   <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
   <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
   <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX3&logoColor=white">
   <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white"> 
   <img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white">   
   <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white">

</p>

## Dev tools

<p> 
  
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">

<br>

## 기술 선정 이유

### React + Typescript

<li>자바스크립트 라이브러리인 리액트를 중심으로 개발</li>
<li>Typescript : 컴파일 단계에서 타입 관련 에러를 막을 수 있으며, 크로스 브라우징(브라우저 호환성) 문제 해결</li>

### Redux

<li>데이터 캐싱이 가능하고 Redux의 불필요한 코드를 작성할 필요가 없음</li>
<li>에러, 로딩, fetching 기능을 한 번에 사용이 가능함</li>

### Redux Toolkit

<li>Ingame 페이지에서 관리해야하는 상태가 많아지고 구조가 복잡해지면서 상태관리 시 props 사용이 부담스러웠고, state 갱신에 관한 에러를 방지하기 위해 Redux를 사용
<li>Redux Toolkit을 사용하면 Redux의 보일러 플레이트 코드가 줄고, redux devtool, immer, reselect 등의 라이브러리들이 내장되어 있어서 패키지 의존성을 줄여주기 때문에 Redux Tookit 사용을 결정</li>

### CloudFront
가장 기본적인 이유는 https 환경으로 배포하기 위함입니다.
국내 주가만 보여주는 만큼 프로젝트에 타겟은 국내 성인입니다. 따라서 CloudFront CDN 서비스가 꼭 필요한 프로젝트는 아니라 생각했습니다. 그럼에도 CDN 서비스에 메리트가 있다는 점과 amplify , vercel 다양한 후보들 중 연결만 하면 자동으로 배포되는 환경과 다르게 github action을 이용해서 배포를 할 수 있다는 점에서 하나 더 학습해보고 싶다는 욕심으로 CloudFront를 선택하게 됐습니다.

### axios

후보는 ajax, axios, fetch 3가지가 있었습니다. ajax는 Jquery를 사용할 때 정말 편하게 사용했지만, 순수 Ajax만을 사용할 때는 직관적이지 못하고 익숙하지 않아 제외했습니다.
axios, fetch 둘 중에서 장 단점을 비교해 봤습니다. fetch는 브라우저에 내장되어 있기 때문에 따로 설치가 필요없고 axios에 비해 가볍다는 장점이 있엇고 axios는 자동으로 JSON데이터 형식으로 변환이 되며, 기본적으로 사용하기 더 편하고 기능이 많다는 장점이 있었습니다. 둘을 비교했을 때 react는 axios가 더 좋을 것 같다는 얘기도 많았고, 속도 차이에서 유의미한 크기에 차이가 있지 않은 결과를 보고, 익숙하고 사용하기 편한 axios를 선택했습니다.
  
  
### Nginx	
HTTPS 연결을 위해 리버스 프록시를 수행해줄 웹서버가 필요했고, 추후 무중단 배포를 염두에 두면 Nginx를 사용하는 것이 좋다고 생각했습니다.
  
### MySQL 
  메인 로직에는 1대N 관계가 존재하여 관계형 DB인 MySQL을 사용했습니다.

# ⌨️ Convention
  

###  ✏️ ESLint & Prettier

#### Prettier

.prettierrc
```
{
  "singleQuote": true,     //  쌍따옴표가 아닌 홑따옴표를 사용
  "semi": true,            // statement 마지막에 세미콜론을 찍음
  "useTabs": false,        // 탭을 사용하지 않고 스페이스를 사용
  "tabWidth": 2,           // 탭을 할 경우 2 스페이스
  "trailingComma": "all",  // 선호되는 한 줄의 길이, 줄바꿈 한폭 길이
  "printWidth": 120,       // 여러줄로 나뉘었을 때는 쉼표를 사용
  "arrowParens": "avoid",  // 화살표 함수에서 괄호 사용 의무화
  "endOfLine": "auto"      // 파일의 마지막에는 EOL을 보장
  }
```

#### ESLint
  
.eslintrc.json
```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "default-param-last": 0,
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off"
  },
  "ignorePatterns": ["build, dist, public, node_modules"]
}

```
> 📎 상세내용 : [ESLint & Prettier](https://velog.io/@pjh1011409/ESLint-Prettier) (velog) 
  
### Django Convention
  
### Git Commit Convention

 
# 🔥 Issue & TroubleShooting

###  👉 Code Splitting
**Issue:** 
**trouble shooting**:
  
  
### 👉 SOP & CORS
**Issue:** 프론트엔드에서 테스팅하는 포트와 백엔드 서버의 포트가 달라서 Same Orgin Policy에 의해 리소스와 상호작용하는 것이 제한
  </br>
**trouble shooting**: 서버에 CORS 설정하여 프론트엔드의 도메인을 추가하여 프론트엔드에서의 데이터 요청이라도 서버 단에서 데이터 접근 권한을 허용.

### 👉 CSRF
**Issue:** Django는 기본적으로 csrf token을 사용하여 수정,삭제,등록 등의 행위에 대해 유효성 검증을 한다. 따라서 클라이언트 단에서의 게시글 수정,작성,삭제에 대한 유효성 검증을 하고 검증 오류시 403 Forbidden Response 반환한다.
  </br>
**trouble shooting**: 외부의 서버로 http통신할 때 axios를 사용하였고, axios로 call 보내고 response 받을 때 csrt token을 설정.

### 👉 새로고침 시 state값 날아가는 현상
**Issue:** 새로고침 시 reducer에 던달된 값들이 날아가버리고, 해당 컴포넌트에는 전달된 값들이 존재하지 않게 되고 컴포넌트 업데이트 시 값들이 존재하지 않는다는 에러가 발생.
</br>
**trouble shooting**: redux-persist를 사용하여 reducer 값들을 localStorage 또는 session에 저장하여 새로고침하여도 저장공간에 있는 데이터를 redux에 불러온다.


> 📎 상세내용 : [Issue & TroubleShooting](https://velog.io/@pjh1011409/%EC%9D%B4%EC%8A%88-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85)
  
# ⚒ Refectoring

### 👉 중복되는 useState, onChange

**Before:** form 태그에 글자를 작성하기 위한 onChange가 각각 필요하였고, 글자를 저장하기 위한 useState가 각각 필요하였다.
</br>
**After:** useState의 상태값에 객체로 값이 들어가게 하여 값들을 비구조화 할당으로 나눈다. onChange 또한 name과 value로 비구조화 할당하여 나누어준다.


### 👉 Barrel Structure & 절대경로

**Before:** 컴포넌트를 import해올 경우 상대경로로 각각 위치한 경로애서 가져와야 했고, 상대경로로 표시하여 ../ 지옥으로 작성되었다.
</br>
**After:** index.js를 각각의 폴더에 작성하여 depth를 얕게 만들어 컴포넌트들을 묶음으로 import해올 수 있고, jsconfig.json을 작성하여 절대경로를 사용하였다.

> 📎 상세내용 :[Code Refactoring](https://velog.io/@pjh1011409/Code-Refactoring)(velog)

