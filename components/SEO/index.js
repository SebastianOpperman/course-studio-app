import Head from 'next/head'

const SEO = ({title, description, keywords}) => (
	<Head>
		<title>{title}</title>
		<meta name='description' content={description} />
		<meta name='og:title' property='og:title' content={title} />
		<meta name='og:description' property='og:description' content={description} />
		<meta name='keywords' content={keywords} />
		<meta name='og:image' content='/share.png' />
	</Head>
)

export default SEO