import React from 'react'
import Script from "next/script";

export default function GoogleAnalytics() {
    return (
      <>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-4GG465FJRX`}
        />
  
        <Script id='' strategy='lazyOnload'>
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4GG465FJRX', {
                page_path: window.location.pathname,
                });
            `}
        </Script>
      </>
    );
  };