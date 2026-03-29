document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const animatedTitles = document.querySelectorAll('.draw-title');

    if (animatedTitles.length === 0) {
        return;
    }

    animatedTitles.forEach((title, index) => {
        let letters = title.querySelectorAll('.letter');
        
        if (letters.length === 0) {
            const textContent = title.textContent.trim();
            const words = textContent.split(/\s+/);
            title.innerHTML = '';

            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word-wrapper';
                wordSpan.style.display = 'inline-block';
                wordSpan.style.whiteSpace = 'nowrap';
                
                [...word].forEach(char => {
                    const letterSpan = document.createElement('span');
                    letterSpan.textContent = char;
                    letterSpan.className = 'letter';
                    letterSpan.style.display = 'inline-block';
                    letterSpan.style.color = "#00b06d";
                    letterSpan.style.opacity = '0';
                    letterSpan.style.transform = 'translateY(-20px)';
                    wordSpan.appendChild(letterSpan);
                });

                title.appendChild(wordSpan);
                if (wordIndex < words.length - 1) {
                    title.appendChild(document.createTextNode(' '));
                }
            });
            letters = title.querySelectorAll('.letter');
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                once: true,
                id: `title-animation-${index}`,
                // markers: true,
            }
        });

        tl.to(letters, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.04,
            ease: "power2.out"
        })
        .to(letters, {
            color: "#0081b0",
            duration: 1.0,
            stagger: 0.03,
            ease: "sine.inOut"
        }, "-=0.5");
    });

    ScrollTrigger.refresh();

    const containers = document.querySelectorAll('.card-amimated');

    containers.forEach(container => {
      const body = container.querySelector('.card-body');
      const items = container.querySelectorAll('.card-item');

      // Reset transforms
      gsap.set(items, { x: 0, y: 0, z: 0 });
      gsap.set(body, { rotationX: 0, rotationY: 0 });

      // Mouse enter: Elevate items
      container.addEventListener('mouseenter', () => {
        gsap.to(items, {
          z: (index, target) => parseFloat(target.dataset.translateZ) || 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1
        });
      });

      // Mouse move: Tilt card
      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const tiltX = (e.clientY - centerY) / (rect.height / 2);
        const tiltY = (e.clientX - centerX) / (rect.width / 2);
        gsap.to(body, {
          rotationX: tiltX * -15,
          rotationY: tiltY * 15,
          duration: 0.1,
          ease: 'none'
        });
      });

      // Mouse leave: Reset
      container.addEventListener('mouseleave', () => {
        gsap.to(body, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
        gsap.to(items, {
          z: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    });

    // Three.js
    const threeTestContainer = document.querySelector('#three-test');
    if (!threeTestContainer) return;

    const width = threeTestContainer.clientWidth;
    const height = threeTestContainer.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Lights
    const light = new THREE.SpotLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(-10, -10, 10);
    scene.add(pointLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 200);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    threeTestContainer.appendChild(renderer.domElement);

    // Controls
    const orbit = new THREE.OrbitControls(camera, renderer.domElement);
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.05;
    orbit.screenSpacePanning = true;
    orbit.minDistance = 20;
    orbit.maxDistance = 100;

    camera.position.set(0, 1, 4);
    orbit.update();

    // Objects
    const cubeGeometry = new THREE.SphereGeometry(5, 8, 8);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, flatShading: true });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Animate
    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;

        orbit.update();

        renderer.render(scene, camera);
    }
    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        const w = threeTestContainer.clientWidth;
        const h = threeTestContainer.clientHeight;

        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });
});