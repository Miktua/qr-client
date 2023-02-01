import { Suspense } from "react"
import {Glitch, EffectComposer, } from '@react-three/postprocessing'
import {Canvas, } from '@react-three/fiber'
import {GlitchMode} from 'postprocessing'
import {Text} from '@react-three/drei'








const NewCanvas = ({win, delay}) => {
  

    const winSize =win <1000 ? 6 : win <10000 ? 5 : win <100000 ? 4 : win <1000000 ? 3 : 2


    return (
     <Canvas>
        <Suspense fallback={null}>
            <EffectComposer>
            <Text
                color="#000000" // default
                anchorX="center" // default
                anchorY="middle" // default
                fontSize={winSize}
                font={`/RussoOne-Regular.woff`}
            
            >
                    {win}
                </Text>
                <Glitch 
                    delay={[delay,delay]} // min and max glitch delay
                    duration={[0.01,0.02]}
                    columns={[0.05]}
                    mode={GlitchMode.SPORADIC}
                    strength={[0.01, 0.01]} // min and max glitch strength
                    // mode={GlitchMode.SPORADIC} // glitch mode
                    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                    ratio={0.9} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                />
            </EffectComposer>
        </Suspense>
     </Canvas>
    );
}



export default NewCanvas


