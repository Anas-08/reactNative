import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // cardProduct: {
    //         backgroundColor: '#fff',
    //         borderRadius: 10,
    //         margin: 10,
    //         padding: 15,
    //         shadowColor: '#000',
    //         shadowOffset: { width: 0, height: 2 },
    //         shadowOpacity: 0.8,
    //         shadowRadius: 2.
    // },
    // productTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     marginTop: 10,
    //     marginBottom: 5,
    // },
    // buttonText: {
    //     backgroundColor: '#2E86C1',
    //     paddingVertical: 10,
    //     paddingHorizontal: 20,
    //     borderRadius: 5,
    // },
    // button: {
    //     color: '#fff',
    //     fontSize: 16,
    // },
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        padding: 20,
        // width: "100%",
    },
    heading: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2E86C1',
    },
    inputContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: "space-around"
    },
    input: {
        padding: 12,
        marginBlock: 12,
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#2E86C1',
        borderRadius: 8,
        // paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontSize: 16,
        marginRight: 10,
        width: "80%"
    },
    addButton: {
        backgroundColor: '#2E86C1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    list: {
        marginBottom: 55,
    },
    cardProduct: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#2E86C1',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginLeft: 10,
    },
    deleteButton: {
        backgroundColor: '#E74C3C',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
})