import { useEffect, useRef } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

export default function RoomPage() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    // BABYLON.SceneLoader.AppendAsync('../models/', 'room.glb', scene);

    BABYLON.SceneLoader.ImportMesh(
      "",
      "https://api.readyplayer.me/v1/avatars/63c2ffd5b7a4f54ed11fc8bf.glb",
      "",
      scene,
      function (newMeshes) {
        const char = newMeshes[0];
        char.position.y += 1;

        char.onBeforeRenderObservable.add(function (me) {
          console.log("rendering...");
        });
      }
    );

    const camera = new BABYLON.FreeCamera(
      "camera",
      new BABYLON.Vector3(0, 5, -10),
      scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);

    console.log(box);

    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, []);
  return <canvas style={{ width: "100vw" }} ref={canvasRef}></canvas>;
}
