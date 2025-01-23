import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kaal Gyan with Vishnu Prakash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Get your slot information" />
        <p className="description">
          Enter your phone number: 
        </p>
      </main>

      <Footer />
    </div>
  )
}
