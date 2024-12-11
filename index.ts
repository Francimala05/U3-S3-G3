console.log("1) Spiegazione generica TypeScript")
console.log("TypeScript è un open source sviluppato da Microsoft. E' come se fosse un JavaScript potenziato. Serve ad avere una tipizzazione statica.  Risolve il problema dell'assenza di tipo. Richiede compilazione JS.TypeScript è ottimo per progetti molto grandi perchè previene gli errori.")
console.log("2) Perchè è necessario il compilatore TS?")
console.log("Il ts è importante perche transpila il codice TypeScript in JavaScript. Si installa globalmente tramite npm install -g typescript")
console.log("3) Che cos'è la Type Inference?")
console.log("E' l'interferenza di tipo, il compilatore deduce automaticamente il tipo senza dichiararlo esplicitamente.")
console.log("4) Che cos'è il tipo 'any'?")
console.log("Evitarlo quando possibile! Usare any elimina i vantaggi di TypeScript. Meglio sconosciuto. ")
console.log("5) Che cos'è il tipo 'Union'?")
console.log("Un tipo Union consente a una variabile di  avere più tipi possibili come dice appunto il nome.Si definisce col simbolo | ")
console.log("6) Le interfacce in TS")

interface Persona {
    nome: string;
    cognome: string;
    eta: number;
    coniugata: boolean;
}


console.log({
        nome: "Francesco",
        cognome: "Malafronte",
        eta: 20,
        coniugata: false
    })

    


