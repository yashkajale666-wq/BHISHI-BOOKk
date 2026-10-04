import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const [bhishiList] = useState([
    { id: '1', name: 'Monthly Savings Bhishi', amount: '₹5,000', members: '10 Members' },
    { id: '2', name: 'Gold Bhishi Group', amount: '₹10,000', members: '12 Members' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bhishibook</Text>
        <Text style={styles.subTitle}>Manage your Bhishi easily</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Active Bhishi Groups</Text>
        
        <FlatList
          data={bhishiList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDetails}>{item.members} • Per Month</Text>
              </View>
              <Text style={styles.cardAmount}>{item.amount}</Text>
            </View>
          )}
        />

        <TouchableOpacity style={styles.button} onPress={() => alert('Navin Bhishi add kara!')}>
          <Text style={styles.buttonText}>+ Create New Bhishi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  header: { backgroundColor: '#2f3640', padding: 20, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  subTitle: { color: '#dcdde1', fontSize: 14, marginTop: 4 },
  body: { flex: 1, padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2f3640', marginBottom: 12 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, elevation: 2 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#353b48' },
  cardDetails: { fontSize: 12, color: '#718093', marginTop: 4 },
  cardAmount: { fontSize: 16, fontWeight: 'bold', color: '#44bd32' },
  button: { backgroundColor: '#40739e', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
