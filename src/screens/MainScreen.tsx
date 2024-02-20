import * as React from 'react';
import {View} from 'react-native';
import {Header} from '../components/Header/Header';
import {AccountBookHistory} from '../data/AccountBookHistory';

const now = new Date().getTime();
// https://docs.expo.dev/static/images/guides/core-development-loop-light.png
export default function MainScreen() {
  const [list, setList] = React.useState<AccountBookHistory[]>([
    {
      id: 0,
      type: '사용',
      price: 10000,
      comment: 'TEST_01',
      date: now,
      createdAt: now,
      updatedAt: now,
      photoUrl:
        'https://docs.expo.dev/static/images/guides/core-development-loop-light.png',
    },
    {
      id: 1,
      type: '수입',
      price: 20000,
      comment: 'TEST_02',
      date: now,
      createdAt: now,
      updatedAt: now,
      photoUrl:
        'https://docs.expo.dev/static/images/guides/core-development-loop-light.png',
    },
  ]);
  return (
    <View style={{flex: 1, borderBottomWidth: 1}}>
      <Header>
        <Header.Title title="MainScreen SCREEN" />
      </Header>
    </View>
  );
}
