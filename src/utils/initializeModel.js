const initializeModel = (group, viewportWidth, viewportHeight) => {
    group.position.x = viewportWidth <= 4 ? 0 : viewportWidth / 4

    let scale
    if (viewportWidth <= 5) {
        if (viewportWidth <= 2) {
            scale = viewportHeight <= 3 ? 0.2 : 0.25
        } else scale = 0.3
    } else {
        scale = viewportWidth / 14
    }

    let positionZ
    if (viewportWidth <= 4) {
        if (viewportWidth <= 2) {
            positionZ =
                viewportHeight <= 3
                    ? viewportHeight / 3
                    : viewportHeight / 3.5
        } else positionZ = viewportHeight / 3
    } else {
        positionZ = viewportHeight / 7.5
    }
    group.position.z = positionZ

    group.scale.set(scale, scale, scale)
}

export default initializeModel