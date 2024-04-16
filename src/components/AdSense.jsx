import Script from "next/script";
import React from "react";

export default function AdSense({ id }) {
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${id}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
}