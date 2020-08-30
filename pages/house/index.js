import Head from 'next/head'

const House = props => (
    <div>
        <Head>
            <title>This is a new page title</title>
        </Head>
        <h1>This page has a new title</h1>
        <p>Useful for SEO because in this component we can customize the meta tags</p>
    </div>
)

export default House