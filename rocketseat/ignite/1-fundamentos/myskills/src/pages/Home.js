import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [myskill, setMyskill] = useState();
  const [myskills, setMyskills] = useState([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    if (myskill === '') {
      alert('My skill can not be null');
      return;
    }
    //setMyskills([...myskills, myskill]);
    setMyskills(oldState => [...oldState, myskill]);
    setMyskill('');
  };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Wellcome, Júlio César!</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="My skills"
        placeholderTextColor="#555"
        value={myskill}
        onChangeText={setMyskill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginTop: 50}]}>My Skill</Text>
      <FlatList
        data={myskills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#121015',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 32,
    borderRadius: 8,
  },
  greeting: {
    color: '#FFF',
    fontSize: 14,
  },
});
