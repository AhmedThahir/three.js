import { OrbitControls } from "./../modules/OrbitControls.js"
import { CSS3DObject, CSS3DRenderer } from "./../modules/CSS3DRenderer.js"

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
p.textContent = default_text;
const div = document.createElement( 'div' );
div.appendChild(p);
const obj= new CSS3DObject(div);
obj.position.set(0, 0, 0);
scene.add(obj);

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


// import { FontLoader } from "./../modules/FontLoader.js"
// import { TextGeometry } from "./../modules/TextGeometry.js"
// import { MeshNormalMaterial } from "./../modules/MeshNormalMaterial.js"
// import { Mesh } from "./../modules/Mesh.js"
// new FontLoader().load( './../fonts/montserrat.json', function ( font ) {

// 	const text_geometry = new TextGeometry( default_text, {
// 		font: font,
// 		size: 5,
// 		height: 5,
// 		curveSegments: 12,
// 		// bevelEnabled: true,
// 		// bevelThickness: 1,
// 		// bevelSize: 1,
// 		// bevelOffset: 0,
// 		// bevelSegments: 5
// 	} );

// 	const text_material = new MeshNormalMaterial();
// 	const text_mesh = new Mesh(text_geometry, text_material);
// 	text_mesh.position.set(0, 0, 0);

// 	scene.add(text_mesh)
// } );