'use client';
import { useEffect } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('particle-container').appendChild(renderer.domElement);

    // Yıldız parçacıkları oluştur
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;
    const posArray = new Float32Array(particlesCnt * 3);

    for(let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#00f5ff',
      transparent: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div id="particle-container" className="particle-bg" />;
}
