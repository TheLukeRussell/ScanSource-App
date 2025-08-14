import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Appbar, TextInput, Button, ActivityIndicator, Text, Card } from 'react-native-paper';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function runSearch() {
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      setError(null);
      return;
    }
    setPending(true);
    setError(null);
    try {
      const url = `https://api.restful-api.dev/objects?search=${encodeURIComponent(trimmed)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      // The API sometimes returns array or object; normalize to array.
      const arr = Array.isArray(json) ? json : json ? [json] : [];
      setResults(arr);
    } catch (e) {
      setError('Something went wrong. Please try again.');
      setResults([]);
    } finally {
      setPending(false);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header elevated>
        <Appbar.Content title="Search" />
      </Appbar.Header>

      <View style={{ padding: 16, gap: 12 }}>
        <TextInput
          mode="outlined"
          label="Keyword"
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
          onSubmitEditing={runSearch}
          left={<TextInput.Icon icon="magnify" />}
          accessibilityLabel="Search keyword input"
        />
        <Button mode="contained" onPress={runSearch} disabled={pending}>
          Search
        </Button>
      </View>

      {pending ? (
        <View style={{ alignItems: 'center', marginTop: 24 }}>
          <ActivityIndicator />
        </View>
      ) : error ? (
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ color: 'red' }}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => String(item.id ?? Math.random())}
          contentContainerStyle={{ padding: 16, gap: 12 }}
          renderItem={({ item }) => (
            <Card>
              <Card.Title
                title={item.name ?? `Item ${item.id}`}
                subtitle={`ID: ${item.id ?? 'unknown'}`}
              />
              <Card.Content>
                <Text selectable>
                  {item.data ? JSON.stringify(item.data, null, 2) : 'No extra data'}
                </Text>
              </Card.Content>
            </Card>
          )}
          ListEmptyComponent={
            <View style={{ paddingHorizontal: 16 }}>
              <Text>Enter a keyword and press Search.</Text>
            </View>
          }
        />
      )}
    </View>
  );
}
