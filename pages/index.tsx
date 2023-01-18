import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import {
  Encadre,
  Presentation,
  Projects,
  Skills,
  Experiences,
  Contact,
} from '../components';

const Home: NextPage = () => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div>
      <Head>
        <title>Theo - Portfolio 2023</title>
        <meta name='description' content='Découvrez mon portfolio' />
        <link rel='icon' href='/profile.jpg' />
      </Head>
      <main>
        <Encadre page={page} setPage={setPage} />
        {page === 0 && <Presentation />}
        {page === 1 && <Skills />}
        {page === 2 && <Projects />}
        {page === 3 && <Experiences />}
        {page === 4 && <Contact />}
      </main>
    </div>
  );
};

export default Home;
