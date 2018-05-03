const items = [
  {
    text: "Bourse&nbsp;étudiante",
    subtitle:"CROUS",
    icon: "/benefitsIcons/1-crous.png"
  },
  {
    text: "Aide&nbsp;au&nbsp;logement&nbsp;-&nbsp;APL&nbsp;/&nbsp;ALS",
    subtitle:"CAF",
    icon: "/benefitsIcons/2-caf-apl.jpg"
  },
  {
    text: "Aide&nbsp;à&nbsp;l\"installation&nbsp;-&nbsp;AILE",
    subtitle:"Ville&nbsp;de&nbsp;Paris",
    icon: "/benefitsIcons/3-mairie-de-paris.png"
  },
  {
    text: "Bourse&nbsp;au&nbsp;mérite&nbsp;",
    subtitle:"Région&nbsp;Ile-de-France",
    icon: "/benefitsIcons/4-ille-de-france.png"
  },
  {
    text: "Aide&nbsp;complémentaire&nbsp;santé",
    subtitle:"Assurance&nbsp;maladie",
    icon: "/benefitsIcons/5-acs.png"
  },
  {
    text: "Revenu&nbsp;de&nbsp;Solidarité&nbsp;Active&nbsp;-&nbsp;RSA",
    subtitle:"CAF",
    icon: "/benefitsIcons/6-rsa.png"
  },
  {
    text: "Chèque&nbsp;Energie",
    subtitle:"Etat",
    icon: "/benefitsIcons/7-cheque-energie.jpg"
  },
  {
    text: "Allocation&nbsp;personnes&nbsp;âgées&nbsp;-&nbsp;ASPA",
    subtitle:"CNAV",
    icon: "/benefitsIcons/8-aspa.jpg"
  },
  {
    text: "Allocation&nbsp;de&nbsp;solidarité&nbsp;spécifique",
    subtitle:"Pôle&nbsp;Emploi",
    icon: "/benefitsIcons/9-pole-emploi-ass.jpg"
  },
  {
    text: "Pass&nbsp;culture",
    subtitle:"Etat",
    icon: "/benefitsIcons/10-pass-culture.png"
  },
  {
    text: "Allocation&nbsp;aux&nbsp;adultes&nbsp;handicapés",
    subtitle:"CAF&nbsp;-&nbsp;AAH",
    icon: "/benefitsIcons/11-aah.jpg"
  }
]


export function getRandomItem(){
  return items[parseInt(Math.random()*items.length)]
}