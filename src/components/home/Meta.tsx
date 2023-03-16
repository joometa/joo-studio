import React from "react";

export function Meta() {
  return (
    <>
      <title>jootudio.com</title>
      <meta name="title" content="jootudio.com" />
      <meta
        name="description"
        content="달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jootudio.com/" />
      <meta property="og:title" content="jootudio.com" />
      <meta
        property="og:description"
        content="달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/Mnx7ZvB/ogImage.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jootudio.com/" />
      <meta property="twitter:title" content="jootudio.com" />
      <meta
        property="twitter:description"
        content="달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."
      />
      <meta
        property="twitter:image"
        content="https://i.ibb.co/Mnx7ZvB/ogImage.png"
      />
    </>
  );
}
