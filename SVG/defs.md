# SVG - Defs

*[Home](../README.md)* &nbsp; › &nbsp; 
*[SVG](./svg.md)* &nbsp; › &nbsp; 
*Defs*

---

## The defs tag

```xml
<svg ...>
    <defs>
        <!-- SVG Defs -->
    </defs>
</svg>
```

## Gradients

```xml
<linearGradient 
    id="id"
    href="#otherGradient"
    x1="0" x2="200" y1="0" y2="100"
    spreadMethod="<pad | repeat | reflect>"
    gradientUnits="<objectBoundingBox | userSpaceOnUse>"
> ... </linarGradient>

<radialGradient 
    id="id"
    href="#otherGradient"
    cx="100" cy="100" r="50"
    fx="50" fy="50"
    spreadMethod="<pad | repeat | reflect>"
    gradientUnits="<objectBoundingBox | userSpaceOnUse>"
> ... </radialGradient>

<...>
    <stop 
        offset="<number | percentage> = 0" 
        stop-color="<color> = black" 
        stop-opacity="<opacity-value> = 1" 
    />
    <stop offset="0%" stop-color="#000000" />
    <stop offset="100%" stop-color="#ffffff" />
</>
```