import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

type ButtonProps = {
  name?: string;
  onPress: () => void;
};

export default function CustomButton({
  name = 'Add Todo...',
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,

    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    // alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
