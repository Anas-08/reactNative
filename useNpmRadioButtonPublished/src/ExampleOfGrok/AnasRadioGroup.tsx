// import React, { useState } from 'react';
//    import { TouchableOpacity, Text, StyleSheet, View, TextStyle } from 'react-native';

//    export interface RadioOption {
//      label: string;
//      value: string;
//    }

//    export interface AnasRadioGroupProps {
//      options: RadioOption[];
//      defaultValue?: string;
//      onChange?: (value: string) => void;
//      type?: 'square' | 'circle';
//      color?: string;
//      size?: number;
//      labelStyle?: TextStyle;
//    }

//    const AnasRadioGroup: React.FC<AnasRadioGroupProps> = ({
//      options,
//      defaultValue,
//      onChange,
//      type = 'circle',
//      color = '#FF6347',
//      size = 24,
//      labelStyle,
//    }) => {
//      const [selected, setSelected] = useState(defaultValue || '');

//      const handleSelect = (value: string) => {
//        setSelected(value);
//        onChange?.(value);
//      };

//      return (
//        <View style={styles.container}>
//          {options.map((option) => (
//            <TouchableOpacity
//              key={option.value}
//              style={styles.radioContainer}
//              onPress={() => handleSelect(option.value)}
//            >
//              <View
//                style={[
//                  styles.radio,
//                  type === 'square' ? styles.square : styles.circle,
//                  selected === option.value && { borderColor: color },
//                  { width: size, height: size },
//                ]}
//              >
//                {selected === option.value && (
//                  <View
//                    style={[
//                      styles.inner,
//                      type === 'square' ? styles.innerSquare : styles.innerCircle,
//                      { backgroundColor: color, width: size / 2, height: size / 2 },
//                    ]}
//                  />
//                )}
//              </View>
//              <Text style={[styles.label, labelStyle]}>{option.label}</Text>
//            </TouchableOpacity>
//          ))}
//        </View>
//      );
//    };

//    const styles = StyleSheet.create({
//      container: { marginVertical: 10 },
//      radioContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
//      radio: {
//        borderWidth: 2,
//        borderColor: '#000',
//        justifyContent: 'center',
//        alignItems: 'center',
//      },
//      circle: { borderRadius: 999 },
//      square: { borderRadius: 4 },
//      inner: {},
//      innerCircle: { borderRadius: 999 },
//      innerSquare: { borderRadius: 2 },
//      label: { marginLeft: 10, fontSize: 16 },
//    });

//    export default AnasRadioGroup;



import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextStyle } from 'react-native';

export interface RadioOption {
  label: string;
  value: string;
}

export interface CustomRadioButtonGroupProps {
  options: RadioOption[];
  selectedValue?: string;
  onChange?: (selected: string) => void;
  type?: 'circle' | 'disc' | 'square' | 'rectangle';
  size?: number;
  borderColor?: string;
  fillColor?: string;
  labelStyle?: TextStyle;
}

const CustomRadioButtonGroup: React.FC<CustomRadioButtonGroupProps> = ({
  options,
  selectedValue,
  onChange,
  type = 'circle',
  size = 24,
  borderColor = '#FF6347',
  fillColor = '#FF6347',
  labelStyle,
}) => {
  const [selected, setSelected] = useState<string>(selectedValue || '');

  const selectRadio = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  const getShapeStyle = () => {
    switch (type) {
      case 'circle':
        return { borderRadius: size / 2 };
      case 'disc':
        return { borderRadius: size / 2 };
      case 'square':
        return { borderRadius: 4 };
      case 'rectangle':
        return { borderRadius: 8, aspectRatio: 2 };
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isSelected = selected === option.value;
        return (
          <TouchableOpacity
            key={option.value}
            style={styles.radioContainer}
            onPress={() => selectRadio(option.value)}
          >
            <View
              style={[
                styles.radio,
                getShapeStyle(),
                {
                  width: size,
                  height: size,
                  borderColor: borderColor,
                  borderWidth: 2,
                },
              ]}
            >
              {isSelected && (
                <View
                  style={[
                    styles.inner,
                    getShapeStyle(),
                    {
                      width: size / 1.6,
                      height: size / 1.6,
                      backgroundColor: fillColor,
                    },
                  ]}
                />
              )}
            </View>
            <Text style={[styles.label, labelStyle]}>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  radioContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: '#FF6347',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CustomRadioButtonGroup;
