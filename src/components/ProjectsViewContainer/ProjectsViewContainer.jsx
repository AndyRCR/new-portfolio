import { useContext, useEffect } from 'react'
import { ModelContext } from '../../context/ModelGlobalContext'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import RubberText from '../RubberText/RubberText'
import Project from '../Project/Project'
import projects from './Projects.js'
import './ProjectsViewContainer.css'

const ProjectsViewContainer = () => {
	const { theme } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)
	const { setModelLoaded } = useContext(ModelContext)

	useEffect(() => {
		setModelLoaded(true)
	}, [])

	return (
		<div className={`projects-view-container ${theme}`}>
			<div className='rubber-container'>
				<RubberText>
					{language === 'en' ? 'Last projects' : 'Últimos proyectos'}
				</RubberText>
			</div>
			<p className='projects-text'>
				{language === 'en'
					? 'Here you can see some of my last projects, hover or click on each one for a better view'
					: 'Aquí puedes ver algunos de mis últimos proyectos, pasa el mouse por encima o has click en cada uno para una mejor vista'}
			</p>
			<div className='projects-container'>
				{projects.map((project, index) => (
					<div className='project-container' key={`project ${index}`}>
						<Project project={{ ...project, index }} />
						<div className='project-info'>
							<div className='project-name'>{project.name}</div>
							<div className='project-techs'>
								<strong>
									{language === 'en'
										? 'Techs'
										: 'Tecnologías'}
								</strong>
								<br />
								{project.tecnologies}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProjectsViewContainer
