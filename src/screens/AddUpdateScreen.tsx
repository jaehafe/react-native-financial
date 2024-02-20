import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header/Header';

export default function AddUpdateScreen() {
  return (
    <View style={{flex: 1}}>
      <Header>
        <Header.Title title="Add/Update SCREEN" />
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({});
