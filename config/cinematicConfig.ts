import * as THREE from "three";

export const CHAPTERS = [
  { id: "intro", start: 0.0, end: 0.12 },
  { id: "architecture", start: 0.12, end: 0.28 },
  { id: "entrance", start: 0.28, end: 0.42 },
  { id: "interior", start: 0.42, end: 0.55 },
  { id: "amenities", start: 0.55, end: 0.72 },
  { id: "final", start: 0.72, end: 1.0 },
];

export const cinematicConfig = {
  totalScrollHeight: "1000vh",
  
  // Define waypoints mapped strictly to scroll progress (0.0 to 1.0)
  // This allows CameraController to interpolate between them using smoothProgress
  waypoints: [
    {
      progress: 0.0, // Distant mystery reveal
      pos: new THREE.Vector3(10, 8, 120),
      lookAt: new THREE.Vector3(0, 10, 0),
      lighting: { ambient: "#4a5b6c", directional: "#ffffff", intensity: 0.8, fog: "#0a0a0c" }
    },
    {
      progress: 0.12, // Building emerges
      pos: new THREE.Vector3(40, 12, 60),
      lookAt: new THREE.Vector3(0, 15, -10),
      lighting: { ambient: "#4a5b6c", directional: "#ffffff", intensity: 0.6, fog: "#121215" }
    },
    {
      progress: 0.28, // Facade sweep orbit
      pos: new THREE.Vector3(25, 6, 30),
      lookAt: new THREE.Vector3(-10, 8, -5),
      lighting: { ambient: "#8c9fb1", directional: "#fdfbf7", intensity: 1.0, fog: "#1a1a1f" }
    },
    {
      progress: 0.42, // Entrance approach
      pos: new THREE.Vector3(0, 2.5, 30),
      lookAt: new THREE.Vector3(0, 4, 0),
      lighting: { ambient: "#8c7e6a", directional: "#e6c898", intensity: 1.2, fog: "#1a1a1f" }
    },
    {
      progress: 0.55, // Push through entrance into interior
      pos: new THREE.Vector3(0, 3.5, 5),
      lookAt: new THREE.Vector3(0, 3.5, -20),
      lighting: { ambient: "#b89065", directional: "#ffe5b4", intensity: 0.8, fog: "#1c140e" } // Warm interior
    },
    {
      progress: 0.72, // Rise to rooftop pool
      pos: new THREE.Vector3(-25, 42, 10),
      lookAt: new THREE.Vector3(0, 31, -15),
      lighting: { ambient: "#7da8c4", directional: "#e8c99e", intensity: 1.5, fog: "#151b22" }
    },
    {
      progress: 0.85, // Orbit pool
      pos: new THREE.Vector3(25, 35, 10),
      lookAt: new THREE.Vector3(0, 31, -15),
      lighting: { ambient: "#8c6a28", directional: "#d4af6a", intensity: 1.8, fog: "#261a10" } // Golden hour begins
    },
    {
      progress: 1.0, // Final epic pullback
      pos: new THREE.Vector3(-45, 25, 80),
      lookAt: new THREE.Vector3(0, 20, 0),
      lighting: { ambient: "#a67c2e", directional: "#ffcc77", intensity: 2.0, fog: "#261a10" }
    }
  ]
};
