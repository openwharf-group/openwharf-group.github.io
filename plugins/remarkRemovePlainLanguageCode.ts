/**
 * @description: remark插件，语法高亮插件不支持 plain的语法
 * @refer: https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
 * @refer: https://github.com/shikijs/shiki/blob/main/docs/languages.md
 */
import { visit } from 'unist-util-visit';

export default function remarkRemoveMdLinks() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang === 'plain') {
        node.lang = '';
      }
      if (node.lang === 'basic') {
          node.lang = '';
      }
      if (node.lang === 'SH') {
        node.lang = 'sh';
      }
    });
  };
}
