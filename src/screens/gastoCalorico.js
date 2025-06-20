import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import UserInfo from './UserInfo';
import gastocaloricoImg from '../../assets/gastocalorico.png';

function GastoCaloricoScreen({ navigation }) {
  const [genero, setGenero] = useState('Masculino');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [atividade, setAtividade] = useState('Pouco esforço');
  const [exercicioSemanal, setExercicioSemanal] = useState('Pouco ou nada');
  const [gastoBasal, setGastoBasal] = useState('');
  const [gastoTotal, setGastoTotal] = useState('');

  const calcularBasal = (peso, idade, genero) => {
    if (genero === 'Feminino') {
      if (idade <= 3) {
        return (58.317 * peso) - 31.1;
      } else if (idade > 3 && idade <= 10) {
        return (20.315 * peso) + 485.9;
      } else if (idade > 10 && idade <= 18) {
        return (13.384 * peso) + 692.6;
      } else if (idade > 18 && idade <= 30) {
        return (14.818 * peso) + 486.6;
      } else if (idade > 30 && idade < 60) {
        return (8.126 * peso) + 845.6;
      } else {
        return (9.082 * peso) + 658.5;
      }
    } else {
      if (idade <= 3) {
        return (59.512 * peso) - 30.4;
      } else if (idade > 3 && idade <= 10) {
        return (22.706 * peso) + 504.3;
      } else if (idade > 10 && idade <= 18) {
        return (17.686 * peso) + 658.2;
      } else if (idade > 18 && idade <= 30) {
        return (15.057 * peso) + 692.2;
      } else if (idade > 30 && idade < 60) {
        return (11.472 * peso) + 873.1;
      } else {
        return (11.711 * peso) + 587.7;
      }
    }
  };

  const calcularGasto = () => {
    const idadeNum = parseInt(idade);
    const pesoNum = parseFloat(peso);

    if (isNaN(idadeNum) || isNaN(pesoNum)) {
      setGastoBasal('');
      setGastoTotal('');
      return;
    }

    const basal = calcularBasal(pesoNum, idadeNum, genero);

    let multatividade = {
      'Pouco esforço': 1.55,
      'Moderado': 1.84,
      'Intenso': 2.2,
      'Atleta': 2.5
    }[atividade] || 1.2;

    const total = basal * multatividade;

    setGastoBasal(basal.toFixed(2));
    setGastoTotal(total.toFixed(2));
  };

  return (
    <ImageBackground source={gastocaloricoImg} style={styles.background} resizeMode="cover">
      <UserInfo />
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.titulo}>Gasto Calórico</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sexo:</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.selectButton, genero === 'Masculino' && styles.selectedButton]}
              onPress={() => setGenero('Masculino')}
            >
              <Text style={genero === 'Masculino' ? styles.selectedText : styles.unselectedText}>Masculino</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.selectButton, genero === 'Feminino' && styles.selectedButton]}
              onPress={() => setGenero('Feminino')}
            >
              <Text style={genero === 'Feminino' ? styles.selectedText : styles.unselectedText}>Feminino</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
            placeholder="Digite sua idade"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Peso (kg):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
            placeholder="Digite seu peso"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Atividade Física no Trabalho:</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={atividade}
              onValueChange={setAtividade}
              style={styles.picker}
              dropdownIconColor="#000"
              mode="dropdown"
              itemStyle={{ color: '#000' }} // iOS
            >
              <Picker.Item label="Pouco esforço físico" value="Pouco esforço" color="#000" />
              <Picker.Item label="Esforço físico moderado" value="Moderado" color="#000" />
              <Picker.Item label="Esforço físico intenso" value="Intenso" color="#000" />
              <Picker.Item label="Atleta Profissional" value="Atleta" color="#000" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Exercício Físico Semanal:</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={exercicioSemanal}
              onValueChange={setExercicioSemanal}
              style={styles.picker}
              dropdownIconColor="#000"
              mode="dropdown"
              itemStyle={{ color: '#000' }} // iOS
            >
              <Picker.Item label="Pouco ou nada" value="Pouco ou nada" color="#000" />
              <Picker.Item label="1 Hora" value="1 Hora" color="#000" />
              <Picker.Item label="2 Horas" value="2 Horas" color="#000" />
              <Picker.Item label="3 Horas" value="3 Horas" color="#000" />
              <Picker.Item label="5 Horas" value="5 Horas" color="#000" />
              <Picker.Item label="7 Horas" value="7 Horas" color="#000" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={calcularGasto}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Gasto Basal: <Text style={styles.resultValue}>{gastoBasal ? `${gastoBasal} kcal` : '--'}</Text></Text>
          <Text style={styles.resultText}>Gasto Total Diário: <Text style={styles.resultValue}>{gastoTotal ? `${gastoTotal} kcal` : '--'}</Text></Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  voltar: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(18, 19, 19, 0.85)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
    zIndex: 10
  },
  voltarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: 'rgba(47, 49, 49, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 40
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 18,
    letterSpacing: 1
  },
  inputGroup: {
    width: '100%',
    marginBottom: 14
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    gap: 12
  },
  selectButton: {
    backgroundColor: 'rgba(31,32,32,0.7)',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)'
  },
  selectedButton: {
    backgroundColor: '#222',
    borderColor: '#fff'
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  unselectedText: {
    color: '#aaa'
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#444'
  },
  pickerBox: {
    backgroundColor: '#fff', 
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#444',
    marginTop: 2
  },
  picker: {
    width: '100%',
    height: 40
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 18,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  resultBox: {
    marginTop: 18,
    backgroundColor: 'rgba(31,32,32,0.7)',
    borderRadius: 8,
    padding: 16,
    width: '100%'
  },
  resultText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 6
  },
  resultValue: {
    color: '#00e6a6',
    fontWeight: 'bold'
  }
});

export default GastoCaloricoScreen;