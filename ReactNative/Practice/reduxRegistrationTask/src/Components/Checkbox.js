import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Checkbox = ({ data, handleChange }) => {
    return (
        <View>
            <View style={styles.checkBoxGroup}>
                {
                    data.map((value, index) => (
                        <View key={index}>
                            <Pressable
                                style={styles.checkBox}
                                onPress={() => handleChange(index)}
                            >
                                <View style={styles.checkBoxSquare}>
                                    {
                                        value.isChecked ? <View style={styles.checkCircleSelected} /> : null
                                    }
                                </View>
                                <Text style={value.isChecked ? { color: "blue"} : { color: "black"}}>{value.value}</Text>
                            </Pressable>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default Checkbox

const styles = StyleSheet.create({

checkBoxGroup: {
    // flexDirection: "row",
    // alignItems: "center",
    gap: 10,
    margin: 14
  },
  checkBox: {
    flexDirection: "row",
    gap: 3
  },
  checkBoxSquare: {
    borderColor: "black",
    borderWidth: 2,
    height: 18,
    width: 18,
    alignItems: "center",
    justifyContent: "center"
  },
  checkCircleSelected: {
    backgroundColor: "black",
    borderWidth: 1,
    height: 10,
    width: 10,
  },
  checkBoxLabel: {
    margin: 2,
  },
      checkboxContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        },
        checkbox: {
          height: 18,
          width: 18,
          // borderRadius: 30,
          borderWidth:1,
          borderColor: "black",
          padding: 2
        },
        checkedCheckbox: {
          height: 12,
          width: 12,
          // borderRadius: 100,
          backgroundColor: "blue",
        },
})