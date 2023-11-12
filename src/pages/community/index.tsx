import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import "tailwindcss/tailwind.css";
import "../tailwind.css";
import Layout from '@theme/Layout';


export default function Community(): JSX.Element {
  const [text, setText] = useState('Loading...');

  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(`http://admin.alijam.top/api/auth/github/callback${location.search}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('username', res.user.username);
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
      })
      .catch(err => {
        console.log(err);
        setText('An error occurred, please see the developer console.')
      });
  }, []);

  return (
    <BrowserOnly>
      {() => (
        <Layout title={'Higress'} description="Higress Community">
          <div className="community-page">
            {text}
          </div>
        </Layout>
      )}
    </BrowserOnly>
  );
}
