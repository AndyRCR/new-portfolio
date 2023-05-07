const fixScene = cb => {
    setTimeout(() => {
        document.querySelector('.theme-switch .switch-container').click()
        setTimeout(() => {
            document
                .querySelector('.theme-switch .switch-container')
                .click()

            cb(true)
        }, 10)
    }, 100)
}

export default fixScene