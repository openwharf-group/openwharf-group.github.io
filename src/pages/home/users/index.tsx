import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { Bone } from "../../../components";

import BrowserOnly from "@docusaurus/BrowserOnly";
import "./index.scss";

const data = {
  desc: (
    <span>
      <Translate id="homepage.userDesc1">请在</Translate> Wanted: who&#39;s using OpenWharf
      <Translate id="homepage.userDesc2">上提供信息来获取 OpenWharf 开源落地支持</Translate>
    </span>
  ),
  list: [
    "https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png",
    "https://img.alicdn.com/imgextra/i4/O1CN01IOIk0s1bWgJ05f4HF_!!6000000003473-2-tps-1200-699.png",
    "https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png",
    "https://img.alicdn.com/imgextra/i3/O1CN01pH2InM1iuDzpDxxox_!!6000000004472-0-tps-228-82.jpg",
    "https://img.alicdn.com/imgextra/i3/O1CN013OMegK1xQCGX3CQNQ_!!6000000006437-0-tps-178-88.jpg",
  ],
  title: translate({ id: "homepage.userTitle", message: "谁在使用 OpenWharf" }),
};

const User = () => {
  return (
    <BrowserOnly>
      {() => (
        <section className="users-section">
          <h3>{data.title}</h3>
          <Bone type="dark" />
          <p>{data.desc}</p>
          <div className="users">
            {data.list.map((user, i) => (
              <div className="user-item" key={i}>
                <img src={user} />
              </div>
            ))}
          </div>
        </section>
      )}
    </BrowserOnly>
  );
};

export default User;
