import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { database } from '../../services/watermelon'
import { useEmployees } from '../../query/students.query'
import { FlashList } from '@shopify/flash-list'

type Props = {}
const db = database.get('employees')
const HomeScreen = (props: Props) => {

  const { data, isLoading, error,refetch } = useEmployees()
  const [itemsToShow, setItemsToShow] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 10);
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>An error occurred: {error.message}</Text>;
  }

  const onDelete = async (id: any) => {
    await database.write(async () => {
      const student = await db.find(id);
      await student.destroyPermanently();
    }).then(() => {
      console.log('success')
      refetch()
    }).catch((err: any) => {
      console.log('err', err)
    })
  }

  const filteredData = data ? data.filter((item: any) =>
  item.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.last_name.toLowerCase().includes(searchQuery.toLowerCase())
) : [];

  return (
    <FlashList
      data={filteredData.slice(0, itemsToShow)}
      estimatedItemSize={200}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Employees</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total: {filteredData.length}</Text>
            <TouchableOpacity onPress={() => setItemsToShow(itemsToShow + 10)}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Load More</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, padding: 10 }}
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
            placeholder="Search"
          />
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity onLongPress={()=> onDelete(item.id)} style={styles.studentContainer}>
          <Text style={styles.studentName}>{item.first_name} {item.last_name}</Text>
          <Text style={styles.studentInfo}>{item.email}</Text>
          <Text style={styles.studentInfo}>{item.age}</Text>
          <Text style={styles.studentInfo}>{item.gender}</Text>
          <Text style={styles.studentInfo}>{item.job_title}</Text>
          <Text style={styles.studentInfo}>{item.salary} $</Text>
          <Text style={styles.studentInfo}>{item.hire_date}</Text>
          <Text style={styles.studentInfo}>{item.department}</Text>
        </TouchableOpacity>
      )}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}

    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  studentContainer: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  studentInfo: {
    fontSize: 14,
    marginBottom: 2,
    color: 'black',
  },
})

