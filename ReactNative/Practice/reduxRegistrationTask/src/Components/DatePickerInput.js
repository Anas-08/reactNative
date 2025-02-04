// import React, { useState } from 'react';
// import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import DatePicker from 'react-native-datepicker';

// const DatePickerInput = ({ handleChange, value }) => {
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [date, setDate] = useState(value);

//   const handleDateChange = (selectedDate) => {
//     setDate(selectedDate);
//     handleChange(selectedDate, 'dob');
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//         <Image
//           source={require('../public/images/datepicker_icon_32x32.png')}
//           style={styles.icon}
//         />
//       </TouchableOpacity>
//       <TextInput
//         style={styles.input}
//         value={date}
//         placeholder="Select Date"
//         editable={false}
//         onPressIn={() => setShowDatePicker(true)}
//       />
//       {showDatePicker && (
//         <DatePicker
//           style={styles.datePicker}
//           date={date}
//           mode="date"
//           format="YYYY-MM-DD"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           onDateChange={handleDateChange}
//           onCloseModal={() => setShowDatePicker(false)}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   datePicker: {
//     width: '100%',
//   },
// });

// export default DatePickerInput;


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerInput = ({ handleChange, value }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(value ? new Date(value) : new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    hideDatePicker();
    setDate(selectedDate);
    handleChange(selectedDate.toISOString().split('T')[0], 'dob'); // Format date as YYYY-MM-DD
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
        <Image
          source={require('../public/images/datepicker_icon_32x32.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={date.toISOString().split('T')[0]} // Display date as YYYY-MM-DD
        placeholder="Select Date"
        editable={false}
        onPressIn={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={date}
        maximumDate={new Date()} // Ensures the date cannot be greater than today
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default DatePickerInput;
