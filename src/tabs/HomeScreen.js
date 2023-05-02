import {View, Text, Image, StyleSheet, Modal} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
export default function HomeScreen() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openGalleryModal = () => {
    console.log('openGalleryy log');
    // alert('sasas');
    setModalVisible(true);
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  return (
    <SafeAreaView>
      <View style={styles.mainCntView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../app/assets/girlImage.png')}
            style={{height: 40, width: 40, borderRadius: 20, marginTop: 10}}
          />
          <Text style={{color: '#FFFFFF', marginLeft: 8}}>Hi Sophie, </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../app/assets/global.png')}
            style={{height: 25, width: 25, borderRadius: 25 / 2, marginTop: 10}}
          />
          <Text style={{color: '#FFFFFF', marginLeft: 8}}>EN </Text>
        </View>
      </View>
      <View style={{backgroundColor: '#5417D7'}}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 150,
        }}>
        <Image
          source={require('../app/assets/imageIcon.png')}
          style={{height: 150, width: 150}}
        />
        <Text>Upload an Image</Text>
        <TouchableOpacity onPress={openGalleryModal}>
          <Image
            source={require('../app/assets/plusIcon.png')}
            style={{height: 60, width: 60, marginTop: 10}}
          />
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        style={{}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.73)',
            alignItems: 'center',
            justifyContent: 'center',
            // paddingTop: 40,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 6,
              padding: 40,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 20,
            }}>
            <Text>Modal text</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 18,
    marginBottom: 18,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  mainCntView: {
    backgroundColor: '#5417D7',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-between',
  },
});
