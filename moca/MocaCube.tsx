import React, { useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Canvas from '../drawing-canvas/Canvas';
import MocaHeader from "./MocaHeader";

export default function MocaCube() {


    return (
            <View style={styles.container}>
                <MocaHeader title="VISUOSPATIAL/EXECUTIVE - CUBE"/>
                <View style={styles.body}>
                    <View style={styles.instructions}>

                        <View style={styles.shapeSection}>
                            <Image source={require("../moca/assets/cube.png")} />
                        </View>

                        <View style={styles.textSection}>
                            <Text style={styles.instructionText}>Copy the cube</Text>
                        </View>

                    </View>


                    <View style={styles.drawingArea}>
                        <Canvas/>
                    </View>
                </View>
            </View>
            )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        maxHeight: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5
    },
    instructions: {
        flexDirection: "row",
        flex: 1,
        height: '30%',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center'
    },
    drawingArea: {
        flex: 2,
        height: '70%',
        width: '100%',
        marginTop: -80
    },
    instructionText: {
        fontSize: 20
    },
    shapeSection: {
        flex: 1,
    },
    textSection: {
        flex: 1,
        marginLeft: 20,
        marginTop: 20
    }
});
