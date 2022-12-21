import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.js'
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(  
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [3, 2, 6]   
        } }
    >
        <Experience />  
    </Canvas>
)