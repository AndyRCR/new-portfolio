import './HomeAboutSection.css'

const HomeAboutSection = () => {
	return (
		<section className='first-section section right'>
			<div className='progress-wrapper progress-bar-wrapper-right'>
				<div className='progress-bar'></div>
			</div>

			<div className='section-container'>
				<h2 className='section-title'>A little about me</h2>
				<div className='section-content'>
					<div className='section-item'>
						<h3 className='section-item-title'>
							Nice to meet you, I'm Andy
						</h3>
						<p>
							I'm a Full Stack Developer based in Perú with a
							passion for creating beautiful, responsive, and
							functional websites, and all the processes that
							entail it. I have a solid background in complex,
							detailed and highly customized requirements
							projects.{' '}
							<span className='section-link'>
								Know me better here.
							</span>
						</p>
					</div>
					<div className='section-item'>
						<h3 className='section-item-title'>My philosophy</h3>
						<p>
							I love interactive things, motion graphics and
							immersive experiences, that's why I think the holy
							trinity to be able to create a great experience on a
							page is: The design, the implementation and its
							functionality.
						</p>
					</div>
					<div className='section-item'>
						<h3 className='section-item-title'>
							Let's create something{' '}
							<span className='tached'>good</span> unique together
						</h3>
						<p>
							I think the beauty of digital is that you can have a
							"dialogue with things", where the product responds
							to your actions.
							<br />
							<br />I love to imagine things and translate them
							into code, just ask me "How?" and I'll answer you
							"Let's start" 😉.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default HomeAboutSection
