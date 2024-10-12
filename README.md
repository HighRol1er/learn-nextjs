#### TIL - NextJS
# 1. 
1. `npm init -y` 
2. `npm npm install react@latest next@latest react-dom@latest`
3. package.json ->  
  ```
  "scripts": {
      "dev": "next dev"
    },
  ```
4. `npm run dev`

# 2.
Routing, Navigation, Layout, client/server component

1. app/layout.tsx를 지우면 아래와 같은 문구 + 다시 layout.tsx 생성.
 ⚠ Your page app/page.tsx did not have a root layout. We created app\layout.tsx for you.

# 3
1. nextjs 애플리케이션에서 새로운 페이지를 만드는 방법 
 
2. 만들고 싶은 Route의 이름을 딴 폴더 생성 + 해당    디렉토리에 `page.tsx` 생성
Ex) about-us/page.tsx 

# 4 
1. Implement Nav bar
2. not-found.tsx : 일치 하지 않는 전역 URL처리
3. usePathname : 현재 url의 pathname을 읽을 수 있게 해주는 클라이언트 컴포넌트 훅.
4. React client hook in Server Component 오류
  서버 컴포넌트에서 React 클라이언트 훅을 사용할 경우 발생하는 오류로
  "use client"를 최상단에 추가해 클라이언트 컴포넌트로 바꿔줘야 함. 

# 5
react가 render되는 방식 : CSR, 브라우저가 렌더링 작업을 함
CSR은 모든 렌더링, 즉 UI구축 작업이 Client측에서 일어남.

Nextjs를 이용하면 자동적으로 SSR이 구축된다. 
모든 컴포넌트와 페이지들은 먼저 backend에서 render되고 
그리고 그것을 html로 만들고 브라우저에 제공한다. 

rendering이란 Js function을 가져와서 브라우저가 이해할 수 있는 HTML로 변환하는 작업.

# 6 Hydration
Hydration (수화, 수분공급)이란 뜻을 가지고 있는데 
그럼 뭐에 수분을 공급시키냐? 

보통 건조된 dummy html코드(백엔드에서 SSR로 받아온 것들)에 수분을 공급시켜준다.

여기서 말하는 수분 공급이란 UI(ex.button태그)에 이벤트리스너를 추가하고, 사용자가 버튼과 상호작용할 수 있게끔 하는 것.

그저 dummy html이였던 것들이 hydration을 통해서 client와 직접적인 상호작용을 하게되는 것.?

hydration은 단순한 HTML을 React application으로 초기화하는 작업.

# 7 Hydration 과 "use client"관계 

hydration 과정이 모든 component에 대해 발생하지는 않는다. 
SSR은 모든 component에 발생한다. -> 모든 component들이 server side에서 먼저 render 된다.

client에서 hydrate되는 component는 오직 "use client" 지시어를 맨 위에 갖고 있는 component들 뿐이다.

"use client"의 참 의미 
backend에서 render되고 frontend에서 hydrate 및 interactive됨을 의미한다. 

다시 한번 정리하자면 
Nextjs에서 모든 component는 backend에서 render되고 
"use client" 키워드가 있는곳은 
frontend에서 hydrate됨.

"use client"를 남발해서 웹사이트를 만들었더니.. 느리다고 느꼈던 이유가 여깄었군요

# 8 Layout
컴포넌트 재사용성을 높여준다. 
페이지간 공통적인 UI를 관리

Next.js에서는 각 페이지가 가장 가까운 상위 폴더에서 `layout.tsx`파일을 찾아 이를 적용한다. 
Ex. `app/blog`폴더에 `layout`파일이 있다면, `app/blog` 폴더 하위의 모든 페이지가 해당 레이아웃을 공유한다. 

만약 app 폴더에 `layout`이 있다면 이또한 렌더링된다.

즉, `layout`은 중첩된다.

# 9 Route Group
(FolderName) 폴더

괄호 폴더는 URL에 영향을 끼치지 않는다.

* _ERROR_ 
app/(home)
app/(main)
이렇게 두개 만드니깐 
You cannot have two parallel pages that resolve to the same path. Please check /(home)/page and /(main)/page.
이렇게 동일한 경로에는 라우트 그룹을 여러개 만들 수 없네


# 10 Server Side 
server component를 사용한다면 
자동으로 fetch된 url을 캐싱시켜준다.
그래서 다시 fetch를 할 필요가 없어진다.
-> 단지 server component에서 Next Js가 fetch 한 데이터를 기억하기 때문




