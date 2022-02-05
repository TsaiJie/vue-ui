// @ts-ignore
import fs from 'fs';
import { baseParse } from '@vue/compiler-core';
const requestRegex = /vue&type=demo/;
const demoCodePlugin = () => {
    return {
        name: 'demoCode',
        transform(code, id: string) {
            // 判断请求是否是vue&type=demo自定义块儿请求
            if (!requestRegex.test(id)) return;
            // 获取该请求的路径
            const path = id.split('?')[0];
            // 读取该路径下的文件
            const file = fs.readFileSync(path).toString();
            // 解析该文件, 找到子元素的
            const parsed = baseParse(file).children.find(
                // @ts-ignore
                n => n?.tag === 'demo'
            );
            // 获取demo部分的代码，以它为分隔进行分隔（除去demo部分的代码），然后进行连接
            const main = file.split(parsed.loc.source).join('').trim();
            // 包装成函数进行导出，挂载到组件上
            return `export default Comp => {
              Comp.__demoTitle = ${JSON.stringify(code)};
              Comp.__demoSourceCode = ${JSON.stringify(main)};
          }`;
        },
    };
};
export default demoCodePlugin;
