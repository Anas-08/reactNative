// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import CustomToastMessage from '../FinalCustomComponents/CustomToastComponent';

// const DemoToast = () => {
//   const [toastConfig, setToastConfig] = useState({
//     visible: false,
//     message: '',
//     backgroundColor: '#333',
//     textColor: '#FFF',
//     textSize: 16,
//     borderColor: 'transparent',
//     borderWidth: 0,
//     progressLineColor: '#FF6347',
//     progressLineHeight: 4,
//     zIndex: 9999,
//     positionTop: 50,
//     positionLeft: undefined,
//     centerScreen: false,
//     duration: 3000,
//   });

//   const showToast = (config) => {
//     setToastConfig({ ...toastConfig, ...config, visible: true });
//   };

//   const hideToast = () => {
//     setToastConfig({ ...toastConfig, visible: false });
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#4CAF50' }]}
//           onPress={() =>
//             showToast({
//               message: 'Success! Operation completed.',
//               backgroundColor: '#4CAF50',
//               textColor: '#FFF',
//               progressLineColor: '#81C784',
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Success Toast</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#F44336' }]}
//           onPress={() =>
//             showToast({
//               message: 'Error! Something went wrong.',
//               backgroundColor: '#F44336',
//               textColor: '#FFF',
//               progressLineColor: '#E57373',
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Error Toast</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#2196F3' }]}
//           onPress={() =>
//             showToast({
//               message: 'Info! Please read the instructions.',
//               backgroundColor: '#2196F3',
//               textColor: '#FFF',
//               progressLineColor: '#64B5F6',
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Info Toast</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#FF9800' }]}
//           onPress={() =>
//             showToast({
//               message: 'Warning! Check your inputs.',
//               backgroundColor: '#FF9800',
//               textColor: '#FFF',
//               progressLineColor: '#FFB74D',
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Warning Toast</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#9C27B0' }]}
//           onPress={() =>
//             showToast({
//               message: 'Custom Position Toast',
//               backgroundColor: '#9C27B0',
//               textColor: '#FFF',
//               progressLineColor: '#BA68C8',
//               positionTop: 100,
//               positionLeft: 50,
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Custom Position</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#607D8B' }]}
//           onPress={() =>
//             showToast({
//               message: 'Centered Toast',
//               backgroundColor: '#607D8B',
//               textColor: '#FFF',
//               progressLineColor: '#90A4AE',
//               centerScreen: true,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Center Screen</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#795548' }]}
//           onPress={() =>
//             showToast({
//               message: 'Long Duration Toast',
//               backgroundColor: '#795548',
//               textColor: '#FFF',
//               progressLineColor: '#A1887F',
//               duration: 5000,
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Long Duration</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#3F51B5' }]}
//           onPress={() =>
//             showToast({
//               message: 'Custom Border Toast',
//               backgroundColor: '#3F51B5',
//               textColor: '#FFF',
//               borderColor: '#C5CAE9',
//               borderWidth: 2,
//               progressLineColor: '#7986CB',
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Custom Border</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#009688' }]}
//           onPress={() =>
//             showToast({
//               message: 'Thick Progress Bar',
//               backgroundColor: '#009688',
//               textColor: '#FFF',
//               progressLineColor: '#4DB6AC',
//               progressLineHeight: 8,
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Thick Progress Bar</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: '#E91E63' }]}
//           onPress={() =>
//             showToast({
//               message: 'Large Text Toast',
//               backgroundColor: '#E91E63',
//               textColor: '#FFF',
//               textSize: 20,
//               progressLineColor: '#F06292',
//               centerScreen: false,
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Large Text</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <CustomToastMessage
//         visible={toastConfig.visible}
//         onHide={hideToast}
//         message={toastConfig.message}
//         backgroundColor={toastConfig.backgroundColor}
//         textColor={toastConfig.textColor}
//         textSize={toastConfig.textSize}
//         borderColor={toastConfig.borderColor}
//         borderWidth={toastConfig.borderWidth}
//         progressLineColor={toastConfig.progressLineColor}
//         progressLineHeight={toastConfig.progressLineHeight}
//         zIndex={toastConfig.zIndex}
//         positionTop={toastConfig.positionTop}
//         positionLeft={toastConfig.positionLeft}
//         centerScreen={toastConfig.centerScreen}
//         duration={toastConfig.duration}
//       />
//     </View>
//   );
// };

// export default DemoToast;


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ECEFF1',
//       },
//       buttonContainer: {
//         padding: 20,
//     //     align
//     // ::contentReference[oaicite:0]{index=0
    
    
//     },
// })



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CustomToastMessage from '../FinalCustomComponents/CustomToastComponent';

