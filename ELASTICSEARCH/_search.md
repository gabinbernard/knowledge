# Elasticsearch - _search Module

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Elastic Search](./elasticsearch.md)* &nbsp; › &nbsp; 
*_search*

---

- `/<index>/_search` - Count across 1 index
- `/<index1>,<index2>/_search` - Count across 2 indices
- `/_search` - Count across all indices

### Body

**General structure**
```json
{
    "from": 20, /* Pagination (skip x elements) */
    "size": 10, /* Pagination (maximum of x elements) */
    "query": <Query>, /* Query parameters */
    "aggs": <Aggs>, /* Aggregations */

    "_source": { /* Choose which fields to include */
        "includes": "fields.title"
    }
}
```

**&lt;Query&gt;**
```json
{
    /* Full-text search */
    "match": { "fields.<field>": "<string>" },
    /* Match full phrase in correct order */
    "match_phrase": { "fields.<field>": "<string>" },
    /* Exact match */
    "term": { "fields.<field>": "<string>" },
    /* Wildcard search */
    "wildcard": { "fields.<field>": "<string>" },
    /* Range */
    "range": { "fields.rating": { "gte": 8, "lte": 10 } },
    /* Fuzzy search (tolerance for typos) */
    "fuzzy": { "fields.title": { "value": "<str>", "fuzziness": "AUTO" } },
    /* Check field presence */
    "exists": { "field": "fields.<field>" },

    /* Conditions */
    "bool": {
        "must": [ ... ], // All (AND), affects score
        "filter": [ ... ], // All (AND), effiscient, does not affect score
        "should": [ ... ], // Any (OR), affects score
        "must_not": [ ... ], // No (NOT), does not affect score
        "minimum_should_match": <int>,
    }
}
```

**&lt;Aggs&gt;**
```json
{
    "<agg-name>": {
        "terms": {
            "field": "<field>",
            "size": 100,  // Increase max bucket count
            "order": { "_key": "desc" } 
        },
        /* OR */
        "range": {
            "field": "fields.rating",
            "ranges": [ { "key": "[4, 6[", "from": 4, "to": 5.99 }, ... ]
        },
        /* OR ANY OF */
        "value_count": { "field": "..." },
        "avg": { "field": "..." },
        "min": { "field": "..." },
        "max": { "field": "..." },
        "sum": { "field": "..." },
        "stats": { "field": "..." },
        "extended_stats": { "field": "..." },
        "percentiles": { "field": "...", "percents": [<int>, ...] },
        "percentile_ranks": { "field": "..." },
        "extended_stats": { "field": "..." },
        "extended_stats": { "field": "..." },
        "top_hits": {
            "size": 3,
            "sort": [
                { "fields.<field>": { "order": "desc" } }
            ]
        },

        "aggs": {
            "<subagg-name>": {
                "avg": { "field": "fields.rating" }
            }
        },

        "meta": {
            "<meta-field-name>": "<meta-field-value",
        },
    },
}
```
