# PSR 1 - Basic coding standards

## Files
- **Only** use `<?php ?>` and `<?= ?>` tags
- **Only** use UTF-8 **without** BOM
- Should declare symbols **OR** execute logic with side effects **(NOT BOTH)**

## Classnames and Class (+ interfaces & traits) Constants, Properties and Methods
- **Class names** : StudlyCase (must follow PSR-0/PSR-4, PHP >=5.3 should use formal namespace)
- **Constants** : SNAKE_UPPERCASE
- **Properties** : StudlyCaps, camelCase or under_score (should be consistent)
- **Methods** : camelCase