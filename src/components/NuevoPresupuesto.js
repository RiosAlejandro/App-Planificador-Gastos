import React from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

const NuevoPresupuesto = ({
  handleNuevoPresupuesto,
  presupuesto,
  setPresupuesto}
) => {

  return (
      <View style={styles.contenedor}>
        <Text style={styles.label}>Definir presupuesto</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Agrega tu presupuesto: ej. 300"
          style={styles.input}
          value={presupuesto.toString()}
          onChangeText={setPresupuesto}
        />
        <Pressable
          style={styles.boton}
          onPress={() => handleNuevoPresupuesto(presupuesto)}
        >
          <Text style={styles.botonTexto}>Agregar presupuesto</Text>
        </Pressable>
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
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3b82f6',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  boton: {
    marginTop: 30,
    backgroundColor: '#1048a4',
    padding: 10,
    borderRadius: 10,
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default NuevoPresupuesto;
