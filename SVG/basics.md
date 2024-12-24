# SVG - The basics

*[Home](../README.md)* &nbsp; › &nbsp; 
*[SVG](./svg.md)* &nbsp; › &nbsp; 
*Basics*

---

## Basic template

```xml
<svg 
    xmlns="http://www.w3.org/2000/svg"
    width="200" 
    height="200" 
    viewBox="0 0 200 200"
>
    <!-- Your SVG content here -->
</svg>
```

## Shapes

```xml
<rect x="10" y="10" width="10" height="10" />

<circle cx="10" cy="10" r="40" />

<ellipse cx="10" cy="10" rx="10" ry="10" />

<line x1="10" y1="10" x2="20" y2="20" />

<polyline points="10,10 10,20 20,20 20,10" />

<polygon points="10,10 10,20 20,20 20,10" />

<path
    d=""
/>

<...
    fill="<color>"
    stroke="<color>"
    stroke-width="<length>"
/>
```