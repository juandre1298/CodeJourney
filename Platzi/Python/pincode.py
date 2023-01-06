def get_pins(observed):
    #observed=369
    from itertools import permutations 
    dict={
        '1':['1','2','4'],
        '2':['1','2','3','5'],
        '3':['2','3','6'],
        '4':['1','4','5','7'],
        '5':['2','4','5','6','8'],
        '6':['3','5','6','9'],
        '7':['4','7','8'],
        '8':['5','7','8','9','0'],
        '9':['6','8','9'],
        '0':['0','8']
    }

    v=[dict[observed[i]]for i in range(len(observed))]
    print(v)
    seed=""
    [seed:=seed+str(v[t][0]) for t in range(len(observed))]
    
    x=[]
    # print("c j l k seed")
    c=0
    # for j in range(len(observed)):
    #     print("j: ",j)
    #     for l in range(len(observed)-1,0,-1):
    #             seed=change_in(seed,l,v[l][k])  
    #         for k in range(len(v[l])):
                
    #             c+=1
    #             seed=change_in(seed,l,v[l][k])  
    #             # x.append(seed)
    #             # c+=1
    #             print(c,j,l,k,seed)
    #print(x)
    maxi=1
    [maxi:=len(dict[lengths])*maxi for lengths in observed]
    while c < maxi+1:
        print(c)
        
        c+=1
    

def change_in(string,i,n):
    return string[0:i]+n+string[i+1:]


if __name__ == "__main__":
    get_pins("123")