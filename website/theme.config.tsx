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
      }}
    >
      <img
        style={{
          display: "flex",
          height: "1.3rem",
          marginRight: "0.5rem",
        }}
        src="/logo.svg"
        alt="logo"
      />
      Documentation
    </span>
  ),
  head() {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || 'TRE-FX Documentation'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'TRE-FX Documentation.'}
        />
        <title>{frontMatter.title || 'TRE-FX Documentation'}</title>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      </>
    )
  },
  footer: false
};