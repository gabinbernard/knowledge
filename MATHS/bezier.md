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

## Formulas

```math
B(t) = \sum_{i=0}^{n} \begin{pmatrix}n \\ i\end{pmatrix}(1-t)^{n-i}t^iB_i
```

- $n$ being the control points count
- $P_i$ being the control points

### Bernstein Polynomials

```math
B_{i,n}(t) = \begin{pmatrix}n \\ i\end{pmatrix}(1-t)^{n-i}t^{i}
```

### LERP - Linear Interpolation (Degree 1)

```math
L(t) = (1 - t)P_0 + tP_1 
```

### Quadratic Interpolation (Degree 2)

```math
Q(t) = (1 - t)^2P_0 + 2(1 - t)tP_1 + t^2P_2
```

### Cubic Interpolation (Degree 3)

```math
C(t) = (1 - t)^3P_0 + 3(1 - t)^2tP_1 + 3(1 - t)t^2P_2 + t^3P_3
