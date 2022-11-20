import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DrawingCanvas from "./DrawingCanvas";
import DrawingCanvasHeader from "./DrawingCanvasHeader";
import { CanvasContext } from '../Contexts/CanvasContext';



export default function Canvas(props: any) {

    const [canvasRef, setCanvasRef] = useState(false);

    return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
                <CanvasContext.Provider value={{canvasRef, setCanvasRef}} >
                    <DrawingCanvasHeader />
                    {props.isTrails && (<DrawingCanvas isTrails={true} borderWidth={0}/>) }
                    {!props.isTrails && (<DrawingCanvas borderWidth={2}/>) }
                </CanvasContext.Provider>
            </SafeAreaView>
            );
}

