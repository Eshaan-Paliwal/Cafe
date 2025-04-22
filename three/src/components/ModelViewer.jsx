import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

// Component to display loading state
function Loader() {
  return (
    <Html center>
      <div className="model-loader">
        <div className="spinner"></div>
      </div>
    </Html>
  );
}

// Component for GLTF models
function GltfModel({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();
  
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={scale} 
      position={position}
      rotation={rotation}
    />
  );
}

// Component for OBJ models
function ObjModel({ modelPath, materialPath = null, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const materials = materialPath ? useLoader(MTLLoader, materialPath) : null;
  const obj = useLoader(
    OBJLoader, 
    modelPath, 
    materialPath ? (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    } : undefined
  );
  
  const modelRef = useRef();
  
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={obj} 
      scale={scale} 
      position={position}
      rotation={rotation}
    />
  );
}

// Main component that determines which model loader to use
function Model({ modelType, modelPath, materialPath, scale, position, rotation }) {
  if (modelType === 'gltf') {
    return (
      <GltfModel 
        modelPath={modelPath} 
        scale={scale} 
        position={position}
        rotation={rotation}
      />
    );
  } else if (modelType === 'obj') {
    return (
      <ObjModel 
        modelPath={modelPath} 
        materialPath={materialPath}
        scale={scale} 
        position={position}
        rotation={rotation}
      />
    );
  }
  
  return null;
}

// Main component that sets up the canvas and lighting
function ModelViewer({ modelType, modelPath, materialPath, scale, position, rotation, backgroundColor = '#1e1e1e' }) {
  return (
    <div className="model-viewer">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: backgroundColor }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={<Loader />}>
          <Model 
            modelType={modelType}
            modelPath={modelPath}
            materialPath={materialPath}
            scale={scale}
            position={position}
            rotation={rotation}
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelViewer;