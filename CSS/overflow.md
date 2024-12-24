# Overflow

*[Home](../README.md)* &nbsp; › &nbsp;
*[CSS](./css.md)* &nbsp; › &nbsp;
*[Properties](./properties.md)* &nbsp; › &nbsp;
*Overflow*

---

## overflow (shorthand)

```css
overflow: [
            visible /* Not clipped, may be visible outside */ |
            hidden /* Clipped by padding block, not scrolalble, accessible programmatically */ |
            clip /* Clipped by overflow-clip-margin, no scrolling at all */
            scroll /* Clipped by padding block, scrollbar always shown */
            auto /* Clipped by padding block, scrollbar if overflow */
          ]{1,2};
```

## overflow-x, overflow-y, overflow-block, overflow-inline

```css
overflow-x:      visible | hidden | clip | scroll | auto;
overflow-y:      ...;
overflow-block:  ... /* /!\ Limited */;
overflow-inline: ... /* /!\ Limited */;
```

## overflow-clip-margin

```css
overflow-clip-margin: /* /!\ Limited */;
    [ content-box | padding-box | border-box ] || <length>;
```

## text-overflow

```css
text-overflow: clip | ellipsis | <string> /* /!\ Limited */;
```

