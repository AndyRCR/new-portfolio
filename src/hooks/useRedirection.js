import { useContext } from "react"
import { ModelContext } from "../context/ModelGlobalContext"
import { useNavigate } from "react-router-dom"

const useRedirection = () => {

    const { setNeedLoader, setModelLoaded } = useContext(ModelContext)

    const navigate = useNavigate()

    const handleRedirectionTo = (path) => {
        if (location.pathname === path) return
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
