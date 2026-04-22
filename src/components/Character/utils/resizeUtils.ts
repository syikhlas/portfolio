import * as THREE from 'three';
import { RefObject } from 'react';

const handleResize = (
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  containerRef: RefObject<HTMLDivElement | null>,
  character: THREE.Object3D
) => {
  if (!containerRef.current) return;
  const { width, height } = containerRef.current.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  if (window.innerWidth <= 1024 && character) {
    character.scale.setScalar(0.85);
  }
};

export default handleResize;