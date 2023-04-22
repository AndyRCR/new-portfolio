import * as THREE from 'three'

import room from '../assets/models/room.glb'

import videoBlender from '../assets/videos/makingroom_compressed.mp4'

import bakedday from '../assets/images/bakedday.jpg'
import bakednight from '../assets/images/bakednight.jpg'
import curtainTexture from '../assets/images/cortina.jpg'
import floorTexture from '../assets/images/floor.jpg'
import venomTexture from '../assets/images/venom.jpg'

import bakedVertexShader from '../shaders/baked/vertex.glsl'
import bakedFragmentShader from '../shaders/baked/fragment.glsl'
import redVertexShader from '../shaders/red/vertex.glsl'
import redFragmentShader from '../shaders/red/fragment.glsl'
import rgbVertexShader from '../shaders/rgb/vertex.glsl'
import rgbFragmentShader from '../shaders/rgb/fragment.glsl'

const textureLoader = new THREE.TextureLoader()

const createTexture = (image) => {
    const texture = textureLoader.load(image)
    texture.flipY = false
    texture.encoding = THREE.sRGBEncoding
    texture.minFilter = THREE.LinearFilter

    const material = new THREE.MeshBasicMaterial({ map: texture })

    return material
}

const createThemeTexture = (dayImage, nightImage) => {
    const textureDay = textureLoader.load(dayImage)
    textureDay.flipY = false
    const textureNight = textureLoader.load(nightImage)
    textureNight.flipY = false

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uBakedDayTexture: { value: textureDay },
            uBakedNightTexture: { value: textureNight },
            uNightMix: { value: 0 },
        },
        vertexShader: bakedVertexShader,
        fragmentShader: bakedFragmentShader,
    })

    return material
}

const createVideoTexture = (videoSrc) => {
    const video = document.createElement('video')
    video.src = videoSrc
    video.muted = true
    video.loop = true
    video.autoPlay = true
    video.play()

    const videoTexture = new THREE.VideoTexture(video)
    const material = new THREE.MeshBasicMaterial({ map: videoTexture })

    return material
}

const createShaderTexture = (vertexShader, fragmentShader) => {
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader
    })

    return material
}

export default {
    textures: {
        bakedTexture: createThemeTexture(bakedday, bakednight),
        curtainTexture: createTexture(curtainTexture),
        floorTexture: createTexture(floorTexture),
        venomTexture: createTexture(venomTexture)
    },
    shaders: {
        redLight: createShaderTexture(redVertexShader, redFragmentShader),
        rgbLight: createShaderTexture(rgbVertexShader, rgbFragmentShader)
    },
    video: {
        videoBlender: createVideoTexture(videoBlender),
    },
    models: { room }
}