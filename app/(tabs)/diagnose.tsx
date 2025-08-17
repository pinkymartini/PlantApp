import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function DiagnoseScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>diagnose!</Text>
          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FFF5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#228B22',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
});