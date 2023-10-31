import React from "react";

import { translate } from "@docusaurus/Translate";
import { getLink } from "../../../utils";

import BrowserOnly from "@docusaurus/BrowserOnly";
import "./index.scss";

const data = {
  title: translate({ id: "homepage.introTitle", message: "OpenWharf 是什么？" }),
  desc: translate({
    id: "homepage.introDesc",
    message:
      "OpenWharf是沉淀阿里云SAE、函数计算实践经验，基于kubernetes为web中长尾场景打造的简单易用、低成本、高性能、高扩展的Serverless应用平台。",
  }),
  img: {
    "zh-cn": "https://img.alicdn.com/imgextra/i4/O1CN01goCCMC1HBLZend9Gl_!!6000000000719-2-tps-3201-1561.png",
    "en-us": "https://img.alicdn.com/imgextra/i3/O1CN01vndGtZ26dmaJ1SJg7_!!6000000007685-2-tps-3201-1561.png",
  },
};

const Introduction = ({ language }: { language: string }) => {
  return (
    <BrowserOnly>
      {() => (
        <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
            </div>
            {/* <div className="img-wrapper">
              <img src={getLink(data.img[language] || data.img["zh-cn"])} />
            </div> */}
          </div>
        </section>
      )}
    </BrowserOnly>
  );
};

export default Introduction;
