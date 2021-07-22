import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header({navigation, title}) {
  const onPresHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}>
      <FontAwesome5
        style={styles.icon}
        onPress={onPresHandler}
        name={'hamburger'}
        size={28}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '100%',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
