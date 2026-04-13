/* -----------------------------------------
   FOND 3D — GRILLE FUTURISTE (Accueil)
----------------------------------------- */

const canvasGrid = document.getElementById("bg-grid");
const rendererGrid = new THREE.WebGLRenderer({ canvas: canvasGrid, antialias: true });
rendererGrid.setSize(window.innerWidth, window.innerHeight);
rendererGrid.setPixelRatio(window.devicePixelRatio);

const sceneGrid = new THREE.Scene();
const cameraGrid = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
cameraGrid.position.set(0, 10, 20);

const gridHelper = new THREE.GridHelper(200, 80, 0x7f4dff, 0x4db8ff);
gridHelper.material.opacity = 0.4;
gridHelper.material.transparent = true;
sceneGrid.add(gridHelper);

function animateGrid() {
  requestAnimationFrame(animateGrid);
  gridHelper.rotation.x += 0.0005;
  rendererGrid.render(sceneGrid, cameraGrid);
}

animateGrid();

window.addEventListener("resize", () => {
  rendererGrid.setSize(window.innerWidth, window.innerHeight);
  cameraGrid.aspect = window.innerWidth / window.innerHeight;
  cameraGrid.updateProjectionMatrix();
});
