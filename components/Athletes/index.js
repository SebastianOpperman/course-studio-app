import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Button from '../Button'
import _ from './style.module.css'

const Athletes = ({title, cards}) => {
	const track = useRef(null),
				[width, setWidth] = useState(0),
				[active, setActive] = useState(0),
				[count, setCount] = useState(0),
				[transform, setTransform] = useState(0),
				{ ref, inView, entry } = useInView({
					threshold: .4
				})

	const init = () => {
		const mq = window.matchMedia('(min-width: 40em)')
		setWidth(track.current.querySelector('figure').getBoundingClientRect().width)
		setActive(mq.matches ? 1 : 0)
		setTransform(0)
	}

	useEffect(() => {
		setCount(track.current.querySelectorAll('figure').length)
		init()
		window.addEventListener('resize', init)
		return () => window.removeEventListener('resize', init)
	}, [track])

	const move = forw => {
		setTransform(forw ? transform - width - 16 : transform + width + 16)
		setActive(forw ? active + 1 : active - 1)
	}

	return (
		<article className={_.athletes}>
			<h2 ref={ref} id='athletes' className={inView ? _.show : ''}>{title}</h2>
			<div>
				{active !== 0 && <button onClick={() => move()} className={_.prev}></button>}
				<section ref={track} style={{transform: `translateX(${transform}px)`}}>
					{cards.map(({name, sport, image}, k) => (
						<figure key={k} className={active === k ? _.active : ''}>
							<div>
								<h3>Connect with <span>{name}</span></h3>
								<small>{sport}</small>
							</div>
							<img src={image} alt={name} />
						</figure>
					))}
				</section>
				{active + 1 !== count && <button onClick={() => move(true)} className={_.next}></button>}
			</div>
			<Button label='See All Athletes' />
		</article>
	)
}

export default Athletes