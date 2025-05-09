# Doctrine

## Entities

### Column definition
```php
#[
    Id,              # Primary key of the entity
    Column(          # Persistent column
        type

        name, length, precision, unique, 
        nullable, insertable, updatable, generated,
        options => [default, unsigned, fixed, comment, collation, check]
    ),
    GeneratedValue   # Field generated by the database
]
```

### Associations
targetEntity = FQCN (Fully qualified class name) \
(it can be omitted if typehint is provided)

cascade = {"all" | "persist", "remove", "detach", "merge", "refresh"},
```php
#[OneToOne(
    targetEntity,

    cascade,
    fetch = LAZY | EAGER,
    orphanRemoval,
    inversedBy
)]
#[JoinColumns({...})]   # ONE TO ONE, MANY TO ONE

#[OneToMany(
    targetEntity,

    cascade
    fetch = LAZY | EXTRA_LAZY | EAGER,
    orphansRemoval,
    mappedBy,
    indexBy
)]

#[ManyToOne(
    targetEntity,

    cascade,
    fetch = LAZY | EAGER,
    inversedBy
),
JoinColumn(
    name,
    referencedColumnName,
    unique,
)]

#[ManyToMany(
    targetEntity,

    cascade,
    fetch = LAZY | EXTRA_LAZY | EAGER,
    mappedBy,
    inversedBy,
    indexBy
)],
#[OrderBy(["name", "ASC" | "DESC"])]
#[JoinTable(   # MANY TO MANY
    name,
    joinColumns={ @JoinColumn(name, referencedColumnName) },
    inverseJoinColumns={ @JoinColumn(name, referencedColumnName) }
)]
```

Notes for removing items by cascade
- `onDelete="CASCADE"` - Handled by database
- `cascade={"remove"}` - Remove child if no other owner
- `orphanRemoval="true"` - Remove child as if no other owner

### Misc

```php
#[Entity(repositoryClass, readOnly)]
#[Embeddable()]
#[Embedded(class: Address::class, columnPrefix: "address_")]
#[Cache(usage = READ_ONLY | READ_WRITE | NONSTRICT_READ_WRITE | TRANSACTIONAL, region)]
```



## Query builder

```php
$qb = $em->createQueryBuilder();

echo $qb->getEntityManager();
echo $qb->getType(); 
# QueryBuilder::SELECT => 0
# QueryBuilder::DELETE => 1
# QueryBuilder::UPDATE => 2

$qb->select('u.id') # ->addSelect(...)
   ->from('user', 'u', 'u.username') // Third arg indexBy, used for hydration, not SQL
   ->join('u.group', 'g', Expr\Join::WITH, $qb->expr->eq('u.status', ':status'), 'g.id')
   ->innerJoin('u.group', 'g', ..., 'g.id')
   ->leftJoin('u.group', 'g', ..., 'g.id')
   ->where( # where | andWhere (can be used directly) | orWhere
        $qb->expr()->orX(
            $qb->expr()->eq('user.id', ':id'),
            $qb->expr()->like('user.username', ':username')
        )
    )
    ->groupBy('u.age') # ->addGroupBy(...)
    ->having($db->expr->gte('u.age', $qb->createNamedParameter(18))) # having | andHaving | orHaving
    ->orderBy('u.name', 'ASC' | 'DESC') # ->addOrderBy(...)
    ->setFirstResult($offset)
    ->setMaxResults($limit)
    ->setParameter('username', 'Bipboup') // ':username' => 'username' || '?1' => 1
    ->setParameters(new ArrayCollection([
        new Parameter('id', 1),
        new Parameter('status', 1)
    ]));

$params = $qb->getParamaters();
$param = $qb->getParamater('username'); # Returns null if does not exist
         # ->getName(), ->getValue(), ->getType(), ->setValue($value, $type = null)

$query = $qb->getQuery()

$query->getResult();
$query->toIterable();
$query->getSingleResult();
$query->getArrayResult();
$query->getScalarResult();
$query->getSingleScalarResult();

$qb->update()

$qb->set()

$qb->delete()
```

### Expr

**Comparison functions**
```php
andX(e1, e2, ... eN);
orX(e1, e2, ... eN);
eq('u.id', 1);
neq('u.id', 2);
lt('u.age', 19);
lte('u.age', 18);
gt('u.age', 17);
gte('u.age', 18);
isNull('u.class');
isNotNull('u.class');
isMemberOf('?1', 'u.groups');
isInstanceOf('u', User::class);
```

**Mathematical functions**
```php
sum(a, b)
diff(a, b)
prod(a, b)
quot(a, b)
```

**Pseudo functions**
```php
in('u.id', array(1, 2, 3));
notIn('u.id', array(4, 5, 6));
like('u.username', $qb->expr->literal('Jean%'));
notLike('u.username', $qb->expr->literal('Pierre%'));
between('u.age', '18', '65');
```

**Functions**
```php
concat('u.first_name', 'u.last_name')
substring('u.country', 0, 2)
trim('u.username')
lower('u.username'), upper(), length('u.username')

count(), countDistinct()
min(), max(), avg()
abs(), sqrt(), mod()
```

### Low level API

All methods rely on 
```php
$qb->add($dqlPartName, $dqlPart, $append)
```