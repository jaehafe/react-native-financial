import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header/Header';

export default function MonthlyScreen() {
  return (
    <View style={{flex: 1}}>
      <Header>
        <Header.Title title="MonthlyScreen SCREEN" />
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({});
