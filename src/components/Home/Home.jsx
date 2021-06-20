import React from "react";
import Header from "../Header/Header";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";

function Home({ token }) {
  return (
    <div className="Home">
      <Header />
      <Articles token={token} />
      <Footer />
    </div>
  );
}

export default Home;
