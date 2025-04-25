import React, { useState } from 'react';
   import { TouchableOpacity, Text, StyleSheet, View, TextStyle } from 'react-native';

   export interface CheckboxOption {
     label: string;
     value: string;
   }

   export interface AnasCheckboxGroupProps {
     options: CheckboxOption[];
     selectedValues?: string[];
     onChange?: (selected: string[]) => void;
     type?: 'square' | 'rectangle';
     color?: string;
     size?: number;
     labelStyle?: TextStyle;
   }

   const AnasCheckboxGroup: React.FC<AnasCheckboxGroupProps> = ({
     options,
     selectedValues = [],
     onChange,
     type = 'square',
     color = '#FF6347',
     size = 24,
     labelStyle,
   }) => {
     const [selected, setSelected] = useState<string[]>(selectedValues);

     const toggleCheckbox = (value: string) => {
       const newSelected = selected.includes(value)
         ? selected.filter((v) => v !== value)
         : [...selected, value];
       setSelected(newSelected);
       onChange?.(newSelected);
     };

     return (
       <View style={styles.container}>
         {options.map((option) => (
           <TouchableOpacity
             key={option.value}
             style={styles.checkboxContainer}
             onPress={() => toggleCheckbox(option.value)}
           >
             <View
               style={[
                 styles.checkbox,
                 type === 'rectangle' ? styles.rectangle : styles.square,
                 selected.includes(option.value) && { backgroundColor: color, borderColor: color },
                 { width: size, height: size },
               ]}
             >
               {selected.includes(option.value) && <Text style={styles.checkmark}>✓</Text>}
             </View>
             <Text style={[styles.label, labelStyle]}>{option.label}</Text>
           </TouchableOpacity>
         ))}
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: { marginVertical: 10 },
     checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
     checkbox: {
       justifyContent: 'center',
       alignItems: 'center',
       borderWidth: 2,
       borderColor: '#000',
     },
     square: { borderRadius: 4 },
     rectangle: { borderRadius: 8, aspectRatio: 2 },
     checkmark: { color: '#FFF', fontSize: 16 },
     label: { marginLeft: 10, fontSize: 16 },
   });

   export default AnasCheckboxGroup;