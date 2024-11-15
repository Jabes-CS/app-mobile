import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: 'white', 
        alignItems: 'center'
    },
    profileImage: { 
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginBottom: 15 
    },
    name: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 8 
    },
    detail: { 
        fontSize: 16,
        marginBottom: 5 
    },
    balanceContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 10 
    },
    balanceText: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        marginRight: 8 
    },
    toggleText: { 
        color: '#007bff' 
    },
  });

  export default styles;