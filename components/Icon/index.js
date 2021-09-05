import _ from './style.module.css'

const icons = {
	menu: (
		<svg className={_.icon} viewBox='0 0 24 20'>
			<path d="M23,20H1a1,1,0,0,1,0-2H23a1,1,0,0,1,0,2Z" />
			<path d="M23,2H1A1,1,0,0,1,1,0H23a1,1,0,0,1,0,2Z" />
			<path d="M11,11H1A1,1,0,0,1,1,9H11a1,1,0,0,1,0,2Z" />
		</svg>
	),
	close: (
		<svg className={_.icon} viewBox='0 0 22 22'>
			<path d="M12.41,11l9.3-9.29A1,1,0,1,0,20.29.29L11,9.59,1.71.29A1,1,0,0,0,.29,1.71L9.59,11,.29,20.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,12.41l9.29,9.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
		</svg>
	)
}

const Icon = props => icons[props.name]
export default Icon