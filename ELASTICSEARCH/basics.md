# Elasticsearch - Basics

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Elastic Search](./elasticsearch.md)* &nbsp; › &nbsp; 
*Basics*

---

- Suite ELK (Elasticserach + Logstash + Kibana)
- Moteur de recherche intégré, basé sur Lucene
- Table => Index
- PORT 9200 => API REST
- PORT 9300 => Port de communication entre noeuds
- Fichier de configuration : Mapping

Basic endpoints:

- List indices: `GET localhost:9200/_cat/indices?format=json&pretty`
- Delete indices: `DELETE localhost:9200/test/`

## Data types

**Numbers**
- byte
- integer
- long
- unsigned_long
- double
- float
- half_float
- scaled_float

**Text**
- text
- match_only_text

**Keywords**
- keyword
- constant_keyword
- wildcard

**Others**
- date
- date_nanos
- binary: Binary data encoded as base64 string
- boolean: true || false
- alias: defines an alias for an existing field