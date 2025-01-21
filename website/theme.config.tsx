import React from "react";
import { useConfig } from 'nextra-theme-docs'

export default {
  docsRepositoryBase: 'https://github.com/federated-analytics/docs/tree/main/website',
  project: {
    link: "https://github.com/federated-analytics/docs",
  },
  logo: (
    <span
      style={{
        display: "flex",
        color: "#6855ff",
      }}
    >
      <img
        style={{
          display: "flex",
          height: "1.3rem",
          marginRight: "0.5rem",
        }}
        src="docs/logo-small.png"
        alt="logo"
      />
      Documentation
    </span>
  ),
  head() {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || 'Federated Analytics'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Federated Analytics Documentation.'}
        />
        <title>{frontMatter.title || 'Federated Analytics'}</title>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      </>
    )
  },
};