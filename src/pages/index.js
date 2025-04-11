import Head from 'next/head';
import Header from './Header';
import Hero from './Hero';
import Brands from './Brands';
import Jobs from './Jobs';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Software Recruitment Co.</title>
      </Head>
      <Header />
      <Hero />
      <Brands />
      <Jobs />
      <Footer />
    </>
  );
}
