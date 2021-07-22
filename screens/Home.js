import React, {useState} from 'react';
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

export default function Home({navigation}) {
  const [openModel, setOpenModel] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setOpenModel(false);
  };

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
          <ReviewForm addReview={addReview} />
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
