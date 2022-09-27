import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../components/Grid";

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>두타를 찾아라</title>
        <meta name="description" content="두타를 찾아라" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Grid />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
