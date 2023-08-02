/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment, useEffect, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import CustomSection from './src/components/CustomSection';
import TodoCard from './src/components/TodoCard';
import {sections} from './src/constants';
import {getSections} from './src/helper';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [todo, setTodo] = useState('');
  const [list, setList] = useState<any>([]);
  const [groups, setGroups] = useState<any>([]);

  useEffect(() => {
    setGroups([...getSections(list)]);
  }, [list]);

  const addToDo = () => {
    if (todo === '') {
      return;
    }
    //----check for already existed todo------------------
    const ifExist = list.filter((_title: string) => _title === todo);
    if (ifExist.length > 0) {
      return;
    }
    setList([...list, todo]);
    setTodo('');
  };

  const removeTodo = (_todo: string) => {
    if (list.length > 0) {
      let arr = list.filter((l: string) => l !== _todo);
      setList([...arr]);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        style={{flexGrow: 1}}>
        <View style={{padding: 12, flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 16,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            ToDo App
          </Text>
          <CustomInput value={todo} onChange={text => setTodo(text)} />
          <CustomButton onPress={addToDo} />
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 16,
              fontSize: 16,
              textDecorationLine: 'underline',
            }}>
            My ToDo List
          </Text>

          <ScrollView
            // contentInsetAdjustmentBehavior="automatic"
            style={{flex: 1}}>
            <View onStartShouldSetResponder={() => true}>
              {groups?.length > 0 ? (
                groups?.map((todoSection: any, key: number) => {
                  return (
                    <CustomSection title={todoSection.title} key={key}>
                      {todoSection?.data?.length > 0 ? (
                        todoSection?.data?.map(
                          (todoname: string, index: number) => (
                            <TodoCard
                              todo={todoname}
                              key={index}
                              onDelete={() => removeTodo(todoname)}
                            />
                          ),
                        )
                      ) : (
                        <Text
                          style={{
                            textAlign: 'center',
                            marginVertical: 16,
                            fontSize: 16,
                          }}>
                          Empty Todo
                        </Text>
                      )}
                    </CustomSection>
                  );
                })
              ) : (
                <Text
                  style={{
                    textAlign: 'center',
                    marginVertical: 16,
                    fontSize: 16,
                  }}>
                  Empty Todo
                </Text>
              )}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
