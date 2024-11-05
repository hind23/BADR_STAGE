import React, { useState } from 'react';

const terms = [
  { term: 'TTC :', definition: 'Toutes Taxes Comprises : Le montant final d\'une transaction après application de toutes les taxes.' },
  { term: 'Marge :', definition: 'Différence entre le prix de vente d\'un produit/service et son coût d\'achat ou de production.' },
  { term: 'Montant de Financement :', definition: 'Somme d’argent accordée dans le cadre d’un crédit ou d’un prêt, destinée à financer un projet spécifique.' },
  { term: 'TVA :', definition: 'Taxe sur la Valeur Ajoutée : Impôt indirect perçu sur la consommation des biens et services.' },
  { term: 'Capital :', definition: 'Montant initial investi ou prêté, pouvant rapporter des intérêts.' },
  { term: 'Amortissement :', definition: 'Répartition du coût d’un actif sur sa durée de vie pour réduire progressivement son montant comptable.' },
  { term: 'Intérêts :', definition: 'Montant payé pour l’utilisation d’un capital emprunté.' },
  { term: 'Coût d’Acquisition :', definition: 'Somme totale investie pour acquérir un bien ou un service.' },
  { term: 'Solvabilité :', definition: 'Capacité d’une entreprise ou d’un individu à honorer ses dettes à court et long terme.' },
  { term: 'Encours de Crédit :', definition: 'Somme totale de crédit restant à rembourser.' },
  { term: 'Remboursement Anticipé :', definition: 'Paiement du crédit avant l’échéance prévue.' },
  { term: 'Liquidité :', definition: 'Capacité d’un actif à être converti en liquidités rapidement sans perte de valeur significative.' },
  { term: 'Bilan :', definition: 'Document comptable résumant la situation financière d’une entreprise, y compris ses actifs, passifs et capitaux propres.' },
  { term: 'Cash Flow :', definition: 'Flux de trésorerie disponible, représentant les entrées et sorties de liquidités.' },
  { term: 'ROI :', definition: 'Retour sur Investissement : Mesure de la rentabilité d\'un investissement.' },
  { term: 'Dividende :', definition: 'Partie des bénéfices d’une entreprise distribuée aux actionnaires.' },
  { term: 'Fonds Propres :', definition: 'Capital propre d\'une entreprise, incluant les apports des propriétaires et les bénéfices non distribués.' },
  { term: 'Dette :', definition: 'Obligation financière contractée par une entreprise ou un individu, devant être remboursée à l’échéance.' },
  { term: 'Profit :', definition: 'Gain financier résultant des revenus après déduction des coûts.' },
  { term: 'Actifs Circulants :', definition: 'Actifs liquides ou facilement convertibles en liquidités, tels que les stocks et les créances.' },
  { term: 'Passifs :', definition: 'Obligations financières d’une entreprise, représentant ses dettes et engagements.' },
  { term: 'Bénéfice Net :', definition: 'Revenu total restant après déduction de toutes les dépenses, y compris les impôts et les intérêts.' },
  { term: 'Actif Immobilisé :', definition: 'Bien possédé par l’entreprise et destiné à être utilisé sur le long terme, comme les équipements ou les immeubles.' },
  { term: 'Effet de Levier :', definition: 'Utilisation de la dette pour accroître le potentiel de rendement d’un investissement.' },
  { term: 'Fonds de Roulement :', definition: 'Ressources financières disponibles pour financer les opérations courantes d’une entreprise.' },
  { term: 'Provision :', definition: 'Somme d\'argent mise de côté pour couvrir des dépenses futures anticipées.' },
  { term: 'Capacité d\'Endettement :', definition: 'Montant maximal de dette qu\'un individu ou une entreprise peut emprunter sans risquer de défaillance.' },
  { term: 'Ratio de Liquidité :', definition: 'Mesure de la capacité d’une entreprise à couvrir ses dettes à court terme avec ses actifs circulants.' },
  { term: 'Taux d\'Intérêt :', definition: 'Pourcentage appliqué sur un capital emprunté, représentant le coût de l’emprunt pour l’emprunteur.' },
  { term: 'Produit Net Bancaire :', definition: 'Marge réalisée par une banque, représentant la différence entre les revenus et les coûts des opérations bancaires.' }
];

export const Definitions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = terms.filter(t =>
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-amber-100 min-h-screen mt-12">
      <h1 className="text-2xl font-bold mb-4">Définitions Financières :</h1>
      <input
        type="text"
        placeholder="Rechercher un terme..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <ul>
        {filteredTerms.map((t, index) => (
          <li key={index} className="mb-4">
            <h2 className="font-semibold text-lg">{t.term}</h2>
            <p>{t.definition}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
