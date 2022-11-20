import React, { useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Canvas from '../drawing-canvas/Canvas';

export default function MocaHeader() {


    return (
            <View style={styles.container}>
                <Canvas isTrails={true}/>
            </View>
            )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
