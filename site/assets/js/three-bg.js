(function(){
  const canvas = document.getElementById('bg3d');
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 0, 8);

  const green = 0x005F40;
  const yellow = 0xAE962C;

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  const dir = new THREE.DirectionalLight(0xffffff, 0.9);
  dir.position.set(5, 5, 5);
  scene.add(ambient, dir);

  // Main object: torus knot
  const geo = new THREE.TorusKnotGeometry(1.2, 0.36, 220, 36);
  const mat = new THREE.MeshStandardMaterial({
    color: green,
    metalness: 0.6,
    roughness: 0.35,
    emissive: 0x0,
  });
  const knot = new THREE.Mesh(geo, mat);
  scene.add(knot);

  // Floating particle field
  const particleCount = 900;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.03, color: yellow, transparent: true, opacity: 0.7 });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  let w = 0, h = 0;
  function onResize(){
    const rect = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onResize);
  onResize();

  // Animation
  let t = 0;
  function animate(){
    t += 0.006;
    knot.rotation.x += 0.003;
    knot.rotation.y += 0.004;
    particles.rotation.y -= 0.0009;
    // breathing effect
    const s = 1 + Math.sin(t) * 0.04;
    knot.scale.set(s, s, s);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
})();