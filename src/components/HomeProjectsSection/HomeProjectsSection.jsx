import ProjectSlider from '../ProjectSlider/ProjectSlider'
import './HomeProjectsSection.css'

const HomeProjectsSection = () => {
	return (
		<section className='third-section section right'>
			<div className='progress-wrapper progress-bar-wrapper-right'>
				<div className='progress-bar'></div>
			</div>
			<div className='section-container'>
				<h2 className='section-title'>Latest Projects</h2>
				<div className='section-content'>
					<div className='section-item'>
						<p>
							Latest developed projects,{' '}
							<span>see more about them here.</span>
						</p>
					</div>
				</div>
				<ProjectSlider />
			</div>
		</section>
	)
}
export default HomeProjectsSection
