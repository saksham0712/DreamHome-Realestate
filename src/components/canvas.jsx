import React, { useState, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";


// Function to snap the position to grid
function snapToGrid(position) {
  
  return [
    Math.round(position.x),
    Math.round(position.y),
    Math.round(position.z),
  ];
}

// Wall Component
function Wall({ id, position, rotation, onRotate, onDragEnd }) {
  const meshRef = useRef();
  return (
    <TransformControls
      object={meshRef.current}
      onMouseUp={() => onDragEnd(id, snapToGrid(meshRef.current.position))}
    >
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        onClick={() => onRotate(id)}
      >
        <boxGeometry args={[2, 1, 0.2]} />
        <meshStandardMaterial color="#a0a0a0" />
      </mesh>
    </TransformControls>
  );
}

// Door Component
function Door({ id, position, onDragEnd }) {
  const meshRef = useRef();
  return (
    <TransformControls
      object={meshRef.current}
      onMouseUp={() => onDragEnd(id, snapToGrid(meshRef.current.position))}
    >
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1.8, 0.1]} />
        <meshStandardMaterial color="#795548" />
      </mesh>
    </TransformControls>
  );
}

// Window Component
function WindowObj({ id, position, onDragEnd }) {
  const meshRef = useRef();
  return (
    <TransformControls
      object={meshRef.current}
      onMouseUp={() => onDragEnd(id, snapToGrid(meshRef.current.position))}
    >
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.2, 1, 0.1]} />
        <meshStandardMaterial color="#03a9f4" transparent opacity={0.6} />
      </mesh>
    </TransformControls>
  );
}

// Lock Floor Component
function FixedFloor({ locked }) {
  const controls = useThree((state) => state.controls);
  if (controls) controls.enableRotate = !locked;
  return null;
}

// Scene Component
function Scene({ walls, doors, windows, onRotate, onDragEnd, onDoorDrag, onWindowDrag, lockFloor }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <OrbitControls enableRotate={!lockFloor} />
      <FixedFloor locked={lockFloor} />
      {/* Grass Texture for the Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#3c9c44" /> {/* Green color for grass */}
      </mesh>
      {walls.map((wall, idx) => (
        <Wall
          key={"wall-" + idx}
          id={idx}
          position={wall.position}
          rotation={wall.rotation}
          onRotate={onRotate}
          onDragEnd={onDragEnd}
        />
      ))}
      {doors.map((door, idx) => (
        <Door key={"door-" + idx} id={idx} position={door.position} onDragEnd={onDoorDrag} />
      ))}
      {windows.map((win, idx) => (
        <WindowObj key={"win-" + idx} id={idx} position={win.position} onDragEnd={onWindowDrag} />
      ))}
    </>
  );
}

export default function canvas() {
  const [walls, setWalls] = useState([
    { position: [0, 0.5, 0], rotation: [0, 0, 0] }
  ]);
  const [doors, setDoors] = useState([]);
  const [windows, setWindows] = useState([]);
  const [lockFloor, setLockFloor] = useState(false);

  // Add Wall function
  const addWall = () => {
    const last = walls[walls.length - 1];
    const newPos = [last.position[0] + 2.2, 0.5, last.position[2]];
    setWalls([...walls, { position: newPos, rotation: [0, 0, 0] }]);
  };

  // Add Door function
  const addDoor = () => {
    setDoors([...doors, { position: [0, 0.9, 1] }]);
  };

  // Add Window function
  const addWindow = () => {
    setWindows([...windows, { position: [0, 1.2, -1] }]);
  };

  // Rotate Wall function
  const rotateWall = (id) => {
    const updated = walls.map((w, idx) =>
      idx === id
        ? {
            ...w,
            rotation: [
              w.rotation[0],
              w.rotation[1] + Math.PI / 2,
              w.rotation[2],
            ],
          }
        : w
    );
    setWalls(updated);
  };

  // Update Wall Position function
  const updateWallPosition = (id, newPos) => {
    const updated = walls.map((w, idx) =>
      idx === id ? { ...w, position: newPos } : w
    );
    setWalls(updated);
  };

  // Update Door Position function
  const updateDoorPosition = (id, newPos) => {
    const updated = doors.map((d, idx) =>
      idx === id ? { ...d, position: newPos } : d
    );
    setDoors(updated);
  };

  // Update Window Position function
  const updateWindowPosition = (id, newPos) => {
    const updated = windows.map((w, idx) =>
      idx === id ? { ...w, position: newPos } : w
    );
    setWindows(updated);
  };

  // Save Layout function
  const saveLayout = () => {
    const layout = { walls, doors, windows };
    const json = JSON.stringify(layout);
    localStorage.setItem("layout", json);
    alert("Layout saved!");
  };

  // Load Layout function
  const loadLayout = () => {
    const json = localStorage.getItem("layout");
    if (json) {
      const layout = JSON.parse(json);
      setWalls(layout.walls || []);
      setDoors(layout.doors || []);
      setWindows(layout.windows || []);
    } else {
      alert("No saved layout found");
    }
  };

  // Toggle Floor Lock function
  const toggleFloorLock = () => setLockFloor((prev) => !prev);
  const btnStyle = {
    padding: "0.6rem 1rem",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.95rem",
    transition: "background 0.2s",
  };
  
  btnStyle[":hover"] = {
    background: "#45a049"
  };
  
  return (
<div style={{ position: "relative", height: "100vh", width: "100vw" }}>
    {/* Floating Buttons */}
    <div style={{
      position: "absolute",
      top: 20,
      left: 20,
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      background: "rgba(255,255,255,0.8)",
      padding: "10px",
      borderRadius: "8px"
    }}>
      <h3 style={{ margin: 0 }}>🏠 House Builder</h3>
      <button onClick={addWall}>➕ Add Wall</button>
      <button onClick={addDoor}>🚪 Add Door</button>
      <button onClick={addWindow}>🪟 Add Window</button>
      <button onClick={saveLayout}>💾 Save Layout</button>
      <button onClick={loadLayout}>📂 Load Layout</button>
      <button onClick={toggleFloorLock}>
        {lockFloor ? "🔓 Unlock Floor Rotation" : "🔒 Lock Floor Rotation"}
      </button>
    </div>

    {/* Canvas */}
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }} shadows>
      <Scene
        walls={walls}
        doors={doors}
        windows={windows}
        onRotate={rotateWall}
        onDragEnd={updateWallPosition}
        onDoorDrag={updateDoorPosition}
        onWindowDrag={updateWindowPosition}
        lockFloor={lockFloor}
      />
    </Canvas>
  </div>
  );
}
