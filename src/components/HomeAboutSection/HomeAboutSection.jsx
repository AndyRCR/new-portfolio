import { useContext } from 'react'
import './HomeAboutSection.css'
import { LanguageContext } from '../../context/LanguageGlobalContext'

const HomeAboutSection = () => {
	const { language } = useContext(LanguageContext)

	return (
		<section className='first-section section right'>
			<div className='progress-wrapper progress-bar-wrapper-right'>
				<div className='progress-bar'></div>
			</div>

			<div className='section-container'>
				<h2 className='section-title'>
					{language === 'en'
						? 'A little about me'
						: 'Un poco sobre mí'}
				</h2>
				<div className='section-content'>
					<div className='section-item'>
						<h3 className='section-item-title'>
							{language === 'en'
								? "Nice to meet you, I'm Andy"
								: 'Es un gusto, soy Andy'}
						</h3>
						<p>
							{language === 'en'
								? `I'm a Full Stack Developer based in Perú with a
								passion for creating beautiful, responsive, and
								functional websites, and all the processes that
								entail it. I have a solid background in complex,
								detailed and highly customized requirements
								projects. `
								: `Soy un desarrollador Full Stack ubicado en Perú
								apasionado por crear sitios web llamativos, responsivos, 
								funcionales, y todos los procesos que lo conlleva.
								Tengo una sólida experiencia en proyectos de requisitos complejos,
								detallados y altamente personalizados. `}
							<span className='section-link'>
								{language === 'en'
									? 'Know me better here.'
									: 'Conóceme mejor aquí.'}
							</span>
						</p>
					</div>
					<div className='section-item'>
						<h3 className='section-item-title'>
							{language === 'en'
								? 'My philosophy'
								: 'Mi filosofía'}
						</h3>
						<p>
							{language === 'en'
								? `I love interactive things, motion graphics and
							immersive experiences, that's why I think the holy
							trinity to be able to create a great experience on a
							page is: The design, the implementation and its
							functionality.`
								: `Me encantan las cosas interactivas, los gráficos en movimiento y
							experiencias inmersivas, por eso creo que la santa
							trinidad para poder crear una gran experiencia en una
							página es: El diseño, la implementación y su
							funcionalidad.`}
						</p>
					</div>
					<div className='section-item'>
						<h3 className='section-item-title'>
							{language === 'en'
								? "Let's create something "
								: 'Creemos algo '}
							<span className='tached'>
								{language === 'en' ? 'good' : 'bueno'}
							</span>
							{language === 'en'
								? ' unique together'
								: ' único juntos'}
						</h3>
						<p>
							{language === 'en'
								? `I think the beauty of digital is that you can have a
							"dialogue with things", where the product responds
							to your actions.`
								: `Creo que la belleza de lo digital es que puedes tener un
							"diálogo con las cosas", donde el producto responde
							a tus acciones.`}
							<br />
							<br />
							{language === 'en'
								? `I love to imagine things and translate them
							into code, just ask me "How can we do this?" and
							I'll answer you "Let's start" 😉.`
								: `Me encanta imaginar cosas y convertirlas
							en código, solo pregúntame "¿Cómo podemos hacer esto?" y
							te responderé "Empecemos" 😉.`}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default HomeAboutSection
