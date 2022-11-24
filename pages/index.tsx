import type { NextPage } from 'next'
import Head from 'next/head'
import Body from '../components/Body';
import Header from '../components/Header';
import Masthead from '../components/Masthead';
import Testimonials from '../components/Testimonials'
import Features from '../components/Features';
import Footer from '../components/Footer';
import WorkWith from '../components/WorkWith';
import BaseHead from '../components/BaseHead';

const title = "Digital Agent | הסוכן הדיגיטלי";

const Home: NextPage = () => {
  return (
    <div style={{direction: 'rtl'}}>
      <BaseHead title={title}></BaseHead>

      <Body>
        <Header title={'test'} />
        <main className="pt-[60px]">
          <Masthead />
          <Testimonials />
          <Features />
          <WorkWith />
        </main>

        <Footer />
      </Body>
    </div>
  )
}

export default Home
