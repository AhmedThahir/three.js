import { OrbitControls } from "./../modules/OrbitControls.js"

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xFF0FFF);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const controls = new OrbitControls(camera, renderer.domElement);
//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 0, 5);
controls.update();

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	// controls.update();
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
}
animate();