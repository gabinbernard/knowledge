# Bezier Curves

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Maths](./maths.md)* &nbsp; › &nbsp; 
*Beziers*

---

- **Bezier curves :** Parametric curves (parameters [0;1]), widely used in computer graphics 
- **Control points :** Points that define the shape of the curve
The curve smoothly interpolates between control points based on t
- **Control polygon :** Polygon formed by connecting the sequence of control points
- **Endpoints :** First and last points
- **Bernstein Polynomials :** Blending functions
- **Convex hull :** The curve lies inside the convex hull of its control points

## Bezier Curve Formulas

**Standard Bezier Curve**
```math
B(t) = \sum_{i=0}^{n} B_{i,n}(t) \cdot P_i
```

**Rational Bezier Curve**
```math
B(t) = \frac{\sum_{i=0}^{n} B_{i,n}(t) w_i P_i}{\sum_{i=0}^{n} B_{i,n}(t) w_i}
``` 

- $n$ being the control points count - 1
- $P_i$ being the control points
- $B_{i,n}​(t)$ being the Bernstein Basis Polynomials defined by:
```math
B_{i,n}(t) = \begin{pmatrix}n \\ i\end{pmatrix}(1-t)^{n-i}t^{i}
```


### LERP - Linear Interpolation (Degree 1)

```math
L(t) = (1 - t)P_0 + tP_1 
```

```math
L(t) = \frac
{w_0 P_0 (1 - t) + w_1 P_1 t}
{w_0 (1 - t) + w_1 t}
```

### Quadratic Interpolation (Degree 2)

```math
Q(t) = (1 - t)^2P_0 + 2(1 - t)tP_1 + t^2P_2
```

```math
Q(t) = \frac
{w_0 P_0 (1 - t)^2 + w_1 P_1 2(1 - t)t + w_2 P_2 t^2}
{w_0 (1 - t)^2 + w_1 2(1 - t)t + w_2 t^2}
```

### Cubic Interpolation (Degree 3)

```math
C(t) = (1 - t)^3P_0 + 3(1 - t)^2tP_1 + 3(1 - t)t^2P_2 + t^3P_3
```

```math
C(t) = \frac
{w_0 P_0 (1 - t)^3 + w_1 P_1 3(1 - t)^2 t + w_2 P_2 3(1 - t)t^2 + w_3 P_3 t^3}
{w_0 (1 - t)^3 + w_1 3(1 - t)^2 t + w_2 3(1 - t)t^2 + w_3 t^3}
```

## De Casteljau's Algorithm

Given control points $P_0, P_1, ..., P_n$.

```math
P_i^{(k)} = (1 - t)P_i^{(k-1)} + tP_{i+1}^{(k-1)}
```

- $P_i^{(0)}$ - The original control points
- $k$ - Current level of interpolation
- $i$ - Range from $0$ to $n - k$
- $P_0^n$ - The splitting point

### Subcurves

- The left subcurve's control points are $L_i = P_0^{(i)}$
- The right subcurve's control points are $R_i = P_i^{(n-i)}$