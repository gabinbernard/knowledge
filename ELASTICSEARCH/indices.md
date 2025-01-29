# Elasticsearch - Indices

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Elastic Search](./elasticsearch.md)* &nbsp; › &nbsp; 
*Indices*

---

### Create Index - `PUT /<index>`

`<index>` should:
- be lowercase
- not start with `_`, `-` or `+`
- not be `.` or `..`
- not be longer than 255 bytes

```json
{
    "settings": {
        "index": {
            "number_of_shards": <integer>,
            "number_of_replicats": <integer>,
            "index.write.wait_for_active_shards": "2"
        }
    },
    "mappings": {
        "properties": {
            ...
        }
    },
    "aliases": {
        "<alias_name>": {
            "filter": {
                ...
            }
        }
    }
}
```



### Clone index `POST /<index>/_clone/<new_index>`



### Delete index `DELETE /<index>`

### Block operations

- `PUT /<index>/_block/metadata` - Disable metadata changes
- `PUT /<index>/_block/read` - Disable reading operations
- `PUT /<index>/_block/read_only` - Disable writing operations and metadata changes
- `PUT /<index>/_block/write` - Disable writing operations

### Update settings `PUT /<index>/_settings`

```json
{
    "index": {
        "number_of_shards": <integer>,
        "number_of_replicas": <integer>,
    }
}
```