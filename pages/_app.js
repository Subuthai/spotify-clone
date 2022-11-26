import { useState } from "react";
import Head from "next/head";
import Header from "../components/header.js";
import Sidebar from "../components/sidebar.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Head>
        <title>Spotify - Web Player</title>
        <meta name="description" content="Spotify - Web Player" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/800px-Spotify_logo_without_text.svg.png"
        />
      </Head>
      <div className="bg-main-gray min-h-screen text-gray-300">
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
