import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Web App</title>
        <meta
          name='description'
          content='This is an application with the purpose of present a technical challenge to datasketch'
        />
        <meta name='author' content='Jairo Jair Toro Novellis' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='mt-20 sm:mt-24 md:mt-28 max-w-6xl mx-auto mb-16'>
        {children}
      </main>
      <Footer />
    </>
  );
}
