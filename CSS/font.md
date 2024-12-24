# Font

```css
font: <system-family-name> | [<font-stretch>] [<font-variant>] [<font-style>] [<font-weight>] <font-size>/[<line-height>] <font-family>
```

- caption
- icon
- menu
- message-box
- small-caption
- status-bar

## Font family

```css
font-family: "with spaces", without;
/* Multiline is correct but not recommanded */
```

- serif
- sans-serif
- monospace
- cursive
- fantasy
- system-ui
- ui-serif
- ui-sans-serif
- ui-monospace
- ui-rounded
- emoji
- math
- fangsong (Chinese characters, often used in government documents)

## Font size

```css
font-size: <absolute-value> | <relative-value> | <length> | <percentage> | <math>;
```

**ABSOLUTE SIZE KEYWORDS**
- xx-small: 60M of medium
- x-small: 75% of medium
- small: 89% of medium
- medim : 100% of medium
- large: 120% of medium
- x-large: 150% of medium
- xx-large: 200% of medium
- xxx-large: 300% of medium

**RELATIVE SIZE KEYWORDS**
- smaller: one size smaller
- larger: one size larger

## Font weight

```css
font-weight: <100-900> | normal | bold | lighter | bolder;
```

- normal : 400
- bold: 700
- lighter : < 100, 400 or 700
- bolder : > 400, 700 or 900

Common names :
- 100 - Thin
- 200 - Extra Light
- 300 - Light
- 400 - Normal
- 500 - Medium
- 600 - Semi Bold
- 700 - Bold
- 800 - Extra Bold
- 900 - Black
- 950 - Extra Black

## Font style

```css
font-style: normal | italic | oblique <angle [-90deg,90deg]>?;
```

## Font stretch

```css
font-stretch: <percentage> | <font-stretch-css3>
```

- ultra-condensed : 50%
- extra-condensed : 62.5%
- condensed : 75%
- semi-condesned : 87.5%
- normal : 100%
- semi-expanded : 112.5%
- expanded : 125%
- extra-expanded : 150%
- ultra-expanded : 200%

## Line height

```css
line-height: normal | <number> | <length> | <percentage>;
```

- Normal = ~1.2 on Desktop, depends on engine
- Number and Percentage = Proportion of font-size

## Font variant

```css
font-variant: normal | none | <everything>;

font-variant-caps: normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps;

font-variant-position: normal | sub | super;

font-variant-emoji: normal | text | emoji | unicode;

font-variant-ligatures: normal | none | common-ligatures | discretionary-ligaturs | historical-ligatures | contextual;

font-variant-numeric: normal | ordinal | slashed-zero | [proportional-nums | tabular-nums] | [lining-nums | oldstyle-nums] | [diagonal-frations | stacked-fractions];

font-variant-alternates: ...;

font-variant-east-asian: ...;
```