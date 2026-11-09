import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Play, Pause, Eye } from 'lucide-react';

interface ThreeCanvasProps {
  mode: 'hero' | 'cylinder' | 'sphere' | 'cone';
  height?: string;
  showLabels?: boolean;
  highlightPart?: string | null;
  showCrossSection?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  mode,
  height = 'h-80 md:h-96',
  showLabels = true,
  highlightPart = null,
  showCrossSection = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const isRotatingRef = useRef(true);
  isRotatingRef.current = isRotating;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const heightPx = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.set(0, 3.5, 8);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x60a5fa, 1.2); // Soft blue rim
    dirLight1.position.set(5, 8, 5);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf472b6, 0.8); // Soft pink accent
    dirLight2.position.set(-6, -2, -4);
    scene.add(dirLight2);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
    keyLight.position.set(0, 6, 6);
    scene.add(keyLight);

    // Group to rotate
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials
    const blueMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6,
      metalness: 0.15,
      roughness: 0.25,
      clearcoat: 0.3,
      transparent: true,
      opacity: 0.92,
      wireframe: wireframe,
    });

    const pinkMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xec4899,
      metalness: 0.15,
      roughness: 0.25,
      clearcoat: 0.3,
      transparent: true,
      opacity: 0.92,
      wireframe: wireframe,
    });

    const amberMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      metalness: 0.15,
      roughness: 0.25,
      clearcoat: 0.3,
      transparent: true,
      opacity: 0.92,
      wireframe: wireframe,
    });

    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.2,
      roughness: 0.3,
      wireframe: wireframe,
    });

    // Helper: Build Meshes based on mode
    if (mode === 'hero') {
      // 1. Tabung (Left)
      const cylGeom = new THREE.CylinderGeometry(1.0, 1.0, 2.5, 48);
      const cylMesh = new THREE.Mesh(cylGeom, blueMaterial);
      cylMesh.position.set(-3.2, 0, 0);
      cylMesh.castShadow = true;
      mainGroup.add(cylMesh);

      // Rings for cylinder caps
      const ringGeom = new THREE.RingGeometry(0.95, 1.02, 32);
      const topRing = new THREE.Mesh(ringGeom, new THREE.MeshBasicMaterial({ color: 0x1d4ed8, side: THREE.DoubleSide }));
      topRing.rotation.x = Math.PI / 2;
      topRing.position.set(-3.2, 1.251, 0);
      mainGroup.add(topRing);

      // 2. Bola (Center)
      const sphereGeom = new THREE.SphereGeometry(1.35, 64, 48);
      const sphereMesh = new THREE.Mesh(sphereGeom, pinkMaterial);
      sphereMesh.position.set(0, 0, 0);
      sphereMesh.castShadow = true;
      mainGroup.add(sphereMesh);

      // Equator guide
      const equatorGeom = new THREE.TorusGeometry(1.36, 0.02, 16, 64);
      const equatorMesh = new THREE.Mesh(equatorGeom, new THREE.MeshBasicMaterial({ color: 0xdb2777 }));
      equatorMesh.rotation.x = Math.PI / 2;
      mainGroup.add(equatorMesh);

      // 3. Kerucut (Right)
      const coneGeom = new THREE.ConeGeometry(1.15, 2.5, 48);
      const coneMesh = new THREE.Mesh(coneGeom, amberMaterial);
      coneMesh.position.set(3.2, 0, 0);
      coneMesh.castShadow = true;
      mainGroup.add(coneMesh);

      // Base ring for cone
      const coneBaseRing = new THREE.Mesh(ringGeom, new THREE.MeshBasicMaterial({ color: 0xd97706, side: THREE.DoubleSide }));
      coneBaseRing.rotation.x = Math.PI / 2;
      coneBaseRing.position.set(3.2, -1.25, 0);
      mainGroup.add(coneBaseRing);

      // Ground plane
      const groundGeom = new THREE.CylinderGeometry(5.8, 6.0, 0.2, 64);
      const groundMat = new THREE.MeshStandardMaterial({
        color: 0xf1f5f9,
        roughness: 0.8,
        metalness: 0.1,
      });
      const ground = new THREE.Mesh(groundGeom, groundMat);
      ground.position.y = -1.45;
      ground.receiveShadow = true;
      mainGroup.add(ground);
    } else if (mode === 'cylinder') {
      const radius = 1.35;
      const cylHeight = 3.2;

      const cylGeom = new THREE.CylinderGeometry(radius, radius, cylHeight, 64, 1, false);
      const cylMesh = new THREE.Mesh(cylGeom, blueMaterial);
      mainGroup.add(cylMesh);

      // Cap discs
      const capGeom = new THREE.CircleGeometry(radius, 64);
      const topCap = new THREE.Mesh(capGeom, capMaterial);
      topCap.rotation.x = -Math.PI / 2;
      topCap.position.y = cylHeight / 2 + 0.005;
      mainGroup.add(topCap);

      const bottomCap = new THREE.Mesh(capGeom, capMaterial);
      bottomCap.rotation.x = Math.PI / 2;
      bottomCap.position.y = -cylHeight / 2 - 0.005;
      mainGroup.add(bottomCap);

      // Radius line indicator on top cap
      const radiusLinePoints = [new THREE.Vector3(0, cylHeight / 2 + 0.02, 0), new THREE.Vector3(radius, cylHeight / 2 + 0.02, 0)];
      const radiusLineGeom = new THREE.BufferGeometry().setFromPoints(radiusLinePoints);
      const radiusLine = new THREE.Line(radiusLineGeom, new THREE.LineBasicMaterial({ color: 0xef4444, linewidth: 3 }));
      mainGroup.add(radiusLine);

      // Center point
      const centerGeom = new THREE.SphereGeometry(0.06, 16, 16);
      const centerPoint = new THREE.Mesh(centerGeom, new THREE.MeshBasicMaterial({ color: 0xffffff }));
      centerPoint.position.set(0, cylHeight / 2 + 0.03, 0);
      mainGroup.add(centerPoint);

      // Height line on the side
      const heightLinePoints = [new THREE.Vector3(radius + 0.25, -cylHeight / 2, 0), new THREE.Vector3(radius + 0.25, cylHeight / 2, 0)];
      const heightLineGeom = new THREE.BufferGeometry().setFromPoints(heightLinePoints);
      const heightLine = new THREE.Line(heightLineGeom, new THREE.LineDashedMaterial({ color: 0xf59e0b, dashSize: 0.15, gapSize: 0.08 }));
      heightLine.computeLineDistances();
      mainGroup.add(heightLine);
    } else if (mode === 'sphere') {
      const radius = 1.7;

      if (showCrossSection) {
        // Cutaway Hemisphere
        const sphereGeom = new THREE.SphereGeometry(radius, 64, 48, 0, Math.PI * 2, 0, Math.PI / 2);
        const hemiMesh = new THREE.Mesh(sphereGeom, pinkMaterial);
        mainGroup.add(hemiMesh);

        // Circular cross-section disc at equator
        const discGeom = new THREE.CircleGeometry(radius, 64);
        const discMat = new THREE.MeshStandardMaterial({
          color: 0xf43f5e,
          side: THREE.DoubleSide,
          metalness: 0.1,
          roughness: 0.4,
        });
        const discMesh = new THREE.Mesh(discGeom, discMat);
        discMesh.rotation.x = Math.PI / 2;
        mainGroup.add(discMesh);
      } else {
        // Full Sphere
        const sphereGeom = new THREE.SphereGeometry(radius, 64, 64);
        const sphereMesh = new THREE.Mesh(sphereGeom, pinkMaterial);
        mainGroup.add(sphereMesh);
      }

      // Center point
      const centerGeom = new THREE.SphereGeometry(0.07, 16, 16);
      const centerPoint = new THREE.Mesh(centerGeom, new THREE.MeshBasicMaterial({ color: 0xffffff }));
      mainGroup.add(centerPoint);

      // Equator circle line (Lingkaran Besar)
      const equatorGeom = new THREE.TorusGeometry(radius + 0.01, 0.02, 16, 64);
      const equator = new THREE.Mesh(equatorGeom, new THREE.MeshBasicMaterial({ color: 0x3b82f6 }));
      equator.rotation.x = Math.PI / 2;
      mainGroup.add(equator);

      // Radius line from center to surface
      const radiusPoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(radius, 0, 0)];
      const radiusLineGeom = new THREE.BufferGeometry().setFromPoints(radiusPoints);
      const radiusLine = new THREE.Line(radiusLineGeom, new THREE.LineBasicMaterial({ color: 0x10b981, linewidth: 3 }));
      mainGroup.add(radiusLine);

      // Diameter line across
      const diamPoints = [new THREE.Vector3(-radius, 0, 0), new THREE.Vector3(radius, 0, 0)];
      const diamGeom = new THREE.BufferGeometry().setFromPoints(diamPoints);
      const diamLine = new THREE.Line(diamGeom, new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.1, gapSize: 0.05 }));
      diamLine.computeLineDistances();
      mainGroup.add(diamLine);
    } else if (mode === 'cone') {
      const radius = 1.45;
      const coneHeight = 3.2;

      const coneGeom = new THREE.ConeGeometry(radius, coneHeight, 64, 1, false);
      const coneMesh = new THREE.Mesh(coneGeom, amberMaterial);
      mainGroup.add(coneMesh);

      // Base circle cap
      const baseGeom = new THREE.CircleGeometry(radius, 64);
      const baseMesh = new THREE.Mesh(baseGeom, capMaterial);
      baseMesh.rotation.x = Math.PI / 2;
      baseMesh.position.y = -coneHeight / 2;
      mainGroup.add(baseMesh);

      // Apex marker
      const apexGeom = new THREE.SphereGeometry(0.08, 16, 16);
      const apexPoint = new THREE.Mesh(apexGeom, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
      apexPoint.position.set(0, coneHeight / 2, 0);
      mainGroup.add(apexPoint);

      // Height vertical axis inside cone
      const heightPoints = [new THREE.Vector3(0, -coneHeight / 2, 0), new THREE.Vector3(0, coneHeight / 2, 0)];
      const heightGeom = new THREE.BufferGeometry().setFromPoints(heightPoints);
      const heightAxis = new THREE.Line(heightGeom, new THREE.LineDashedMaterial({ color: 0xef4444, dashSize: 0.12, gapSize: 0.06 }));
      heightAxis.computeLineDistances();
      mainGroup.add(heightAxis);

      // Radius line on base
      const rPoints = [new THREE.Vector3(0, -coneHeight / 2 + 0.01, 0), new THREE.Vector3(radius, -coneHeight / 2 + 0.01, 0)];
      const rGeom = new THREE.BufferGeometry().setFromPoints(rPoints);
      const rLine = new THREE.Line(rGeom, new THREE.LineBasicMaterial({ color: 0x10b981, linewidth: 3 }));
      mainGroup.add(rLine);

      // Slant line (s - garis pelukis)
      const sPoints = [new THREE.Vector3(radius, -coneHeight / 2, 0), new THREE.Vector3(0, coneHeight / 2, 0)];
      const sGeom = new THREE.BufferGeometry().setFromPoints(sPoints);
      const sLine = new THREE.Line(sGeom, new THREE.LineBasicMaterial({ color: 0x8b5cf6, linewidth: 3 }));
      mainGroup.add(sLine);
    }

    // Interactive mouse drag to rotate
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      mainGroup.rotation.y += deltaX * 0.01;
      mainGroup.rotation.x += deltaY * 0.01;

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (isRotatingRef.current && !isDragging) {
        mainGroup.rotation.y += 0.007;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, [mode, wireframe, showCrossSection]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-pink-50/50 border border-blue-100/70 shadow-inner group">
      <div ref={containerRef} className={`w-full ${height} cursor-grab active:cursor-grabbing touch-none`} />

      {/* Control Overlay */}
      <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-blue-200/60 shadow-sm text-sm">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`p-1.5 rounded-lg transition ${
            isRotating ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' : 'text-slate-500 hover:bg-slate-100'
          }`}
          title={isRotating ? 'Jeda Rotasi' : 'Putar Otomatis'}
        >
          {isRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={() => setWireframe(!wireframe)}
          className={`p-1.5 rounded-lg transition ${
            wireframe ? 'text-pink-600 bg-pink-50 hover:bg-pink-100' : 'text-slate-500 hover:bg-slate-100'
          }`}
          title="Mode Kerangka (Wireframe)"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Instruction Badge */}
      <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-slate-600 border border-slate-200/60 pointer-events-none select-none">
        Sentuh / Seret kursor untuk memutar objek 3D 360°
      </div>
    </div>
  );
};
