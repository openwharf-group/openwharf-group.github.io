/**
 * @description: remark插件，删除.md后缀内容
 */
import { visit } from 'unist-util-visit';

export default function remarkRemoveMdLinks() {
  return (tree) => {
      visit(tree, 'image', (node) => {
          if (node.url.startsWith('img')) {
            node.url = './' + node.url
          }
    });
  };
}
