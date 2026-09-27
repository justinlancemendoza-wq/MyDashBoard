import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  // ===== DATA =====
  const transactions = [
    { id: 1, icon: '🛒', name: 'Grocery Store', date: 'Today, 10:30 AM', amount: '-₱850', type: 'expense' },
    { id: 2, icon: '🍔', name: 'Food & Dining', date: 'Yesterday, 7:15 PM', amount: '-₱320', type: 'expense' },
    { id: 3, icon: '💰', name: 'Allowance', date: 'Sep 20, 2026', amount: '+₱3,000', type: 'income' },
  ];

  // ===== UI =====
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

    {/* HEADER */}
<View style={styles.header}>
  <View>
    <Text style={styles.name}>Lance Mendoza</Text>
  </View>
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>L</Text>
  </View>
</View>
        {/* BALANCE CARD */}
        <View style={styles.balanceCard}>
          <Text style={styles.cardLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>₱24,580.00</Text>
          <View style={styles.balanceRow}>
            <View>
              <Text style={styles.cardLabelSmall}>Income</Text>
              <Text style={styles.cardValue}>₱32,500</Text>
            </View>
            <View>
              <Text style={styles.cardLabelSmall}>Expenses</Text>
              <Text style={styles.cardValue}>₱7,920</Text>
            </View>
          </View>
        </View>

        {/* QUICK ACTIONS */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionBox}>
            <Text style={styles.actionIcon}>＋</Text>
            <Text style={styles.actionLabel}>Add Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBox}>
            <Text style={styles.actionIcon}>↗</Text>
            <Text style={styles.actionLabel}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBox}>
            <Text style={styles.actionIcon}>▣</Text>
            <Text style={styles.actionLabel}>Bills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBox}>
            <Text style={styles.actionIcon}>⋯</Text>
            <Text style={styles.actionLabel}>More</Text>
          </TouchableOpacity>
        </View>

        {/* RECENT TRANSACTIONS */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {transactions.map((item) => (
          <View key={item.id} style={styles.transactionItem}>
            <View style={styles.transactionIconBox}>
              <Text style={styles.transactionIcon}>{item.icon}</Text>
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <Text style={item.type === 'income' ? styles.amountIncome : styles.amountExpense}>
              {item.amount}
            </Text>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

// ===== STYLES =====
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FB' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 22, paddingTop: 15, marginBottom: 25 },
  greeting: { fontSize: 14, color: '#7A8190' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#1E2430', marginTop: 3 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#5B5FEF', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  balanceCard: { backgroundColor: '#5B5FEF', marginHorizontal: 22, borderRadius: 22, padding: 22, marginBottom: 28 },
  cardLabel: { color: '#DCDDFE', fontSize: 14 },
  balanceAmount: { color: 'white', fontSize: 32, fontWeight: 'bold', marginTop: 8, marginBottom: 25 },
  balanceRow: { flexDirection: 'row', justifyContent: 'space-between' },
  cardLabelSmall: { color: '#DCDDFE', fontSize: 12 },
  cardValue: { color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 3 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#202532', marginHorizontal: 22, marginBottom: 15 },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, marginBottom: 28 },
  actionBox: { backgroundColor: 'white', width: '23%', paddingVertical: 15, borderRadius: 15, alignItems: 'center' },
  actionIcon: { fontSize: 22, color: '#5B5FEF', marginBottom: 7 },
  actionLabel: { fontSize: 11, color: '#555C6C', fontWeight: '600' },
  transactionItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginHorizontal: 22, marginBottom: 10, padding: 14, borderRadius: 15 },
  transactionIconBox: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#F0F1FF', justifyContent: 'center', alignItems: 'center' },
  transactionIcon: { fontSize: 20 },
  transactionInfo: { flex: 1, marginLeft: 12 },
  transactionName: { fontSize: 14, fontWeight: 'bold', color: '#292F3B' },
  transactionDate: { fontSize: 11, color: '#8A909D', marginTop: 4 },
  amountExpense: { color: '#E05252', fontWeight: 'bold' },
  amountIncome: { color: '#28A56A', fontWeight: 'bold' },
});
