import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

const HelloI18nComponent = () => {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: (20)}}>
      <Text style={{marginTop: 50}}>
        {t('hello')}
      </Text>
      <Text style={{marginTop: 50}}>
        {t('hello_guys')}
      </Text>
      <Text style={{marginTop: 50}}>
        {t('login')}
      </Text>
      <Text style={{marginTop: 50}}>
        {t('register')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  message: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'left',
  },
});

export const HelloI18n = memo(HelloI18nComponent, () => {
});
