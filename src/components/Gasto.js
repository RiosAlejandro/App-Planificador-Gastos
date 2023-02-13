import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { formatearCantidad } from '../helpers';

const diccionarioIconos = {
  ahorro: require('../assets/Materiales Planificador/img/icono_ahorro.png'),
  comida: require('../assets/Materiales Planificador/img/icono_comida.png'),
  casa: require('../assets/Materiales Planificador/img/icono_casa.png'),
  gastos: require('../assets/Materiales Planificador/img/icono_gastos.png'),
  ocio: require('../assets/Materiales Planificador/img/icono_ocio.png'),
  salud: require('../assets/Materiales Planificador/img/icono_salud.png'),
  suscripciones: require('../assets/Materiales Planificador/img/icono_suscripciones.png'),
};

const Gasto = (gasto) => {
  const {nombre, categoria, cantidad} = gasto;

  return (
    <View style={styles.contenedor}>{/**Agregar sombras */}
      <View style={styles.contenido}>
        <View style={styles.contenedorImagen}>
          <Image
            style={styles.imagen}
            source={diccionarioIconos[categoria]}
          />
          <View styles={styles.contenedorTexto}>
            <Text styles={styles.categoria}>{categoria}</Text>
            <Text styles={styles.nombre}>{nombre}</Text>
          </View>
        </View>
        <Text style={styles.cantidad}>{formatearCantidad(cantidad)}</Text>
      </View>
    </View>
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
  cantidad: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Gasto;
