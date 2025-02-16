import { View, Text, TouchableOpacity, Button, Image, Platform, Alert, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { commonStyles } from '../../common/styles/styles';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

const ImagePic = () => {

// {
//   const permissions = {
//     camera: Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
//     photoLibrary: Platform.OS === "ios" ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
//   }

//   const [imageUrl, setImageUrl] = useState('')
//   const [permissionStatus, setPermissionStatus] = useState(null)

//   useEffect(()=> {
//     checkPermissionStatus()
//   }, [checkPermissionStatus])

//   const checkPermissionStatus = async ()=> {
//     const status = await check(permissions.camera || permissions.photoLibrary)
//     console.log("checkPermissionStatus status ----> ", status)
//     setPermissionStatus(status)
//   }

//   useEffect(()=>{
//     if(permissionStatus === RESULTS.BLOCKED){
//       handleBlockedPermission()
//     }
//   }, [permissionStatus])

//   const checkAndRequestPermission = async () => {
//     if(permissionStatus === RESULTS.GRANTED){
//       return permissionStatus
//     }

//     const status = await request(permissions.camera || permissions.photoLibrary)
//     setPermissionStatus(status)
//     return status

//   }

//   const handleBlockedPermission = () => {
//     Alert.alert('Permission Blocked', 'you have blocked this permission', [
//       {
//         text: 'cancel',
//         onPress: () => { setPermissionStatus(null) },
//       },
//       {
//         text: 'Go to settings',
//         onPress: () => { Linking.openSettings() },
//       },
//     ], { cancelable: false } )
//   }

//   const handleImageCamera = async () => {
//     await launchCamera({mediaType: 'photo'}, response => {
//       if(response.didCancel){
//         console.log("cancel handleImageCamera")
//       }else if(response.errorMessage){
//         console.log("response.errorMessage handleImageCamera -> ", response.errorMessage)
//       }else{
//         let imageUrl = response.uri || response.assets?.[0]?.uri
//         setImageUrl(imageUrl)
//         console.log("handleImageCamera imageUrl ---> ", imageUrl)
//       }
//     })
//   }
//   const handleImagePicker = async () => {
//     await launchCamera({mediaType: 'photo'}, response => {
//       if(response.didCancel){
//         console.log("cancel handleImagePicker")
//       }else if(response.errorMessage){
//         console.log("response.errorMessage handleImagePicker -> ", response.errorMessage)
//       }else{
//         let imageUrl = response.uri || response.assets?.[0]?.uri
//         setImageUrl(imageUrl)
//         console.log("handleImagePicker imageUrl ---> ", imageUrl)
//       }
//     })
//   }

//   const captureImage = async () => {
//     const status = await checkAndRequestPermission()
//     console.log("captureImage status --> ", status)
//     if(status === RESULTS.GRANTED){
//       handleImageCamera()
//     }
//   }
//   const imageFromGallery = async () => {
//     const status = await checkAndRequestPermission()
//     console.log("imageFromGallery status --> ", status)
//     if(status === RESULTS.GRANTED){
//       handleImagePicker()
//     }
//   }
// }

 // Define Permissions
 const cameraPermission =
 Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
const galleryPermission =
 Platform.OS === 'ios'
   ? PERMISSIONS.IOS.PHOTO_LIBRARY
   : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;

const [imageUrl, setImageUrl] = useState(null);
const [cameraStatus, setCameraStatus] = useState(null);
const [galleryStatus, setGalleryStatus] = useState(null);

useEffect(() => {
 checkPermissions();
}, []);

// Function to check current permissions
const checkPermissions = async () => {
 const camStatus = await check(cameraPermission);
 console.log("checkPermissions camStatus --> ", camStatus)
 const galStatus = await check(galleryPermission);
 console.log("checkPermissions galStatus --> ", galStatus)

 setCameraStatus(camStatus);
 setGalleryStatus(galStatus);
};

// Function to request permission with switch case handling
const requestPermission = async (type) => {
 const permissionType = type === 'camera' ? cameraPermission : galleryPermission;
 console.log("requestPermission permissionType --->  ", permissionType)
 const status = await request(permissionType);
 console.log("requestPermission status --->  ", status)

 switch (status) {
   case RESULTS.UNAVAILABLE:
     console.log("UNAVAILABLE status ")
     Alert.alert(
       'Feature Unavailable',
       `${type} is not available on this device.`
      );
      return false;
      
    case RESULTS.GRANTED:
     console.log("GRANTED status ")
     console.log(`${type} permission granted`);
     return true;

   case RESULTS.DENIED:
    console.log("DENIED status ")
     Alert.alert(
       'Permission Denied',
       `You need to allow ${type} access to use this feature. Please allow it when prompted.`
     );
     return false;

   case RESULTS.LIMITED:
    console.log("LIMITED status ")
     Alert.alert(
       'Limited Access',
       `You have given limited access to ${type}. Some features may not work properly.`
     );
     return true;

   case RESULTS.BLOCKED:
    console.log("BLOCKED status ")
     Alert.alert(
       'Permission Blocked',
       `You have permanently blocked ${type} permission. You need to enable it manually from settings.`,
       [
         { text: 'Cancel', style: 'cancel' },
         { text: 'Go to Settings', onPress: () => Linking.openSettings() },
       ]
     );
     return false;

   default:
     return false;
 }
};

const handleImageCamera = async () => {
 const hasPermission = await requestPermission('camera');
 console.log("handleImageCamera hasPermission --> ", hasPermission)
 if (!hasPermission) return;

 launchCamera({ mediaType: 'photo' }, (response) => {
   if (response.didCancel) {
     console.log('User cancelled camera');
   } else if (response.errorMessage) {
     Alert.alert('Error', response.errorMessage);
   } else {
     let imageUri = response.assets?.[0]?.uri;
     console.log("handleImageCamera imageUri--> ", imageUri)
     setImageUrl(imageUri);
   }
 });
};

const handleImagePicker = async () => {
 const hasPermission = await requestPermission('gallery');
 console.log("handleImagePicker hasPermission --> ", hasPermission)
 if (!hasPermission) return;

 launchImageLibrary({ mediaType: 'photo' }, (response) => {
   if (response.didCancel) {
     console.log('User cancelled gallery');
   } else if (response.errorMessage) {
     Alert.alert('Error', response.errorMessage);
   } else {
     let imageUri = response.assets?.[0]?.uri;
     console.log("handleImagePicker imageUri--> ", imageUri)
     setImageUrl(imageUri);
   }
 });
};


  return (
    <>
      {/* <View>
        <Text
          style={[
            commonStyles.textCenter,
            commonStyles.paddingUpDown,
            commonStyles.mediumfont,
          ]}>
          Image
        </Text>
        <View>
          <View style={{marginTop: 20}}>
            <Button title="Choose from Device" onPress={imageFromGallery} />
          </View>

          <View style={{marginTop: 20}}>
            <Button title="Camera" onPress={captureImage} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBlock: 12,
            }}>
            {imageUrl ? (
              <Image
                source={{uri: imageUrl}}
                style={{width: '50%', height: '50%'}}
                resizeMode="contain"
              />
            ) : (
              <Text>No image selected</Text>
            )}
          </View>

          {console.log(imageUrl)}

          {imageUrl && (
            <View style={{marginTop: 20}}>
              <Button title="Reset" onPress={() => setImageUrl(null)} />
            </View>
          )}
        </View>
      </View> */}


      <View>
      <Text style={{ textAlign: 'center', fontSize: 24, marginVertical: 20 }}>
        Image Picker
      </Text>

      <Button title="Choose from Gallery" onPress={handleImagePicker} />
      <Button title="Open Camera" onPress={handleImageCamera} />

      {imageUrl ? (
        <View style={{ alignItems: 'center', marginVertical: 12 }}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
          <Button title="Reset" onPress={() => setImageUrl(null)} />
        </View>
      ) : (
        <Text style={{ textAlign: 'center', marginVertical: 20 }}>
          No image selected
        </Text>
      )}
    </View>

    </>
  );
}

export default ImagePic

