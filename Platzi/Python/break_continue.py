def run():
    for contador in range(10000):
        # cuando aparece el comando continue hace que el codigo se salte la siguiente linea de codigo.
        if contador % 2 != 0:
            continue
        print(contador)
        if contador == 2000:
            #cuando aparece break se cierra el codigo
            break

    
if __name__ == "__main__":
    run()