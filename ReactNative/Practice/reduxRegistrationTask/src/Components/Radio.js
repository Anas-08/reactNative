import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Radio = ({data, handleChange}) => {
  return (
    <View>
     <View style={styles.radioGroup}>
            {
                data.map((value, index) => (
                    <View key={index}>
                        <Pressable
                            style={styles.radiobtn}
                            onPress={() => handleChange(index)}
                            // onPress={() => handleChange(value.id)}
                        >
                            <View style={styles.radioCircle}>
                                {
                                    value.isChecked ? <View style={styles.radioCircleSelected} /> : null
                                }
                            </View>
                            <Text style={ value.isChecked ? { color: "blue"} : { color: "black"} } >{value.value}</Text>
                        </Pressable>
                    </View>
                ))
            }
        </View>
    </View>
  )
}

export default Radio

const styles = StyleSheet.create({
    radioGroup: {
        // flexDirection: "row",
        alignItems: 'flex-start',
        gap: 10,
        margin: 14
    },
    radiobtn: {
        flexDirection: "row",
        gap: 3
    },
    radioCircle: {
        borderColor: "black",
        borderWidth: 2,
        height: 20,
        width: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    radioCircleSelected: {
        backgroundColor: "black",
        borderWidth: 1,
        height: 11,
        width: 11,
        borderRadius: "100%"
    },
    radioLabel: {
        margin: 2
    },
    commonFlex:{
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 12,
        paddingLeft:16,
        paddingVertical:4,
     }
})