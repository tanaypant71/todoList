import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Todays's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>
            {/* This is where the tasks will go! */}
             <Task text={'Task 1'}/>
             <Task text={'Task 2'}/>
        </View>

      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    padding: 70,
    paddingHorizontal: 20,
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold'
},
items: {
  marginTop: 30,
},
});
