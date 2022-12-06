// Next
import Head from "next/head";

export function SEO({ title }) {
  return (
    <Head>
      <title>Test - {title} </title>
      <meta
        name="description"
        content={`${title} page of the frontend coding test for the position of Frontend Developer at Datasketch.`}
      />
      <link rel="icon" href="/logo.svg" />
    </Head>
  );
}
