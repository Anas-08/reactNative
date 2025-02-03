import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CheckBoxId = ({data, handleChange}) => {
  return (
     <View style={styles.checkBoxGroup}>
               {
                   data.map((data, index) => (
                       <View key={index}>
                           <TouchableOpacity
                               style={styles.checkBox}
                               onPress={() => handleChange(index)}
                           >
                               <View style={styles.checkBoxSquare}>
                                   {
                                       data.isChecked ? <View style={styles.radioCircleSelected} /> : null
                                   }
                               </View>
                               <Text style={styles.checkBoxLabel}>{data.value}</Text>
                           </TouchableOpacity>
                       </View>
                   ))
               }
       </View>
  )
}

export default CheckBoxId


const styles = StyleSheet.create({

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
    radioCircleSelected: {
        backgroundColor: "black",
        borderWidth: 1,
        height: 10,
        width: 10,
    },

})