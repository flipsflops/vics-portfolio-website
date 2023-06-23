import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Mesh, ShaderMaterial, IcosahedronBufferGeometry, Points } from 'three';

const Decagon = () => {
	const material = React.useMemo(
		() =>
			new ShaderMaterial({
				uniforms: {},
				vertexShader: `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
				fragmentShader: `
          void main() {
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
          }
        `,
			}),
		[]
	);

	const createDecagon = () => {
		const geometry = new IcosahedronBufferGeometry(1, 0);
		const mesh = new Points(geometry, material);
		return mesh;
	};

	const decagon = React.useMemo(() => createDecagon(), []);

	return <primitive object={decagon} />;
};

const DecagonOfDecagons = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
			<Decagon />
		</Canvas>
	);
};

export default DecagonOfDecagons;
