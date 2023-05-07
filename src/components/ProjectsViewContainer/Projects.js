/**
 * Assets
 */

//Foxbel
import foxbel from '../../assets/images/projects/foxbel/foxbel.jpg'
import foxbeldesktop from '../../assets/images/projects/foxbel/foxbeldesktop.jpg'
import foxbelmobile from '../../assets/images/projects/foxbel/foxbelmobile.jpg'

//Weather
import weather from '../../assets/images/projects/weather/weather.jpg'
import weatherdesktop from '../../assets/images/projects/weather/weatherdesktop.jpg'
import weathermobile from '../../assets/images/projects/weather/weathermobile.jpg'

//Untels
import untels from '../../assets/images/projects/untels/untels.png'
import untelsdesktop from '../../assets/images/projects/untels/untelsdesktop.jpg'
import untelsmobile from '../../assets/images/projects/untels/untelsmobile.jpg'

//Blink Landing
import blinklp from '../../assets/images/projects/blinklp/blink-lp.jpg'
import blinklpdesktop1 from '../../assets/images/projects/blinklp/blinklpdesktop1.jpg'
import blinklpdesktop2 from '../../assets/images/projects/blinklp/blinklpdesktop2.jpg'
import blinklpmobile from '../../assets/images/projects/blinklp/blinklpmobile.jpg'

//Blink CRM
import blinkcrm from '../../assets/images/projects/blinkcrm/blink-crm.jpg'
import blinkcrmdesktop1 from '../../assets/images/projects/blinkcrm/blinkcrmdesktop1.jpg'
import blinkcrmdesktop2 from '../../assets/images/projects/blinkcrm/blinkcrmdesktop2.jpg'
import blinkcrmmobile from '../../assets/images/projects/blinkcrm/blinkcrmmobile.jpg'

//Portfolio
import portfolio from '../../assets/images/projects/portfolio/portfolio.jpg'
import portfoliodesktop1 from '../../assets/images/projects/portfolio/portfoliodesktop1.jpg'
import portfoliodesktop2 from '../../assets/images/projects/portfolio/portfoliodesktop2.jpg'
import portfoliomobile from '../../assets/images/projects/portfolio/portfoliomobile.jpg'

//Peko
import peko from '../../assets/images/projects/pekocinema/peko.jpg'
import pekodesktop1 from '../../assets/images/projects/pekocinema/pekodesktop1.jpg'
import pekodesktop2 from '../../assets/images/projects/pekocinema/pekodesktop2.jpg'
import pekomobile from '../../assets/images/projects/pekocinema/pekomobile.jpg'

//BCP Clone
import bcpclone from '../../assets/images/projects/bcp/bcpclone.jpg'
import bcpclonedesktop1 from '../../assets/images/projects/bcp/bcpclonedesktop.jpg'
import bcpclonedesktop2 from '../../assets/images/projects/bcp/bcpclonedesktop2.jpg'
import bcpclonedesktop3 from '../../assets/images/projects/bcp/bcpclonedesktop3.jpg'
import bcpclonedesktop4 from '../../assets/images/projects/bcp/bcpclonedesktop4.jpg'
import bcpclonemobile from '../../assets/images/projects/bcp/bcpclonemobile.jpg'

