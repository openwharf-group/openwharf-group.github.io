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

const slugList = [
    'iez8a4','un9fgs','szf3gh','agxdnq','ktwggk','sufa23','ki4dgp','ynstox','knk2h0','qrkw0g','dl5k6n',
]


slugList.forEach(async (slugItem) => {
    const bookItem = await request(`https://www.yuque.com/api/v2/repos/nacos/ebook/docs/${slugItem}`);
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
        fs.writeFile(path.resolve(bookDir, `${slugItem}.md`), mdContent, 'utf8')
    }
})
