import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;

function init() {
  // Check if WebGL is supported
  if (!WebGL.isWebGLAvailable()) {
    showFallbackMessage();
    return;
  }

  try {
    scene = new THREE.Scene();
    
    let aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.set(0, 1, 5);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add simple geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add light
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // OrbitControls for better mobile support
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Handle resizing
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
  } catch (error) {
    console.error("Three.js failed to load:", error);
    showFallbackMessage();
  }
}

// Function to show fallback message when 3D fails
function showFallbackMessage() {
  document.body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; text-align: center; background-color: #222; color: white;">
      <h2>Oops! Your browser does not support WebGL.<br>Please try another browser or update your settings.</h2>
    </div>`;
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

init();
