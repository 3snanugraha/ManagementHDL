  import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
  import { Ionicons } from '@expo/vector-icons';
  import { useRouter } from "expo-router";
  import { useState } from "react";

  export default function dashboard() {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <View>
            <TouchableOpacity style={styles.profileButton} onPress={() => setShowDropdown(!showDropdown)}>
              <Ionicons name="person-circle" size={32} color="#ffffff" />
            </TouchableOpacity>
            {showDropdown && (
              <View style={[styles.dropdown, { elevation: 5, zIndex: 2000 }]}>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => router.push('/profil')}>
                  <Ionicons name="person" size={20} color="#333333" />
                  <Text style={styles.dropdownText}>Akun Saya</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => router.push('/')}>
                  <Ionicons name="settings" size={20} color="#333333" />
                  <Text style={styles.dropdownText}>Setting</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <ScrollView style={[styles.content, { zIndex: 1 }]}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Selamat Datang!</Text>
            <Text style={styles.dateText}>Senin, 1 Januari 2024</Text>
          </View>

          <View style={styles.menuGrid}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name="calendar" size={32} color="#0967f5" />
              </View>
              <Text style={styles.menuText}>Jadwal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name="medical" size={32} color="#0967f5" />
              </View>
              <Text style={styles.menuText}>Riwayat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name="notifications" size={32} color="#0967f5" />
              </View>
              <Text style={styles.menuText}>Notifikasi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name="document-text" size={32} color="#0967f5" />
              </View>
              <Text style={styles.menuText}>Laporan</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoSection}>
            <View style={styles.infoCard}>
              <Ionicons name="time" size={24} color="#0967f5" />
              <Text style={styles.infoTitle}>Jadwal Berikutnya</Text>
              <Text style={styles.infoDetail}>Rabu, 3 Jan 2024</Text>
            </View>

            <View style={styles.infoCard}>
              <Ionicons name="stats-chart" size={24} color="#0967f5" />
              <Text style={styles.infoTitle}>Status</Text>
              <Text style={styles.infoDetail}>Baik</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      paddingTop: 60,
      backgroundColor: '#0967f5',
      elevation: 4,
      zIndex: 2000,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    profileButton: {
      padding: 5,
    },
    dropdown: {
      position: 'absolute',
      top: 50,
      right: 0,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 5,
      width: 150,
      elevation: 4,
      zIndex: 1000,
    },
    dropdownItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    dropdownText: {
      marginLeft: 10,
      fontSize: 14,
      color: '#333333',
    },
    content: {
      flex: 1,
    },
    welcomeSection: {
      padding: 20,
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333333',
    },
    dateText: {
      fontSize: 14,
      color: '#666666',
      marginTop: 5,
    },
    menuGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      justifyContent: 'space-between',
    },
    menuItem: {
      width: '48%',
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 25,
      alignItems: 'center',
      marginBottom: 15,
      elevation: 2,
    },
    menuIcon: {
      backgroundColor: '#e6efff',
      padding: 15,
      borderRadius: 12,
      marginBottom: 10,
    },
    menuText: {
      fontSize: 16,
      color: '#333333',
      fontWeight: '500',
    },
    infoSection: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoCard: {
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 15,
      width: '48%',
      alignItems: 'center',
      elevation: 2,
    },
    infoTitle: {
      fontSize: 14,
      color: '#666666',
      marginTop: 10,
    },
    infoDetail: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333333',
      marginTop: 5,
    },
  });