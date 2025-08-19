import React from "react";
import { useConfig } from 'nextra-theme-docs'

export default {
  docsRepositoryBase: 'https://github.com/federated-analytics/docs/tree/main/website',
  project: {
    link: "https://github.com/federated-analytics/docs",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  logo: (
    <span
      style={{
        display: "flex",
      }}
    >
      <img
        style={{
          display: "flex",
          height: "4rem",
          marginRight: "0.5rem",
        }}
        src="/logo.svg"
        alt="Federated Research logo"
      />
    </span>
  ),
  head() {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || 'Federated Research'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Adopt Standards. Build Trust. Enable Federation. Accelerate Research.'}
        />
        <title>{frontMatter.title || 'Federated Research'}</title>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon.png" />
        <link rel="manifest" href="/icons/manifest.json" />
      </>
    )
  },
  footer: false
};
