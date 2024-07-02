---
permalink: /
title: "Fibonacci Numbers, Quickly"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

##### Course Project loosely based on Miniature 1 and 2 from the book "Thirty-three Miniatures: Mathematical and Algorithmic Applications of Linear Algebra" by Jiřì Matoušek 

###### By Sourabh Warrier & Cherian George

<center>
<video width="640" height="480" controls loop muted="" autoplay>
<source src="https://github.com/math-repo/math-repo.github.io/raw/master/_data/videos/Intro.mp4">
</video>
</center>


##  Linear recurrence relations


Given below is the general form of a linear homogeneous recurrence relation. \\
$$S_n = a_kS_{n-1} + a_{k-1}S_{n-2} +... + a_1S_{n-k} \ni a_i \in \mathbb{R}$$

Any term is a linear combination of the previous $$k$$ terms and first $$k$$ terms $$S_1$$ to $$S_k$$ are given by the initial values $$b_1$$ to $$b_k$$. Given a set of $$k$$ terms in such a sequence, the process of obtaining subsequent terms can be represented as a linear transformation of vectors in $$\mathbb{R}^k$$. Consider the following vectors.

<br/>

$$v_{i-1} = \begin{bmatrix}
S_{i+k-1} \\ S_{i+k-2}\\.\\.\\.\\ S_{i}
\end{bmatrix}$$ and $$v_{i} = \begin{bmatrix}
S_{i+k} \\ S_{i+k-1}\\.\\.\\.\\ S_{i+1}
\end{bmatrix} \ni v_1 = Av_0$$, where $$A$$ is a linear transformation.

<br/>

The entries of $$A$$ would depend on the coefficients $$a_1$$ to $$a_k$$ from the sequence. 
<br/><br/>

For this to be true, $$A = \begin{bmatrix}
a_k & a_{k-1} & a_{k-2} & ... & a_1 \\ 1 & ...& 0 & 0 & 0 \\.\\.\\.\\ 0 & ...& 1 & 0 & 0 \\ 0 & ...& 0 & 1 & 0 \end{bmatrix}$$

###  Eigenbasis of $$A$$
The eigenvalues of $$A$$ are the roots of the polynomial $$P(\lambda) = |A - \lambda{I_k}| = 0$$. Using the eigenvalues of $$A$$, $$\lambda_1$$ to $$\lambda_k$$ and their corresponding eigenvectors $$\phi_1$$ to $$\phi_k$$, the transformation $$A$$ can be written as $$PDP^{-1}$$, where
<br/><br/>

$$P = \begin{bmatrix}
\phi_1 & \phi_2 & ... & \phi_k
\end{bmatrix}$$ and $$D = \begin{bmatrix}
\lambda_1 & 0 & ... & 0 \\ 0 & \lambda_2 & ... & 0 \\ .\\.\\.\\ 0 & 0 & ... & \lambda_k
\end{bmatrix}$$.
<br/><br/>

This gives us $$v_n=A^nv_0 = PD^nP^{-1}v_0$$.

##  Examples

###  {$$S_n = S_{n-2} + S_{n-1}, \hspace{10 mm}\{S_1 = S_2 = 1\}$$}
<br/>
$$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...$$
<br/>
The first example we'll look at is the Fibonacci sequence [OEIS](https://oeis.org/A000045}{A000045}). From the definition, we have $$a_1 = a_2 = 1$$ and $$S_1 = S_2= 1$$. Therefore, $$A = \begin{bmatrix}
1 & 1 \\ 1 & 0
\end{bmatrix}$$, $$v_0 = \begin{bmatrix}
1 \\ 1
\end{bmatrix}$$ and

<br/>

