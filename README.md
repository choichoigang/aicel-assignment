# Aicel Project

## 기술

- React + TypeScript
- styled-component
- Redux
- Custom hook

## 기능 사항

- 기능에 대한 사항은 Wiki를 참고하여 구현합니다.

- [Todo](https://github.com/choichoigang/aicel-assignment/wiki/%5BFeature%5D-Todo)
- [Grid](https://github.com/choichoigang/aicel-assignment/wiki/%5BFeature%5D-Grid)
- [Counter](https://github.com/choichoigang/aicel-assignment/wiki/%5BFeature%5D-Counter)
- [Modal](https://github.com/choichoigang/aicel-assignment/wiki/%5BFeature%5D-Modal)
- [Async](https://github.com/choichoigang/aicel-assignment/wiki/%5BFeature%5D-Async)

## Branch conventions

- master (실제 배포가 진행되는 코드를 master에 merge 합니다.)

  - 배포 Branch

- dev
  - 개발 Branch (배포 전 완료된 기능은 dev로 merge 합니다.)
- feature/issue-[Feature Name] (기능에 따라서 독립적인 브랜치에서 개발을 진행합니다.)
  - 기능 단위
  - 예시
    `feature/issue-{기능명}`

## 상태 관리

프로젝트의 상태 관리는 Redux를 통해서 진행합니다.

- Redux
  - Redux 폴더 구조는 아래 링크를 참고해서 구축
  - [redux ducks pattern](https://github.com/erikras/ducks-modular-redux)
- useState
  - 상태 관리에 있어서 여러 컴포넌트가 사용할 여지가 없다면 useState로 해당 컴포넌트 내부에서 관리

## 폴더 구조

![스크린샷 2020-10-19 오후 7 38 41](https://user-images.githubusercontent.com/49897409/96440334-c9571100-1242-11eb-8651-75438a79184f.png)

- assets : Design resources 관리

- components : 기능 단위로 Folder를 분류해서 작업

  - `ex) Counter[folder]/Counter.tsx(Business logic) , Counter.element.tsx(Style Code)`

- constants : 각 Component별 상수 파일을 관리

  - `ex) grid.ts , counter.ts ...`

- interface : Redux 상태와 관련된 interface 파일 관리

  - `ex) grid.ts , counter.ts ...`

- modules : Redux 상태 로직 관리 , 상단의 redux ducks pattern link 참고

- styles : GlobalStyle , theme , 재사용 스타일 Component 관리

- util : util 함수 관리

## 추가 라이브러리 사용

- styled-component

  실제로 완성된 스타일 기능을 사용하는 라이브러리가 아닌 기존 CSS Code를 Component의 형태로 좀 더 깔끔하게 관리할 수 있는 라이브러리라 생각하여 선택했습니다. 또한 함수 컴포넌트의
  useContext와 Provider 같은 기능을 함께 제공하여 theme를 공유하기 용이하며 함수 컴포넌트로 프로젝트를 관리할 때 조합이 좋다고 판단했습니다.

## 웹 호환성

- react-app-polyfill

react-app-polyfill을 사용하여 ES6 문법을 호환 가능하도록 추가
