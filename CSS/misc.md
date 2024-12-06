# Misc

## Style origins

- User-agent origin (*default web browser style*)
- User origin (*style added by user through dev tools or by adding extensions*)
- Author origin (*stylesheets and style attributes*)

Used to track when to stop rolling back when removing styles using `unset` or `revert`.

## all

```css
/* Does not affect unicode-bidi and direction */
all: 
    /* Initial value */
    initial |
    /* Inherited value */
    inherit |
    /* Inherit if inherited by default, if not, initial */
    unset | 
    /* Roll back to previous cascade layer */
    revert |
    /* Roll back to previous cascade layer */
    revert-layer;
```