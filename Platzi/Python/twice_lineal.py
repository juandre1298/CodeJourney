def dbl_linear(n):
    u=[1]
    for x in range(1,n*2):
        if x in u:
            y=2*x+1
            z=3*x+1
            u.append(y)
            u.append(z)
    u.sort()
    print(u)
    if n<=10: 
        return u[n]
    else: 
        return u[n+1]