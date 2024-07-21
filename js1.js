let t=  prompt("inserisci la temperatura da -10 a 30")
console.log(t);

switch (t) {
    case t<20:
        console.log("non ci sono piu’ le mezze stagioni");
        break;
      case t>=30:
        console.log("lu mare, lu sole, lu ientu");
        break;
    case t<30:
        console.log("mi dia una peroni sudata”")
        break;
    case t<0:
        console.log("non e’ tanto il freddo quanto l’umidità");
        break;
    case t<10:
        console.log("copriti…ancora ti raffreddi");
        break;
    default:
        console.log("nulla");
}