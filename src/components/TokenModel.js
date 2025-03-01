'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TokenModel() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.CylinderGeometry(2, 2, 0.3, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00f5ff,
      specular: 0x7000ff,
      shininess: 100
    });
    
    const coin = new THREE.Mesh(geometry, material);
    scene.add(coin);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 2);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      coin.rotation.y += 0.01;
      coin.rotation.x = 0.5;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="token-model" />;
}
