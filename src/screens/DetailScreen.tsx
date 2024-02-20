import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header/Header';

export default function DetailScreen() {
  return (
    <View style={{flex: 1}}>
      <Header>
        <Header.Title title="DetailScreen SCREEN" />
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({});
