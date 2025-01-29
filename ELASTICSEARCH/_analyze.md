# Elasticsearch - _analyze module

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Elastic Search](./elasticsearch.md)* &nbsp; › &nbsp; 
*_analyze*

---

- `/<index>/_analyze` - Analyze text using an index's settings
- `/_analyze` - Analyze text using default settings

### Body

**General structure**
```json
{
    "text": "<string>",  /* Input text */

    "analyzer": "<analyzer-name>",  /* Use a predefined analyzer */
    "field": "fields.<field>",  /* Use the analyzer of a specific field */
    
    "tokenizer": "<tokenizer-name>",  /* Custom tokenizer */
    "char_filter": ["<char-filter1>", "<char-filter2>"],  /* Custom character filters */
    "filter": ["<token-filter1>", "<token-filter2>"]  /* Custom token filters */
}
```

### Tokenizers

**Word Oriented Tokenizers**
- **Standard Tokenizer `standard`** - Unicode Text Segmentation algorithm
- **Letter Tokenizer `letter`** - Splits when character is not a letter
- **Lowercase Tokenizer `lowercase`** - Like `letter` but lowercases tokens
- **Whitespace Tokenizer `whitespace`** - Splits when character is a whitespace
- **UAX Url Email Tokenizer `uax_url_email`** - Like `standard` but recognizes urls and email addresses
- **Classic Tokenizer `classic`** - Grammar-based tokenizer for the English language
- **Thai Tokenizer `thai`** - Divides Thai text into words

**Partial Word Tokenizers**
- **N-Gram Tokenizer `ngram`** - Break up text into words when specified character, then n-grams of words
- **Edge N-Gram Tonizer `edge_ngram`** - Like `ngram` but returns n-grams anchored to the start of the word

**Structured Text Tokenizers**
- **Keyword Tokenizer `keyword`** - "Noop Tokenizer", outputs input text
- **Pattern Tokenizer `pattern`** - Uses REGEX to split or match text
- **Simple Pattern T. `simple_pattern`** - Subset of REGEX features, generally faster, returns matches
- **Simple Pattern Split T. `simple_pattern_split`** - Same as `simple_pattern` but splits text
- **Char Group Tokenizer `char_group`** - Sets of characters to split on
- **Path Tokenizer `path_hierarchy`** - Splits hierarchical value and emits an output for every node

### Token filters

- **`lowercase`** - Lowercases token
- **`uppercase`** - Uppercases token
- **`reverse`** - Reverses token
- **`trim`** - Trims token
- **`asciifolding`** - Converts alphabetic, numeric and symbolic characters to ASCII equivalent
- **`apostrophe`** - Strips characters following an apostrophe (included)
- **`fingerprint`** - Sorts and remove duplicates
- **`length`** - Filters by length
- **`limit`** - LImits token count
- **`stemmer`** - Algorithmic stemming for various languages
- **`truncate`** - Truncates tokens to maximum length