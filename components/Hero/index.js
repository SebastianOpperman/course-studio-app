import _ from './style.module.css'
import Scroll from '../Scroll'

const Hero = ({content}) => {
	const scroll = () => document.querySelector('h2').scrollIntoView({behavior: 'smooth'})
	return (
		<article className={_.hero}>
			<div dangerouslySetInnerHTML={{__html: content}} />
			<button onClick={scroll}>Scroll Down</button>
			<img src="/hero.jpg" />
			<Scroll />
		</article>
	)
}

export default Hero