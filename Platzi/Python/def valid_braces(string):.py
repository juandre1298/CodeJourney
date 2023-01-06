from re import S


def valid_braces(string):
    x={'(':1,')':-1,'[':2,']':-2,'{':3,'}':-3}
    spl=[x[i] for i in string]
    bp=[0]
    if spl[0] < 0:
        return False
       #breaking point
    if len(spl)==2:
        if spl[0]==-spl[1]:
            return True
        else:
            print("code 01: A 2 caracters are not simetrical")
            return False
    for j in range(len(spl)-1):
        if spl[j]<0 and spl[j+1]>0:
            bp.append(j)
    if bp==[0]:
        bp.append(len(spl)-1)
    for k in range(0,len(bp)-1,2):
        m=(bp[k+1]+1-bp[k])/2
        if m != int(m):
            print("code 02: partition is not even so it can't be properly closed", m)
            return False
        else:
            sub_spl=spl[bp[k]:bp[k+1]+1]
            if valid_braces_2(sub_spl,False):
                pass
            else:
                return False
       ## evaluates if it is palindorome
    return True

       ## evaluates if it is palindorome
def valid_braces_2(spl,v):
    if v ==True:
        x={'(':1,')':-1,'[':2,']':-2,'{':3,'}':-3}
        spl=[x[i] for i in spl]
    m=int((len(spl))/2)
    a=spl[0:m]
    b=[u*-1 for u in spl[m:]]
    b=[b[u] for u in range(m-1,0-1,-1)]
    if a!=b:
        print("code 03: Partition is not simetrical: ",a,spl[m:])
        return False
    else:
        return True


if __name__ == "__main__":
    print(1,valid_braces( "()" ))
    print(2,valid_braces( "(]" ))
    print(3,valid_braces( "[]" ))
    print(4,valid_braces("[(])"))
    print(5,valid_braces( "{}" ))
    print(6,valid_braces( "{}()[]" ))
    print(7,valid_braces( "([{}])" ))
    print(8,valid_braces( "([}{])" ))
    print(9,valid_braces( "{}({})[]" ))
    print(10,valid_braces( "(({{[[]]}}))" ))
    print(11,valid_braces( "(((({{" ))
    print(12,valid_braces( ")(}{][" ))
    print(13,valid_braces( "())({}}{()][][" ))