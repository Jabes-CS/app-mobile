import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:60,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(211,211,211,.6)',
    },
    mainText:{
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'300',
        textAlign:'center',
        marginVertical:10,
        marginBottom:20,
        padding:15,
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
    buttonOk: {
        backgroundColor: 'rgba(0, 204, 255,0.5)',
        marginTop:30,
        marginBottom: 15,
        marginHorizontal:40,
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonCancel:{
        backgroundColor: 'rgba(255,255,255, 0.5)',
        borderColor: '#00ccff',
        borderWidth: .5,
        marginTop:10,
        marginBottom: 15,
        marginHorizontal:40,
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonOkText: {
        color: 'green',
        fontWeight: 'bold',
    },
    buttonCancelText:{
        color: 'red',
        fontWeight: 'bold', 
    },
});
export default styles;