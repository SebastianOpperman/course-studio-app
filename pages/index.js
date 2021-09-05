import SEO from '../components/SEO'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Athletes from '../components/Athletes'
import Footer from '../components/Footer'

export const getServerSideProps = async () => {
	const res = await fetch(process.env.WP_ENDPOINT_URL),
				content = await res.json()
	return {
		props: {...content}
	}
}

const Home = ({hero, athletes, seo}) => (
	<>
		<SEO {...seo} />
		<Header />
		<Hero content={hero} keywords='react, next.js, WordPress, project, assesment' />
		<Athletes {...athletes} />
		<Footer />
	</>
)

export default Home