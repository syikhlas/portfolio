import * as THREE from 'three';

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (x: number, y: number, ix: number, iy: number) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => setMousePosition(0, 0, 0.1, 0.2), 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  if (!headBone) return;
  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    headBone.rotation.y = lerp(headBone.rotation.y, mouseX * maxRotation, interpolationY);
    const minRX = -0.3, maxRX = 0.4;
    if (mouseY > minRX) {
      headBone.rotation.x = lerp(
        headBone.rotation.x,
        mouseY < maxRX ? -mouseY - 0.5 * maxRotation : -maxRotation - 0.5 * maxRotation,
        interpolationX
      );
    } else {
      headBone.rotation.x = lerp(headBone.rotation.x, -minRX - 0.5 * maxRotation, interpolationX);
    }
  } else if (window.innerWidth > 1024) {
    headBone.rotation.x = lerp(headBone.rotation.x, -0.4, 0.03);
    headBone.rotation.y = lerp(headBone.rotation.y, -0.3, 0.03);
  }
};