import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

type InputProps = {
  value: string;
  onChange: (text: string) => void;
};

export default function CustomInput({value, onChange}: InputProps) {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={text => onChange(text)}
        value={value}
        placeholder="useless placeholder"
        // keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 44,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
