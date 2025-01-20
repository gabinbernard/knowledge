# SVG - Animations

*[Home](../README.md)* &nbsp; › &nbsp; 
*[SVG](./svg.md)* &nbsp; › &nbsp; 
*Animations*

---

## animate

```xml
<animate 
    attributeName="<attr>"
    values="<semicolon separated values>"
    from ="..." to="..." by="..."
    dur="<clock-value> | media | indefinite"
    repeatCount="<number> | indefinite"
/>
```

## animateMotion

```xml
<animateMotion
    dur="<clock-value> | media | indefinite"
    repeatCount="<number> | indefinite"
    path="<path>"
/>
```

## animateTransform

```xml
<animateTransform
    attributeName="transform"
    attributeType="XML"
    type="translate | scale | rotate | skewX | skewY"
    from="..." to="..." by="..."
    dur="<clock-value> | media | indefinite"
    repeatCount="<number> | indefinite"
/>
```