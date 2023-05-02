import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SettingsScreen() {
  return (
    <View>
      <View style={styles.heaederCnt}>
        <Image
          source={require('../app/assets/arrowLeftIcon.png')}
          style={{height: 30, width: 30}}
        />
        <Text style={styles.profilesTxt}> Profile </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 32,
          elevation: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <Image
          source={require('../app/assets/girlImage.png')}
          style={{height: 80, width: 80, borderRadius: 40, marginTop: 32}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '80%',
            marginTop: 22,
          }}>
          <Text> Name </Text>

          <Text style={{marginLeft: 70}}> Sophie </Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '80%'}}>
          <Text> Email </Text>

          <Text style={{marginLeft: 70}}> sophie234@email.com </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 300,
            borderWidth: 1,
            borderColor: '#5417D7',
            width: '90%',
            height: 50,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 34,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../app/assets/logoutRoundIcon.png')}
            style={{width: 24, height: 24}}
          />
          <Text style={{color: '#5417D7', fontSize: 14}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heaederCnt: {
    padding: 18,
    height: 60,
    backgroundColor: '#fff',
    elevation: 1,
    flexDirection: 'row',
  },
  profilesTxt: {color: '#323C47', fontSize: 20, marginLeft: 8},
});
