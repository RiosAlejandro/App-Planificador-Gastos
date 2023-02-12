import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.texto}>Planificador de Gastos</Text>
    </View>
   );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3b82f6',
  },
  texto:{
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});

export default Header;
