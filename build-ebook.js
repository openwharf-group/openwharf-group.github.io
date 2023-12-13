import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

dotenv.config();

const curFilename = fileURLToPath(import.meta.url);
const curDirname = path.dirname(curFilename);


const request = async (url) => {
    const res = await fetch(url, {headers:{'X-Auth-Token': process.env.YUQUE_TOKEN}});
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    if (data.error) {
        throw new Error(data.error)
    } else {
        return data;
    }
}; 


// 获取所有电子书
const bookList = await request('https://www.yuque.com/api/docs?book_id=1645741')

// 以第一章为例
const item = bookList.data[0];

const { slug } = item;

// 根据id生成md文件
if (slug) {
    const bookItem = await request(`https://www.yuque.com/api/v2/repos/nacos/ebook/docs/${slug}`);
    const body = bookItem.data.body;
    const mdContent = `---
title: ${bookItem.data.title}
keywords: [ Nacos ]
description: ${bookItem.data.description}
---
${body}`
        
    if (body) {
        const bookDir = path.resolve(curDirname, 'src/content/docs/ebook/zh-cn');
        fs.mkdir(bookDir, { recursive: true })
        fs.writeFile(path.resolve(bookDir, `${slug}.md`), mdContent, 'utf8')
    }
}