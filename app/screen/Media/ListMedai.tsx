import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useMedia} from '../../query/students.query';
import {database} from '../../services/watermelon';
import {FlashList} from '@shopify/flash-list';

type Props = {};
const db = database.get('media');

const ListMedai = (props: Props) => {
  const {data, isLoading, error, refetch} = useMedia();
  const [itemsToShow, setItemsToShow] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 10);
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>An error occurred: {error.message}</Text>;
  }

  const onDelete = async (id: any) => {
    await database
      .write(async () => {
        const student = await db.find(id);
        await student.destroyPermanently();
      })
      .then(() => {
        console.log('success');
        refetch();
      })
      .catch((err: any) => {
        console.log('err', err);
      });
  };

  const filteredData = data
    ? data.filter(
        (item: any) =>
          item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.username.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  return (
    <FlashList
      data={filteredData.slice(0, itemsToShow)}
      estimatedItemSize={200}
      keyExtractor={(item: any) => item.id}
      ListHeaderComponent={
        <View style={{padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
            Infos
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Total: {filteredData.length}
            </Text>
            <TouchableOpacity onPress={() => setItemsToShow(itemsToShow + 10)}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Load More</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginTop: 10,
              padding: 10,
            }}
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
            placeholder="Search"
          />
        </View>
      }
      renderItem={({item}) => (
        <TouchableOpacity
          onLongPress={() => onDelete(item.id)}
          style={styles.studentContainer}>
            <Image source={{uri: item?.profile_pic}} style={{width: 50, height: 50}} />
          <Text style={styles.studentInfo}>{item?.username}</Text>
          <Text style={styles.studentInfo}>{item?.full_name}</Text>
          <Text style={styles.studentInfo}>{item?.email}</Text>
          <Text style={styles.studentInfo}>{item?.location}</Text>
          <Text style={styles.studentInfo}>{item?.bio}</Text>
          <Text style={styles.studentInfo}>
            Followers: {item?.followers_count}
          </Text>
          <Text style={styles.studentInfo}>
            Following: {item?.following_count}
          </Text>
          <Text style={styles.studentInfo}>Posts: {item?.post_count}</Text>
          <Text style={styles.studentInfo}>
            Verified: {item?.is_verified ? 'Yes' : 'No'}
          </Text>
          <Text style={styles.studentInfo}>Interests: {item?.interests}</Text>
        </TouchableOpacity>
      )}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ListMedai;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  studentContainer: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#262626',
  },
  studentInfo: {
    fontSize: 14,
    marginBottom: 2,
    color: '#262626',
  },
});