$$P(\lambda) = |A - \lambda{I_2}| = 0 \implies \lambda^2 - \lambda -1 = 0$$, giving us $$\lambda_1 = \frac{1+\sqrt{5}}{2}$$ and $$\lambda_2 = \frac{1-\sqrt{5}}{2}$$. Solving for $$\lambda$$ and $$\phi$$,
$$\left[\hspace{-5pt}\begin{array}{cc|c}
	1-\lambda & 1 & 0 \\
	1 & -\lambda & 0
\end{array}\hspace{-5pt}\right] \rightsquigarrow
\left[\hspace{-5pt}\begin{array}{cc|c}
	1-\lambda & 1 & 0 \\
	0 & \frac{\lambda^2 - \lambda-1}{1-\lambda} & 0
\end{array}\hspace{-5pt}\right] \implies \phi = \begin{bmatrix}
1 \\ \lambda-1
\end{bmatrix}$$Plugging in $$\lambda_1$$ and $$\lambda_2$$, we find that $$\phi_1 = \begin{bmatrix}
1 \\ \lambda_1 -1
\end{bmatrix}$$ and $$\phi_2 = \begin{bmatrix}
1 \\ \lambda_2 -1
\end{bmatrix}$$. Here, $$P = \begin{bmatrix}
1 & 1 \\ \lambda_1 -1 & \lambda_2 -1
\end{bmatrix}\text{,}\hspace{2mm} D = \begin{bmatrix}
\lambda_1 & 0 \\ 0 & \lambda_2
\end{bmatrix}\hspace{2mm} \text{and}\hspace{2mm} P^{-1} = \frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
\lambda_2 -1 & -1 \\ 1-\lambda_1 & 1
\end{bmatrix}$$Since $$v_n=A^nv_0 = PD^nP^{-1}v_0$$, we look at the first coordinate of $$PD^{n-2}P^{-1}v_0$$ to obtain the $$n^{th}$$ term of the sequence. This gives us, $$\begin{bmatrix}
S_n \\ S_{n-1}
\end{bmatrix}=\frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
1 & 1 \\ \lambda_1 -1 & \lambda_2 -1
\end{bmatrix} \begin{bmatrix}
\lambda_1^{n-2} & 0 \\ 0 & \lambda_2^{n-2}
\end{bmatrix}\begin{bmatrix}
\lambda_2 -1 & -1 \\ 1-\lambda_1 & 1
\end{bmatrix}\begin{bmatrix}
1 \\ 1
\end{bmatrix}$$ $$= \frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
\lambda_1^{n-2}(\lambda_2-2) + \lambda_2^{n-2}(2-\lambda_1)\\
\lambda_1^{n-2}(\lambda_1-1)(\lambda_2-2) + \lambda_2^{n-2}(\lambda_2-1)(2-\lambda_1)
\end{bmatrix}$$Extracting $$S_n$$, $$S_n = \frac{1}{\lambda_2-\lambda_1}(\lambda_1^{n-2}(\lambda_2-2) + \lambda_2^{n-2}(2-\lambda_1))$$ $$= \frac{1}{\lambda_1-\lambda_2}(\lambda_1^{n-2}(\lambda_1+1)-\lambda_2^{n-2}(\lambda_2+1)) \{\because \lambda2 = 1-\lambda_1\}$$Since from the characteristic equation, $$\lambda +1 = \lambda^2$$, this simplifies to $$\frac{1}{\lambda_1-\lambda_2}(\lambda_1^n-\lambda_2^n)$$. Plugging in the values of $$\lambda_1$$ and $$\lambda_2$$ produces
$$S_n=\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^n - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^n$$

