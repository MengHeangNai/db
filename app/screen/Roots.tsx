import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { addEmployee, addStudent } from '../store/info.store'
import { employee } from '../dummy/employee'
import { Students } from '../dummy/student'

interface Props {
    
}

const Roots = (props: Props) => {
  return (
    <View>
    <TouchableOpacity style={styles.button} onPress={()=>addEmployee(employee)}>
      <Text style={styles.text}>Add Employee</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>addStudent(Students)}>
      <Text style={styles.text}>Add Student</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Roots

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});