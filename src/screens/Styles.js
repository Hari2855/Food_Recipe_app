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
        borderColor: 'white'
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
    }
})

export default styles