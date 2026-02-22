import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="vid" href="/nowrun.mp4" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <video width="320" height="240" controls>
          <source src="nowrun.mp4" type="video/mp4">
        </video>
      </main>

      <Footer />
    </div>
  )
}
