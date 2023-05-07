const fixButtons = button => {
    const fixButton = document.querySelector('.fix-button')
    const playButton = document.querySelector('.play-music-button')
    const top = playButton?.getBoundingClientRect().top
    const left = playButton?.getBoundingClientRect().left
    fixButton.style.top = `${top}px`
    fixButton.style.left = `${window.innerWidth < 1250 ? left : left - 150
        }px`
    fixButton.style.width = `${playButton?.getBoundingClientRect().width
        }px`
    fixButton.style.height = `${playButton?.getBoundingClientRect().height
        }px`

    const fixmessage = document.querySelector('.fix-message')
    const catMessage = document.querySelector('.cat-message')
    const ctop = catMessage?.getBoundingClientRect().top
    const cleft = catMessage?.getBoundingClientRect().left
    fixmessage.style.top = `${ctop}px`
    fixmessage.style.left = `${window.innerWidth < 1250 ? cleft : cleft - 150
        }px`
    fixmessage.style.width = `${catMessage?.getBoundingClientRect().width
        }px`
    fixmessage.style.height = `${catMessage?.getBoundingClientRect().height
        }px`
}

export default fixButtons