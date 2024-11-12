import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomTabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    tabButton: {
        alignItems: 'center',
        flex: 1,
    },
    selectedTab: {
        borderTopColor: '#00ccff',
        borderTopWidth: 2,
    },
});

export default styles;
