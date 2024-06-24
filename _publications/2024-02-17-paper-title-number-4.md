---
title: "Paper Title Number 4"
collection: publications
permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about fixing template issue #693.'
date: 2024-02-17
venue: 'GitHub Journal of Bugs'
paperurl: 'http://academicpages.github.io/files/paper3.pdf'
citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---

The contents above will be part of a list of publications, if the user clicks the link for the publication than the contents of section will be rendered as a full page, allowing you to provide more information about the paper for the reader. When publications are displayed as a single page, the contents of the above "citation" field will automatically be included below this section in a smaller font.

#### Summer 2024 · CS691-XVIII · Applications of Linear Algebra
##### Course Project loosely based on Miniature 1 and 2 from the book "Thirty-three Miniatures: Mathematical and Algorithmic Applications of Linear Algebra" by Jiřì Matoušek 

###### By Sourabh Warrier & Cherian George

Consider the following sequence,
	$$S_n = a_1S_{n-k} + a_2S_{n-k+1} +... + a_kS_{n-1} \ni a_i \in \mathbb{R}$$
	
Any term is a linear combination of the previous $$k$$ terms and first $$k$$ terms $$S_1$$ to $$S_k$$ are given by the base cases $$b_1$$ to $$b_k$$ of the recursion. Given a set of $$k$$ terms in such a sequence, the process of obtaining subsequent terms can be represented as linear transformation of vectors in $$\mathbb{R}^k$$. Consider the following vectors,

$$v_0 = \begin{bmatrix}
		S_{i+k-1} \\ S_{i+k-2}\\.\\.\\.\\ S_{i}
	\end{bmatrix}$$ and $$v_1 = \begin{bmatrix}
		S_{i+k} \\ S_{i+k-1}\\.\\.\\.\\ S_{i+1}
	\end{bmatrix} \ni v_1 = Av_0$$, where $$A$$ is a linear transformation. The entries of $$A$$ would depend on the coefficients $$a_1$$ to $$a_k$$ specific to the sequence. In this case $$A = \begin{bmatrix}
		a_k & a_{k-1} & a_{k-2} & ... & a_1 \\ 1 & ...& 0 & 0 & 0 \\.\\.\\.\\ 0 & ...& 1 & 0 & 0 \\ 0 & ...& 0 & 1 & 0 \end{bmatrix}$$

 
#### Eigenbasis of $$A$$
The eigenvalues of $$A$$ are the roots of the polynomial $$P(\lambda) = |A - \lambda{I}| = 0$$. Suppose by some means, eigenvalues $$\lambda_1$$ to $$\lambda_k$$ and their corresponding eigenvectors $$\phi_1$$ to $$\phi_k$$ could be obtained. The transformation $$A$$ can be written as $$PDP^{-1}$$, where $$P = \begin{bmatrix}
		\phi_1 & \phi_2 & ... & \phi_k
	\end{bmatrix}$$ and $$D = \begin{bmatrix}
		\lambda_1 & 0 & ... & 0 \\ 0 & \lambda_2 & ... & 0 \\ .\\.\\.\\ 0 & 0 & ... & \lambda_k
	\end{bmatrix}$$. This gives us $$v_n=A^nv_0 = PD^nP^{-1}v_0$$.
	
