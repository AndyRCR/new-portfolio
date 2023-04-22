uniform sampler2D uBakedDayTexture;
uniform sampler2D uBakedNightTexture;
uniform float uNightMix;
varying vec2 vUv;

// #pragma glslify: blend = require(glsl-blend/add)
// #pragma glslify: blend = require(glsl-blend/lighten)
// #pragma glslify: blend = require(glsl-blend/normal)
// #pragma glslify: blend = require(glsl-blend/screen)

void main(){
    vec4 bakedDayColor = texture2D(uBakedDayTexture, vUv);
    vec4 bakedNightColor = texture2D(uBakedNightTexture, vUv);
    vec4 bakedColor = mix(bakedDayColor, bakedNightColor, float(uNightMix)/10.0);

    gl_FragColor = vec4(bakedColor);
}