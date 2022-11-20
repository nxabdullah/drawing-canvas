import React, { useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler'; // The first library we will need!
import { Canvas, Path } from "@shopify/react-native-skia"; // Second library we need! a 2D Graphics Engine
import {CanvasContext} from "../Contexts/CanvasContext";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Icon } from '@rneui/themed';

export default function DrawingCanvasHeader() {

    const { canvasRef } = useContext(CanvasContext);

    function saveImage() {
        const img = canvasRef.current?.makeImageSnapshot();
        const bytes = img.encodeToBase64();

        // Don't explicitly need permission for this! 
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
                <View style={{flex: 4}}></View>
                <Icon
                    reverse
                    name='ios-pencil'
                    type="ionicon"
                    color='skyblue'
                    style={styles.iconStyle}
                />

                <Icon
                    reverse
                    name='ios-reload'
                    type="ionicon"
                    color='silver'
                    style={styles.iconStyle}
                />

                <Icon
                    reverse
                    name='ios-save'
                    type="ionicon"
                    color='silver'
                    onPress={() => saveImage()}
                    style={styles.iconStyle}
                />

            </View>

            )
}

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        backgroundColor: '#fff',
        maxHeight: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 50,
        height: 50
    }
});
