import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
  const [emailTxt, setEmailTxt] = useState('');
  const [passwordTxt, setPasswordTxt] = useState('');

  const onLoginClick = () => {
    navigation.navigate('Tabs');
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{marginTop: 18, marginLeft: 18}}>
        <Image
          source={require('../app/assets/vector.png')}
          style={{height: 60, width: 60}}
        />
        <Text style={styles.ImageriaTxtStyles}>Imageria</Text>
      </View>
      <View style={styles.emailLabelStyles}>
        <Text style={{fontSize: 18}}>{'Email'} </Text>
      </View>
      <TextInput
        placeholder="Enter Your Email"
        style={styles.enterYourEmailStyles}
        onChangeText={value => {
          setEmailTxt(value);
        }}
      />

      <View style={styles.passwordLabelStyles}>
        <Text style={{fontSize: 18}}>{'Password'} </Text>
      </View>
      <TextInput
        placeholder="Enter Your Password"
        style={styles.enterPasswordTxtStyles}
        onChangeText={value => {
          setPasswordTxt(value);
        }}
      />
      <TouchableOpacity onPress={onLoginClick} style={styles.loginButtonStyes}>
        <Text style={{color: '#fff', fontSize: 16}}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orRwCntView}>
        <View style={styles.rwCntView} />

        <Text style={{marginHorizontal: 12}}> Or </Text>

        <View style={styles.rwCntView1} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.gIconCnt}>
          <Image
            source={require('../app/assets/googleIcon.png')}
            style={{width: 32, height: 32}}
          />
        </View>

        <View style={styles.facebookIconCnt}>
          <Image
            source={require('../app/assets/facebookIcon.png')}
            style={{width: 20.81, height: 40}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageriaTxtStyles: {
    color: '#5417D7',
    fontSize: 16,
    marginLeft: 4,
    marginTop: 8,
    marginBottom: 100,
  },
  emailLabelStyles: {
    backgroundColor: 'white',
    width: 60,
    alignItems: 'center',
    position: 'absolute',
    top: 205,
    left: 20,
    zIndex: 1,
  },
  enterYourEmailStyles: {
    height: 70,
    margin: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    backgroundColor: '#F1F3F6',
    borderRadius: 8,
    paddingLeft: 24,
    fontSize: 16,
  },
  passwordLabelStyles: {
    backgroundColor: 'white',
    width: 100,
    alignItems: 'center',
    position: 'absolute',
    top: 300,
    left: 20,
    zIndex: 1,
  },
  enterPasswordTxtStyles: {
    height: 70,
    margin: 12,
    borderWidth: 1,
    borderColor: '#5417D7',
    backgroundColor: '#F1F3F6',
    padding: 10,
    borderRadius: 8,
    paddingLeft: 24,
    fontSize: 16,
  },
  loginButtonStyes: {
    backgroundColor: '#5417D7',
    height: 50,
    marginTop: 32,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orRwCntView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 56,
  },
  rwCntView: {
    height: 1,
    width: Dimensions.get('window').width / 2.3,
    borderColor: '#E0E5EC',
    borderWidth: 1,
    marginLeft: 12,
  },
  rwCntView1: {
    height: 1,
    width: Dimensions.get('window').width / 2.2,
    borderColor: '#E0E5EC',
    borderWidth: 1,
    marginRight: 21,
  },
  gIconCnt: {
    marginTop: 53,
    marginLeft: 100,
    height: 60,
    width: 80,
    borderWidth: 1,
    borderColor: '#5417D7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  facebookIconCnt: {
    marginTop: 53,
    marginLeft: 50,
    height: 60,
    width: 80,
    borderWidth: 1,
    borderColor: '#5417D7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
