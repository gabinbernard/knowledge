# Linear Systems of Equations

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Maths](./maths.md)* &nbsp; › &nbsp; 
*Linear Systems of Equations*

---

## Cramer's rule

Consider the following system of linear equations in n unknown

```math
\begin{cases}
a_{11}x_{1} + a_{12}x_{2} + \dots + a_{1n}x_{n} = b_{1} \\
a_{21}x_{1} + a_{22}x_{2} + \dots + a_{2n}x_{n} = b_{2} \\
\dots \\
a_{n1}x_{1} + a_{n2}x_{2} + \dots + a_{nn}x_{n} = b_{n}
\end{cases}
```

This system can be written in matrix form as:
```math
AX = B
```

Where:
```math
A =
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \dots & a_{nn}
\end{bmatrix}

\qquad

X =
\begin{bmatrix}
x_1 \\ x_2 \\ \vdots \\ x_n
\end{bmatrix}

\qquad

B = 
\begin{bmatrix}
b_1 \\ b_2 \\ \vdots \\ b_n
\end{bmatrix}
```

If $\det(A) \neq 0$, the system has a unique solution given by
```math
x_i = \frac{\det(A_i)}{\det(A)} \quad \text{for} \; i = 1, 2, 3, \dots, n
```