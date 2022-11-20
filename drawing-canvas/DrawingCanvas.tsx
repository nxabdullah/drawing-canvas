import React, { useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'; // The first library we will need!
import {Canvas, Path, useCanvasRef, useImage, Image} from "@shopify/react-native-skia"; // Second library we need! a 2D Graphics Engine
import {CanvasContext} from "../Contexts/CanvasContext";

interface IPath {
    segments: String[];
    color?: string; // color is optional
}

export default function DrawingCanvas(props: any) {
    const [paths, setPaths] = useState<IPath[]>([]);

    const { setCanvasRef } = useContext(CanvasContext);

    let ref = useCanvasRef();
    setCanvasRef(ref);

    const pan = Gesture.Pan()
    .onStart((g) => {
        const newPaths = [...paths];

        newPaths[paths.length] = {
            segments: [],
            color: '#111'
        };

        newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
        setPaths(newPaths);
    })
    .onUpdate((g) => {
       const index = paths.length - 1;
       const newPaths = [...paths];

       if (newPaths?.[index]?.segments) {
           newPaths[index].segments.push(`L ${g.x} ${g.y}`);
           setPaths(newPaths);
       }
    })
    .minDistance(1);

    // TODO: Clean this up.
    let image = null;
    if (props.isTrails) {
        image = useImage(require("../moca/assets/Trails.png"));
    }

  return (
          <GestureHandlerRootView style={{ flex: 1}}>
              <GestureDetector gesture={pan}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    borderWidth: props.borderWidth
                }}>
                    <Canvas style={{ flex: 1 }} ref={ref}>

                      {image && (
                        <Image
                          image={image}
                          fit="contain"
                          x={0}
                          y={0}
                          width={348}
                          height={311}
                        />
                        )}
                        {paths.map((p, index) => (
                                <Path
                                    key={index}
                                    path={p.segments.join(" ")}
                                    strokeWidth={5}
                                    style="stroke"
                                    color={p.color}
                                />
                        ))}
                        <StatusBar style="auto" />
                    </Canvas>
                </View>
              </GestureDetector>
          </GestureHandlerRootView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
