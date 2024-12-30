import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const requestData = [
  { id: '1', request: 'Requested a wheelchair', time: '10:30 a.m.', date: '10.12.2024' },
  { id: '2', request: 'Requested re-bandaging', time: '1:15 p.m.', date: '07.12.2024' },
  { id: '3', request: 'Please bring a glass of water', time: '7:00 p.m.', date: '06.11.2024' },
  { id: '4', request: 'Please bring me a wheelchair', time: '11:30 a.m.', date: '03.12.2024' },
  { id: '5', request: 'Requested a doctor visit', time: '9:00 a.m.', date: '02.12.2024' },
  { id: '6', request: 'Requested meal assistance', time: '8:00 p.m.', date: '01.12.2024' },
];

const RequestHistoryScreen = () => {
  const router = useRouter();
  const [filteredRequests, setFilteredRequests] = useState(requestData);

  useEffect(() => {
    const loadRequestHistory = async () => {
      try {
        const storedHistory = await AsyncStorage.getItem('requestHistory');
        if (storedHistory) {
          setFilteredRequests(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error("Error loading request history:", error);
      }
    };
    loadRequestHistory();
  }, []);

  const deleteRequest = async (idToDelete) => {
    try {
      const updatedRequests = filteredRequests.filter(item => item.id !== idToDelete);
      setFilteredRequests(updatedRequests);
      await AsyncStorage.setItem('requestHistory', JSON.stringify(updatedRequests));
    } catch (error) {
      console.error("Error deleting the request:", error);
    }
  };
  

  const renderItem = ({ item }) => (
    <View style={styles.requestBox}>
      <View style={styles.requestContent}>
        <Text style={styles.requestText}>{item.request}</Text>
        <View style={styles.timeContainer}>
          <Icon name="clock-o" size={14} color="#000" style={{ marginRight: 5 }} />
          <Text style={styles.timeText}>{`${item.time}   ${item.date}`}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteRequest(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="chevron-left" size={20} color="#007E7E" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Request History</Text>

      {/* Remove Search Container */}
      {/* <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search with date/request/time..."
          style={styles.searchInput}
          placeholderTextColor="#808080"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Icon name="search" size={20} color="#007E7E" style={styles.searchIcon} />
      </View> */}

      <FlatList
        data={filteredRequests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 50 }}
      />

      <TouchableOpacity style={styles.scrollIcon} onPress={() => alert('Scroll to explore requests')}>
        <Text style={styles.scrollText}>▲</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#007E7E',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },
  requestBox: {
    backgroundColor: '#DDF3F3',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  requestContent: {
    flex: 1,
    marginRight: 10,
  },
  requestText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
},

  scrollIcon: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#007E7E',
    elevation: 5,
  },
  scrollText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    transform: [{ rotate: '180deg' }], // Triangle pointing upwards
  },
});

export default RequestHistoryScreen;
