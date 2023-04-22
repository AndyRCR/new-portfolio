import { useContext } from 'react'
import Experience from '../Experience/Experience'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import './HomeViewContainer.css'
import { ThemeContext } from '../../context/ThemeGlobalContext'

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

						<div className='secondSection'>
							{/* <h1>Seccion2</h1> */}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default HomeViewContainer
