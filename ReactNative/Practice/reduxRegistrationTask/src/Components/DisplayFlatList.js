import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const DisplayFlat = (props) => {
    console.log(props)
    const renderItem = ({ item, index }) => (
        <View style={[props.style, { borderWidth:1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]} >
                <View style={{ maxWidth: "70%", display: "flex", flexWrap: "wrap", overflow: "visible0" }} >
                    <Text>firstname: {item.firstName}</Text>
                    <Text>middleName: {item.middleName}</Text>
                    <Text>lastName: {item.lastName}</Text>
                    <Text>email: {item.email}</Text>
                    <Text>username: {item.username}</Text>
                    <Text>password: {item.password}</Text>
                    <Text>gender: {item.gender}</Text>
                    <Text>hobbies: {item.hobbies.join(", ")}</Text>
                    <Text>date: {item.dob}</Text>
                </View>
                <View >
                    <Pressable style={[props.style, { backgroundColor: "tomato" }]} onPress={() => props.handleDelete(index)} >
                        <Text style={styles.center} >Delete</Text>
                    </Pressable>
                    <Pressable style={[props.style, { backgroundColor: "skyblue" }]} onPress={() => props.handleEdit(item, index)}  >
                        {/* <Pressable style={[style, { backgroundColor: "skyblue" }]} onPress={() => handleEdit(index)}  > */}
                        <Text style={{ textAlign: "center" }} >Edit</Text>
                    </Pressable>
                </View>
            </View>
    )

  return (
    <>
        <FlatList 
            data={props.data}
            renderItem={ renderItem }
        />
    </>
  )
}

export default DisplayFlat

const styles = StyleSheet.create({})