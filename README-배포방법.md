# README — 이 폴더를 내 Vercel에 올리는 방법

이 zip 안에는 `index.html`, `styles.css`, `script.js`, `assets/` 폴더, `기획서.md`가 있어요. 설치할 프로그램은 없어요.
먼저 확인해요: zip을 풀고 `index.html`을 더블클릭하면 브라우저에 내 페이지가 떠야 해요. 뜨면 시작할 준비가 된 거예요.

## 추천 방법 A — 브라우저만으로 올리기 (10분)
노트북에 아무것도 설치하지 않아요. GitHub에 파일을 올리고, Vercel이 그걸 읽어 주소를 만들어요.

1. **폴더 확인하기**
   zip을 푼 폴더를 열어요. 폴더 안에 `index.html`이 바로 보이면 돼요.
   ↳ 폴더 안에 폴더가 하나 더 있으면 안쪽 폴더를 써요.
   ✔ `index.html`, `styles.css`, `assets`가 한눈에 보이면 끝.

2. **GitHub 로그인하기**
   https://github.com 에서 가입하거나 로그인해요.
   ✔ 오른쪽 위에 내 프로필 동그라미가 보이면 끝.

3. **저장소 만들기**
   오른쪽 위 **+** → **New repository** → 이름은 `brand-web-v1`처럼 영문 → **Private** 선택 → **Create repository**.
   ↳ 저장소(repository)는 내 파일을 넣어 두는 폴더예요.
   ✔ "Quick setup" 이라는 화면이 보이면 끝.

4. **파일 올리기**
   그 화면에서 **uploading an existing file** 글자를 눌러요. 풀어 둔 폴더 안의 파일들(`index.html`, `styles.css`, `script.js`, `vercel.json`, `assets` 폴더)을 **전부 선택해서** 끌어다 놓고, 아래 **Commit changes**를 눌러요.
   ↳ 커밋(commit)은 "이 상태로 저장"이에요.
   ✔ 저장소 첫 화면에 `index.html`이 목록에 보이면 끝.

5. **Vercel 로그인하기**
   https://vercel.com 에서 **Continue with GitHub**을 눌러요. 처음이면 가입이 같이 돼요.
   ✔ Vercel 대시보드(Overview)가 보이면 끝.

6. **가져와서 배포하기**
   **Add New…** → **Project** → 방금 만든 저장소 옆 **Import** → Framework Preset은 **Other** 그대로 → **Deploy**.
   ↳ 1분쯤 걸려요. 배포(deploy)는 "인터넷 주소를 여는 것"이에요.
   ✔ 축하 화면과 함께 `https://brand-web-v1-xxxx.vercel.app` 같은 주소가 보이면 끝.

7. **휴대폰으로 열어 보기**
   그 주소를 휴대폰 브라우저에 입력해 첫 화면을 캡처해요.
   ✔ 휴대폰 첫 화면에 내 브랜드 문구와 버튼이 보이면 오늘 제출물 완성.

## 방법 B — 터미널을 쓸 줄 알면 (5분)
Node.js(https://nodejs.org 의 LTS)가 설치돼 있어야 해요.
```
cd 풀어둔폴더
npx vercel login
npx vercel --prod
```
↳ 질문이 나오면 모두 Enter(기본값)를 눌러요.
✔ 마지막 줄에 `https://….vercel.app` 주소가 나오면 끝. Claude Code를 쓰면 폴더에서 `claude`를 열고 "이 폴더를 Vercel에 배포해 줘"라고 해도 같은 일을 해 줘요.

## 내용 바꾸기
- **사진·포스터**: `assets/README.md`에 적힌 이름(`hero.jpg`, `poster.jpg`, `item-1.jpg`…)으로 넣으면 `index.html`을 고치지 않아도 바로 바뀌어요.
- **문구**: `index.html`을 메모장이나 VS Code로 열어 글자를 바꿔요. `[채워 주세요]`라고 적힌 곳부터.
- **색·글자 크기**: `styles.css` 맨 위 `:root` 블록의 값만 바꾸면 전체가 따라와요.
- **다시 올리기(방법 A)**: 저장소에서 **Add file → Upload files**로 같은 이름 파일을 올리면 Vercel이 자동으로 다시 배포해요.
- **기획서**: `기획서.md`는 이 페이지를 왜 이렇게 만들었는지 적은 문서예요. 발표 때 같이 보여 주세요.

## 안 될 때
- Vercel에서 **No Output Directory** 오류 → 저장소 맨 위에 `index.html`이 있는지 확인해요(1번: 폴더 한 겹 더 들어가 있으면 안 돼요).
- 글꼴이 네모로 나와요 → 인터넷이 막힌 곳이에요. 다른 네트워크에서 다시 열어요.
- 영상 자리가 비어 있어요 → `index.html`에서 `data-youtube` 뒤 값을 내 영상 주소로 바꿔요.
- 버튼을 눌러도 아무 데도 안 가요 → `index.html`에서 `https://example.com/`을 카카오 채널·네이버 예약·전화(`tel:010…`) 같은 진짜 주소로 바꿔요.

문의: 허브(이동완) move@nestand.kr — 무엇부터 할지 모르겠으면 한 줄만 보내 주세요. 다음 수업 전날까지 답장해요.
