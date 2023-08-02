import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

type ToDoProps = {
  todo: string;
  onDelete: () => void;
};

export default function TodoCard({todo = 'To Do', onDelete}: ToDoProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.note}
          source={require('../assets/images/notebook.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {todo}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={onDelete}>
          <Image
            style={styles.note}
            source={require('../assets/images/delete.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    height: 24,
    width: 24,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    // alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginVertical: 12,
  },
  nameView: {
    // paddingHorizontal: 4,
    alignSelf: 'center',
    width: '75%',
  },
});
