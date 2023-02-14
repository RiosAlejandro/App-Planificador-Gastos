import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Pressable,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import { generarId } from './src/helpers';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';
import Header from './src/components/Headers';
import Imagen from './src/components/Imagen';

function App() {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [gasto, setGasto] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  const handleNuevoPresupuesto = nuevoPresupuesto => {
    if (Number(nuevoPresupuesto) > 0){
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', [{text: 'Ok'}]);
    }
  };

  const handleGasto = (gastoHandle) => {
    if ([gastoHandle.nombre, gastoHandle.categoria, gastoHandle.cantidad].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'Ok'}]);
      return;
    }

    if (gastoHandle.id) {
      const gastosActualizados = gastos.map( gastoState => gastoState.id
        === gasto.id ? gasto : gastoState);

      setGastos(gastosActualizados);
    } else {
      gastoHandle.id = generarId();
      gastoHandle.fecha = Date.now();
      setGastos([...gastos, gastoHandle]);
    }
    setModal(!modal);
  };

  const eliminarGasto = id => {
    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        {text: 'No', style: 'cancel'},
        {text: 'Si, Eliminar', onPress: () => {
          const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id);
          setGastos(gastosActualizados);
          setModal(!modal);
          setGasto({});
        }},
      ]
    );
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
          <>
            <Filtro
              filtro={filtro}
              setFiltro={setFiltro}
              gastos={gastos}
              setGastosFiltrados={setGastosFiltrados}
            />
            <ListadoGastos
              gastos={gastos}
              setModal={setModal}
              setGasto={setGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </>
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
            gasto={gasto}
            setGasto={setGasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable
        style={styles.pressable}
          onPress={() => setModal(!modal)}
        >
          <Image source={require('./src/img/nuevoGasto.png')} />
          <Imagen />
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
  pressable:{
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  imagen: {
    width: 60,
    height: 60,
  },
});

export default App;
