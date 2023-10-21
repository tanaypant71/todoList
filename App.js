import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/Task'

export default function App() {
  //this is how we create state in react native and react
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
 
  //adding a task in the list
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }  

  //deleting the task the list
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      
      {/* Todays's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>
            {/* This is where the tasks will go! */}
             {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                      <Task text={item} /> 
                    </TouchableOpacity>
                  )
                })
             }
        </View>
      </View>

       {/* Write a task */}
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.writeTaskWrapper}
    >
       <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
       <TouchableOpacity onPress={() => handleAddTask()}>
       <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
       </TouchableOpacity>
    </KeyboardAvoidingView>

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
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
sectionTitle: {
  fontSize: 28,
  fontWeight: 'bold'
},
items: {
  marginTop: 30,
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFFFFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addText: {},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFFFFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
});
