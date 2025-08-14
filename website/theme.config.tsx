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
        </>
    )
  },
  footer: false
};
