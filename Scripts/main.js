document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
        }, 1000); // Correspond à la durée de la transition (1 seconde)
    }, 5000); // Durée du splash screen en millisecondes (ici 3 secondes)
});
const loader = new THREE.TextureLoader();
const baseColorTexture = loader.load('Model/Box-MAT_BaseColor.jpg');
const normalMapTexture = loader.load('Model/Box-MAT_Normal.jpg');
const roughnessMapTexture = loader.load('Model/Box-MAT_Roughness.jpg');

const material = new THREE.MeshStandardMaterial({
  map: baseColorTexture,
  normalMap: normalMapTexture,
  roughnessMap: roughnessMapTexture
});

// Assurez-vous que ces textures sont visibles
console.log(baseColorTexture, normalMapTexture, roughnessMapTexture);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);