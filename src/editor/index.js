import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import koKR from '@kangc/v-md-editor/lib/lang/ko-KR';
import hljs from 'highlight.js';

VMdEditor.lang.use('ko-KR', koKR);
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

export default {
  editor
}