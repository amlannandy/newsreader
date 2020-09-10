import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChanged, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        onChangeText={(newTerm) => onTermChanged(newTerm)}
        autoCorrect={false}
        autoCapitalize='none'
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    height: 50,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    borderColor: '#dee3e3',
    borderWidth: 0.5,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default SearchBar;
