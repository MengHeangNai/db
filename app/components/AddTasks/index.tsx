import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { database } from '../../services/watermelon';
import { ICategory } from '../../@types/model';
import ImagePicker from 'react-native-image-crop-picker';
import { logCategoryTable } from '../LogDB';

export function AddTasks() {
  const [taskName, setTaskName] = useState('');
  const [image, setImage] = useState('');

  async function handleAddTask() {
    await database.write(async () => {
      await database.get('categories').create((category: ICategory) => {
        category.name = taskName;
        category.sobrenome = 'no task';
        category.photo = image ? image : 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8fA==';
      }).then((res: any) => {
        console.log(res);
        logCategoryTable();
      }).catch((err: any) => {
        console.log('err', err);
      });      
    });
    setTaskName('');
  }

  function handleUploadImage() {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
      }).then(async (selectedImage: any) => {
        // const base64 = `data:${selectedImage.mime};base64,${selectedImage.data}`;
        setImage(selectedImage.path);
      });
    } catch (error) {
      console.error('Image picking error:', error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="add task"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
        style={styles.input}
      />

      {image !== '' && (
        <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTask}
        activeOpacity={0.6}
      >
        <Text>Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button1}
        onPress={handleUploadImage}
        activeOpacity={0.6}
      >
        <Text>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#222',
    margin: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 8,
    color: '#222',
  },
  button: {
    backgroundColor: '#f89',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  button1: {
    backgroundColor: '#f84',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
