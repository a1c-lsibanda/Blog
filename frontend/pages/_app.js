import React from 'react'

function MyApp({Component, pageProps}) {
    return (
        <>
        <p>Header</p>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp
