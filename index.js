import { createState, createEffect } from "solid-js"
import { render } from "solid-js/web"

const Canvas = ({ children }) => {
  return (
    <svg id="canvas" style="width: 100%; height: 100%;">
      {children}
    </svg>
  )
}

const WallVertical = ({ top, left, width }) => {
  return (
    <line
      x1={left}
      y1={top}
      x2={left + width}
      y2={top}
      stroke="black"
      stroke-width={4}
    />
  )
}

const WallHorizontal = ({ top, left, height }) => {
  return (
    <line
      x1={left}
      y1={top + height}
      x2={left}
      y2={top}
      stroke="black"
      stroke-width={4}
    />
  )
}

const Room = () => {
  return (
    <>
      <WallVertical top={100} left={100} width={200} />
      <WallHorizontal top={100} left={100} height={200} />
      <WallVertical top={300} left={100} width={200} />
      <WallHorizontal top={100} left={300} height={200} />
    </>
  )
}

const App = () => {
  return (
    <>
      <Canvas>
        <Room />
      </Canvas>
    </>
  )
}

render(App, document.body)
