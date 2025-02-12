import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import React, { useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { commonStyles } from '../../common/styles/styles';

const ImagePic = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePicker = () => {
        console.log("clicked on image selection button ")
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        console.log("image picker options  ----> ", options)
    
        launchImageLibrary(options, handleResponse)
       
      };

      const handleCameraLaunch = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
    
        launchCamera(options, handleResponse);
      };

      function handleResponse(response){
        console.log(" response ---> ", response)
        if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image picker error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
            console.log("selectedImage ---> ", selectedImage)
          }
      }

  return (
    <View>
       <Text style={[commonStyles.textCenter, commonStyles.paddingUpDown, commonStyles.mediumfont]} >Image</Text>
       <View  >


      <View style={{ marginTop: 20 }}>
        
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>

      <View style={{ marginTop: 20 }}>
        
        <Button title="Camera" onPress={handleCameraLaunch} />
      </View>     
              <View style={{ justifyContent: "center", alignItems: "center", marginBlock: 12 }} >
                  {selectedImage ? (
                      <Image
                          source={{ uri: selectedImage }}
                          style={{ width: "50%", height: "50%", }}
                          resizeMode="contain"
                      />
                  ) : (<Text>No image selected</Text>)}
              </View>

        { console.log(selectedImage) }

        { selectedImage &&  <View style={{ marginTop: 20 }}>
        
        <Button title="Reset" onPress={()=> setSelectedImage(null)} />
      </View> }
       </View>
    </View>
  )
}

export default ImagePic

