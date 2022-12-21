import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject.js'

extend({ OrbitControls: OrbitControls })

export default function Experience()
{
  const cube = useRef()
  const { camera, gl } = useThree()

  useFrame(( state, delta ) => 
  {
    cube.current.rotation.y += delta
  })
  return <>
      <orbitControls args={[ camera, gl.domElement ]} />

      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
      <ambientLight intensity={ 0.5 } />

      <mesh ref={ cube } rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
          <boxGeometry scale={ 1.5 } />
          <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh position-x={ -2 }>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh rotation-x={ Math.PI * -0.5 } position-y={ -1 } scale={ 10 }>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />
    </>
}