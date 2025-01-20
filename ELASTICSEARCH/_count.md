# Elasticsearch - _count module

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Elastic Search](./elasticsearch.md)* &nbsp; › &nbsp; 
*_count*

---

- `/<index>/_count` - Count across 1 index
- `/<index1>,<index2>/_count` - Count across 2 indices
- `/_count` - Count across all indices

### Body

```json
{
  "query": <Query>,
  "terminate_after": <integer>, /* Terminate after <integer> matches found */
  "timeout": <duration>, /* Timeout */
}
```
For the &lt;Query&gt; reference, see [_search](./_search.md).
