import React from 'react'
import Head from 'next/head'
import '../styles/global.css'

function MyApp({Component, pageProps}) {
    return (
        <>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <p>Head</p>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp
