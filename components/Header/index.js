import Link from 'next/link'
import Menu from '../Menu'
import _ from './style.module.css'

const Header = () => (
	<header className={_.header}>
		<Link href='/'>
			<a>
				<img src='/logo.svg' alt='Course Studio Logo' />
			</a>
		</Link>
		<Menu />
	</header>
)
export default Header