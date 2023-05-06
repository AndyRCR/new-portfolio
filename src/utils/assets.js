import * as THREE from 'three'

import room from '../assets/models/room.glb'
import screenmodel from '../assets/models/screenmodel.glb'

import videoBlender from '../assets/videos/makingroom_compressed.mp4'

import screenbakedday from '../assets/textures/screenbakedday.jpg'
import screenbakednight from '../assets/textures/screenbakednight.jpg'
import bakedday from '../assets/textures/bakedday.jpg'
import bakednight from '../assets/textures/bakednight.jpg'
import curtainday from '../assets/textures/curtainday.jpg'
import curtainnight from '../assets/textures/curtainnight.jpg'
import floorday from '../assets/textures/floorday.jpg'
import floornight from '../assets/textures/floornight.jpg'
import venomday from '../assets/textures/venomday.jpg'
import venomnight from '../assets/textures/venomnight.jpg'

import bakedVertexShader from '../shaders/baked/vertex.glsl'
import bakedFragmentShader from '../shaders/baked/fragment.glsl'
import redVertexShader from '../shaders/red/vertex.glsl'
import redFragmentShader from '../shaders/red/fragment.glsl'
import rgbVertexShader from '../shaders/rgb/vertex.glsl'
import rgbFragmentShader from '../shaders/rgb/fragment.glsl'

const textureLoader = new THREE.TextureLoader()

const createThemeTexture = (dayImage, nightImage, double) => {
    const textureDay = textureLoader.load(dayImage)
    textureDay.flipY = false
    textureDay.minFilter = THREE.LinearFilter

    const textureNight = textureLoader.load(nightImage)
    textureNight.flipY = false
    textureNight.minFilter = THREE.LinearFilter

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uBakedDayTexture: { value: textureDay },
            uBakedNightTexture: { value: textureNight },
            uNightMix: { value: 0 },
        },
        vertexShader: bakedVertexShader,
        fragmentShader: bakedFragmentShader,
    })
    if (double) material.side = THREE.DoubleSide

    return material
}

const createVideoTexture = (videoSrc) => {
    const video = document.createElement('video')
    video.src = videoSrc
    video.muted = true
    video.loop = true
    video.play()

    const videoTexture = new THREE.VideoTexture(video)
    videoTexture.encoding = THREE.sRGBEncoding
    videoTexture.flipY = false
    // videoTexture.minFilter = THREE.LinearFilter
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
        screenBakedTexture: createThemeTexture(screenbakedday, screenbakednight),
        bakedTexture: createThemeTexture(bakedday, bakednight),
        curtainTexture: createThemeTexture(curtainday, curtainnight),
        floorTexture: createThemeTexture(floorday, floornight, true),
        venomTexture: createThemeTexture(venomday, venomnight),
    },
    shaders: {
        redLight: createShaderTexture(redVertexShader, redFragmentShader),
        rgbLight: createShaderTexture(rgbVertexShader, rgbFragmentShader)
    },
    video: {
        videoBlender: createVideoTexture(videoBlender),
    },
    models: {
        room,
        screenmodel,
    }
}