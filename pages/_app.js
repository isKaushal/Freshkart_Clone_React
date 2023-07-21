import "../styles/globals.css";
import { Work_Sans } from "next/font/google";

const roboto = Work_Sans({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
