# gyumnnii 개인 개발 블로그

# 기술 스택

- solid.js
- node.js (^18)

# 시작하기

pnpm 을 기본으로 사용합니다.

```sh
> pnpm install
> pnpm start
```

# 디렉토리 구조

```
- index.tsx : 엔트리 포인트
- routes : 라우터
- pages : 화면 단위 컴포넌트
- component : 기능 단위 컴포넌트
- hooks: 공통 훅
- helpers: 공통 헬퍼 함수
- constants: 공통 상수
- api: 공통 API 호출 함수

특정 컴포넌트에서만 사용되는 hooks, helpers, constants 는 해당 컴포넌트 디렉토리 내부에 유지
컴포넌트의 css 파일도 해당 컴포넌트 디렉토리 내부에 유지
```
