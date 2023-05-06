import { useContext } from "react"
import { ModelContext } from "../context/ModelGlobalContext"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../context/ThemeGlobalContext"

const useRedirection = () => {

    const { setClosedNavbar } = useContext(ThemeContext)
    const { setNeedLoader, setModelLoaded } = useContext(ModelContext)

    const navigate = useNavigate()

    const handleRedirectionTo = (path) => {
        if (location.pathname === path) return
        if (window.innerWidth <= 1250) {
            setClosedNavbar(true)
        }
        callLoader()
        setTimeout(() => navigate(path), 1800)
    }

    const callLoader = () => {
        setModelLoaded(false)
        setNeedLoader(true)
    }

    return { handleRedirectionTo }
}
export default useRedirection
