import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20 
    },
    text: { 
        fontSize: 18 
    },
    settingRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 10 
    },
    aboutContainer: { 
        marginTop: 20, 
        alignItems: 'center' 
    },
    aboutText: { 
        fontSize: 16, 
        color: '#888' 
    }
  });

  export default styles;