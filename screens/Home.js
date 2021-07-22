import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {globalStyles} from '../styles/global.js';
import Card from '../shared/Card';
import ReviewForm from './ReviewForm';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//& states
import {connect} from 'react-redux';

function Home({navigation, reviews}) {
  const [openModel, setOpenModel] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={openModel} animationType="slide">
        <View style={styles.modalContent}>
          <FontAwesome5
            name="times"
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setOpenModel(false)}
          />
          <ReviewForm />
        </View>
      </Modal>

      <FontAwesome5
        name="plus"
        size={24}
        style={styles.modalToggle}
        onPress={() => setOpenModel(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
  };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
