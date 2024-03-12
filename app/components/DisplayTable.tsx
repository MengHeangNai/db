import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { database } from '../services/watermelon';

const DisplayTable = () => {
  const [categoryRecords, setCategoryRecords] = useState<any[]>([]);
  const [dbName, setDbName] = useState<any>('');

  useEffect(() => {
    const fetchData = async () => {
      const categories = await database.collections.get('categories');
      const records = await categories.query().fetch();
      setCategoryRecords(records);
    };

    const fetchDbName = async () => {
      const adapter = database.adapter;
      const name = adapter.dbName;
      setDbName(name);
    };

    fetchData();
    fetchDbName();
  }, []);

  const renderItem = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={{ color: '#fff' }}>ID: {item.id}</Text>
      <Text style={{ color: '#fff' }}>Name: {item.name}</Text>
      <Text style={{ color: '#fff' }}>Sobrenome: {item.sobrenome}</Text>
      {item.photo && <Image source={{ uri: item.photo }} style={styles.image} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories Table</Text>
      <Text style={styles.dbName}>Database Name: {dbName}</Text>
      <FlatList
        data={categoryRecords}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  dbName: {
    marginBottom: 16,
    color: '#fff',
  },
  row: {
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 8,
  },
});

export default DisplayTable;
