import {
  Text,
  TextInput,
  Pressable,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {IInfo, TInfoError} from './interface/info.interface';
import {styles} from './InfoStyle';

interface Props extends IInfo {
  loading: boolean;
  error: TInfoError;
  onCreateForm: (type: keyof IInfo, value: any) => void;
  onSubmit: () => void;
  textInputRef: any;
}

const InfoScreen = (props: Props) => {
  return (
    <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>InfoScreen</Text>
        <TextInput
          value={props.first_name}
          ref={props.textInputRef}
          style={styles.input}
          onChangeText={value => props.onCreateForm('first_name', value)}
          placeholder="First Name"
        />
        {props.error?.first_name && (
          <Text style={styles.errorText}>{props.error?.first_name}</Text>
        )}
        <TextInput
          value={props.last_name}
          ref={props.textInputRef}
          style={styles.input}
          onChangeText={value => props.onCreateForm('last_name', value)}
          placeholder="Last Name"
        />
        {props.error?.last_name && (
          <Text style={styles.errorText}>{props.error?.last_name}</Text>
        )}
        <TextInput
          value={props.phone_number}
          ref={props.textInputRef}
          style={styles.input}
          onChangeText={value => props.onCreateForm('phone_number', value)}
          placeholder="Phone Number"
        />
        {props.error?.phone_number && (
          <Text style={styles.errorText}>{props.error?.phone_number}</Text>
        )}
        <TextInput
          value={props.email}
          ref={props.textInputRef}
          style={styles.input}
          onChangeText={value => props.onCreateForm('email', value)}
          placeholder="Email"
        />
        {props.error?.email && (
          <Text style={styles.errorText}>{props.error?.email}</Text>
        )}
        <TextInput
          value={props.address}
          ref={props.textInputRef}
          style={styles.input}
          onChangeText={value => props.onCreateForm('address', value)}
          placeholder="Address"
        />
        {props.error?.address && (
          <Text style={styles.errorText}>{props.error?.address}</Text>
        )}
        <TextInput
          value={props.age}
          ref={props.textInputRef}
          style={styles.input}
          onChangeText={value => props.onCreateForm('age', value)}
          placeholder="Age"
        />
        {props.error?.age && (
          <Text style={styles.errorText}>{props.error?.age}</Text>
        )}
        <TextInput
          value={props.birthdate}
          ref={props.textInputRef}
          style={styles.input}
          onChangeText={value => props.onCreateForm('birthdate', value)}
          placeholder="Birthdate"
        />
        {props.error?.birthdate && (
          <Text style={styles.errorText}>{props.error?.birthdate}</Text>
        )}
        <TextInput
          value={props.gender}
          ref={props.textInputRef}
          style={styles.input}
          onChangeText={value => props.onCreateForm('gender', value)}
          placeholder="Gender"
        />
        {props.error?.gender && (
          <Text style={styles.errorText}>{props.error?.gender}</Text>
        )}

        <TouchableOpacity
          onPress={() => props.onSubmit()}
          style={{backgroundColor: 'red', padding: 10, marginTop: 10}}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </Pressable>
  );
};

export default InfoScreen;
