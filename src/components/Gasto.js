import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { formatearCantidad, FormatearFecha } from '../helpers';

const diccionarioIconos = {
  ahorro: require('../assets/img/ahorro.png'),
  comida: require('../assets/img/comida.png'),
  casa: require('../assets/img/casa.png'),
  gastos: require('../assets/img/gastos.png'),
  ocio: require('../assets/img/ocio.png'),
  salud: require('../assets/img/salud.png'),
  suscripciones: require('../assets/img/suscripciones.png'),
};

const Gasto = ({gasto, setModal, setGasto}) => {

  const {nombre, categoria, cantidad, fecha} = gasto;

  const handleAcciones = () => {
    setModal(true);
    setGasto(gasto);
  };

  return (
    <Pressable
      onLongPress={handleAcciones}
    >
        <View style={styles.contenedor}>
          <View style={styles.contenido}>
            <View style={styles.contenedorImagen}>
              <Image
                style={styles.imagen}
                source={diccionarioIconos[categoria]}
              />
              <View styles={styles.contenedorTexto}>
                <Text styles={styles.categoria}>{categoria}</Text>
                <Text styles={styles.nombre}>{nombre}</Text>
                <Text styles={styles.fecha}>{FormatearFecha(fecha)}</Text>
              </View>
            </View>
            <Text style={styles.cantidad}>{formatearCantidad(cantidad)}</Text>
          </View>
        </View>
    </Pressable>
   );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    transform: [{ translateY: 50 }],
    marginBottom: 20,
  },
  contenido: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contenedorImagen: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imagen: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  contenedorTexto: {
    flex: 1,
  },
  categoria: {
    color: '#94a3b8',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  nombre: {
    fontSize: 22,
    color: '#64748b',
    marginBottom: 5,
  },
  fecha: {
    fontWeight: 'bold',
    color: '#db2777',
  },
  cantidad: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Gasto;
