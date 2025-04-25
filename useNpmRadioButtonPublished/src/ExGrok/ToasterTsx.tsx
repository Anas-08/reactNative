// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// import { AnasToaster } from '../ExampleOfGrok/index';

// const DemoScreen = () => {
//   // Toaster states for different examples
//   const [showToast1, setShowToast1] = useState(false);
//   const [showToast2, setShowToast2] = useState(false);
//   const [showToast3, setShowToast3] = useState(false);
//   const [showToast4, setShowToast4] = useState(false);

//   console.log("Demo Screen loaded...")

//   // Debug state changes
//   useEffect(() => {
//     console.log('Toaster states:', { showToast1, showToast2, showToast3, showToast4 });
//   }, [showToast1, showToast2, showToast3, showToast4]);

//   // Helper to show toaster with logging
//   const showToast = (message: string, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
//     console.log('Showing toaster:', message);
//     setter(true);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.content}>
//         <Text style={styles.header}>Anas Toaster Demo</Text>

//         {/* Example 1: Default Toaster */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>1. Default Toaster</Text>
//           <Text style={styles.description}>
//             Uses only required props (`message`, `visible`). Positioned at top (50px from top) with default styles (dark background, white text, red progress line).
//           </Text>
//           <TouchableOpacity
//             style={styles.triggerButton}
//             onPress={() => showToast('Default Toaster!', setShowToast1)}
//           >
//             <Text style={styles.triggerText}>Show Default Toaster</Text>
//           </TouchableOpacity>
//           <AnasToaster
//             message="Default Toaster!"
//             visible={showToast1}
//             onHide={() => setShowToast1(false)}
//           />
//         </View>

//         {/* Example 2: Customized Toaster */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>2. Customized Toaster</Text>
//           <Text style={styles.description}>
//             Uses all props: custom colors, border, thick progress line, centered position, slight offset. High zIndex to ensure it’s on top.
//           </Text>
//           <TouchableOpacity
//             style={styles.triggerButton}
//             onPress={() => showToast('Customized Toaster!', setShowToast2)}
//           >
//             <Text style={styles.triggerText}>Show Customized Toaster</Text>
//           </TouchableOpacity>
//           <AnasToaster
//             message="Customized Toaster!"
//             visible={showToast2}
//             duration={5000}
//             onHide={() => setShowToast2(false)}
//             backgroundColor="#1E90FF"
//             textColor="#FFF"
//             borderColor="#FFD700"
//             borderWidth={2}
//             progressLineColor="#FFD700"
//             progressLineHeight={6}
//             zIndex={10000}
//             position="center"
//             offsetX={10} // Slight right shift
//             offsetY={20} // Slight down shift
//           />
//         </View>

//         {/* Example 3: Bottom Toaster */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>3. Bottom Toaster</Text>
//           <Text style={styles.description}>
//             Minimal props, positioned at bottom (50px from bottom). Green background, black text, thin white progress line.
//           </Text>
//           <TouchableOpacity
//             style={styles.triggerButton}
//             onPress={() => showToast('Bottom Toaster!', setShowToast3)}
//           >
//             <Text style={styles.triggerText}>Show Bottom Toaster</Text>
//           </TouchableOpacity>
//           <AnasToaster
//             message="Bottom Toaster!"
//             visible={showToast3}
//             duration={2000}
//             onHide={() => setShowToast3(false)}
//             backgroundColor="#32CD32"
//             textColor="#000"
//             progressLineColor="#FFF"
//             progressLineHeight={3}
//             position="bottom"
//           />
//         </View>

//         {/* Example 4: Custom Position Toaster */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>4. Custom Position Toaster</Text>
//           <Text style={styles.description}>
//             Uses `position='custom'` with specific `offsetX` and `offsetY` for precise placement (top-left corner). Orange background, white text.
//           </Text>
//           <TouchableOpacity
//             style={styles.triggerButton}
//             onPress={() => showToast('Custom Position Toaster!', setShowToast4)}
//           >
//             <Text style={styles.triggerText}>Show Custom Position Toaster</Text>
//           </TouchableOpacity>
//           <AnasToaster
//             message="Custom Position Toaster!"
//             visible={showToast4}
//             duration={4000}
//             onHide={() => setShowToast4(false)}
//             backgroundColor="#FFA500"
//             textColor="#FFF"
//             progressLineColor="#000"
//             progressLineHeight={5}
//             zIndex={9998}
//             position="custom"
//             offsetX={20} // 20px from left
//             offsetY={100} // 100px from top
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   content: {
//     padding: 20, // Parent padding to test centering
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 10,
//   },
//   triggerButton: {
//     borderWidth: 1,
//     borderColor: '#FF6347',
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignSelf: 'center', // Center button
//     marginTop: 10,
//   },
//   triggerText: {
//     fontSize: 16,
//     color: '#FF6347',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
// });

// export default DemoScreen;



import React, { useEffect, useRef } from 'react';
import {
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';

export interface CustomToastMessageProps {
  message: string;
  visible: boolean;
  duration?: number;
  onHide?: () => void;
  backgroundColor?: string;
  textColor?: string;
  textSize?: number;
  borderColor?: string;
  borderWidth?: number;
  progressLineColor?: string;
  progressLineHeight?: number;
  zIndex?: number;
  positionTop?: number;
  positionLeft?: number;
  centerScreen?: boolean;
}

const CustomToastMessage: React.FC<CustomToastMessageProps> = ({
  message,
  visible,
  duration = 3000,
  onHide,
  backgroundColor = '#333',
  textColor = '#FFF',
  textSize = 16,
  borderColor = 'transparent',
  borderWidth = 0,
  progressLineColor = '#FF6347',
  progressLineHeight = 4,
  zIndex = 9999,
  positionTop = 50,
  positionLeft,
  centerScreen = false,
}) => {
  const { width, height } = useWindowDimensions();
  const TOASTER_WIDTH = width - 40;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  const calculatedLeft = positionLeft ?? (width - TOASTER_WIDTH) / 2;
  const calculatedTop = centerScreen ? height / 2 - 50 : positionTop;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.timing(progressAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start();

      const timer = setTimeout(() => {
        hideToaster();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      fadeAnim.setValue(0);
      progressAnim.setValue(0);
    }
  }, [visible]);

  const hideToaster = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onHide?.();
    });
  };

  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.modalWrapper}>
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
              backgroundColor,
              borderColor,
              borderWidth,
              top: calculatedTop,
              left: calculatedLeft,
              width: TOASTER_WIDTH,
              zIndex,
            },
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={hideToaster}>
            <Text style={[styles.closeText, { color: textColor }]}>✕</Text>
          </TouchableOpacity>
          <Text style={[styles.message, { color: textColor, fontSize: textSize }]}>
            {message}
          </Text>
        </Animated.View>

        {/* ✅ Progress bar below the toast box */}
        <View
          style={{
            position: 'absolute',
            top: calculatedTop + 70, // Adjust based on toast height
            left: calculatedLeft,
            width: TOASTER_WIDTH,
            height: progressLineHeight,
            backgroundColor: '#888',
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          <Animated.View
            style={{
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: progressLineColor,
              height: progressLineHeight,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    position: 'absolute',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  message: {
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomToastMessage;
