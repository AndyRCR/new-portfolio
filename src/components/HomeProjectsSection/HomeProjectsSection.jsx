import { useContext } from 'react'
import ProjectSlider from '../ProjectSlider/ProjectSlider'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import useRedirection from '../../hooks/useRedirection'
import Button from '../Button/Button'
import './HomeProjectsSection.css'

const HomeProjectsSection = () => {
	const { language } = useContext(LanguageContext)

	const { handleRedirectionTo } = useRedirection()

	const downloadCV = () => {
		const link = document.createElement('a')
		link.href = '/CV_AndyCanales.pdf'
		link.download = 'CV_AndyCanales.pdf'
		link.click()
	}

	return (
		<section className='third-section section right'>
			<div className='progress-wrapper progress-bar-wrapper-right'>
				<div className='progress-bar'></div>
			</div>
			<div className='section-container'>
				<h2 className='section-title'>
					{language === 'en'
						? 'Latest Projects'
						: 'Últimos proyectos'}
				</h2>
				<div className='section-content'>
					<div className='section-item'>
						<p style={{ textAlign: 'center' }}>
							{language === 'en'
								? 'Latest developed projects, '
								: 'Últimos proyectos desarrollados, '}
							<span
								className='link'
								onClick={() => handleRedirectionTo('/projects')}
							>
								{language === 'en'
									? 'see more about them here.'
									: 'vea más sobre ellos aquí.'}
							</span>
						</p>
					</div>
				</div>
				<ProjectSlider />

				<h2 className='section-title'>
					{language === 'en' ? 'Finally...' : 'Finalmente...'}
				</h2>

				<div className='buttons-section'>
					<Button onClick={() => handleRedirectionTo('/contact')}>
						{language === 'en' ? 'Contact me' : 'Contáctame'}
					</Button>
					<Button onClick={downloadCV}>
						{language === 'en'
							? 'Download my CV'
							: 'Descarga mi CV'}
					</Button>
				</div>
			</div>
		</section>
	)
}
export default HomeProjectsSection
