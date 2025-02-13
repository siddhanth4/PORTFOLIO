// Import necessary Three.js modules
import * as THREE from 'three';

let scene, camera, renderer;

function init() {
  // Scene setup
  scene = new THREE.Scene();

  // Camera setup (field of view, aspect ratio, near and far planes)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // Renderer setup
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add a basic geometry to the scene (cube)
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Set camera position
  camera.position.z = 5;

  // Handle window resizing
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Start the animation loop
  animate();
}

// Animation loop to render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some animation effect
  scene.children.forEach(child => {
    if (child instanceof THREE.Mesh) {
      child.rotation.x += 0.01;
      child.rotation.y += 0.01;
    }
  });

  // Render the scene
  renderer.render(scene, camera);
}

// Initialize the scene when the document is ready
init();
