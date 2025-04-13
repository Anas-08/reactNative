import { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-anas';

const CustomRadioExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View>
      <RadioButton
        selected={isSelected}
        onPress={() => setIsSelected(!isSelected)}
        label="Custom Option"
        color="green"
        size={30}
        labelStyle={{ fontSize: 18, color: 'black' }}
      />
    </View>
  );
};

export default CustomRadioExample;