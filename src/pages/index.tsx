import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Game of Thrones</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[url('../../public/assets/GOT.jpeg')] bg-no-repeat bg-center bg-contain bg-black text-4xl flex items-center h-screen align-middle justify-around text-white font-mainPolice">
        <Link href={'/characters'}>
          <button>Characters</button>
        </Link>
        <Link href={'/houses'}>
          <button>Houses</button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
