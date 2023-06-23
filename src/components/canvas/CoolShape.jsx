import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const CoolShape = () => {
	const meshRef = useRef();

	// Rotate and scale the shape on every frame
	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
			meshRef.current.scale.x = 0.4;
			meshRef.current.scale.y = 0.4;
			meshRef.current.scale.z = 0.4;
		}
	});

	return (
		<mesh
			ref={meshRef}
			onClick={() => console.log('Shape clicked!')}
			onPointerOver={() => console.log('Mouse over shape!')}
			onPointerOut={() => console.log('Mouse out of shape!')}
		>
			<icosahedronBufferGeometry args={[1, 0]} />
			<meshStandardMaterial color="#804dee" />
		</mesh>
	);
};

const HoveringShape = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
			<CoolShape />
		</Canvas>
	);
};

export default HoveringShape;
