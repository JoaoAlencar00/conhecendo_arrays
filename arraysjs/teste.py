def sauda(nome):
    print "Olá," + nome + "!"
    sauda2 (nome)
    print "preparando para dizer tchau..."
    tchau()

    def sauda2 (nome):
        print "como vai" + nome + "?"

    def tchau():
        print "Ok, tchau!" 
    #print em python é uma funçao, mas nesse caso estamos fingindo que não.     