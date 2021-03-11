import React from 'react'
import Head from 'next/head'

import { Container } from '../assets/styles/pages/Home'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Container>
                <h1>Hello World</h1>
            </Container>
        </>
    )
}

export default Home
