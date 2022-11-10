import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DrawingCanvas from "./drawing-canvas/DrawingCanvas";
import DrawingCanvasHeader from "./drawing-canvas/DrawingCanvasHeader"
import { CanvasContext } from './Contexts/CanvasContext'
import * as MediaLibrary from 'expo-media-library';
export default function App() {

    const [canvasRef, setCanvasRef] = useState(false);

  return (
          <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
              <CanvasContext.Provider value={{canvasRef, setCanvasRef}} >
                <DrawingCanvasHeader />
                <DrawingCanvas />
              </CanvasContext.Provider>
          </SafeAreaView>
  );
}

