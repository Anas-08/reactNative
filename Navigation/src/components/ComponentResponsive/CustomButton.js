import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../common/styles/colors'

const CustomButton = ({btnLabel, btnStyle, onPress}) => {
  return (
    <Pressable style={styles.btnContainer} >
      <Text>{btnLabel}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.colorTheme,
    }
})