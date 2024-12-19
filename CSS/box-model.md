# CSS Box Model

*[Home](../README.md)* &nbsp; › &nbsp;
*[CSS](./css.md)* &nbsp; › &nbsp;
*[Properties](./properties.md)* &nbsp; › &nbsp;
*Box model*

---

## box-sizing

```css
box-sizing: content-box | border-box;
```

## padding

```css
padding: [ <length> | <percentage> ]{1,4};
/* all, top-bottom left-right, top left-right bottom, top right bottom left */

padding-top: [ <length> | <percentage> ];
padding-right: [ <length> | <percentage> ];
padding-bottom: [ <length> | <percentage> ];
padding-left: [ <length> | <percentage> ];

padding-block: [ <length> | <percentage> ]{1,2};
padding-block-start: [ <length> | <percentage> ];
padding-block-end: [ <length> | <percentage> ];

padding-inline: [ <length> | <percentage> ]{1,2};
padding-inline-start: [ <length> | <percentage> ];
padding-inline-end: [ <length> | <percentage> ];
```

## margin

```css
margin: [ <length> | <percnetage> | auto | anchor-size() ]{1,4};
/* all, top-bottom left-right, top left-right bottom, top right bottom left */

margin-top: [ <length> | <percnetage> | auto | anchor-size() ];
margin-right: [ <length> | <percnetage> | auto | anchor-size() ];
margin-bottom: [ <length> | <percnetage> | auto | anchor-size() ];
margin-left: [ <length> | <percnetage> | auto | anchor-size() ];

margin-block: [ <length> | <percnetage> | auto | anchor-size() ]{1,2};
margin-block-start: [ <length> | <percnetage> | auto | anchor-size() ];
margin-block-end: [ <length> | <percnetage> | auto | anchor-size() ];

margin-inline: [ <length> | <percnetage> | auto | anchor-size() ]{1,2};
margin-inline-start: [ <length> | <percnetage> | auto | anchor-size() ];
margin-inline-end: [ <length> | <percnetage> | auto | anchor-size() ];

margin-trim: /* Limited availability */
    none | [ block || inline ] |
    [ block-start || block-end || inline-start || inline-end ] 
```

## height

```css
height: 
    auto | <length> | <percentage> |
    min-content | max-content | fit-content | 
    stretch /* Non standard */;

min-height: 
    none | <length> | <percentage> |
    min-content | max-content | fit-content; 

max-height: 
    none | <length> | <percentage> |
    min-content | max-content | fit-content; 
```

## width

```css
width:
    auto | <length> | <percentage> |
    min-content | max-content | fit-content |
    stretch /* Non standard */;

min-width: 
    none | <length> | <percentage> |
    min-content | max-content | fit-content; 

max-width: 
    none | <length> | <percentage> |
    min-content | max-content | fit-content; 
```