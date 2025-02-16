import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { images } from '../../../assets/images/icons/images'
import { iconStyle } from '../../../common/styles/iconStyle'
import { styles } from './style'

const CustomDrawer = (props) => {

    function handleCloseDrawer(){
        console.log("CLICKED ON CLOSE...")
        props.navigation.closeDrawer()
    }
    
  return (
    <DrawerContentScrollView {...props} >
    
    <View style={styles.headerContainer} >
        <Pressable onPress={handleCloseDrawer } >
            <Image source={images.closeIcon} style={iconStyle.md}  />
        </Pressable>

        <Pressable onPress={()=> Alert.alert("click on sun")}>
            <Image source={images.sunIcon} style={iconStyle.md}  />
        </Pressable>

    </View>
    
    <View>
        <DrawerItemList {...props} />
    </View>

    <View>
    <DrawerItem
        label="Help"
        icon={()=> <Image source={images.aboutIcon} style={iconStyle.md} /> }
        onPress={() => Alert.alert("click on help")}
      />

    </View>
  </DrawerContentScrollView>
  )
}

export default CustomDrawer

