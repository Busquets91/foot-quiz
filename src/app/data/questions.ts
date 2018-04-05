const questions = [
  {
    question: "Qui a gagné la coupe du monde 2006 ?",
    answers: [
      { answer: "Allemagne", isTrue: false },
      { answer: "France", isTrue: false },
      { answer: "Brésil", isTrue: false },
      { answer: "Italie", isTrue: true }
    ]
  },
  {
    question: "Qui a gagné la coupe du monde 2014 ?",
    answers: [
      { answer: "Allemagne", isTrue: true },
      { answer: "Argentine", isTrue: false },
      { answer: "Angleterre", isTrue: false },
      { answer: "Algérie", isTrue: false }
    ]
  },
  {
    question: "Qui a gagné la coupe du monde 2010 ?",
    answers: [
      { answer: "Espagne", isTrue: true },
      { answer: "Pays-Bas", isTrue: false },
      { answer: "Brésil", isTrue: false },
      { answer: "Italie", isTrue: false }
    ]
  },
  {
    question: "Qui a gagné la coupe du monde 2002 ?",
    answers: [
      { answer: "Brésil", isTrue: true },
      { answer: "Allemagne", isTrue: false },
      { answer: "France", isTrue: false },
      { answer: "Espagne", isTrue: false }
    ]
  },
  {
    question: "Qui a gagné la coupe du monde 1998 ?",
    answers: [
      { answer: "France", isTrue: true },
      { answer: "Allemagne", isTrue: false },
      { answer: "Brésil", isTrue: false },
      { answer: "Italie", isTrue: false }
    ]
  },
  {
    question: "Qui a gagné l'euro 2016 ?",
    answers: [
      { answer: "Portugal", isTrue: true },
      { answer: "France", isTrue: false },
      { answer: "Allemagne", isTrue: false },
      { answer: "Islande", isTrue: false }
    ]
  },
  {
    question: "Qui a gagné l'euro 2012 ?",
    answers: [
      { answer: "Espagne", isTrue: true },
      { answer: "Italie", isTrue: false },
      { answer: "Allemagne", isTrue: false },
      { answer: "Portugal", isTrue: false }
    ]
  },
  {
    question: "Qui a gagné l'euro 2008 ?",
    answers: [
      { answer: "Espagne", isTrue: true },
      { answer: "Russie", isTrue: false },
      { answer: "Allemagne", isTrue: false },
      { answer: "Italie", isTrue: false }
    ]
  },
  {
    question: "De combien de joueurs se compose une équipe de football ?",
    answers: [
      { answer: "11 joueurs", isTrue: true },
      { answer: "8 joueurs", isTrue: false },
      { answer: "12 joueurs", isTrue: false },
      { answer: "10 joueurs", isTrue: false }
    ]
  },
  {
    question: "Combien de minutes dure une mi-temps dans un match de foot ?",
    answers: [
      { answer: "45 minutes", isTrue: true },
      { answer: "5 minutes", isTrue: false },
      { answer: "15 minutes", isTrue: false },
      { answer: "10 minutes", isTrue: false }
    ]
  },
  {
    question: "Quel club a remporté la Ligue des champions 2005-2006 ?",
    answers: [
      { answer: "FC Barcelone", isTrue: true },
      { answer: "Milan AC", isTrue: false },
      { answer: "Bayern de Munich", isTrue: false },
      { answer: "Inter Milan", isTrue: false }
    ]
  },
  {
    question: "Quel numéro portai Zinedine Zidane dans l'équipe de France ?",
    answers: [
      { answer: "Le 10", isTrue: true },
      { answer: "Le 14", isTrue: false },
      { answer: "Le 1", isTrue: false },
      { answer: "Le 12", isTrue: false }
    ]
  },
  {
    question: "Quelle éqiupe a été 5 fios championne du monde (jusqu'en 2006) ?",
    answers: [
      { answer: "Brésil", isTrue: true },
      { answer: "Argentine", isTrue: false },
      { answer: "Allemagne", isTrue: false },
      { answer: "Espagne", isTrue: false }
    ]
  },
  {
    question: "Laquelle de ces équipes ne participait pas à la Coupe du monde 2006 ?",
    answers: [
      { answer: "Cameroun", isTrue: true },
      { answer: "Côte d'Ivoire", isTrue: false },
      { answer: "Italie", isTrue: false },
      { answer: "Portugal", isTrue: false }
    ]
  },
  {
    question: "Où se déroulait la Coupe du monde 2002 ?",
    answers: [
      { answer: "Corée du Sud/Japon", isTrue: true },
      { answer: "Belgique", isTrue: false },
      { answer: "Allemagne", isTrue: false },
      { answer: "Autriche/Suisse", isTrue: false }
    ]
  },
  {
    question: "Dans quel groupe se trouvait la France durant la Coupe du monde 2014 ?",
    answers: [
      { answer: "Groupe E", isTrue: true },
      { answer: "Groupe H", isTrue: false },
      { answer: "Groupe A", isTrue: false },
      { answer: "Groupe C", isTrue: false }
    ]
  },
  {
    question: "Qui a remporté le première Coupe du Monde ?",
    answers: [
      { answer: "Uruguay", isTrue: true },
      { answer: "Brésil", isTrue: false },
      { answer: "Hongrie", isTrue: false },
      { answer: "Allemagne", isTrue: false }
    ]
  },
  {
    question: "Dans quel club Nicolas Anelka n'a-t-il pas joué  ?",
    answers: [
      { answer: "Middlesbrough", isTrue: true },
      { answer: "Arsenal", isTrue: false },
      { answer: "Manchester City", isTrue: false },
      { answer: "Liverpool", isTrue: false }
    ]
  },
  {
    question: "Quel est le seul gardien de but à avoir reçu le Ballon d'Or France Football ?",
    answers: [
      { answer: "Lev Yachine", isTrue: true },
      { answer: "Fabien Barthez", isTrue: false },
      { answer: "Gianluigi Buffon", isTrue: false },
      { answer: "Dino Zoff", isTrue: false }
    ]
  },
  {
    question: "Comment s'appelle l'ancien stade des Girondins de Bordeaux ?",
    answers: [
      { answer: "Parc Lescure", isTrue: true },
      { answer: "Stadium Municipal", isTrue: false },
      { answer: "Stade Alain Giresse", isTrue: false },
      { answer: "Stade de l'Abbé Deschamps", isTrue: false }
    ]
  },
  {
    question: "Combien Youri Djorkaeff a-t-il marqué de but en équipe de France ?",
    answers: [
      { answer: "28", isTrue: true },
      { answer: "17", isTrue: false },
      { answer: "30", isTrue: false },
      { answer: "35", isTrue: false }
    ]
  },
  {
    question: "De quelle couleur est le maillot de l'équipe de Palerme ?",
    answers: [
      { answer: "Rose", isTrue: true },
      { answer: "Rayé bleu et blanc", isTrue: false },
      { answer: "Rayé rouge et blanc", isTrue: false },
      { answer: "Orange", isTrue: false }
    ]
  },
  {
    question: "Quel club est surnommé le 'sous-marin jaune' ?",
    answers: [
      { answer: "Villareal", isTrue: true },
      { answer: "Nantes", isTrue: false },
      { answer: "Charlton", isTrue: false },
      { answer: "Borussia Dortmund", isTrue: false }
    ]
  },
  {
    question: "Avec quelle équipe Josip Skoblar a inscrit 44 buts en une saison ?",
    answers: [
      { answer: "Marseille", isTrue: true },
      { answer: "Sochaux", isTrue: false },
      { answer: "Le Havre", isTrue: false },
      { answer: "Bordeaux", isTrue: false }
    ]
  },
  {
    question: "Quelle équipe est surnommée les 'lions de la Teranga'",
    answers: [
      { answer: "Sénégal", isTrue: true },
      { answer: "Maroc", isTrue: false },
      { answer: "Cameroun", isTrue: false },
      { answer: "Mali", isTrue: false }
    ]
  },
  {
    question: "Quelle est la nationalité de Eidur Gudjohnsen ?",
    answers: [
      { answer: "Islandaise", isTrue: true },
      { answer: "Norvégienne", isTrue: false },
      { answer: "Danoise", isTrue: false },
      { answer: "Finlandaise", isTrue: false }
    ]
  },
  {
    question: "Comment le joueur qui termine 1er du classement des buteurs en Espagnee est-il appelé ?",
    answers: [
      { answer: "Pichichi", isTrue: true },
      { answer: "Serial Buteur", isTrue: false },
      { answer: "Pied d'or", isTrue: false },
      { answer: "Goleador", isTrue: false }
    ]
  },
  {
    question: "Quel joueur a marqué contre son camp lors du match Allemagne-Portugal, au mondial 2006 ?",
    answers: [
      { answer: "Armando Petit", isTrue: true },
      { answer: "Luis Figo", isTrue: false },
      { answer: "Bastian Schweinsteiger", isTrue: false },
      { answer: "Torsten Frings", isTrue: false }
    ]
  },
  {
    question: "Quel etait l'équipementier de l'Olympique Lyonnais en 2006 ?",
    answers: [
      { answer: "Umbro", isTrue: true },
      { answer: "Adidas", isTrue: false },
      { answer: "Puma", isTrue: false },
      { answer: "Nike", isTrue: false }
    ]
  },
  {
    question: "Dans quelle équipe Hernan Crespo n'a-t-il jamais évolué ?",
    answers: [
      { answer: "Juventus", isTrue: true },
      { answer: "Inter Milan", isTrue: false },
      { answer: "Milan AC", isTrue: false },
      { answer: "Parme", isTrue: false }
    ]
  }
]

export default questions
