document.addEventListener('DOMContentLoaded', () => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append
    const threeContainer = document.querySelector('#three-container-start');
    if (!threeContainer) return;
    threeContainer.appendChild(renderer.domElement);
    
    // Texture
    const texture = new THREE.TextureLoader().load(config.url + '/assets/img/bg_repeat.jpg');
    const textureMaterial = new THREE.MeshBasicMaterial({ map: texture });

    // Objects
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color : 0x00ff00
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-3, 0, 0);
    scene.add(cube);

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color : 0xffffff,
        wireframe : true
    });
    const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere2.position.set(1, -1, 0);
    scene.add(sphere2);

    const torus = new THREE.Mesh(
        new THREE.TorusGeometry(0.5, 0.2, 16, 100),
        new THREE.MeshBasicMaterial({
            color : 0xff0000,
            wireframe : true
        })
    );
    torus.position.set(3, 1, 1);
    scene.add(torus);

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 3),
        textureMaterial
    );
    plane.position.set(0, 2, 0);
    scene.add(plane);

    const hoverObjects = [cube, sphere2, torus, plane];

    const canvas = renderer.domElement;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let hoveredObject = null;
    let originalColor = new THREE.Color();

    function onMouseMove(event) {
        const rect = canvas.getBoundingClientRect();

        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const hits = raycaster.intersectObjects(hoverObjects, false);

        if (hits.length) {
            const obj = hits[0].object;

            if (hoveredObject !== obj) {
                resetHover();

                hoveredObject = obj;
                originalColor.copy(obj.material.color || new THREE.Color(0xffffff));

                if (obj.material.color) {
                    obj.material.color.set(0xffff00);
                }
            }
        } else {
            resetHover();
        }
    }

    function resetHover() {
        if (hoveredObject && hoveredObject.material.color) {
            hoveredObject.material.color.copy(originalColor);
            hoveredObject = null;
        }
    }

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', resetHover);

    // Animations
    const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere2.rotation.x += 0.01;
        sphere2.rotation.y += 0.01;

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;

        renderer.render(scene, camera);
    };
    animate();
});