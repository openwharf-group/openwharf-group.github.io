import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import "tailwindcss/tailwind.css";
import "../tailwind.css";
import Layout from '@theme/Layout';


export default function Community(): JSX.Element {
  return (
    <BrowserOnly>
      {() => (
        <Layout title={'Higress'} description="Higress Community">
          <div className="community-page">
            dankun
          </div>
        </Layout>
      )}
    </BrowserOnly>
  );
}
