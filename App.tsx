import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MocaHeader from './moca/MocaHeader';
import Canvas from './drawing-canvas/Canvas'
import MocaTrails from './moca/MocaTrails';
import MocaCube from './moca/MocaCube';
import MocaTrailsFull from "./moca/MocaTrailsFull";
import MocaClock from "./moca/MocaClock";

export default function App() {


    return (
          <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
              <MocaClock/>
          </SafeAreaView>
  );
}
