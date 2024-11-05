export const age_min = 18;
export const age_max = 70;
export const credit_min = 100000;
export const credit_max = 99000000;
export const SNMG = 20000;
export const revenu_min = 1.5 * SNMG;

export const Produits = [
  {
    nom: "Produit 1: véhicules particuliers de tourisme",
    duree_max: 60,
    taux_p_indiv: 0.075,
    taux_p_badr: 0.03,
    taux_p_ent_conv: 0.065,
  },
  {
    nom: "Produit 2: cycles et tricycles à moteur",
    duree_max: 60,
    taux_p_indiv: 0.075,
    taux_p_badr: 0.03,
    taux_p_ent_conv: 0.065,
  },
  {
    nom: "Produit 3: informatique, téléphonie, électroménager, téléviseurs, meubles, accessoires en bois, tissus d'ameublement",
    duree_max: 36,
    taux_p_indiv: 0.0725,
    taux_p_badr: 0.03,
    taux_p_ent_conv: 0.065,
  },
];

export function getProductRate(typecredit, client) {
  const produit = Produits.find((p) => p.nom === typecredit);

  if (!produit) {
    console.error(`Produit non trouvé: ${typecredit}`);
    return null; // Return null to indicate error
  }

  switch (client) {
    case 'Individu':
      return produit.taux_p_indiv;
    case 'Personnel de la BADR':
      return produit.taux_p_badr;
    case 'Entreprise conventionnée':
      return produit.taux_p_ent_conv;
    default:
      console.error(`Type non valide: ${client}`);
      return null;
  }
}

export function calculateProfit(credit, typecredit, client) {
  const taux = getProductRate(typecredit, client);

  if (taux === null) {
    return null; // Invalid product or type
  }

  const profit = credit * taux;
  return profit;
}

export function calculateTotalMargin(profit) {
  if (profit === null) {
    return null; // Invalid profit
  }

  const tva = profit * 0.19; // 19% TVA
  const margeTotale = profit + tva;

  console.log("Marge Totale (Profit + TVA):", margeTotale);
  return Math.round(margeTotale);
}

export function calculateMaxFinancingAmount( duree , salaire) {
  const financement = (salaire*30/100)*duree;
  return financement;
}

export function calculateFinancingAmount(financementmax,credit,jiddia){
  let montant ;
  if (credit>=financementmax){montant=financementmax-jiddia
}else{
    montant=credit-jiddia
  }
 return Number(montant);
}

export function calculateMonthlyTTC(margeTotale, financement, duree) {
  if (margeTotale === null || financement === null || duree <= 0) {
    console.error("Error: Invalid input values for TTC calculation");
    return null;
  }
  const totalTTC = (margeTotale + financement) / duree;

  return Math.round(totalTTC);
}

export function calculateJiddia(credit, montant, jiddia) {
  // Vérification des paramètres
  console.log("calculate jiddia ::::::::::::::::::::::",credit,montant,jiddia)
  if (typeof credit !== "number" || isNaN(credit)) {
    console.error("Erreur: Le paramètre 'credit' n'est pas un nombre valide.");
    return "Erreur: 'credit' n'est pas un nombre.";
  }

  if (typeof Number(montant) !== "number" || isNaN(montant)) {
    console.error("Erreur: Le paramètre 'montant' n'est pas un nombre valide.");
    return "Erreur: 'montant' n'est pas un nombre.";
  }

  if (typeof jiddia !== "number" || isNaN(jiddia)) {
    console.error("Erreur: Le paramètre 'jiddia' n'est pas un nombre valide.");
    return "Erreur: 'jiddia' n'est pas un nombre.";
  }
  if(jiddia>=credit){
    console.error("vous n'avaez pas besoin de faire le credit!")
  }else{ // Calcul de la marge de bon fin
    if (jiddia >= credit - montant) {
      console.log("Marge de bon fin:", jiddia);
      return jiddia;
    } else {
      const jiddiafin = credit - montant;
      console.log("Marge de bon fin:", jiddiafin);
      return jiddiafin;
    }}
}


export function executeCalculation(credit, jidia, productName, type, duree) {
  const profit = calculateProfit(credit, productName, type);
  if (profit === null) {
    return; // Exit early on error
  }

  const margeTotale = calculateTotalMargin(profit);
  if (margeTotale === null) {
    return; // Exit early on error
  }

  const financement = calculateFinancingAmount(credit, jidia);
  if (financement === null) {
    return; // Exit early on error
  }

  const montantMensuelTTC = calculateMonthlyTTC(margeTotale, financement, duree);
  if (montantMensuelTTC !== null) {
    console.log("Final Monthly Payment (TTC):", montantMensuelTTC);
  }
}

// Example data
const credit = 2000000; // Example credit amount
const jiddia = 10000; // Example down payment
const typecredit = "Produit 1: véhicules particuliers de tourisme"; // Correct product name
const client = 'individuel'; // Client type
const duree = 36; // Duration in months
const salaire=60000;
let montant=calculateFinancingAmount(calculateMaxFinancingAmount(duree,salaire,credit,jiddia),credit,jiddia)
console.log("le montant de financement est :",montant)
let jed=calculateJiddia(credit,montant,jiddia)
console.log("hamish el jiddia est",jed)

// Execute calculations for given inputs
//let res=executeCalculation(credit, jidia, typecredit, client, duree);
//console.log(res)