const projects = [
    {
        name: 'Blink CRM',
        image: blinkcrm,
        carousel: [blinkcrm, blinkcrmdesktop1, blinkcrmdesktop2, blinkcrmmobile],
        tecnologies:
            'React, Node, Express, MySQL, AWS RDS, AWS LightSail, React-PDF, Framer-motion, Material-UI',
        description: {
            en: {
                desc: `Blink's administration panel, an argentinian prepaid medicine company, in which
                advisors can manage clients, plans, quotes, etc. The administration panel was developed with React and connected 
                to a REST API developed in Node.js and Express.js, which connects to a MySQL database hosted on AWS RDS. 
                The administration panel is hosted on an AWS LightSail server. And it has:`,
                features: [
                    'A user authentication, registration and authorization system.',
                    'A system for viewing, filling out requests and generating reports, which are generated on the server.',
                    'A real-time chat system, which connects to a server with Socket.io hosted on AWS LightSail.',
                    'A real-time notification system, which connects to a server with Socket.io hosted on AWS LightSail.',
                    'An e-learning section for advisors.',
                ]
            },
            es: {
                desc: `Panel de administración de Blink, una empresa argentina de prepagas, en la cual los 
                asesores pueden gestionar clientes, planes, cotizaciones, etc. El panel de administración 
                esta desaroollado con React y conectado a una API REST desarrollada en Node.js y Express.js, la cual se 
                conecta a una base de datos MySQL alojada en AWS RDS. El panel de administración 
                está alojado en un servidor de AWS LightSail. Y cuenta con:`,
                features: [
                    'Un sistema de autenticación, registro y autorización de usuarios.',
                    'Un sistema de visualización, llenado de solicitudes y generación de reportes, los cuales se generan en el servidor.',
                    'Un sistema de chat en tiempo real, el cual se conecta a un servidor con Socket.io alojado en AWS LightSail.',
                    'Un sistema de notificaciones en tiempo real, el cual se conecta a un servidor con Socket.io alojado en AWS LightSail.',
                    'Una sección de e-learning para los asesores.',
                ]
            }
        },
    },
    {
        name: 'Blink Landing Page',
        image: blinklp,
        carousel: [blinklp, blinklpdesktop1, blinklpdesktop2, blinklpmobile],
        tecnologies: 'React, Node, Express, AWS S3, Cloud Firestore, Material-UI, Framer-motion',
        description: {
            en: {
                desc: `Landing page of Blink, an argentinian prepaid medicine company, which
                aims to capture potential clients and provide information about the company.
                Developed with React and connected to a REST API developed in Node and Express.
                Currently offline due to a restructuring. And it has:`,
                features: [
                    'A plan quote.',
                    'A contact form.',
                    'A form for advisors interested in working in the company, which connects to an AWS S3 bucket.',
                    'A blog article section which connects to a Cloud Firestore database.'
                ]
            },
            es: {
                desc: `Landing page de Blink, una empresa argentina de prepagas, la cual
                tiene como finalidad captar clientes potenciales y brindar información sobre la empresa. 
                Desarrollada con React y conectada a una API REST desarrollada en Node y Express. 
                Actualmente de baja debido a una reestructuración. Y cuenta con:`,
                features: [
                    'Un cotizador de planes.',
                    'Un formulario de contacto.',
                    'Un formulario para asesores interesados en trabajar en la empresa, el cual se conecta a un bucket de AWS S3.',
                    'Una sección de articulos de blog la cual se conecta a una base de datos de Cloud Firestore.'
                ]
            }
        }
    },
    {
        name: 'BCP Clone',
        image: bcpclone,
        carousel: [bcpclone, bcpclonedesktop1, bcpclonedesktop2, bcpclonedesktop3, bcpclonedesktop4, bcpclonemobile],
        tecnologies: 'React, React-slick, Lottie',
        description: {
            en: {
                desc: `Home page of BCP and login form section, developed solely for the purpose of practicing layout and animations.`,
                features: []
            },
            es: {
                desc: `Página de inicio de BCP y sección de formulario de inicio de sesión, desarrollada únicamente con el propósito 
                de practicar maquetación y animaciones.`,
                features: []
            }
        }
    },
    {
        name: 'Old Portfolio',
        image: portfolio,
        carousel: [portfolio, portfoliodesktop1, portfoliodesktop2, portfoliomobile],
        tecnologies: 'React, Three.js, React-slick, Blast, EmailJS',
        description: {
            en: {
                desc: `My old portfolio, developed with React and Three.js, with the aim of showing my projects and skills.`,
                features: []
            },
            es: {
                desc: `Mi antiguo portfolio, desarrollado con React y Three.js, con el objetivo de mostrar mis proyectos y habilidades.`,
                features: []
            }
        }
    },
    {
        name: 'Foxbel Music Player',
        image: foxbel,
        carousel: [foxbel, foxbeldesktop, foxbelmobile],
        tecnologies: 'React, Howler, Material-UI, Deezer API',
        description: {
            en: {
                desc: `Music player developed for the Foxbel Music test, which consists of a music player with a list of songs, 
                a search engine and a player. Developed with React, Howler and connected to the Deezer API.`,
                features: []
            },
            es: {
                desc: `Reproductor de música desarrollado para la prueba de Foxbel Music, el cual consiste en un reproductor de música 
                con un listado de canciones, un buscador y un reproductor. Desarrollado con React, Howler y conectado a la API de Deezer.`,
                features: []
            }
        }
    },
    {
        name: 'Weather App',
        image: weather,
        carousel: [weather, weatherdesktop, weathermobile],
        tecnologies:
            'React, Three.js, Vanta, Cloud Firestore, Styled-components, Charts Ant Design',
        description: {
            en: {
                desc: `Weather application developed with React and Cloud Firestore, which allows the registration of the weather,
                and the visualization of the registered data through graphs.`,
                features: []
            },
            es: {
                desc: `Aplicación del clima desarrollada con React y Cloud Firestore, la cual permite el registro del clima,
                y la visualización de los datos registrados mediante gráficos.`,
                features: []
            }
        }
    },
    {
        name: 'Untels Landing Page',
        image: untels,
        carousel: [untels, untelsdesktop, untelsmobile],
        tecnologies:
            'React, Three.js, AWS S3, Cloud Firestore, EmailJS, Blender, Autocad',
        description: {
            en: {
                desc: `Landing page of the National University of Technology of Lima Sur, which aims to capture,
                inform and provide information about the university and its careers. Developed with React and Three.js, the plans of the 3D model
                were initially developed in Autocad and later produced in Blender. The resources are obtained from a bucket in AWS S3,
                and the form is connected to the EmailJS service.`,
                features: []
            },
            es: {
                desc: `Landing page de la Universidad Nacional Tecnológica de Lima Sur, la cual tiene como finalidad captar,
                informar y brindar información sobre la universidad y sus carreras. Desarrollada con React y Three.js, los planos del modelo 3D
                fueron desarrollados inicialmente en Autocad y posteriormente se produjo en Blender. Los recursos son obtenidos de un bucken en AWS S3,
                y el formulario se conecta al servicio de EmailJS.`,
                features: []
            }
        }
    },
    {
        name: 'Peko Cinema',
        image: peko,
        carousel: [peko, pekodesktop1, pekodesktop2, pekomobile],
        tecnologies: 'React, AWS S3, Cloud Firestore, EmailJS',
        description: {
            en: {
                desc: `Page that simulates the flow and business logic of Cineplanet, which allows the selection of seats,
                the selection of movies and the purchase of tickets. Developed with React and Cloud Firestore.`,
                features: []
            },
            es: {
                desc: `Página que simula el flujo y la lógica de negocio de Cineplanet, la cual permite la selección de asientos,
                la selección de películas y la compra de entradas. Desarrollada con React y Cloud Firestore.`,
                features: []
            }
        }
    },
]

export default projects