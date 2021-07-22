import React from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
//& styles
import {globalStyles} from '../styles/global.js';
//& forms
import {Formik} from 'formik';
import * as yup from 'yup';
//& states
import {connect} from 'react-redux';
//& actions
import {addReview} from '../actions/index.js';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({addReview}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}>
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review details"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              color="maroon"
              title="Submit"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const mapStateToProps = state => {
  return {reviews: state.reviews};
};

export default connect(mapStateToProps, {addReview})(ReviewForm);
