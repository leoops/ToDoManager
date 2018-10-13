import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    input: {
        textAlign: 'left',
        backgroundColor: '#fff',
        marginHorizontal: 35,
        marginBottom: 10,
        borderRadius: 25,
        padding: 10,
    },
    button: {
        marginTop: 10,
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#555',
        alignSelf: 'center',
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        width: 120,
        height: 120,
        tintColor: '#555'
    },
    transparentButton: {
        marginTop: 20,
        alignSelf: 'center',
    },
    transparentButtonText: {
        color: '#00AAFF',
        fontSize: 15
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 90,
        backgroundColor: '#fff',
        padding: 30
    }
});