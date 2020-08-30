import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Home page </h1>
        <Link href="/blog">
            <a>Blog</a>

        </Link>
        <br />
        <Link href="/house">
            <a>House</a>

        </Link>
        <style jsx>{`
		  h1 {
		    font-size: 3rem;
		  }
		`}</style>
    </div>
)

export default Index