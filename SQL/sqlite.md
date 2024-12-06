# SQLITE

## Storage classes

A single storage class (in memory) can represent different data types (on disk):
- Null
- Integer (0 to 8 bytes)
- Real (8-bytes IEEE float)
- Text (UTF8, UTF16BE, UTF16LE)
- Blob (stored exactly as it was input, hystorically called None)

Interesting points: 
- For compatibility purpose, every data types has a lot of aliasses
- All columns except INTEGER PRIMARY KEY may contain any type of content.
- Booleans represented by INTEGER (TRUE and FALSE alias since 3.23 - 2018)
- Dates stored inside TEXT (ISO 8601), REAL (Julian day) or INTEGER (Unix time)
- Column type is preferred (affinity), not required (except using STRICT)
- Affinities: TEXT, NUMERIC, INTEGER, REAL, BLOB

## Comparisons

- `=`, `==`, `<`, `<=`, `>`, `>=`, `!=`, ` `, `IN`, `NOT IN`, `BETWEEN`, `IS`, `IS NOT`
- NULL [< NULL] < INTEGER/REAL < TEXT < BLOB (memcmp() for BLOBs)
- Conversions might occur before comparison

## CREATE TABLE

Create table

```sql
CREATE [TEMP/TEMPORARY] TABLE [IF NOT EXISTS] [schema_name.]table_name (
    col [type [type ...] [(signed_num[, signed_num)]] [constr, ...], ...,
    table_constraint, ... 
) [STRICT] [, WITHOUT ROWID];
-- Or
CREATE ... TABLE ... [schema_name.]table_name AS select_statement;
```

Column constraint

```sql
[CONSTRAINT name]
    PRIMARY KEY [ ASC | DESC ] [conflict-clause] AUTOINCREMENT
    UNIQUE [conflict-clause]
    NOT NULL [conflict-clause]
    CHECK (expr)
    DEFAULT { (expr) | literal-value | signed-number }
    COLLATE collation_name
    foreign-key-clause
    [GENERATED ALWAYS] AS (expr) [ STORED | VIRTUAL ] 
```

Conflict clause

```sql
ON CONFLICT { ROLLBACK | ABORT | FAIL | IGNORE | REPLACE }
```

Table constraint

```sql
[CONSTRAINT name] FOREIGN KEY (col_name, ...) foreign_key_clause
              ... CHECK (expr)
              ... { UNIQUE | PRIMARY_KEY } (indexed_col, ...) conflict_clause
```

Indexed column

```sql
{column_name | expr} [COLLATE collation_name] [ASC | DESC] 
```