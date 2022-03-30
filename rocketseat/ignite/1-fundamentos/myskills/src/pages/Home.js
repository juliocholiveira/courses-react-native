import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [myskill, setMyskill] = useState();
  const [myskills, setMyskills] = useState([]);

  const handleAddNewSkill = () => {
    if (myskill === '') {
      alert('My skill can not be null');
      return;
    }
    setMyskills([...myskills, myskill]);
    setMyskill('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Wellcome, Júlio César!</Text>
      <TextInput
        style={styles.input}
        placeholder="My skills"
        placeholderTextColor="#555"
        value={myskill}
        onChangeText={setMyskill}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]}>My Skill</Text>

      {myskills.map(skill => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
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
  button: {
    backgroundColor: '#A370F7',
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    marginVertical: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
  },
});
