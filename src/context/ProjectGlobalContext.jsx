import { createContext, useState } from 'react'

export const ProjectContext = createContext()

const ProjectGlobalContext = ({ children }) => {
	const [project, setProject] = useState(null)
	const [showModal, setShowModal] = useState(false)

	return (
		<ProjectContext.Provider
			value={{ project, setProject, showModal, setShowModal }}
		>
			{children}
		</ProjectContext.Provider>
	)
}

export default ProjectGlobalContext
