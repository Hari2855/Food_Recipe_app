import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    we: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4920c',
    },
    ring1: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: hp(20),
        alignItems: 'center',
        justifyContent: 'center',
        // padding: hp(5.5)
    },
    ring2: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: hp(15),
        alignItems: 'center',
        justifyContent: 'center',
        // padding: hp(5)
    },
    img1: {
        width: hp(20),
        height: hp(20),
        borderRadius: hp(10)
    },
    punch: {
        alignSelf: 'center',
        marginTop: hp(5)
    },
    txt1: {
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: 'center',
        fontSize: hp(7)
    },
    txt2: {
        fontSize: hp(2),
        color: '#ffffff',
        fontWeight: '500',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    container2: {
        marginHorizontal: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2
    },
    img2: {
        height: hp(5),
        width: hp(5),
        borderRadius: hp(3),
        marginLeft: wp(5),
        borderWidth: 1,
        borderColor: '#FFC107'
    },
    container3: {
        marginHorizontal: 4,
        marginBottom: 2,
        marginTop: hp(2)
    },
    txt3: {
        fontSize: hp(1.7),
        color: '#4a4c49',
        marginLeft: wp(5)
    },
    txt4: {
        fontSize: hp(3.8),
        color: '#4a4c49',
        marginLeft: wp(5),
        fontWeight: '500'
    },
    search: {
        marginHorizontal: 22,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#eff0ef',
        // padding: 6,
        borderRadius: 50,
        marginTop: hp(3)
    },
    txti: {
        flex: 1,
        paddingLeft: hp(2),
        fontSize: hp(2),
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 4,
        alignItems: 'center',
        marginTop: 20,
    },
    itemimg: {
        width: '100%',
        height: hp(35),
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 35
    },
    txtit: {
        fontWeight: '600',
        marginLeft: 2,
        color: '#434543',
        fontSize: hp(1.5),
        marginTop: wp(1)
    },
    loadingc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: hp(10),
        width: hp(10),
        tintColor: '#FFC107',
    },
    text: {
        fontSize: hp(6),
        color: '#ffffff',
        fontWeight: '600'
    },
    text1: {
        color: '#ffffff',
        fontWeight: '500',
        fontStyle: 'italic',
    },
    button: {
        height: hp(6),
        width: hp(15),
        borderRadius: hp(2.3),
        backgroundColor: '#FFC107',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {
        fontSize: hp(2.5),
        color: '#ffffff',
        fontWeight: '500'
    },
    text3: {
        color: '#fbbf24',
        marginLeft: hp(3),
        fontWeight: '500',
        fontSize: hp(2.1),
        marginTop: hp(7)
    },
    back: {
        marginLeft: hp(3),
        borderWidth: 1,
        borderColor: '#fbbf24',
        height: hp(5),
        width: hp(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(3),
        marginTop: hp(2)
    },
    input: {
        width: '89%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fbbf24',
        fontSize: hp(2),
        color: '#ffffff',
        fontWeight: '500'
    },
    button1: {
        height: hp(6),
        width: hp(25),
        borderRadius: hp(2.3),
        backgroundColor: '#FFC107',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp(5)
    },
    input1: {
        width: hp(9),
        height: hp(9),
        borderWidth: 1,
        borderColor: '#FFC107',
        margin: hp(1),
        textAlign: 'center',
        color: '#ffffff',
        fontSize: hp(4),
      },
    circle: {
        height: hp(8),
        width: hp(8),
        borderRadius: hp(5),
        borderWidth: 3,
        borderColor: '#FFC107',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp(10)
    },
    imagecontainer: {
        height: hp(25),
        width: hp(25),
        borderRadius: hp(15),
        alignSelf: 'center',
        marginTop: hp(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilepic: {
        height: hp(23),
        width: hp(23),
        borderRadius: hp(15),
        resizeMode: 'contain',
        borderWidth: 2,
        borderColor: '#FFC107',
    },
    cemara: {
        height: hp(6),
        width: hp(6),
        borderRadius: hp(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC107',
        bottom: hp(6), 
        left: hp(8),
    },
    edit: {
        height: hp(3.5),
        width: hp(3.5),
        tintColor: '#ffffff'
    },
    text4: {
        color: '#ffffff',
        alignSelf: 'center',
        fontSize: hp(4),
        fontWeight: '500'
    },
    view: {
        width: wp(90),
        height: hp(20),
        alignSelf: 'center',
        marginTop: hp(5),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    view2: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: hp(2),
    },
    text5: {
        fontSize: hp(2),
        fontWeight: '500',
        marginLeft: hp(2)
    }
})

export default styles