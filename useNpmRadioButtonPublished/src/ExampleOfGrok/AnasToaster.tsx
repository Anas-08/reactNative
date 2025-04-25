// import React, { useEffect } from 'react';
// import { Text, StyleSheet, Animated, Dimensions, TouchableOpacity, View } from 'react-native';

// export interface AnasToasterProps {
//   message: string;
//   visible: boolean;
//   duration?: number;
//   onHide?: () => void;
//   backgroundColor?: string;
//   textColor?: string;
//   borderColor?: string;
//   borderWidth?: number;
//   progressLineColor?: string;
//   progressLineHeight?: number;
//   zIndex?: number;
//   position?: 'top' | 'bottom' | 'center' | 'custom';
//   offsetX?: number;
//   offsetY?: number;
// }

// const { width, height } = Dimensions.get('window');
// const TOASTER_WIDTH = width - 40;

// const AnasToaster: React.FC<AnasToasterProps> = ({
//   message,
//   visible,
//   duration = 3000,
//   onHide,
//   backgroundColor = '#333',
//   textColor = '#FFF',
//   borderColor = 'transparent',
//   borderWidth = 0,
//   progressLineColor = '#FF6347',
//   progressLineHeight = 4,
//   zIndex = 9999,
//   position = 'top',
//   offsetX = 0,
//   offsetY = 50, // Default padding for top
// }) => {
//   const [fadeAnim] = React.useState(new Animated.Value(0));
//   const [progressAnim] = React.useState(new Animated.Value(0));

//   console.log("Toaster loaded...")

//   useEffect(() => {
//     console.log('AnasToaster: visible=', visible, 'position=', position);
//     if (visible) {
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();

//       Animated.timing(progressAnim, {
//         toValue: 1,
//         duration: duration,
//         useNativeDriver: false,
//       }).start();

//       const timer = setTimeout(() => {
//         console.log('Timer expired, hiding toaster');
//         hideToaster();
//       }, duration);

//       return () => {
//         console.log('Cleaning up timer');
//         clearTimeout(timer);
//       };
//     } else {
//       fadeAnim.setValue(0);
//       progressAnim.setValue(0);
//     }
//   }, [visible, duration, onHide]);

//   const hideToaster = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       console.log('Hide animation complete');
//       onHide?.();
//     });
//   };

//   if (!visible) {
//     console.log('AnasToaster: Not rendering, visible=false');
//     return null;
//   }

//   // Calculate position based on props
//   const getPositionStyle = () => {
//     switch (position) {
//       case 'top':
//         return { top: offsetY, left: (width - TOASTER_WIDTH) / 2 + offsetX };
//       case 'bottom':
//         return { bottom: offsetY, left: (width - TOASTER_WIDTH) / 2 + offsetX };
//       case 'center':
//         return { top: height / 2 - 50 + offsetY, left: (width - TOASTER_WIDTH) / 2 + offsetX };
//       case 'custom':
//         return { top: offsetY, left: offsetX };
//       default:
//         return { top: offsetY, left: (width - TOASTER_WIDTH) / 2 + offsetX };
//     }
//   };

//   return (
//     <Animated.View
//       style={[
//         styles.container,
//         {
//           opacity: fadeAnim,
//           backgroundColor,
//           borderColor,
//           borderWidth,
//           zIndex,
//           ...getPositionStyle(),
//         },
//       ]}
//     >
//       <TouchableOpacity style={styles.closeButton} onPress={hideToaster}>
//         <Text style={[styles.closeText, { color: textColor }]}>✕</Text>
//       </TouchableOpacity>
//       <Text style={[styles.message, { color: textColor }]}>{message}</Text>
//       <View style={[styles.progressContainer, { height: progressLineHeight, backgroundColor: '#555' }]}>
//         <Animated.View
//           style={[
//             styles.progressBar,
//             {
//               width: progressAnim.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: ['0%', '100%'],
//               }),
//               backgroundColor: progressLineColor,
//               height: progressLineHeight,
//             },
//           ]}
//         />
//       </View>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     width: TOASTER_WIDTH,
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   closeText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   progressContainer: {
//     width: '100%',
//     borderRadius: 2,
//     marginTop: 10,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     borderRadius: 2,
//   },
// });

// export default AnasToaster;


import React, { useEffect } from 'react';
import { Text, StyleSheet, Animated, useWindowDimensions, TouchableOpacity, View } from 'react-native';

export interface AnasToasterProps {
  message: string;
  visible: boolean;
  duration?: number;
  onHide?: () => void;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: number;
  progressLineColor?: string;
  progressLineHeight?: number;
  zIndex?: number;
  positionTop?: number;
  positionLeft?: number; // Optional: If provided, overrides auto-centering
}

const AnasToaster: React.FC<AnasToasterProps> = ({
  message,
  visible,
  duration = 3000,
  onHide,
  backgroundColor = '#333',
  textColor = '#FFF',
  borderColor = 'transparent',
  borderWidth = 0,
  progressLineColor = '#FF6347',
  progressLineHeight = 4,
  zIndex = 9999,
  positionTop = 50, // Default: 50px from top
  positionLeft, // If undefined, auto-center
}) => {
  const { width } = useWindowDimensions(); // Dynamic screen width
  const TOASTER_WIDTH = width - 40; // Toaster width adjusts to screen
  const [fadeAnim] = React.useState(new Animated.Value(0));
  const [progressAnim] = React.useState(new Animated.Value(0));

  // Calculate center position if positionLeft not provided
  const calculatedLeft = positionLeft !== undefined ? positionLeft : (width - TOASTER_WIDTH) / 2;

  useEffect(() => {
    console.log('AnasToaster: visible=', visible, { message, positionTop, calculatedLeft, zIndex });
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
        console.log('Timer expired, hiding toaster');
        hideToaster();
      }, duration);

      return () => {
        console.log('Cleaning up timer');
        clearTimeout(timer);
      };
    } else {
      fadeAnim.setValue(0);
      progressAnim.setValue(0);
    }
  }, [visible, duration]);

  const hideToaster = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      console.log('Hide animation complete');
      onHide?.();
    });
  };

  if (!visible) {
    console.log('AnasToaster: Not rendering, visible=false');
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          backgroundColor,
          borderColor,
          borderWidth,
          zIndex,
          top: positionTop,
          left: calculatedLeft,
          width: TOASTER_WIDTH,
        },
      ]}
    >
      <TouchableOpacity style={styles.closeButton} onPress={hideToaster}>
        <Text style={[styles.closeText, { color: textColor }]}>✕</Text>
      </TouchableOpacity>
      <Text style={[styles.message, { color: textColor }]}>{message}</Text>
      <View style={[styles.progressContainer, { height: progressLineHeight, backgroundColor: '#555' }]}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: progressLineColor,
              height: progressLineHeight,
            },
          ]}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
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
  progressContainer: {
    width: '100%',
    borderRadius: 2,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressBar: {
    borderRadius: 2,
  },
});

export default AnasToaster;