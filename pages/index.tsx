import { NextPage } from "next"
import About from "../components/Page/Home/About/About";
import Hero from "../components/Page/Home/Hero/Hero";
import Offers from "../components/Page/Home/Offers/Offers";
import Welcome from "../components/Page/Home/Welcome/Welcome";
import Works from "../components/Page/Home/Works/Works";
import Layout from "../schema/Layout";

const Page:NextPage = () => {
  return(
    <Layout
      description="Jeśli szukasz osoby, która zrealizuje dla Ciebie film z wesela lub spot to nie mogłeś lepiej trafić. Postaw na profesjonalizm i zapał."
      image="/assets/images/mis.jpg"
      title="Filip Bukowiecki - operator kamery, montażysta filmowy, Poznań"
    >
      <audio
        src='/assets/sound/try.mp3'
        autoPlay
        loop
        hidden
      />
      <Hero/>
      <main>
        <Welcome/>
        <span id='kim-jestem'/>
        <About/>
        <span id='realizacje'/>
        <Works/>
        <span id='oferty'/>
        <Offers/>
        <span id='kontakt'/>
      </main>
    </Layout>
  )
}

export default Page;