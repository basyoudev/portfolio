import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="text-center">
        <h2 className="my-6 text-6xl">404</h2>
        <p className="">Sorry, this page not found</p>
      </div>
    </>
  );
}