const DemoToast = () => {
  const [toastConfig, setToastConfig] = useState({
    visible: false,
    message: '',
    backgroundColor: '#333',
    textColor: '#FFF',
    textSize: 16,
    borderColor: 'transparent',
    borderWidth: 0,
    progressLineColor: '#FF6347',
    progressLineHeight: 4,
    zIndex: 9999,
    positionTop: 50,
    positionLeft: undefined,
    centerScreen: false,
    duration: 3000,
  });

  const showToast = (config) => {
    setToastConfig({ ...toastConfig, ...config, visible: true });
  };

  const hideToast = () => {
    setToastConfig({ ...toastConfig, visible: false });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        <Text style={styles.title}>Custom Toast Demo</Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4CAF50' }]}
          onPress={() =>
            showToast({
              message: 'Success! Operation completed.',
              backgroundColor: '#4CAF50',
              textColor: '#FFF',
              progressLineColor: '#81C784',
            })
          }
        >
          <Text style={styles.buttonText}>Success Toast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F44336' }]}
          onPress={() =>
            showToast({
              message: 'Error! Something went wrong.',
              backgroundColor: '#F44336',
              textColor: '#FFF',
              progressLineColor: '#E57373',
            })
          }
        >
          <Text style={styles.buttonText}>Error Toast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#2196F3' }]}
          onPress={() =>
            showToast({
              message: 'Info! Please read the instructions.',
              backgroundColor: '#2196F3',
              textColor: '#FFF',
              progressLineColor: '#64B5F6',
            })
          }
        >
          <Text style={styles.buttonText}>Info Toast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF9800' }]}
          onPress={() =>
            showToast({
              message: 'Warning! Check your inputs.',
              backgroundColor: '#FF9800',
              textColor: '#FFF',
              progressLineColor: '#FFB74D',
            })
          }
        >
          <Text style={styles.buttonText}>Warning Toast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#9C27B0' }]}
          onPress={() =>
            showToast({
              message: 'Custom Position Toast',
              backgroundColor: '#9C27B0',
              textColor: '#FFF',
              progressLineColor: '#BA68C8',
              positionTop: 100,
              positionLeft: 30,
            })
          }
        >
          <Text style={styles.buttonText}>Custom Position</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#607D8B' }]}
          onPress={() =>
            showToast({
              message: 'Centered Toast',
              backgroundColor: '#607D8B',
              textColor: '#FFF',
              progressLineColor: '#90A4AE',
              centerScreen: true,
            })
          }
        >
          <Text style={styles.buttonText}>Center Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#795548' }]}
          onPress={() =>
            showToast({
              message: 'Long Duration Toast',
              backgroundColor: '#795548',
              textColor: '#FFF',
              progressLineColor: '#A1887F',
              duration: 5000,
            })
          }
        >
          <Text style={styles.buttonText}>Long Duration</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3F51B5' }]}
          onPress={() =>
            showToast({
              message: 'Custom Border Toast',
              backgroundColor: '#3F51B5',
              textColor: '#FFF',
              borderColor: '#C5CAE9',
              borderWidth: 2,
              progressLineColor: '#7986CB',
            })
          }
        >
          <Text style={styles.buttonText}>Custom Border</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#009688' }]}
          onPress={() =>
            showToast({
              message: 'Thick Progress Bar',
              backgroundColor: '#009688',
              textColor: '#FFF',
              progressLineColor: '#4DB6AC',
              progressLineHeight: 8,
            })
          }
        >
          <Text style={styles.buttonText}>Thick Progress Bar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#E91E63' }]}
          onPress={() =>
            showToast({
              message: 'Large Text Toast',
              backgroundColor: '#E91E63',
              textColor: '#FFF',
              textSize: 20,
              progressLineColor: '#F06292',
            })
          }
        >
          <Text style={styles.buttonText}>Large Text</Text>
        </TouchableOpacity>
      </ScrollView>

      <CustomToastMessage
        visible={toastConfig.visible}
        onHide={hideToast}
        message={toastConfig.message}
        backgroundColor={toastConfig.backgroundColor}
        textColor={toastConfig.textColor}
        textSize={toastConfig.textSize}
        borderColor={toastConfig.borderColor}
        borderWidth={toastConfig.borderWidth}
        progressLineColor={toastConfig.progressLineColor}
        progressLineHeight={toastConfig.progressLineHeight}
        zIndex={toastConfig.zIndex}
        positionTop={toastConfig.positionTop}
        positionLeft={toastConfig.positionLeft}
        centerScreen={toastConfig.centerScreen}
        duration={toastConfig.duration}
      />
    </View>
  );
};

export default DemoToast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
    color: '#333',
  },
  buttonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});
