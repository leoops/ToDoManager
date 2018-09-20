import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    topView: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25,
    },
    img: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottonView: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
        marginBottom: 20
    }
})