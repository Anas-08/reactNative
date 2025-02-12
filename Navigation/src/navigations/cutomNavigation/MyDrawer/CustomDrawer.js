import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    function handleCloseDrawer(){
        console.log("CLICKED ON CLOSE...")
        props.navigation.closeDrawer()
    }
  return (
    <DrawerContentScrollView {...props} style={styles.container} >
    
    <View style={styles.headerContainer} >
        <Pressable onPress={handleCloseDrawer } >
            <Image source={require("../../../assets/images/icons/close.png")} style={styles.iconStyle}  />
        </Pressable>

        <Pressable onPress={()=> Alert.alert("click on sun")}>
            <Image source={require("../../../assets/images/icons/sun.png")} style={styles.iconStyle}  />
        </Pressable>

    </View>
    
    <View>
        <DrawerItemList {...props} />
    </View>

    <View>
    <DrawerItem
        label="Help"
        icon={()=> <Image source={require("../../../assets/images/icons/about-50.png")} style={styles.iconStyle} /> }
        onPress={() => Alert.alert("click on help")}
      />

    </View>
  </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    iconStyle: {
        width:18,
        height:18,
    },
    headerContainer: {
        // flex:1,
        flexDirection: "row",
        paddingVertical: 12,
        paddingRight: 8,
        // marginBlock: 8,
        justifyContent: "space-between",
        // borderWidth: 1,
    },
    container: {
        // flex: 1,
    }

})