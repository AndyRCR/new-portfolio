import { useContext, useEffect } from 'react'
import { ModelContext } from '../../context/ModelGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import RubberText from '../RubberText/RubberText'
import andy from '../../assets/images/icons/andy.png'
import mongo from '../../assets/images/icons/techs/mongo.png'
import express from '../../assets/images/icons/techs/express.png'
import react from '../../assets/images/icons/techs/react.png'
import node from '../../assets/images/icons/techs/node.png'
import './AboutViewContainer.css'

const AboutViewContainer = () => {
	const { setModelLoaded } = useContext(ModelContext)
	const { language } = useContext(LanguageContext)
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		setModelLoaded(true)
	}, [])

	return (
		<div className={`about-view-container ${theme} container`}>
			<div className='about-view-container-content container-content'>
				<div className='rubber-container'>
					<RubberText>
						{language === 'en' ? 'A little' : 'Un poco'}
					</RubberText>
					<RubberText>
						{language === 'en'
							? 'more about me...'
							: 'más sobre mi'}
					</RubberText>
				</div>

				<p>
					{language === 'en'
						? `I consider myself a very enthusiastic and resilient person, always ready
						to face new challenges and projects. I also love to travel and produce music,
						therefore, one of the goals I have is to be able to dedicate myself to programming 
						in conjunction with these activities.`
						: `Me considero una persona muy entusiasta y resiliente, siempre dispuesta
						para afrontar nuevos retos y proyectos. También me encanta viajar y producir música,
						por lo que una de las metas que tengo es poder dedicarme a la programación en conjunto con estas actividades.`}
					<br />
					<br />
					{language === 'en'
						? `I'm more involved in frontend development, although it is not an impediment for me to be able to
						adapt to any technology related to the web, be it backend, databases, even devops.`
						: `Estoy más familiarizado con el desarrollo frontend, aunque no me es impedimento para poder
						adaptarme a cualquier tecnología relacionada con la web, ya sea backend, bases de datos, incluso devops.`}
				</p>
			</div>
			<div className='about-view-media'>
				<div className='imageContainer'>
					<img
						id='profileImage'
						src={andy}
						alt='andy canales portfolio'
					/>
					<div className='techsLogos'>
						<img id='mongodb' src={mongo} alt='mongodb' />
						<img id='express' src={express} alt='express' />
						<img id='react' src={react} alt='react' />
						<img id='node' src={node} alt='node' />
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutViewContainer
