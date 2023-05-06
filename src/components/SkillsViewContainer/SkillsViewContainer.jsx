import { useContext, useEffect } from 'react'
import { ModelContext } from '../../context/ModelGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import RubberText from '../RubberText/RubberText'
import SkillsTechs from '../SkillsTechs/SkillsTechs'
import './SkillsViewContainer.css'
import useRedirection from '../../hooks/useRedirection'

const SkillsViewContainer = () => {
	const { theme } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)
	const { setModelLoaded } = useContext(ModelContext)

	const { handleRedirectionTo } = useRedirection()

	useEffect(() => {
		setModelLoaded(true)
	}, [])

	return (
		<div className={`skills-view-container ${theme} container`}>
			<div className='skills-view-container-content container-content'>
				<div className='rubber-container'>
					<RubberText>
						{language === 'en'
							? 'My skills and'
							: 'Mis Habilidades'}
					</RubberText>
					<RubberText>
						{language === 'en' ? 'experiences' : 'y experiencias'}
					</RubberText>
				</div>

				<p>
					{language === 'en'
						? `Since I started in the world of web programming 4 years ago I find myself refining my skills.`
						: `Desde que empecé en el mundo de la programación web hace 4 años me encuentro refinando mis habilidades.`}
					<br />
					<br />
					{language === 'en'
						? `I have previous experience working as IT Project Leader and Programmer Analyst in a technological 
						innovation and process optimization company; I also worked as a full-stack developer in a logistics company, 
						proposing new solutions in both, and being part and cause of the achievement of the goals of each month of the 
						company.`
						: `Tengo experiencia previa trabajando como Líder de Proyectos de TI y Analista Programador en una empresa de 
						innovación tecnológica y optimización de procesos; también me desempeñe como desarrollador full-stack en una 
						empresa de logística,  proponiendo en ambas, nuevas soluciones, y siendo parte y causa del cumplimiento de las 
						metas de cada mes de la empresa.`}
					<br />
					<br />
					{language === 'en'
						? `I also had the opportunity to work in an Argentine prepaids company where I worked as a front-end developer.`
						: `También tuve la oportunidad de trabajar en una empresa de prepagas argentina donde me desempeñé como desarrollador front-end.`}
					<br />
					<br />
					{language === 'en'
						? `I'm able to create web pages that are fast, efficient and intuitive, adaptable to any device.`
						: `Soy capaz de crear páginas web que sean rápidas, eficientes e intuitivas, adaptables a cualquier dispositivo.`}
					<br />
					<br />
					{language === 'en' ? `Visit mi ` : `Visita mi perfil de `}
					<span className='link'>
						<a
							href='https://www.linkedin.com/in/andycanalesr/'
							target='_blank'
							rel='no-referrer'
						>
							LinkedIn
						</a>
					</span>
					{language === 'en'
						? ` profile for more details or just `
						: ` para más detalles o simplemente `}
					<span
						className='link'
						onClick={() => handleRedirectionTo('/contact')}
					>
						{language === 'en' ? 'contact me.' : 'contáctame.'}
					</span>
				</p>
			</div>
			<div className='skills-view-media'>
				<SkillsTechs />
			</div>
		</div>
	)
}
export default SkillsViewContainer