#### Examples
<video width="640" height="480" controls loop="" muted="" autoplay="">
<source src="https://github.com/math-repo/math-repo.github.io/raw/master/_data/videos/LinearTransformationScene2.mp4">
</video>###### {$$S_n = S_{n-2} + S_{n-1}, \hspace{10 mm}\{S_1 = S_2 = 1\}$$}
$$$$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...$$$$
	The first example we'll look at is the Fibonacci sequence (OEIS \href{https://oeis.org/A000045}{A000045}). From the definition, we have $$a_1 = a_2 = 1$$ and $$S_1 = S_2= 1$$. Therefore, $$A = \begin{bmatrix}
		1 & 1 \\ 1 & 0
	\end{bmatrix}$$, $$v_0 = \begin{bmatrix}
		1 \\ 1
	\end{bmatrix}$$ and $$P(\lambda) = |A - \lambda{I} = 0| \implies \lambda^2 - \lambda -1 = 0$$, giving us $$\lambda_1 = \frac{1+\sqrt{5}}{2}$$ and $$\lambda_2 = \frac{1-\sqrt{5}}{2}$$. With the augmented matrix 
	$$\left[\hspace{-5pt}\begin{array}{cc|c}
		1-\lambda & 1 & 0 \\
		1 & -\lambda & 0
	\end{array}\hspace{-5pt}\right]$$, written in REF as 
	$$\left[\hspace{-5pt}\begin{array}{cc|c}
		1-\lambda & 1 & 0 \\
		0 & \frac{\lambda^2 - \lambda-1}{1-\lambda} & 0
	\end{array}\hspace{-5pt}\right] \implies \phi = \begin{bmatrix}
		1 \\ \lambda-1
	\end{bmatrix}$$. Plugging in $$\lambda_1$$ and $$\lambda_2$$ we find that $$\phi_1 = \begin{bmatrix}
		1 \\ \lambda_1 -1
	\end{bmatrix}$$ and $$\phi_2 = \begin{bmatrix}
		1 \\ \lambda_2 -1
	\end{bmatrix}$$. Here, $$P = \begin{bmatrix}
		1 & 1 \\ \lambda_1 -1 & \lambda_2 -1
	\end{bmatrix}$$, $$D = \begin{bmatrix}
		\lambda_1 & 0 \\ 0 & \lambda_2
	\end{bmatrix}$$ and $$P^{-1} = \frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
		\lambda_2 -1 & -1 \\ 1-\lambda_1 & 1
	\end{bmatrix}$$. Since $$v_n=A^nv_0 = PD^nP^{-1}v_0$$, we look at the first coordinate of $$PD^{n-2}P^{-1}v_0$$ to obtain the $$n^{th}$$ term of the sequence. This gives us $$\begin{bmatrix}
		S_n \\ S_{n-1}
	\end{bmatrix}=\frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
		1 & 1 \\ \lambda_1 -1 & \lambda_2 -1
	\end{bmatrix} \begin{bmatrix}
		\lambda_1^{n-2} & 0 \\ 0 & \lambda_2^{n-2}
	\end{bmatrix}\begin{bmatrix}
		\lambda_2 -1 & -1 \\ 1-\lambda_1 & 1
	\end{bmatrix}\begin{bmatrix}
		1 \\ 1
	\end{bmatrix} = \frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
		\lambda_1^{n-2}(\lambda_2-2) + \lambda_2^{n-2}(2-\lambda_1)\\
		\lambda_1^{n-2}(\lambda_1-1)(\lambda_2-2) + \lambda_2^{n-2}(\lambda_2-1)(2-\lambda_1)
	\end{bmatrix}$$. Extracting $$S_n$$, from where $$S_n = \frac{1}{\lambda_2-\lambda_1}(\lambda_1^{n-2}(\lambda_2-2) + \lambda_2^{n-2}(2-\lambda_1)) = \frac{1}{\lambda_1-\lambda_2}(\lambda_1^{n-2}(\lambda_1+1)-\lambda_2^{n-2}(\lambda_2+1)) \{\because \lambda2 = 1-\lambda_1\}$$. Since from the characteristic equation, $$\lambda +1 = \lambda^2$$, this simplifies to $$\frac{1}{\lambda_1-\lambda_2}(\lambda_1^n-\lambda_2^n)$$. Plugging in the values of $$\lambda_1$$ and $$\lambda_2$$ produces
	$$S_n=\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^n - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^n$$
	
##### {$$S_n = S_{n-2} + 2S_{n-1}, \hspace{10 mm}\{S_1 = S_2 = 1\}$$}
$$1, 1, 3, 7, 17, 41, 99, 239, 577, 1393, ...$$

