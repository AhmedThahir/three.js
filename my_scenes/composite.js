import { CSS3DObject, CSS3DRenderer } from "./../modules/CSS3DRenderer.js";
import { GLTFLoader } from "./../modules/GLTFLoader.js";
import { OrbitControls } from "./../modules/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const default_text = "The Rizzler"

const labelRenderer = new CSS3DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
document.body.appendChild(labelRenderer.domElement);

const p = document.createElement( 'p' );
p.id="customization";
p.textContent = default_text;
p.style.fontSize = "0.5em";
p.style.color = "red";
const div = document.createElement( 'div' );
div.appendChild(p);
const obj= new CSS3DObject(div);
obj.position.set(0, 0, 5);
scene.add(obj);

// Instantiate a loader
new GLTFLoader().load(
	// resource URL
	'./models/test.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
)

camera.position.set(0, 0, 50);

const controls = new OrbitControls(camera, renderer.domElement);
//controls.update() must be called after any manual changes to the camera's transform
controls.update();

const labelControls = new OrbitControls(camera, labelRenderer.domElement);
//controls.update() must be called after any manual changes to the camera's transform
labelControls.update();

function animate() {
	requestAnimationFrame(animate);
	labelRenderer.render(scene, camera);
	renderer.render(scene, camera);
}
animate();

function update(e)
{
	p.textContent = e.target.value;
}

document.querySelector("#customization_input").addEventListener("input", update)