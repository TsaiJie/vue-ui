// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const fileRegex = /\.(md)$/;
//将md文件解析成vue能识别的组件

import compileSFC from '@vue/compiler-sfc';
import compileDOM from '@vue/compiler-dom';
//解析md文件
import { parse } from 'marked';
export default function md() {
    return {
        //插件名字
        name: 'markdown-loader',
        transform(src, id) {
            //判断是不是md结尾的文件
            if (fileRegex.test(id)) {
                //将md文件内容转成html
                const html = parse(src);
                //生成vue能解析的格式
                const ret = compileSFC.parse(
                    `<template><div class="tsai-md">${html}</div></template>`
                );
                const code = compileDOM.compile(
                    ret.descriptor.template.content,
                    { mode: 'module' }
                ).code;
                const render = `${code};
                let __script = {};
                __script.render = render;
                  export default __script;`;
                return {
                    code: render,
                    map: null,
                };
            }
        },
    };
}
