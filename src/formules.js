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

  const profit = Number(credit) * Number(taux);
  console.log("Profit:", profit);
  return profit;
}

export function calculateTotalMargin(profit) {
  if (profit === null) {
    return null; // Invalid profit
  }

  const tva = profit * 0.19; // 19% TVA
  const margeTotale = profit + tva;

  console.log("Marge Totale (Profit + TVA):", margeTotale);
  return margeTotale;
}

export function calculateFinancingAmount( duree , salaire) {
  const financement = (salaire*30/100)*duree;
  return financement;
}

export function calculateMonthlyTTC(margeTotale, financement, duree) {
  if (margeTotale === null || financement === null || duree <= 0) {
    console.error("Error: Invalid input values for TTC calculation");
    return null;
  }

  const totalTTC = (margeTotale + financement) / duree;

  console.log("Montant Mensuel TTC:", totalTTC);
  return totalTTC;
}

export function calculateJiddia(credit,montant){
 
  if (credit === null || montant === null) {
    console.error("Error: Invalid input values for jiddia calculation");
    return null;
  }
  const jiddia=credit-montant

  console.log("Marge de bon fin:", jiddia);
  return jiddia;

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
const credit = 50000; // Example credit amount
const jidia = 10000; // Example down payment
const typecredit = "Produit 1: véhicules particuliers de tourisme"; // Correct product name
const client = 'individuel'; // Client type
const duree = 12; // Duration in months

let profit=calculateProfit(credit,typecredit,client)
let marge=calculateTotalMargin(profit)
 console.log("la marge esttt ",marge)

// Execute calculations for given inputs
//let res=executeCalculation(credit, jidia, typecredit, client, duree);
//console.log(res)
