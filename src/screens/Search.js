import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';

const Search = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SearchInput />
        <SearchContent />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search;