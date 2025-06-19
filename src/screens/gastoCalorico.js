import { View, Text, TextInput, Button, StyleSheet, Picker, TouchableOpacity} from 'react-native';
import { useState } from 'react';

function GastoCaloricoScreen() {
  const [genero, setGenero] = useState('Masculino');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [atividade, setAtividade] = useState('Pouco esforço');
  const [exercicioSemanal, setExercicioSemanal] = useState('');
  const [gastoBasal, setGastoBasal] = useState('');
  const [gastoTotal, setGastoTotal] = useState('');

  const calcularBasal = (peso, idade, genero) => {
    if (genero === 'Feminino') {
        if (idade <= 3){
            return (58.317 * peso) - 31.1;
        } else if (idade > 3 && idade <= 10){
            return (20.315 * peso) + 485.9;
        } else if (idade > 10 && idade <= 18){
            return (13.384 * peso) + 692.6;
        } else if (idade > 18 && idade <= 30){
            return (14.818 * peso) + 486.6;
        } else if (idade > 30 && idade < 60){
            return (8.126 * peso) + 845.6;
        } else {
            return (9.082 * peso) + 658.5;
        }
    } else {
        if (idade <= 3){
            return (59.512 * peso) - 30.4;
        } else if (idade > 3 && idade <= 10) {
            return (22.706 * peso) + 504.3;
        } else if (idade > 10 && idade <= 18) {
            return (17.686 * peso) + 658.2;
        } else if (idade > 18 && idade <= 30){
            return (15.057 * peso) + 692.2;
        } else if (idade > 30 && idade < 60){
            return (11.472 * peso) + 873.1;
        } else {
            return (11.711 * peso) + 587.7;
        } 
    }
  }

  const calcularGasto = () => {
    const idadeNum = parseInt(idade);
    const pesoNum = parseFloat(peso);

    const basal = calcularBasal(pesoNum, idadeNum, genero);

    let multatividade = {
      'Pouco esforço': 1.55,
      'Moderado': 1.84,
      'Intenso': 2.2,
    }[atividade] || 1.2;

    const total = basal * multatividade;

    setGastoBasal(basal.toFixed(2));
    setGastoTotal(total).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text>Gasto Calórico</Text>

      <Text>Sexo:</Text>
      <View>
        <TouchableOpacity onPress={() => setGenero('Masculino')}>
          <Text style={genero === 'Masculino' ? styles.selected : styles.unselected}>Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGenero('Feminino')}>
          <Text style={genero === 'Feminino' ? styles.selected : styles.unselected}>Feminino</Text>
        </TouchableOpacity>
      </View>

      <Text>Idade:</Text>
      <TextInput
        keyboardType="numeric" 
        value={idade} 
        onChangeText={setIdade} 
      />

      <Text>Peso:</Text>
      <TextInput 
        keyboardType="numeric" 
        value={peso} 
        onChangeText={setPeso} 
      />

      <Text>Atividade Física no Trabalho:</Text>
      <Picker selectedValue={atividade} onValueChange={setAtividade}>
        <Picker.Item label="Trabalho com pouco esforço físico" value="Pouco esforço" />
        <Picker.Item label="Trabalho com esforço físico moderado" value="Moderado" />
        <Picker.Item label="Trabalho com esforço físico intenso" value="Intenso" />
        <Picker.Item label="Atleta Profissional" value="Atleta" />
      </Picker>

      <Text>Exercício Físico Semanal:</Text>
      <Picker selectedValue={exercicioSemanal} onValueChange={setExercicioSemanal}>
        <Picker.Item label="Pouco ou nada" value="Pouco ou nada" />
        <Picker.Item label="1 Hora" value="1 Hora" />
        <Picker.Item label="2 Horas" value="2 Horas" />
        <Picker.Item label="3 Horas" value="3 Horas" />
        <Picker.Item label="5 Horas" value="5 Horas" />
        <Picker.Item label="7 Horas" value="7 Horas" />
      </Picker>

      <Button title="Calcular" onPress={calcularGasto} />

      <Text>Gasto Basal: {gastoBasal}</Text>
      <Text>Gasto Total Diário: {gastoTotal}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    flex: 1 
  },
  selected: {
    color: 'black',
    fontWeight: 'bold'
  },
  unselected: {
    color: '#666' 
  },
  
});

export default GastoCaloricoScreen;