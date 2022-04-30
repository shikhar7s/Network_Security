# El Gaamal algorithm Implement using python
Basic theory
El Gamal Encryption Algorithm has three parts
      A key generator  
      The encryption algorithm  
     The decryption algorithm

Three parts:
Key Generation:
       The receiver chooses a very large number q and a cyclic group Fq.
       From the cyclic group Fq, he choose any element g and an element a such that gcd(a, q) = 1
       Then computes h = g^a
       The receiver publishes F, h = ga, q, and g as his public key and retain a as private key
Encryption:
       Sender selects an element k from cyclic group F such that gcd(k, q) = 1.
       Then computes p = g^k and s = h^k = g^(a*k).
       Multiply s with M
      Then send the receiver (p, M*s) = (g^k, M*s)
Decryption:
      Receiver calculates s′ = p^a = g^(a*k).
      Receiver divides M*s by s′ to obtain M as s = s′.
