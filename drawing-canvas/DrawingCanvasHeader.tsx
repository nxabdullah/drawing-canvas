import React, { useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler'; // The first library we will need!
import { Canvas, Path } from "@shopify/react-native-skia"; // Second library we need! a 2D Graphics Engine
import {CanvasContext} from "../Contexts/CanvasContext";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function DrawingCanvasHeader() {

    const { canvasRef } = useContext(CanvasContext);

    function saveImage() {
        const img = canvasRef.current?.makeImageSnapshot();
        const bytes = img.encodeToBase64();

        //console.log('image', img)

        //MediaLibrary.saveToLibraryAsync(bytes);
        const filename = FileSystem.documentDirectory + "MySketch.jpg";
        FileSystem.writeAsStringAsync(filename, bytes, {
            encoding: FileSystem.EncodingType.Base64
        }).then(() => {
            Sharing.shareAsync(filename);
        })

        Alert.alert("Saved!");
    }


    return (

            <View style={styles.headerView}>

                <Button
                    title="Save Image"
                    onPress={() => saveImage()}
                />

            </View>

            )
}

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        backgroundColor: '#eee',
        maxHeight: 100
    },
});
