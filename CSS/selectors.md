# CSS Selectors
 
*[Home](../README.md)* &nbsp; › &nbsp;
*[CSS](./css.md)* &nbsp; › &nbsp;
*Selectors*

---

## Common selectors

```CSS
* { /* Wildcard */ } 
:root { /* Document root */ }
:scope { /* Same as :root in stylesheet, corresponds to element in JS */ }

element {}
.class {}
#id {}
[attribute="value"] {}
[attribute|="exactlyValueOrStartsWithValue-"] {}
[attribute~="containingValueFromWhiteSpaceSeparatedList"] {}
[attribute*="containingValue"] {}
[attribute^="startingWithValue"] {}
[attribute$="endingWithValue"] {}
[attribute="caseInsensitiveValue" i] { /* ASCII Only */ }
[attribute="caseSensitiveValue" s] { /* ASCII Only */ }

#first, #second {}
#all #children {}
#direct > #child {}
#adjacent + #combinator {}
#sibling ~ #combinator {}
```

## Pseudo elements

```CSS
::before {}
::after {}
::first-letter {}
::first-line {}
::cue { /* WebVTT caption elements */ }
::backdrop { /* Entire viewport, directly under element */ }
::selection { /* Not available in Safari */ }
::slotted { /* TODO */ }

/* Experimental elements */
::spelling-error { /* Text spelling error */ }
::grammar-error { /* Text grammar error */ }
::placeholder { /* Input placeholder */ }
::marker { /* List marker */ }
::part { /* TODO */ }
```

## Pseudo classes

```CSS
a:first-child | a:first-of-type {}
a:last-child | a:last-of-type {}
a:nth-child(An+B | odd | even) | a:nth-of-type() {}
a:nth-last-child(An+B | odd | even) | a:nth-last-of-type() {}
a:only-child | a:only-of-type {}

:is (#any, #of, #them) > #child { /* Highest specificity */ } 
:where(#any, #of, #them) > #child { /* 0 specificity */ }
:has(> #child) { /* TODO */ }
:not(#id) {}

:defined   { /* Defined HTML element, including custom elements */ }
:undefined { /* Undefined HTML element */ }

/* Table pseudo classes, not widely supported */

td:nth-col(An+B | odd | even) {}
td:nth-last-col(An+B | odd | even) {}

/* State pseudo-classes */

a:hover         { /* Being hovered */ }
a:focus         { /* Being focused */ }
a:focus-visible { /* Being focused, by keyboard */ }
a:focus-within  { /* Being focused or child of a focused element */ }
a:active        { /* Being clicked by cursor */ }

/* Link pseudo classes */

a:any-link   { /* Any link */ }
a:link       { /* Links not visited yet */ }
a:visited    { /* Visited links */ }
a:local-link { /* Link that points to the same document */ }

/* Misc pseudo classes */

div:target        { /* Corresponds to URI target */ }
div:target-within { /* Corresponds or child of URI target */ }
div:empty         { /* Comments not included */ }
div:fullscreen    { /* When element is in fullscreen mode */ }
div:future()      { /* Works on subtitles, time based effect, idk */ }

/* Input pseudo-classes */

#input:valid             { /* Valid input */ }
#input:invalid           { /* INvalid inputs */ }
#input:required          { /* Required fields */ }
#input:optional          { /* Not required fields */ }
#input:enabled           { /* Enabled fields */ }
#input:disabled          { /* Disabled fields */ }
#input:read-only         { /* Read only fields */ }
#input:read-write        { /* Not read only fields */ }
#input:in-range          { /* In range fields */ }
#input:out-of-range      { /* Out of range fields */ }
#input:default           { /* Default element fields */ }
#input:placeholder-shown { /* Fields that have shown placeholder */ }
#input:indeterminate     { /* Indeterminate field state */ }
#input:blank             { /* Empty input elements, IN DEVELOPMENT, AVOID USING IT */ }
#input:-moz-ui-invalid   { /* Invalid elements, non standard */ }

/* Shadow DOM elements */

:host         { /* TODO */ }
:host-context { /* TODO */ } 

/* Page pseudo-classes */

@page :first {}
@page :last  {}
@page :left  {}
@page :right {}
```