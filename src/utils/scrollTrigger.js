import GSAP from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

const setScrollTrigger = objs => {
    GSAP.registerPlugin(ScrollTrigger)
    ScrollTrigger.config({ ignoreMobileResize: true })
    ScrollTrigger.matchMedia({
        //Desktop
        '(min-width: 1001px)': () => {
            //First Section
            const firstMovieTimeLine = new GSAP.timeline({
                scrollTrigger: {
                    scroller: '.page-wrapper',
                    trigger: '.first-move',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            })

            firstMovieTimeLine.to(objs.group.position, {
                x: () => {
                    return -window.innerWidth * 0.00092
                },
            })

            //Second Section
            const secondMovieTimeLine = new GSAP.timeline({
                scrollTrigger: {
                    scroller: '.page-wrapper',
                    trigger: '.second-move',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            })
            secondMovieTimeLine.to(
                objs.group.position,
                {
                    x: () => {
                        return window.innerWidth * 0.0009
                    },
                    z: () => {
                        return window.innerHeight * 0.001
                    },
                },
                'same'
            )
            secondMovieTimeLine.to(
                objs.group.scale,
                {
                    x: 0.7,
                    y: 0.7,
                    z: 0.7,
                },
                'same'
            )

            //Third Section
            const thirdMovieTimeLine = new GSAP.timeline({
                scrollTrigger: {
                    scroller: '.page-wrapper',
                    trigger: '.third-move',
                    start: 'top top',
                    end: `bottom bottom`,
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            })

            thirdMovieTimeLine.to(
                objs.group.position,
                {
                    x: () => {
                        return -window.innerWidth * 0.001
                    },
                    z: () => {
                        return 6
                    },
                },
                'same'
            )
            thirdMovieTimeLine.to(
                objs.group.scale,
                {
                    x: 2,
                    y: 2,
                    z: 2,
                },
                'same'
            )
        },
        //Mobile
        '(max-width: 1000px)': () => {
            //First Section
            const firstMovieTimeLine = new GSAP.timeline({
                scrollTrigger: {
                    scroller: '.page-wrapper',
                    trigger: '.first-move',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            })
            firstMovieTimeLine.to(
                objs.group.scale,
                {
                    x: 0.4,
                    y: 0.4,
                    z: 0.4,
                },
                'same'
            )
            firstMovieTimeLine.to(
                objs.group.position,
                {
                    z: () => {
                        return window.innerHeight * 0.001
                    },
                },
                'same'
            )
            firstMovieTimeLine.to(
                objs.ortCamera.position,
                {
                    y: () => {
                        return window.innerHeight * 0.002
                    },
                },
                'same'
            )

            //Second Section
            const secondMovieTimeLine = new GSAP.timeline({
                scrollTrigger: {
                    scroller: '.page-wrapper',
                    trigger: '.second-move',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            })
            secondMovieTimeLine.to(
                objs.group.scale,
                {
                    x: 0.55,
                    y: 0.55,
                    z: 0.55,
                },
                'same'
            )
            secondMovieTimeLine.to(
                objs.musicMessage.position,
                {
                    z: () => {
                        return objs.musicMessage.position.z - 1
                    },
                },
                'same'
            )
            secondMovieTimeLine.to(
                objs.musicMessage.scale,
                {
                    x: 0.8,
                    y: 0.8,
                    z: 0.8,
                },
                'same'
            )
            secondMovieTimeLine.to(
                objs.musicButton.position,
                {
                    x: 0.4,
                    y: 0.5,
                    z: -0.9,
                },
                'same'
            )
            secondMovieTimeLine.to(
                objs.ortCamera.position,
                {
                    y: () => {
                        return window.innerHeight * 0.0025
                    },
                },
                'same'
            )

            //Third Section
            const thirdMovieTimeLine = new GSAP.timeline({
                scrollTrigger: {
                    scroller: '.page-wrapper',
                    trigger: '.third-move',
                    start: 'top top',
                    end: `bottom bottom`,
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            })
            thirdMovieTimeLine.to(
                objs.group.scale,
                {
                    x: 1.3,
                    y: 1.3,
                    z: 1.3,
                },
                'same'
            )
            thirdMovieTimeLine.to(
                objs.ortCamera.position,
                {
                    y: () => {
                        return window.innerHeight * 0.0045
                    },
                },
                'same'
            )
        },
        all: () => {
            const sections = document.querySelectorAll('.section')

            GSAP.to('.lets-start', {
                opacity: 0,
                scrollTrigger: {
                    scroller: '.page-wrapper',
                    trigger: '.hero',
                    start: 'top -10px',
                    end: 'center center',
                    scrub: 0.6,
                },
            })

            sections.forEach((section, i) => {
                const progressWrapper =
                    section.querySelector('.progress-wrapper')
                const progressBar = section.querySelector('.progress-bar')

                if (section.classList.contains('right')) {
                    GSAP.to(section, {
                        borderTopLeftRadius: 10,
                        scrollTrigger: {
                            scroller: '.page-wrapper',
                            trigger: section,
                            start: 'top bottom',
                            end: 'top top',
                            scrub: 0.6,
                        },
                    })

                    if (i !== 2) {
                        GSAP.to(section, {
                            borderBottomLeftRadius: 700,
                            scrollTrigger: {
                                scroller: '.page-wrapper',
                                trigger: section,
                                start: 'bottom bottom',
                                end: 'bottom top',
                                scrub: 0.6,
                            },
                        })
                    }
                } else {
                    GSAP.to(section, {
                        borderTopRightRadius: 10,
                        scrollTrigger: {
                            scroller: '.page-wrapper',
                            trigger: section,
                            start: 'top bottom',
                            end: 'top top',
                            scrub: 0.6,
                        },
                    })

                    GSAP.to(section, {
                        borderBottomRightRadius: 700,
                        scrollTrigger: {
                            scroller: '.page-wrapper',
                            trigger: section,
                            start: 'bottom bottom',
                            end: 'bottom top',
                            scrub: 0.6,
                        },
                    })
                }
                GSAP.from(progressBar, {
                    scaleY: 0,
                    scrollTrigger: {
                        scroller: '.page-wrapper',
                        trigger: section,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        pin: progressWrapper,
                        pinSpacing: false,
                    },
                })
            })
        },
    })
}

export default setScrollTrigger