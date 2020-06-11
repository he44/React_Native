import React from 'react'
import {View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: "Tom 1", age: 20},
        {name: "Jerry 2", age: 45},
        {name: "Sheldon 3", age: 32},
        {name: "Lenoard 4", age: 27},
        {name: "Lenoard 5", age: 53},
        {name: "Lenoard 6", age: 30},
        {name: "Lenoard 7", age: 18}
    ]
    return (
        <FlatList
        keyExtractor={friend => friend.name} 
        data = {friends} 
        renderItem={({item})=>{
            return <Text style={styles.textStyle}>
                Name: {item.name}, Age: {item.age}
            </Text>
        }}
        />  
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;