#####  {$$S_n = S_{n-2} + 2S_{n-1}, \hspace{10 mm}\{S_1 = S_2 = 1\}$$}
$$1, 1, 3, 7, 17, 41, 99, 239, 577, 1393, ...$$
This is sequence [A001333](https://oeis.org/A001333) in the OEIS, closely related to the [Pell Numbers](https://oeis.org/A000129). Each term is the sum of twice the previous term and once the term before that. The base cases are identical to that of the Fibonacci sequence. The transformation for this sequence is $$A = \begin{bmatrix}
2 & 1 \\ 1 & 0
\end{bmatrix}$$ and the characteristic polynomial $$\lambda^2-2\lambda -1 = 0$$. The eigenvalues and eigenvectors of $$A$$ are $$\lambda_1 = \frac{2 + \sqrt{8}}{2}$$, $$\lambda_2 = \frac{2 - \sqrt{8}}{2}$$, $$\phi_1 = \begin{bmatrix}
1 \\ \lambda_1-2
\end{bmatrix}$$ and $$\phi_2 = \begin{bmatrix}
1 \\ \lambda_2-2
\end{bmatrix}$$.

$$P = \begin{bmatrix}
	1 & 1 \\ \lambda_1 -2 & \lambda_2 -2
\end{bmatrix} \text{,} \hspace{2mm}D = \begin{bmatrix}
	\lambda_1 & 0 \\ 0 & \lambda_2
\end{bmatrix} \hspace{2mm}\text{and}\hspace{2mm} P^{-1} = \frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
	\lambda_2 -2 & -1 \\ 2-\lambda_1 & 1
\end{bmatrix}$$
$$\implies \begin{bmatrix}
	S_n \\ S_{n-1}
\end{bmatrix}=\frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
	1 & 1 \\ \lambda_1 -2 & \lambda_2 -2
\end{bmatrix} \begin{bmatrix}
	\lambda_1^{n-2} & 0 \\ 0 & \lambda_2^{n-2}
\end{bmatrix}\begin{bmatrix}
	\lambda_2 -2 & -1 \\ 2-\lambda_1 & 1
\end{bmatrix}\begin{bmatrix}
	1 \\ 1
\end{bmatrix}$$ $$\implies S_n = \frac{1}{\lambda_2-\lambda_1}(\lambda_1^{n-2}(\lambda_2-3)+\lambda_2^{n-2}(3-\lambda_1))$$ $$= \frac{1}{\lambda_1-\lambda_2}(\lambda_1^{n-2}(3-\lambda_2)-\lambda_2^{n-2}(3-\lambda_1))$$ which simplifies to the following formula.
$$S_n = \frac{1}{2+\sqrt{8}}\left(1+\sqrt{2}\right)^{n} + \frac{1}{2-\sqrt{8}}\left(1-\sqrt{2}\right)^{n}$$


#####  {$$S_n = S_{n-2} + mS_{n-1}$$}

Varying the coefficient of $$S_{n-1}$$ produces different sequences characterized by the following transformation.

$$A = \begin{bmatrix}
	m & 1\\1 & 0
\end{bmatrix}$$

The eigenvalues of $$A$$ are the roots to the equation $$\lambda^2-m\lambda-1 = 0$$, with $$\lambda = \frac{m \pm \sqrt{m^2+4}}{2}$$. The positive root to these equations are known as the metallic means and they have the following general form.

$$\varphi_m = \frac{m+\sqrt{m^2+4}}{2}$$

When the first metallic mean (golden ratio) corresponds to the case $$m = 1$$. The mean so obtained from example 1.3.2 is the silver ratio. Although there isn't any formal nomenclature, the general consensus is that the third metallic is called the bronze ratio, followed by copper and nickel and so on.

#####  {General solution for second order recurrence relations}
$$S_n = a_1S_{n-2} + a_2S_{n-1}, \hspace{10 mm}\{S_1 = b_1,S_2 = b_2\}$$

In the general case when the $$n^{th}$$ term is a linear combination of the previous two terms with coefficients $$a_1$$ and $$a_2$$ and base cases $$b_1$$ and $$b_2$$, we represent the corresponding transformation by $$A = \begin{bmatrix}
a_2 & a_1 \\ 1 & 0
\end{bmatrix}$$. The eigenvalues of $$A$$ are obtained by solving $$\lambda^2-a_2\lambda - a_1 = 0$$, from where $$\lambda_1 = \frac{a_2 + \sqrt{a_2^2+4a_1}}{2}$$ and $$\lambda_2 = \frac{a_2 - \sqrt{a_2^2+4a_1}}{2}$$. Solving $$\left[\hspace{-5pt}\begin{array}{cc|c}
a_2-\lambda & a_1 & 0 \\
1 & -\lambda & 0
\end{array}\hspace{-5pt}\right]$$ $$\rightsquigarrow \left[\hspace{-5pt}\begin{array}{cc|c}
a_2-\lambda & a_1 & 0 \\
0 & \frac{\lambda^2-a_2\lambda-a_1}{a_2-\lambda} & 0
\end{array}\hspace{-5pt}\right] \implies \phi_1 = \begin{bmatrix}
1 \\ \frac{\lambda_1-a_2}{a_1}
\end{bmatrix} \text{and} \phi_2 = \begin{bmatrix}
1 \\ \frac{\lambda_2-a_2}{a_1}
\end{bmatrix}$$
$$P = \begin{bmatrix}
1 & 1 \\ \frac{\lambda_1-a_2}{a_1} & \frac{\lambda_2-a_2}{a_1}
\end{bmatrix}\text{,}\hspace{2mm} D = \begin{bmatrix}
\lambda_1 & 0 \\ 0 & \lambda_2
\end{bmatrix}, \hspace{2mm}\text{and} \hspace{2mm}P^{-1} = \frac{a_1}{\lambda_2-\lambda_1}\begin{bmatrix}
\frac{\lambda_2-a_2}{a_1} & -1 \\ \frac{a_2-\lambda_1}{a_1} & 1
\end{bmatrix}$$ We obtain $$v_{n-2}$$ from the expression. 

$$\begin{bmatrix}
S_n \\ S_{n-1}
\end{bmatrix}=\frac{a_1}{\lambda_2-\lambda_1}\begin{bmatrix}
1 & 1 \\ \frac{\lambda_1-a_2}{a_1} & \frac{\lambda_2-a_2}{a_1}
\end{bmatrix} \begin{bmatrix}
\lambda_1^{n-2} & 0 \\ 0 & \lambda_2^{n-2}
\end{bmatrix}\begin{bmatrix}
\frac{\lambda_2-a_2}{a_1} & -1 \\ \frac{a_2-\lambda_1}{a_1} & 1
\end{bmatrix}\begin{bmatrix}
b_2 \\ b_1
\end{bmatrix}$$
from where $$S_n = \frac{a_1}{\lambda_2-\lambda_1}\left(\lambda_1^{n-2}\left(\frac{b_2(\lambda_2-a_2)}{a_1} - b_1\right) + \lambda_2^{n-2}\left(\frac{b_2(a_2-\lambda_1)}{a_1} + b_1\right)\right)$$ 

$$= \frac{1}{\lambda_1-\lambda_2}\left(\lambda_1^{n-2}\left(a_1b_1+b_2\lambda_1\right) - \lambda_2^{n-2}\left(a_1b_1+b_2\lambda_2\right)\right)$$ 


This produces the following formula

$$S_n = \left(\frac{2a_1b_1+a_2b_2+b_2\sqrt{a_2^2+4a_1}}{2\sqrt{a_2^2+4a_1}}\right)\left(\frac{a_2+\sqrt{a_2^2+4a_1}}{2}\right)^{n-2}$$

$$\hspace{6 mm}-\left(\frac{2a_1b_1+a_2b_2-b_2\sqrt{a_2^2+4a_1}}{2\sqrt{a_2^2+4a_1}}\right)\left(\frac{a_2-\sqrt{a_2^2+4a_1}}{2}\right)^{n-2}$$

####  {Higher order sequences}
#####  {$$S_n = S_{n-3} + S_{n-2} + S_{n-1}, \hspace{10 mm}\{S_1 = S_2 = 0, S_3 = 1\}$$}
$$0, 0, 1, 1, 2, 4, 7, 13, 24, 44, ...$$

This is often referred to as the Tribonacci sequence [OEIS](https://oeis.org/A000073}{A000073}). With some care, it is possible to repeat the above method to obtain a closed form for this sequence as well. Unlike the previous examples, complex numbers make their debut in this example. We quickly go through much of the same steps as before.

$$A = \begin{bmatrix}
1 & 1 & 1\\ 1 & 0 & 0\\ 0 & 1 & 0
\end{bmatrix}, A-\lambda{I} = \left[\hspace{-5pt}\begin{array}{ccc|c}
1-\lambda & 1 & 1 & 0\\0 & -\lambda & 0 & 0\\ 0 & 1 & -\lambda & 0
\end{array}\hspace{-5pt}\right]$$

$$\rightsquigarrow \left[\hspace{-5pt}\begin{array}{ccc|c}
1-\lambda & 1 & 1 & 0\\0 & \frac{\lambda^2-\lambda-1}{1-\lambda} & \frac{1}{\lambda-1} & 0\\ 0 & 0 & \frac{-\lambda^3+\lambda^2+\lambda+1}{\lambda^2-\lambda-1} & 0
\end{array}\hspace{-5pt}\right]\implies \phi = \begin{bmatrix}
1 \\ \frac{1}{\lambda} \\ \frac{\lambda^2-\lambda-1}{\lambda}
\end{bmatrix}$$

$$P = \begin{bmatrix}
1 & 1 & 1\\ \frac{1}{\lambda_1} & \frac{1}{\lambda_2} & \frac{1}{\lambda_3} \\ \frac{\lambda_1^2-\lambda_1-1}{\lambda_1} & \frac{\lambda_2^2-\lambda_2-1}{\lambda_2} & \frac{\lambda_3^2-\lambda_3-1}{\lambda_3}
\end{bmatrix}, D = \begin{bmatrix}
\lambda_1 & 0 & 0 \\ 0 & \lambda_2 & 0 \\ 0 & 0 & \lambda_3
\end{bmatrix}$$

The eigenvalues are the roots of $$\lambda^3-\lambda^2-\lambda-1 = 0$$, whose approximate values are $$\lambda_1 = 1.839286$$, $$\lambda_2 = -0.419643 + 0.606290i$$ and $$\lambda_3 = -0.419643 - 0.606290i$$. Substituting these values in the equation $$\begin{bmatrix}
S_n \\ S_{n-1} \\ S_{n-2}
\end{bmatrix} = A^{n-3}v_0 = PD^{n-3}P^{-1}v_0$$, we have

$$\begin{bmatrix}
S_n \\ S_{n-1} \\ S_{n-2}
\end{bmatrix} \approxeq \begin{bmatrix}
1 & 1 & 1\\
0.543689 & -0.771845 - 1.115143i & -0.771845 + 1.115143i\\
0.295598 &  -0.647799 + 1.721433i & -0.647799 - 1.721433i
\end{bmatrix}$$

$$\times \begin{bmatrix}
1.839287^{n-3} & 0 &         0\\
0 & (-0.419643 + 0.606291i)^{n-3} & 0\\
0 & 0 & (-0.419643 - 0.606291i)^{n-3}
\end{bmatrix}$$

$$\times \begin{bmatrix}
0.618420 & 0.519032 & 0.336228\\
0.190790 - 0.018701i & -0.259516 + 0.142222i & -0.168114 - 0.198324i\\
0.190790 + 0.018701i & -0.259516 - 0.142222i & -0.168114 + 0.198324i
\end{bmatrix}\begin{bmatrix}
1\\0\\0
\end{bmatrix}$$


from where
$$S_n \approxeq 0.618420\times(1.839287)^{n-3}$$
$$+ (0.190790 - 0.018701i)\times(-0.419643 + 0.606291i)^{n-3}$$ 
$$+ (0.190790 + 0.018701i)\times(-0.419643 - 0.606291i)^{n-3}$$

#####  {$$S_n = 3S_{n-1} -3S_{n-2} + S_{n-3}, \hspace{10 mm}\{S_1 = 1, S_2 = 4, S_3 = 9\}$$} 

Another example of a third order sequence is the squares of natural numbers. The choice of coefficients follows from

$$(n+1)^2 = n^2 + 2n + 1$$
$$(n-1)^2 = n^2  -2n +1$$
$$(n-2)^2 = n^2-4n +4$$
$$\implies n^2 + 2n + 1 = n^2-4n +4 - 3n^2  +6n -3+3n^2$$
$$= (n^2-4n +4) - 3(n^2  -2n +1)+3(n^2)$$
$$= (n-2)^2 - 3(n-1)^2+3n^2$$

With $$S_n = n^2$$,
$$S_n = 3S_{n-1} -3S_{n-2} + S_{n-3}$$

The sequence of cubes of natural numbers is one of order 4. 

