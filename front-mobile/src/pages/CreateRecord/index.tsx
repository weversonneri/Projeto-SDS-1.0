import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/Header'

const CreateRecord = () => {
    return (
        <>
            <Header />
            <Text style={styles.text}> Hello crreate-record</Text>
        </>
    );

}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'center',
    }
});

export default CreateRecord;