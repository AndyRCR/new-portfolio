import { useContext } from 'react'
import TextSphere from '../TextSphere/TextSphere'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import useRedirection from '../../hooks/useRedirection'

const HomeSkillsSection = () => {
	const { language } = useContext(LanguageContext)

	const { handleRedirectionTo } = useRedirection()

	return (
		<section className='second-section section left'>
			<div className='progress-wrapper progress-bar-wrapper-left'>
				<div className='progress-bar'></div>
			</div>

			<div className='section-container'>
				<h2 className='section-title'>
					{language === 'en' ? 'My skills' : 'Mis habilidades'}
				</h2>
				<div className='section-content'>
					<div className='section-item'>
						<p>
							{language === 'en'
								? `Among my main skills are the use of Javascript w/
								React and Next, Node w/ Express, MysQL, MongoDB,
								Selenium. I also have experience with AWS, Firebase
								and Java.`
								: `Entre mis principales habilidades se encuentran el uso de Javascript con
								React y Next, Node con Express, MysQL, MongoDB,
								Selenium. También tengo experiencia con AWS, Firebase
								y Java.`}
							<br />
							<br />
							{language === 'en'
								? `As well I have experience and great interest in 3D
							graphics and its implementation on the web,
							therefore, I have knowledge in Blender, Three.js,
							React Three Fiber and gsap.`
								: `También tengo experiencia y gran interés en los gráficos 3D y su implementación en la web,
							por lo tanto, tengo conocimiento en Blender, Three.js,
							React Three Fiber y gsap.`}
							<br />
							<br />
							<span
								className='link'
								onClick={() => handleRedirectionTo('/skills')}
							>
								{language === 'en'
									? 'See my full techs stack here.'
									: 'Mira mi stack entero de tecnologías aquí.'}
							</span>
						</p>
					</div>
				</div>

				<TextSphere />
			</div>
		</section>
	)
}
export default HomeSkillsSection
