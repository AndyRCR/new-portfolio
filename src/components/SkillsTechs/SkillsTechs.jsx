import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './SkillsTechs.css'

/**
 * Techs
 */

import html from '../../assets/images/icons/techs/html.png'
import css from '../../assets/images/icons/techs/css.png'
import js from '../../assets/images/icons/techs/js.png'
import react from '../../assets/images/icons/techs/react.png'
import three from '../../assets/images/icons/techs/three.png'

import java from '../../assets/images/icons/techs/java.png'
import node from '../../assets/images/icons/techs/node.png'
import mongo from '../../assets/images/icons/techs/mongo.png'
import mysql from '../../assets/images/icons/techs/mysql.png'
import express from '../../assets/images/icons/techs/express.png'

import aws from '../../assets/images/icons/techs/aws.png'
import firebase from '../../assets/images/icons/techs/firebase.png'
import git from '../../assets/images/icons/techs/git.png'
import postman from '../../assets/images/icons/techs/postman.png'
import figma from '../../assets/images/icons/techs/figma.png'
import adobexd from '../../assets/images/icons/techs/adobexd.png'
import photoshop from '../../assets/images/icons/techs/photoshop.png'
import vegas from '../../assets/images/icons/techs/vegas.png'
import blender from '../../assets/images/icons/techs/blender.png'
import excel from '../../assets/images/icons/techs/excel.png'

const SkillsTechs = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`techs ${theme}`}>
			<div>
				<h3>Frontend</h3>
				<div className='frontend'>
					<div className='techItem'>
						<img src={html} alt='html' />
						<p>HTML5</p>
					</div>
					<div className='techItem'>
						<img src={css} alt='css' />
						<p>CSS3</p>
					</div>
					<div className='techItem'>
						<img src={js} alt='js' />
						<p>JavaScript</p>
					</div>
					<div className='techItem'>
						<img src={react} alt='react' />
						<p>React</p>
					</div>
					<div className='techItem'>
						<img src={three} alt='three' />
						<p>Three.js</p>
					</div>
				</div>
			</div>

			<div>
				<h3>Backend</h3>
				<div className='backend'>
					<div className='techItem'>
						<img src={java} alt='Java' />
						<p>Java</p>
					</div>
					<div className='techItem'>
						<img src={node} alt='Node' />
						<p>Node</p>
					</div>
					<div className='techItem'>
						<img src={mongo} alt='MongoDB' />
						<p>MongoDB</p>
					</div>
					<div className='techItem'>
						<img src={mysql} alt='MySQL' />
						<p>MySQL</p>
					</div>
					<div className='techItem'>
						<img src={express} alt='Express' />
						<p>Express</p>
					</div>
				</div>
			</div>

			<div>
				<h3>Extra</h3>
				<div className='extra'>
					<div className='techItem'>
						<img src={aws} alt='AWS' />
						<p>AWS</p>
					</div>
					<div className='techItem'>
						<img src={firebase} alt='Firebase' />
						<p>Firebase</p>
					</div>
					<div className='techItem'>
						<img src={git} alt='Git' />
						<p>Git</p>
					</div>
					<div className='techItem'>
						<img src={postman} alt='Postman' />
						<p>Postman</p>
					</div>
					<div className='techItem'>
						<img src={figma} alt='Figma' />
						<p>Figma</p>
					</div>
					<div className='techItem'>
						<img src={adobexd} alt='Adobe XD' />
						<p>Adobe XD</p>
					</div>
					<div className='techItem'>
						<img src={photoshop} alt='Photoshop' />
						<p>Photoshop</p>
					</div>
					<div className='techItem'>
						<img src={vegas} alt='Vegas Pro' />
						<p>Vegas Pro</p>
					</div>
					<div className='techItem'>
						<img src={blender} alt='Blender' />
						<p>Blender</p>
					</div>
					<div className='techItem'>
						<img src={excel} alt='Excel' />
						<p>Excel</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default SkillsTechs
