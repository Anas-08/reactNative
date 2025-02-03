import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeSingleDigitToTwo } from '../combineReducers/arrayReducer'

const ArrayTask = () => {
    let array=[
            [12,12,54,65,12,548,45,21,8,89,98,88,98,212,25,65,7,89,8,88],
            [4,34,23,44,64,5,7,568,67,89,79,23,54,65,76,8,11,1,23,45,7]
    ]
    const dispatch = useDispatch()
    const selector = useSelector((state)=>state.array )

    function handleChange(array){
        // console.log(array)
        dispatch(ChangeSingleDigitToTwo(array))
    }

    function getValue(){
        console.log(selector)
    }

  return (
    <View>
      <Text>ArrayTask</Text>

        <View>
            initial Value : 
            {
                array.map((item) => <>
                    <View><Text>{item.join(", ")}</Text></View>
                </>)
            }
        </View>

        <TouchableOpacity
            onPress={()=> handleChange(array)}
        >
            <Text>Change Digit </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={getValue}
        >
            <Text>Get Value </Text>
        </TouchableOpacity>

    </View>
  )
}

export default ArrayTask

const styles = StyleSheet.create({})