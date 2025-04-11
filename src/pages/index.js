import Head from 'next/head';
import Header from './components/module/Header';
import Hero from './components/module/Hero';
import Brands from './components/module/Brands';
import Jobs from './components/module/Jobs';
import Footer from './components/module/Footer';

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
