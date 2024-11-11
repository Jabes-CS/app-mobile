import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingVertical:60,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    logoMain:{
        height:'auto',
        alignItems:"center",
        padding:30,
        marginBottom:15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
    },
    input: {
        height: 40,
        borderColor: '#00ccff',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 35,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#00ccff',
        marginTop:30,
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    link: {
        color: '#00ccff',
        marginBottom: 10,
        textAlign: 'center',
        textDecorationLine:"underline",
    },

});

export default styles;