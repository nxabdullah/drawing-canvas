import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MocaHeader from './moca/MocaHeader';
import Canvas from './drawing-canvas/Canvas'
import MocaTrails from './moca/MocaTrails';


export default function App() {


    return (
          <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <MocaHeader />
              <View style={styles.body}>
                <MocaTrails />
              </View>
          </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        maxHeight: '60%',
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5
    },
});
