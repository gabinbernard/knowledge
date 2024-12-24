# Variables

*[Home](../README.md)* &nbsp; › &nbsp;
*[CSS](./css.md)* &nbsp; › &nbsp;
*Variables*

---

## Custom variables

```css
/* Define variable */
#id { --var: <value>; }

/* Use variable */
property: var(--var, <fallback-value>);
```

## Environment variables

```css
/* Used to add margins to rounded viewports */
env(safe-area-inset-top, <fallback-value>);
env(safe-area-inset-right, <fallback-value>);
env(safe-area-inset-bottom, <fallback-value>);
env(safe-area-inset-left, <fallback-value>);

/* Useful for PWA using window-controls-overlay display override */
env(titlebar-area-x, <fallback-value>);
env(titlebar-area-y, <fallback-value>);
env(titlebar-area-width, <fallback-value>);
env(titlebar-area-height, <fallback-value>);

/* Virtual on-screen keyboard */
env(keyboard-inset-top, <fallback-value>);
env(keyboard-inset-right, <fallback-value>);
env(keyboard-inset-bottom, <fallback-value>);
env(keyboard-inset-left, <fallback-value>);
env(keyboard-inset-width, <fallback-value>);
env(keyboard-inset-height, <fallback-value>);
```