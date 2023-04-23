import { useContext } from 'react'
import Experience from '../Experience/Experience'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './HomeViewContainer.css'

const HomeViewContainer = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`homeViewContainer ${theme}`}>
			<div className='experience'>
				<Experience />
			</div>

			<div className='page'>
				<div className='pageWrapper'>
					<section className='pageBody'>
						<div className='firstSection'>
							<ThemeSwitch />
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default HomeViewContainer
