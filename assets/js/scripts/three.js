document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer( {
        antialias: true,
        alpha: true
    });
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const threeContainer = document.querySelector('#three-container');

    if (!threeContainer) {
        return;
    }

    threeContainer.appendChild(renderer.domElement);

    const orbit = new THREE.OrbitControls(camera, renderer.domElement);
    orbit.enableDumping = true;
    orbit.dumpingFactor = 0.05;
    orbit.screenSpacePanning = true;
    orbit.minDistance = 20;
    orbit.maxDistance = 100;

    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);

    camera.position.set(0, 10, 40);
    orbit.update();

    // const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    // const cubeMaterial = new THREE.MeshBasicMaterial({
    //     color : 0x00ff00,});
    // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // scene.add(cube);

    const planeGeometry = new THREE.PlaneGeometry(50, 30);
    const planeMaterial = new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide, 
        color : 0xffffff
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);
    plane.rotation.x = -0.5 * Math.PI;
    plane.receiveShadow = true;

    // const gridHelper = new THREE.GridHelper(30, 10);
    // scene.add(gridHelper);

    const sphereGeometry = new THREE.SphereGeometry(2, 30, 30);
    const sphereMaterial = new THREE.MeshStandardMaterial({
        color : 0x0000ff,
        wireframe : false
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.set(-10, 20, 0);
    sphere.castShadow = true;

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    scene.add(directionalLight);
    directionalLight.position.set(-30, 50, 0);
    directionalLight.castShadow = true;
    // directionalLight.shadow.camera.far = 200;
    // directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.top = 20;
    // directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.bottom = -20;
    // directionalLight.shadow.mapSize.width = 1024;
    // directionalLight.shadow.mapSize.height = 1024;

    // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
    // scene.add(dLightHelper);

    // const dLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    // scene.add(dLightCameraHelper);

    let step = 0;
    let speed = 0.03;

    function animate() {

        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        step += speed;
        sphere.position.y = 10 * Math.abs(Math.sin(step)) + 1;
        sphere.position.x = 10 * Math.cos(step);

        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);
});