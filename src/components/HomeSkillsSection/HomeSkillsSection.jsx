import TextSphere from '../TextSphere/TextSphere'

const HomeSkillsSection = () => {
	return (
		<section className='second-section section left'>
			<div className='progress-wrapper progress-bar-wrapper-left'>
				<div className='progress-bar'></div>
			</div>

			<div className='section-container'>
				<h2 className='section-title'>My skills</h2>
				<div className='section-content'>
					<div className='section-item'>
						<p>
							Among my main skills are the use of Javascript w/
							React and Next, Node w/ Express, MysQL, MongoDB,
							Selenium. I also have experience with AWS, Firebase
							and Java.
							<br />
							<br />
							As well I have experience and great interest in 3D
							graphics and its implementation on the web,
							therefore, I have knowledge in Blender, Three.js,
							React Three Fiber and gsap.
							<br />
							<br />
							<span>See my full techs stack here.</span>
						</p>
					</div>
				</div>

				<TextSphere />
			</div>
		</section>
	)
}
export default HomeSkillsSection
