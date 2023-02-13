/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { StyleSheet, View, Alert, Pressable, Image, Modal, ScrollView } from 'react-native';
import Header from './src/components/Headers';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';

function App(): JSX.Element {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);

  const handleNuevoPresupuesto = (nuevoPresupuesto: any) => {
    if (Number(nuevoPresupuesto) > 0){
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', [{text: 'Ok'}]);
    }
  };

  const handleGasto = (gasto) => {
    if (Object.values(gasto).includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'Ok'}]);
    }
    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    setModal(!modal);
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView>
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
        { isValidPresupuesto && (
          <ListadoGastos
            gastos={gastos}
          />
        )}
      </ScrollView>
      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {setModal(!modal);}}
        >
          <FormularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
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
    minHeight: 400,
  },
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
});

export default App;
