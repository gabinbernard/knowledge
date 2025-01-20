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
- **Convex hull :** The curve lies in the convex hull of its control points

Affine invariance

## Degree of the curve (n points)

- Linear - 2 points
- Quadratic - 3 points
- Cubic - 4 points

## Formulas

### LERP - Linear Interpolation

```math
L(t) = (1 - t)P_0 + tP_1 
```
### Bernstein Polynomials

```math
B_{i,n}(t) = \begin{pmatrix}n \\ i\end{pmatrix}(1-t)^{n-i}t^{i}
```