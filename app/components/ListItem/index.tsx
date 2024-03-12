import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICategory } from '../../@types/model';

import withObservables from '@nozbe/with-observables';
import { database } from '../../services/watermelon';

interface Props {
  categories: ICategory;
}

function RawListItem({ categories }: Props) {
  async function handleDeleteTask() {
    await database.write(async () => {
      const category = await database.get('categories').find(categories.id);
      await category.destroyPermanently();
    })
  }

  async function handleUpdateTask() {
    await database.write(async () => {
      const category = (await database
        .get('categories')
        .find(categories.id)) as any;
      await category.update(() => {
        category.name = 'update';
      });
    });
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {categories.name ? categories.name : categories.sobrenome}
      </Text>
          <Image source={{ uri: categories.photo }} style={{ width: 50, height: 50 }} />
    
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleDeleteTask}
        >
          <Text style={styles.button_text}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { marginLeft: 5, backgroundColor: '#28A745' }]}
          activeOpacity={0.6}
          onPress={handleUpdateTask}
        >
          <Text style={styles.button_text}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#06d',
    paddingHorizontal: 8,
    margin: 8,
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { color: '#fff', fontSize: 16 },
  button: { backgroundColor: '#DC3545', padding: 15, borderRadius: 10 },
  button_text: { color: '#fff' },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const ListItem = withObservables(['categories'], ({ categories }) => ({
  categories,
}))(RawListItem);