This is sequence \href{https://oeis.org/A001333}{A001333} in the OEIS. Each term is the sum of twice the previous term and once the term before that. The base cases are identical to that of the Fibonacci sequence. The transformation for this sequence is $$A = \begin{bmatrix}
		2 & 1 \\ 1 & 0
	\end{bmatrix}$$ and the characteristic polynomial $$\lambda^2-2\lambda -1 = 0$$. The eigenvalues and eigenvectors of $$A$$ are $$\lambda_1 = \frac{2 + \sqrt{8}}{2}$$, $$\lambda_2 = \frac{2 - \sqrt{8}}{2}$$, $$\phi_1 = \begin{bmatrix}
		1 \\ \lambda_1-2
	\end{bmatrix}$$ and $$\phi_2 = \begin{bmatrix}
		1 \\ \lambda_2-2
	\end{bmatrix}$$.
	
$$P = \begin{bmatrix}
		1 & 1 \\ \lambda_1 -2 & \lambda_2 -2
	\end{bmatrix}$$, $$D = \begin{bmatrix}
		\lambda_1 & 0 \\ 0 & \lambda_2
	\end{bmatrix}$$ and $$P^{-1} = \frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
		\lambda_2 -2 & -1 \\ 2-\lambda_1 & 1
	\end{bmatrix}$$ and 
	$$\begin{bmatrix}
		S_n \\ S_{n-1}
	\end{bmatrix}=\frac{1}{\lambda_2-\lambda_1}\begin{bmatrix}
		1 & 1 \\ \lambda_1 -2 & \lambda_2 -2
	\end{bmatrix} \begin{bmatrix}
		\lambda_1^{n-2} & 0 \\ 0 & \lambda_2^{n-2}
	\end{bmatrix}\begin{bmatrix}
		\lambda_2 -2 & -1 \\ 2-\lambda_1 & 1
	\end{bmatrix}\begin{bmatrix}
		1 \\ 1
	\end{bmatrix} \implies S_n = \frac{1}{\lambda_2-\lambda_1}(\lambda_1^{n-2}(\lambda_2-3)+\lambda_2^{n-2}(3-\lambda_1)) = \frac{1}{\lambda_1-\lambda_2}(\lambda_1^{n-2}(3-\lambda_2)-\lambda_2^{n-2}(3-\lambda_1))$$, which simplifies to the formula
	$$S_n = \frac{1}{2+\sqrt{8}}\left(1+\sqrt{2}\right)^{n} + \frac{1}{2-\sqrt{8}}\left(1-\sqrt{2}\right)^{n}$$
	
##### {General solution for k = 2}
$$S_n = a_1S_{n-2} + a_2S_{n-1}, \hspace{10 mm}\{S_1 = b_1,S_2 = b_2\}$$
	
In the general case when the $$n^{th}$$ term is a linear combination of the previous two terms with coefficients $$a_1$$ and $$a_2$$ and base cases $$b_1$$ and $$b_2$$, we represent the corresponding transformation by $$A = \begin{bmatrix}
		a_2 & a_1 \\ 1 & 0
	\end{bmatrix}$$. The eigenvalues of $$A$$ are obtained by solving $$\lambda^2-a_2\lambda - a_1 = 0$$, from where $$\lambda_1 = \frac{a_2 + \sqrt{a_2^2+4a_1}}{2}$$ and $$\lambda_2 = \frac{a_2 - \sqrt{a_2^2+4a_1}}{2}$$. Solving $$\left[\hspace{-5pt}\begin{array}{cc|c}
		a_2-\lambda & a_1 & 0 \\
		1 & -\lambda & 0
	\end{array}\hspace{-5pt}\right] \rightsquigarrow \left[\hspace{-5pt}\begin{array}{cc|c}
		a_2-\lambda & a_1 & 0 \\
		0 & \frac{\lambda^2-a_2\lambda-a_1}{a_2-\lambda} & 0
	\end{array}\hspace{-5pt}\right] \implies \phi_1 = \begin{bmatrix}
		1 \\ \frac{\lambda_1-a_2}{a_1}
	\end{bmatrix}$$ and $$\phi_2 = \begin{bmatrix}
		1 \\ \frac{\lambda_2-a_2}{a_1}
	\end{bmatrix}$$. $$P = \begin{bmatrix}
		1 & 1 \\ \frac{\lambda_1-a_2}{a_1} & \frac{\lambda_2-a_2}{a_1}
	\end{bmatrix}$$, $$D = \begin{bmatrix}
		\lambda_1 & 0 \\ 0 & \lambda_2
	\end{bmatrix}$$, and $$P^{-1} = \frac{a_1}{\lambda_2-\lambda_1}\begin{bmatrix}
		\frac{\lambda_2-a_2}{a_1} & -1 \\ \frac{a_2-\lambda_1}{a_1} & 1
	\end{bmatrix}$$. We obtain $$v_{n-2}$$ from the expression 
	
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
	\end{bmatrix}$$,
	from where $$S_n = \frac{a_1}{\lambda_2-\lambda_1}\left(\lambda_1^{n-2}\left(\frac{b_2(\lambda_2-a_2)}{a_1} - b_1\right) + \lambda_2^{n-2}\left(\frac{b_2(a_2-\lambda_1)}{a_1} + b_1\right)\right)$$ 
	
$$= \frac{1}{\lambda_1-\lambda_2}\left(\lambda_1^{n-2}\left(a_1b_1+b_2\lambda_1\right) - \lambda_2^{n-2}\left(a_1b_1+b_2\lambda_2\right)\right)$$. This produces the following formula
	TBC...


