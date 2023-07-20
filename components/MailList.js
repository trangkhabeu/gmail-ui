import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/Feather'

const users = [
    {
        id: 1,
        name: 'Hello World!',
        title: 'Congratulation!!! Welcome to IMPL Company',
        time: '12:00 AM'
    },
    {
        id: 2,
        name: 'Meeting Reminder',
        title: 'Congratulation!!! Welcome to IMPL Company',
        time: '12:00 AM'
    },
    {
        id: 3,
        name: 'New Feature',
        title: 'Congratulation!!! Welcome to IMPL Company',
        time: '12:00 AM'
    }
];

const Item = ({ name, title, time }) => (
    <View style={styles.mail}>
        <OcticonsIcon name="feed-person" size={45} color="#2f4f4f" style={styles.OcticonsIcon} />
        <View style={styles.mailDecription}>
            <View style={styles.nameMail}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <View style={styles.textMail}>
                <Text style={styles.title}>{title}</Text>
                <OcticonsIcon name="star" size={15} color="black" style={styles.OstarIcon} />
            </View>
        </View>
    </View>
);


const MailList = () => {
    return (

        <SafeAreaView >
            <Text style={styles.text1} >受信トレイ</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <Item name={item.name}
                    title={item.title}
                    time={item.time} />}
                keyExtractor={item => item.id}
            />

            <View style={{
                flexDirection: 'row-reverse',
            }}>
                <TouchableOpacity style={styles.touchOpacity} >
                    <Icon name="edit-2" size={20} color="red" style={{
                        marginHorizontal: 20,
                    }} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}

export default MailList

const styles = StyleSheet.create({
    text1: {
        marginVertical: 15,
        color: 'black'
    },
    OcticonsIcon: {
        marginRight: 15,
        marginBottom: 15
    },
    OstarIcon: {
        marginTop: 20
    },
    mail: {
        flexDirection: 'row',
        padding: 2,
        marginVertical: 5
    },
    mailDecription: {
        flex: 1
    },
    nameMail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textMail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        color: 'black',
        flexWrap: 'wrap'
    },
    name: {
        fontSize: 16,
        color: 'black',
        marginRight: 5,
    },
    time: {
        fontSize: 13,
        color: 'black',
    },
    touchOpacity: {
        flexDirection: 'row', alignItems: 'center',
        height: 60,
        width: 60,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 7,
        elevation: 4,
        borderRadius: 60,
        marginTop: 300,
    }
})




