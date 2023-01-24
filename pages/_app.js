import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="flex justify-center ">
        <div className="w-full max-w-3xl px-3 ">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
