import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DrawingCanvas from "./DrawingCanvas";
import DrawingCanvasHeader from "./DrawingCanvasHeader";
import { CanvasContext } from '../Contexts/CanvasContext';



export default function Canvas() {

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

