import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import koKR from '@kangc/v-md-editor/lib/lang/ko-KR';
import hljs from 'highlight.js';

// 에디터 컴포넌트 라이브러리 필요한 값 설정 후 export
// expoert 한 에디터에 대한 설정 및 컴포넌트는 main.js에서 import후 사용
VMdEditor.lang.use('ko-KR', koKR);
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

export default VMdEditor