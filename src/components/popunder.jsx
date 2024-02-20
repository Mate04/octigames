import Head from 'next/head'
import Script from 'next/script'

export default function Popunder({ boolean=false }) {
  return (
    boolean
      ? <>
          <Head>
          </Head>
          <Script src="//pl22562018.profitablegatecpm.com/c3/d6/13/c3d6137f4e40cda8d26a9a98c58906e0.js" />
        </>
      : <Head></Head>
  );
}

