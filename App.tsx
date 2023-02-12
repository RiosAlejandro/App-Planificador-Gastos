import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Headers';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

function App(): JSX.Element {
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3b82f6',
  },
});

export default App;
