import React, { useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function MocaHeader(props: any) {

    return (
            <View style={styles.container}>
                <View style={styles.leftHeader}>
                    <Text style={styles.leftHeaderText}>{props.title}</Text>
                </View>
                <View style={styles.rightHeader}>
                    <Text style={styles.rightHeaderText}>00:00</Text>
                </View>
            </View>
            )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 60,
        backgroundColor: '#E6E7E8',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5
    },
    leftHeader: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftHeaderText: {
        color: '#2276B5'
    },
    rightHeader: {
        flex: 1,
        backgroundColor: '#2276B5',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightHeaderText: {
        color: '#F2F2F2',
    }
});
