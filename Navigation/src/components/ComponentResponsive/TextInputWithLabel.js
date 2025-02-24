import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import colors from '../../common/styles/colors'


const TextInputWithLabel = ({label, placeholder, onChangeText = ()=> {}, inputStyle = {}, icon,onPress, ...props }) => {
  return (
    <View style={{...styles.inputContainer, ...inputStyle}} >
        <Text style={styles.label} >{label}</Text>
       <View style={styles.flexView} >
        <TextInput placeholder={placeholder} style={styles.input} {...props} />
       {icon &&  <TouchableOpacity onPress={onPress} >
            <Image source={icon} style={styles.imgIcon} />
        </TouchableOpacity>}
       </View>
    </View>
  )
}

export default TextInputWithLabel

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: colors.blackOpacity8,
        borderRadius: moderateScale(2),
        // borderWidth: 1
    },
    label: {
        fontSize: scale(14),
        color: colors.blackOpacity5, 
        paddingHorizontal: moderateScale(4),
        // borderWidth: 1
    },
    input: {
        paddingVertical: moderateVerticalScale(8),
        fontSize: scale(16),
        // width: "90%"
        // borderWidth: 1,
        flex: 1
    },
    imgIcon: {
        height: moderateVerticalScale(20),
        width: moderateScale(20),
        tintColor: colors.blackOpacity5,
    },
    flexView: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between"
    },

})