# Text

*[Home](../README.md)* &nbsp; › &nbsp;
*[CSS](./css.md)* &nbsp; › &nbsp;
*[Properties](./properties.md)* &nbsp; › &nbsp;
*Text*

---

## text-transform

```css
text-transform:
    none | capitalized | uppercase | lowercase |
    full-width | full-size-kana | math-auto;
```

## text-align

```css
text-align: 
    start | end | 
    left | right | 
    center | justify | 
    match-parent;
```

## text-align-last

```css
text-align-last: 
    auto | /* Same as text-align, if `justify` => `start` */
    start | end | 
    left | right | 
    center | justify;
```

## direction

```css
direction: ltr | rtl;
```

## text-indent

```css
text-indent: <length> | <percentage> [hanging] [each-line]
```

## vertical-align

```css
vertical-align: 
    baseline | top | middle | bottom | 
    text-top | text-bottom | 
    super | sub;
```

## letter-spacing

```css
letter-spacing:
    normal | /* Lets agent justify text */
    <length>;
```

## word-spacing

```css
word-spacing:
    normal | /* Lets agent justify text */
    <length>;
```

## tab-size

```css
tab-size: <number> | <length>;
```

## hyphens

```css
hyphens: none | manual | auto;
```

## hyphenate-character

```css
hyphenate-character: auto | <string>;
```

## hyphenate-limit-chars

```css
hyphenate-limit-chars: [ auto | <number> ]{1,3}
/* Minimum word length
   Minimum characters before hyphen
   Minimum characters after hyphen */
```

## white-space

```css
white-space: 
    normal | nowrap |
    pre | pre-wrap | pre-line |
    break-spaces;
```

## white-space-collapse

```css
white-space-collapse:
    collapse | preserve | 
    preserve-breaks | preserve-spaces | 
    break-spaces;
```

## word-break

```css
word-break: 
    norman | break-all | keep-all |
    auto-phrase | /*experimental */
    break-word | /* deprecated */
    manual | /* present in specs, not supported */;
```

## line-break (CJK)

```css
line-break: auto | loose | normal | strict | anywhere;
```

## overflow-wrap & word-wrap

```css
overflow-wrap: norman | anywhere | break-word;
```

## text-wrap

```CSS
text-wrap: [ wrap | nowrap ] || [ auto | balance | pretty | stable ];
```

## text-wrap-mode

```CSS
text-wrap-mode: wrap | nowrap;
```

## text-wrap-style

```CSS
text-wrap-style: auto | balance | pretty | stable;
```

## writing-mode

```CSS
writing-mode: 
    horizontal-tb | 
    vertical-rl | vertical-lr |
    sideways-rl | sideways-lr;
```