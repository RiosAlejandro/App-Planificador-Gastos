import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Header from './src/components/Headers';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';

function App(): JSX.Element {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const handleNuevoPresupuesto = (presupuesto: any) => {
    if (Number(presupuesto) > 0){
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', 'Ok');
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        { !isValidPresupuesto ?
          <NuevoPresupuesto
            handleNuevoPresupuesto={handleNuevoPresupuesto}
          /> :
          <ControlPresupuesto />
        }
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
