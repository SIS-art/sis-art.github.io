/* -----------------------------------------
   FOND 3D — RÉSEAU DE LIGNES (Autres pages)
----------------------------------------- */

const canvasNet = document.getElementById("bg-network");
const rendererNet = new THREE.WebGLRenderer({ canvas: canvasNet, antialias: true });
rendererNet.setSize(window.innerWidth, window.innerHeight);
rendererNet.setPixelRatio(window.devicePixelRatio);

const sceneNet = new THREE.Scene();
const cameraNet = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
cameraNet.position.set(0, 0, 15);

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 2000; i++) {
  vertices.push((Math.random() - 0.5) * 40);
  vertices.push((Math.random() - 0.5) * 40);
  vertices.push((Math.random() - 0.5) * 40);
}

geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({
  color: 0x7f4dff,
  size: 0.05,
  transparent: true,
  opacity: 0.8
});

const points = new THREE.Points(geometry, material);
sceneNet.add(points);

function animateNet() {
  requestAnimationFrame(animateNet);
  points.rotation.x += 0.0008;
  points.rotation.y += 0.0006;
  rendererNet.render(sceneNet, cameraNet);
}

animateNet();

window.addEventListener("resize", () => {
  rendererNet.setSize(window.innerWidth, window.innerHeight);
  cameraNet.aspect = window.innerWidth / window.innerHeight;
  cameraNet.updateProjectionMatrix();
});
