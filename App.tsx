/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { StyleSheet, View, Alert, Pressable, Image, Modal } from 'react-native';
import Header from './src/components/Headers';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';

function App(): JSX.Element {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);

  const handleNuevoPresupuesto = (nuevoPresupuesto: any) => {
    if (Number(nuevoPresupuesto) > 0){
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
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            handleNuevoPresupuesto={handleNuevoPresupuesto}
          /> :
          <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          />
        }
      </View>
      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {setModal(!modal);}}
        >
          <FormularioGasto
            setModal={setModal}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable
          onPress={() => setModal(!modal)}
        >
          <Image
            style={styles.imagen}
            source={require('./src/assets/Materiales Planificador/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
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
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default App;
