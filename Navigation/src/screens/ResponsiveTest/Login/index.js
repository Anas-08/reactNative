import { View, Text, SafeAreaView, Pressable, ImageBackground, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import imgResponsive from "../../../constants/images"
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import TextInputWithLabel from '../../../components/ComponentResponsive/TextInputWithLabel'
import colors from '../../../common/styles/colors'
import CustomButton from '../../../components/ComponentResponsive/CustomButton'

const LoginResponsive = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(true)
  console.log("running..")
  return (
    <View style={styles.mainContainer} >
   
     <ScrollView>
     <ImageBackground source={imgResponsive.babyBackground} style={styles.imgStyle} >
        <Text style={styles.loginLabel} >Login</Text>
      </ImageBackground>

      <View style={styles.commonView} >
        <TextInputWithLabel 
          label="Email address" 
          placeholder="Enter your email" 
          inputStyle={{ marginBottom: moderateVerticalScale(28) }} 
          
          />
        <TextInputWithLabel 
        label="Password" 
        placeholder="Enter your password" 
        secureTextEntry={isVisible}
        icon={isVisible ?  imgResponsive.hideIcon : imgResponsive.showIcon }
        onPress={()=> setIsVisible(!isVisible)}
        />

      <TouchableOpacity style={styles.forgetView} onPress={()=> Alert.alert("forgot password?")} >
        <Text style={styles.forgetText} >Forgot Password?</Text>
      </TouchableOpacity>

    <CustomButton btnLabel="Button" />

      </View>


     </ScrollView>
    </View>
  )
}

export default LoginResponsive
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  imgStyle: {
    width: "100%",
    height: moderateScale(200),
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  loginLabel: {
    fontSize: scale(32),
    fontWeight: "bold",
  },

  commonView: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
    // borderWidth: 1,
  },

  forgetView: {
    alignSelf: 'flex-end', 
    marginVertical: moderateVerticalScale(24),
    // borderWidth: 1,
  },
  forgetText: {
    fontSize: scale(14),
    color: colors.colorTheme,
    fontWeight: "500",
    // borderWidth: 1,
  },

})