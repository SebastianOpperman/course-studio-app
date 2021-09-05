import { useState } from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import _ from './style.module.css'

const menu = [
	{
		label: 'Athletes',
		link: '/'
	},
	{
		label: 'Log In',
		link: '/'
	},
	{
		label: 'Sign Up Now',
		link: '/'
	}
]

const Menu = () => {
	const [open, toggle] = useState(false)
	return (
		<nav className={_.menu}>
			<button onClick={() => toggle(!open)}>
				<Icon name={open ? 'close' : 'menu'} />
			</button>
			<ul className={open ? _.open : ''}>
				{menu.map((item, k) => (
					<li key={k}>
						<Link href={item.link}>
							<a>{item.label}</a>
						</Link>
						<ul>
							{item.subMenu && item.subMenu.map((sub, i) => (
								<li key={i}>
									<Link href={sub.subLink}>
										<a>{sub.subLabel}</a>
									</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default Menu