import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    profileBalance: {
        fontSize: 16,
        color: '#666',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
    },
    reminderButton: {
        backgroundColor: '#00ccff',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    filterButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#ccc',
    },
    activeTab: {
        borderColor: '#00ccff',
    },
    tabText: {
        fontSize: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    itemImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    itemTitle: {
        fontSize: 16,
    },
    itemDate: {
        fontSize: 14,
        color: '#666',
    },
    itemAmount: {
        marginLeft: 'auto',
        fontSize: 16,
    },
    income: {
        color: '#28a745', // Verde
    },
    expense: {
        color: '#dc3545', // Vermelho
    },
    viewMoreButton: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00ccff',
        borderRadius: 5,
        marginTop: 10,
    },
    viewMoreText: {
        color: '#fff',
    },
    bottomTabContainer: {
        height:'10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
    },
    centerIcon: {
        width: 24,
        height: 24,
        backgroundColor: '#00ccff',
        borderRadius: 12,
    },

});

export default styles;