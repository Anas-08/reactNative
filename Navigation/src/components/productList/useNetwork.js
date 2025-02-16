import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateErrorAction, updateLoadingAction, updateProductAction } from '../../redux/actions/productList'
import axios from 'axios'
import { productList } from '../../data/productsDummyList'


const useNetwork = () => {
    const dispatch = useDispatch()

    function fetch(){
        dispatch(updateLoadingAction(true))
        dispatch(updateErrorAction(""))
        dispatch(updateProductAction([]))

        // axios.get("../../data/productsDummyList.js")
        // .then(data => dispatch(updateProductAction(data)))
        // .catch(err => dispatch(updateErrorAction("error occur while fetching")))
        // .finally(() => dispatch(updateLoadingAction(false)))

        setTimeout(()=> {
            // axios.get("../../data/productsDummyList.json")
            // .then((data) => {
            //     console.log("data from axios ---> ", data)
            //     dispatch(updateProductAction(productList))
            // })
            // .catch((err) => dispatch(updateErrorAction(err)))
            // .finally(() => dispatch(updateLoadingAction(false)))
            dispatch(updateProductAction(productList))
            dispatch(updateLoadingAction(false));
        }, 3000)
    }

  return { fetch }

}

export default useNetwork