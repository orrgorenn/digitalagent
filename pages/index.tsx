import type { NextPage } from 'next'
import Head from 'next/head'
import Body from '../components/Body';
import Header from '../components/Header';
import Masthead from '../components/Masthead';
import Testimonials from '../components/Testimonials'
import Features from '../components/Features';

const title = "test";

const Home: NextPage = () => {
  return (
    <div style={{direction: 'rtl'}}>
      <Head>
        <title>{title}</title>
      </Head>

      <Body>
        <Header title={'test'} />
        <main className="pt-[60px]">
          <Masthead />
          <Testimonials />
          <Features />
        </main>
      </Body>
    </div>
  )
}

export default Home
