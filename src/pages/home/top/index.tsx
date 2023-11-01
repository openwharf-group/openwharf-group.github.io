import React from "react";
import { translate } from "@docusaurus/Translate";
import { Button, ButtonType } from "../../../components";
import { getLink } from "../../../utils";

import BrowserOnly from "@docusaurus/BrowserOnly";

import "./index.scss";

const topData = {
  brandLogoUrl: "img/logo_standard.svg",
  briefIntroduction: translate({
    id: "homepage.briefIntroduction",
    message:
      "沉淀阿里云SAE、函数计算实践经验，基于kubernetes为web中长尾场景打造的简单易用、低成本、高性能、高扩展的Serverless应用平台",
  }),
  buttons: [
    {
      text: translate({ id: "homepage.quickstartButton", message: "快速入门" }),
      // link: "/docs/user/quickstart",
      type: "primary",
    },
    {
      text: "GitHub",
      link: "https://github.com/openwharf-group",
      type: "normal",
      // target: "_blank",
    },
  ],
  versionNote: {
    text: "Release Note of 1.2.0",
  },
  releaseDate: "Released on Jul 10, 2023",
};

const Top = ({ language }: { language?: string }) => {
  const [state, setState] = React.useState({
    starCount: "",
    forkCount: "",
  });

  const { starCount, forkCount } = state;

  // React.useEffect(() => {
  //   fetch("//api.github.com/repos/alibaba/openwharf")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setState({
  //         starCount: `${data.stargazers_count}`,
  //         forkCount: `${data.forks_count}`,
  //       });
  //     });
  // }, []);

  return (
    <BrowserOnly>
      {() => (
        <section className="top-section bg-gradient-to-b from-white to-blue-400">
          <div className="top-body">
            <div className="vertical-middle">
              <div className="product-name">
                <img style={{ height: "50px" }} src="img/logo_standard.svg" />
              </div>
              <p className="product-desc">{topData.briefIntroduction}</p>
              <div className="button-area">
                {topData.buttons.map((b) => (
                  <Button
                    type={b.type as ButtonType}
                    key={b.text}
                    link={b.link}
                    target={b.target}
                    language={language}
                  >
                    {b.text}
                  </Button>
                ))}
              </div>
              {/* <div className="github-buttons">
                <a
                  // href="https://github.com/alibaba/openwharf" target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="star">
                    <img src="https://img.alicdn.com/imgextra/i2/O1CN01p5mlMy1jXc76s8KB2_!!6000000004558-2-tps-300-300.png" />
                    <span className="count">{starCount}</span>
                  </div>
                </a>
                <a
                // href="https://github.com/alibaba/openwharf/fork" target="_blank" rel="noopener noreferrer"
                >
                  <div className="fork">
                    <img src="https://img.alicdn.com/imgextra/i2/O1CN01GQIcbr1o7ZfwkxGs1_!!6000000005178-2-tps-300-300.png" />
                    <span className="count">{forkCount}</span>
                  </div>
                </a>
                <a
                  // href={getLink(topData.versionNote.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="fork">
                    <span className="count">{topData.versionNote.text}</span>
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </section>
      )}
    </BrowserOnly>
  );
};

export default Top;
