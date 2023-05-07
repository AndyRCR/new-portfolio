import emailjs from 'emailjs-com'
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { LanguageContext } from '../context/LanguageGlobalContext'

const useMail = (language) => {

    emailjs.init("adA-jRKohY9c3pLXE")

    const [isLoading, setIsLoading] = useState(false)
    const [mail, setMail] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    })

    const sendMail = () => {
        setIsLoading(true)

        if (mail.name === '' || mail.email === '' || mail.message === '' || mail.subject === '') {
            Swal.fire({
                icon: 'info',
                title: language === 'en' ? 'Information' : 'Info',
                text: language === 'en' ? 'All fields are required 👀' : 'All fields are required 👀',
                target: '.contact-form',
                customClass: {
                    confirmButton: 'modal-button',
                    popup: 'modal-popup'
                }
            })
            setIsLoading(false)
        } else {
            emailjs.send('service_62hcb8h', 'template_nec1jlb', mail)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: language === 'en' ? 'Nice!' : '¡Genial!',
                        text: language === 'en' ? "I'll reply as soon as possible" : 'Te responderé lo antes posible',
                        target: '.contact-form',
                        customClass: {
                            confirmButton: 'modal-button',
                            popup: 'modal-popup'
                        }
                    })

                    setMail({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    })
                }, function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: language === 'en' ? 'An error occurred with the server :/' : 'Ocurrió un error con el servidor :/',
                        text: language === 'en' ? 'Please try again' : 'Por favor intenta de nuevo',
                        target: '.contact-form',
                        customClass: {
                            confirmButton: 'modal-button',
                            popup: 'modal-popup'
                        }
                    })
                }).then(() => setIsLoading(false))
        }
    }

    return { mail, setMail, sendMail, isLoading }
}
export default useMail
