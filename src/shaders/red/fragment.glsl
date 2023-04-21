varying vec2 vUv;

void main() {
    float distanceToCenter = distance(vUv, vec2(0.5, 0.5));
    float strentgh = smoothstep(0.5, 0.4, distanceToCenter);
    gl_FragColor = vec4(1.0, 0.0, 0.0, strentgh);
}