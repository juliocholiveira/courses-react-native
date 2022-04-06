import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Alert,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [myskill, setMyskill] = useState('');
  const [myskills, setMyskills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    if (myskill === '') {
      Alert.alert('My skill can not be null');
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      name: myskill,
    };

    //setMyskills([...myskills, myskill]);
    setMyskills(oldState => [...oldState, data]);
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
        keyExtractor={item => item.id}
        renderItem={({item}) => <SkillCard skill={item.name} />}
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
