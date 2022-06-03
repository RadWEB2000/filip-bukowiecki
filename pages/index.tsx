import { NextPage } from "next"
import About from "../components/Page/Home/About/About";
import Hero from "../components/Page/Home/Hero/Hero";
import Offers from "../components/Page/Home/Offers/Offers";
import Reviews from "../components/Page/Home/Reviews/Reviews";
import Welcome from "../components/Page/Home/Welcome/Welcome";
import Works from "../components/Page/Home/Works/Works";
import { content } from "../content/content";
import Layout from "../schema/Layout";

const Page:NextPage = () => {
  const {about,hero,offers,reviews,seo,sound,works} = content;
  return(
    <Layout
      description={seo.description}
      image={seo.image}
      title={seo.title}
    >
      <Hero
        movie={hero.movie}
      />
      <main>
        <Welcome
          h1={hero.h1}
          h2={hero.h2}
        />
        <span id='kim-jestem'/>
        <About
          content={about.content}
          image={about.image}
          title={about.title}
        />
        <span id='realizacje'/>
        <Works
          assembled={works.movies.assembled}
          content={works.content}
          path={works.path}
          recorded={works.movies.recorded}
          title={works.title}
        />
        <span id='oferty'/>
        <Offers
          cards={offers.cards}
          title={offers.title}
        />
        <span id='opinie'/>
        <Reviews
          cards={reviews.cards}
          title={reviews.title}
        />
        <span id='kontakt'/>
      </main>
    </Layout>
  )
}

export default Page;