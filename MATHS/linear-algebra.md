# Linear Algebra

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Maths](./maths.md)* &nbsp; › &nbsp; 
*Matrices*

---

- **Branch of mathematics** that deals with vectors, matrices and linear transformations
- **Key concepts:** Scalars, Vectors, Matrices

## Matrix

A matrix is a **rectangular array of numbers** arranged in **rows** and **columns**.
- Square matrix: $n \times n$ shape
- Diagonal matrix: Filled with zeros except for the top-left/bottom-right diagonal)
- Identity matrix (I): Diagonal matrix of 1s
- Zero matrix: Filled with zeros
- Singular matrix: Has a determinant of 0, i.e. not invertible

### Matrix Operations

```math
\text{Addition (element-wise)} \quad \longrightarrow \quad 
A + B = \begin{bmatrix}A_{11} + B_{11} & A_{12} + B_{12} \\ A_{21} + B_{21} & A_{22} + B_{22} \end{bmatrix}
```

```math
\text{Subtraction (element-wise)} \quad \longrightarrow \quad 
A - B = \begin{bmatrix}A_{11} - B_{11} & A_{12} - B_{12} \\ A_{21} - B_{21} & A_{22} - B_{22} \end{bmatrix}
```

```math
\text{Scalar multiplication} \quad \longrightarrow \quad 
C = \begin{bmatrix} kA_{11} & kA_{12} \\ kA_{21} & kA_{22} \end{bmatrix}
```

```math
\text{Matrix multiplication} \quad \longrightarrow \quad 
C = AB \quad \text{where} \quad C_{ij} = \sum_k A_{ik}B_{kj}
```

```math
\text{Matrix transpose} \quad \longrightarrow \quad 
A^T = A \quad \text{where} \quad A^T_{ij} = A_{ji}
```

### 2D Matrix Transformations


```math
\bold{Scaling} \quad \longrightarrow \quad
S(s_x, s_y) = 
\begin{bmatrix} s_x & 0 & 0 \\ 0 & s_y &0 \\ 0 & 0 & 1 \end{bmatrix}
```

```math
\bold{Rotation} \quad \longrightarrow \quad
R(\theta) =
\begin{bmatrix}
\cos(\theta) & -\sin(\theta) & 0 \\ 
\sin(\theta) & \cos(\theta) & 0 \\
0 & 0 & 1
\end{bmatrix}
```

```math
\bold{Translation} \quad \longrightarrow \quad
T(t_x, t_y) =
\begin{bmatrix}
1 & 0 & t_x \\
0 & 1 & t_y \\
0 & 0 & 1
\end{bmatrix}
```

### Determinant of 2x2 and 3x3 matrices

The determinant of a matrix A is a **scalar value** that provides important informations such as **invertibility** ( $\det(A) \neq 0$ ) and **volume scaling** in transformations.

```math
\text{For a 2D matrix} \; \begin{bmatrix} a & b \\ c & d \end{bmatrix}
\quad
\det(A) = ad - bc
```

```math
\text{For a 3D matrix} \; 
\begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}
\quad
\det(A) = 
a\begin{vmatrix}e & f \\ h & i\end{vmatrix} - 
b\begin{vmatrix}d & f \\ g & i\end{vmatrix} +
c\begin{vmatrix}d & e \\ g & h\end{vmatrix}
```

### Determinant of larger matrices (Laplace Expansion)

```math
det(A) = \sum_{j=1}^{n} (-1)^{i+j}a_{ij} \det(M_{ij})
```

- $a_{ij}$ - The element in the i-th row and j-th column
- $M_{ij}$ - The minor of A for i-th row and j-th column
- $(-1)^{i+j}$ - The cofactor sign

### Matrix inverse

```math
\bold{\text{General equation}} \quad \longrightarrow \quad
AA^{-1} = I
```

```math
\bold{\text{For a 2D matrix}} \quad \longrightarrow \quad
\text{Having} \;
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}
\quad
A^{-1} = \frac{1}{ad - cb}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
```

### Matrix trace

The **trace** of a matrix is the **sum** of the values in its main diagonal. 
- $\text{Tr}(I_n) = n$
- $\text{Tr}(kA) = k \cdot \text{Tr}(A)$
- $\text{Tr}(A + B) = \text{Tr}(A) + \text{Tr}(B)$
- $\text{Tr}(AB) = \text{Tr}(BA)$
- $\text{Tr}(ABC) = \text{Tr}(CAB) = \text{Tr}(BCA) \neq \text{Tr}(ACB)$
- $\text{Tr}(A^T) = \text{Tr}(A)$

```math
\text{Tr}(A) = \sum_{i=1}^{n}A_{ii}
```

### Eigenvalues and Eigenvectors

- Eigenvectors represent directions that remain unchanged under transformations
- Eigenvalues represent the compressing and stretching along those directions

```math
Av = \lambda v
```

```math
\sum \lambda_i = \text{Tr}(A)
```

```math
\prod \lambda_i = \det(A)
```

**Eigenvalue calculation**

```math
Av = \lambda v
```
```math
(A - \lambda I)v = 0
```
```math
det(A - \lambda I) = 0
``` 

**Eigenvector calculation**
```math
(A−λI)v=0
```