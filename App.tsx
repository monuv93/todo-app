/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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
import TodoCard from './src/components/TodoCard';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [todo, setTodo] = useState('');
  const [list, setList] = useState<any>([]);

  const addToDo = () => {
    if (todo === '') {
      return;
    }
    setList([...list, todo]);
    setTodo('');
  };

  const removeTodo = (_todo: string) => {
    console.log('todo', _todo);
    if (list.length > 0) {
      let arr = list.filter((l: string) => l !== _todo);
      console.log('arr', arr);
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
              {list?.length > 0 ? (
                list?.map((todo: string, key: number) => {
                  return (
                    <TodoCard
                      todo={todo}
                      key={key}
                      onDelete={() => removeTodo(todo)}
                    />
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
              {/* <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section> */}
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
