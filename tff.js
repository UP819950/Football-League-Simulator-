const { table } = require("console");

const print = x => console.log(x);

function calculateGoalNumber() {

    let score = Math.floor(Math.random() * 3 )  ;
    let uncommonScore = Math.floor(Math.random() * 6)  ;
    let rareScore = Math.floor(Math.random() * 21 )  ;
    let scoreCon = Math.random() ;

    if (scoreCon > 0.999 ) {
         finalScore = rareScore ;
    } else if (scoreCon > 0.85 ){
         finalScore = uncommonScore ;
    } else  {finalScore = score ; }
         return finalScore;
    }

    let premTeams = [];
    let champTeams = [];
    let league1Teams = [];
    let league2Teams = [];

    premTeams.push({ name: "Arsenal", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                         bias: 0.60,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0 } )
    premTeams.push({ name: "Aston Villa", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                  bias: 0.40,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 } )
    premTeams.push({ name: "Brighton", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                       bias: 0.50,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 } )
    premTeams.push({ name: "Burnley", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                         bias: 0.60,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    premTeams.push({ name: "Chelsea", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                         bias: 0.70,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    premTeams.push({ name: "Crystal Palace", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,            bias: 0.50,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    premTeams.push({ name: "Everton", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                         bias: 0.50,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    premTeams.push({ name: "Fulham", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                           bias: 0.50,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    premTeams.push({ name: "leeds United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                bias: 0.50,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    premTeams.push({ name: "Leicester City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,            bias: 0.60,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    premTeams.push({ name: "Liverpool", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                     bias: 0.75,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    premTeams.push({ name: "Manchester City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,          bias: 0.70,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    premTeams.push({ name: "Manchester United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,      bias: 0.70,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    premTeams.push({ name: "Newcastle", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,               bias: 0.40,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    premTeams.push({ name: "Sheffield United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,        bias: 0.60,premierWins : 0 , champWins : 0, league1Wins : 0, league2Wins : 0})
    premTeams.push({ name: "Southampton", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                 bias: 0.50,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    premTeams.push({ name: "Tottenham", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,                     bias: 0.60,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    premTeams.push({ name: "West Bromwich Albion", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.50,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    premTeams.push({ name: "West Ham United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,           bias: 0.40,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    premTeams.push({ name: "Wolverhampton", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.50,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})

    champTeams.push({ name: "Barnsley", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.15,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Birmingham City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.17,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Blackburn Rovers", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.29,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    champTeams.push({ name: "Bournemouth", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.21,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Brentford", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.35,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Bristol City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.27,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Cardiff City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.33,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Coventry City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.21,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Derby County", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.29,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Huddersfield Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.21,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Luton Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.19,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Middlesbrough", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.23,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Millwall", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.31,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Norwich City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.25,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Nottingham Forest", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.33,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    champTeams.push({ name: "Preston North End", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.31,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Queens Park Rangers", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.27,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Reading", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.27,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    champTeams.push({ name: "Rotherham United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.21,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Stoke City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.25,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Swansea City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.33,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Watford", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.25,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    champTeams.push({ name: "Wycombe Wanderers", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.21,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    champTeams.push({ name: "Sheffield Wednesday", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.25,premierWins : 0 , champWins : 0, league1Wins : 0, league2Wins : 0})


    league1Teams.push({ name: "Accrington Stanley", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "AFC Wimbledon", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league1Teams.push({ name: "Blackpool", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Bristol Rovers", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Burton Albion", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league1Teams.push({ name: "Charlton Athletic ", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Crewe Alexandra", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Doncaster Rovers", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Fleetwood Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Gillingham", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Hull City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Ipswich Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Lincoln City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league1Teams.push({ name: "Milton Keynes Dons", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league1Teams.push({ name: "Northampton Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league1Teams.push({ name: "Oxford United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Peterborough United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Plymouth Argyle", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league1Teams.push({ name: "Portsmouth", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Rochdale", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league1Teams.push({ name: "Shrewsbury Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Sunderland", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league1Teams.push({ name: "Swindon Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league1Teams.push({ name: "Wigan Athletic", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })

    league2Teams.push({ name: "Barrow", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Bolton Wanderers", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Bradford City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Cambridge United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Carlisle United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Cheltenham Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Colchester United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Crawley Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Exeter City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Forest Green Rovers", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Grimsby Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.22,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Harrogate Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Leyton Orient", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Mansfield Town", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Morecambe", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Newport County", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0 , champWins : 0, league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Oldham Athletic", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0 , champWins : 0, league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Port Vale", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0 , champWins : 0, league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Salford City", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0 , champWins : 0, league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Scunthorpe United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Southend United", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0 , league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Stevenage", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0 , champWins : 0, league1Wins : 0, league2Wins : 0})
    league2Teams.push({ name: "Tranmere Rovers", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0, champWins : 0, league1Wins : 0, league2Wins : 0 })
    league2Teams.push({ name: "Walsall", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0,             bias: 0.2,premierWins : 0 , champWins : 0, league1Wins : 0, league2Wins : 0})


function match (team1, team2) {

        t1Bias = Math.floor(Math.random() + team1.bias)
        t2Bias = Math.floor(Math.random() + team2.bias)
    
        team1Score = calculateGoalNumber() + t1Bias ;
        team2Score = calculateGoalNumber() + t2Bias ;
    
        result = team1.name + "  " + team1Score + " - " + team2Score + "  " + team2.name; 
        
        //print(result);
    
        team1.goalsFor += team1Score;
        team2.goalsFor += team2Score;
    
        team1.goalsAgainst += team2Score;
        team2.goalsAgainst += team1Score;
       
        team1.goalDifference += (team1Score - team2Score);
        team2.goalDifference += (team2Score - team1Score);
    
        team1.matchesPlayed ++;
        team2.matchesPlayed ++;
    
        if (team1Score > team2Score) {
            team1.points += 3;
            team1.matchesWon ++;
            team2.matchesLost ++;
        } else if (team1Score == team2Score ){
            team1.points += 1; 
            team2.points += 1;
            team1.matchesDrawn ++;
            team2.matchesDrawn ++;
        } else if (team2Score > team1Score) {
            team2.points += 3;
            team2.matchesWon ++;
            team1.matchesLost ++;
        }
    
            //print("\n")
          
    
} 

function simuYears(years) {
for (var s = 0 ; s < years ; s ++ ){

    print(`Premier league :`)
    for (var j = 0 ; j < 20 ; j ++ ){
        for(var i = 0 ; i < 20 ; i ++ ) {
              if ( j == i ) { continue };
         match(premTeams[j],premTeams[i]);
    }
}
    tableOutput();  
    premTable[0].premierWins ++ ;
    


    print(`Championship :`)
    for (var j = 0 ; j < 24 ; j ++ ){
        for(var i = 0 ; i < 24 ; i ++ ) {
              if ( j == i ) { continue };
         match(champTeams[j],champTeams[i]);
    }
}

    champTableOutput();
    champTable[0].champWins ++ ;


    print(`league 1 :`)
    for (var j = 0 ; j < 24 ; j ++ ){
        for(var i = 0 ; i < 24 ; i ++ ) {
              if ( j == i ) { continue };
         match(league1Teams[j],league1Teams[i]);
    }
}

    league1TableOutput()
    league1Table[0].league1Wins ++ ;



    print(`league 2 :`)
    for (var j = 0 ; j < 24 ; j ++ ){
        for(var i = 0 ; i < 24 ; i ++ ) {
              if ( j == i ) { continue };
         match(league2Teams[j],league2Teams[i]);
    }
}

    league2TableOutput()
    league2Table[0].league2Wins ++ ;

    for (var q = 0 ; q < 12 ; q ++ ){
        league2Table[q].bias += 0.01 ;
        league1Table[q].bias += 0.01 ;
        champTable[q].bias += 0.01 ;
    }
    for (var q = 6 ; q < 10 ; q ++ ){
        premTable[q].bias += 0.01 ;
    }

    for (var q = 12 ; q < 24 ; q ++ ){
        
        league1Table[q].bias -= 0.01 ;
        champTable[q].bias -= 0.01 ;
    }
    for (var q = 10 ; q < 20 ; q ++ ){
        premTable[q].bias -= 0.01 ;
    }
   


    premTable[19].bias -= 0.05;
    premRelegation1 = premTable.pop(); 
    premTable[18].bias -= 0.05;
    premRelegation2 = premTable.pop(); 
    premTable[17].bias -= 0.05;
    premRelegation3 = premTable.pop(); 

    champTable[0].bias += 0.05;
    champPromotion1 = champTable.shift();
    champTable[0].bias += 0.05;
    champPromotion2 = champTable.shift();
    champTable[0].bias += 0.05;
    champPromotion3 = champTable.shift();

    champTable[20].bias -= 0.05;
    champRelegation1 = champTable.pop();
    champTable[19].bias -= 0.05;
    champRelegation2 = champTable.pop();
    champTable[18].bias -= 0.05;
    champRelegation3 = champTable.pop();

    league1Table[0].bias += 0.05;
    league1Promotion1 = league1Table.shift();
    league1Table[0].bias += 0.05;
    league1Promotion2 = league1Table.shift();
    league1Table[0].bias += 0.05;
    league1Promotion3 = league1Table.shift();

    league1Table[20].bias -= 0.05;
    league1Relegation1 = league1Table.pop();
    league1Table[19].bias -= 0.05;
    league1Relegation2 = league1Table.pop();
    league1Table[18].bias -= 0.05;
    league1Relegation3 = league1Table.pop();
    league1Table[17].bias -= 0.05;
    league1Relegation4 = league1Table.pop();

    league2Table[0].bias += 0.05;
    league2Promotion1 = league2Table.shift();
    league2Table[0].bias += 0.05;
    league2Promotion2 = league2Table.shift();
    league2Table[0].bias += 0.05;
    league2Promotion3 = league2Table.shift();
    league2Table[0].bias += 0.05;
    league2Promotion4 = league2Table.shift();


    premTable.push(champPromotion1);
    premTable.push(champPromotion2);
    premTable.push(champPromotion3);

    champTable.push(premRelegation1);
    champTable.push(premRelegation2);
    champTable.push(premRelegation3);
    
    champTable.push(league1Promotion1);
    champTable.push(league1Promotion2);
    champTable.push(league1Promotion3);

    league1Table.push(champRelegation1);
    league1Table.push(champRelegation2);
    league1Table.push(champRelegation3);

    league1Table.push(league2Promotion1);
    league1Table.push(league2Promotion2);
    league1Table.push(league2Promotion3);
    league1Table.push(league2Promotion4);

    league2Table.push(league1Relegation1);
    league2Table.push(league1Relegation2);
    league2Table.push(league1Relegation3);
    league2Table.push(league1Relegation4);


    reset();
    champReset();
    league1Reset();
    league2Reset()

}
}
simuYears(2);

sortWinTable = premTable.sort(function(a,b) {
    return b.premierWins - a.premierWins;
})
console.table(premTable, ["name" ,  "premierWins", "champWins", "league1Wins", "league2Wins"]);

sortWinTable = champTable.sort(function(a,b) {
    return b.premierWins - a.premierWins;
})
console.table(champTable, ["name" ,  "premierWins", "champWins", "league1Wins", "league2Wins"]);

sortWinTable = league1Table.sort(function(a,b) {
    return b.premierWins - a.premierWins;
})
console.table(league1Table, ["name" ,  "premierWins", "champWins", "league1Wins", "league2Wins"]);
sortWinTable = league2Table.sort(function(a,b) {
    return b.premierWins - a.premierWins;
})
console.table(league2Table, ["name" ,  "premierWins", "champWins", "league1Wins", "league2Wins"]);


function tableOutput(){
    premTable = premTeams.sort(function(a,b) {
        return b.points - a.points;
    })
    
    console.table(premTeams, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
}
function champTableOutput(){
    champTable = champTeams.sort(function(a,b) {
        return b.points - a.points;
    })
    
    console.table(champTeams, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
}
function league1TableOutput(){
    league1Table = league1Teams.sort(function(a,b) {
        return b.points - a.points;
    })
    
    console.table(league1Teams, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
}
function league2TableOutput(){
    league2Table = league2Teams.sort(function(a,b) {
        return b.points - a.points;
    })
    
    console.table(league2Teams, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
}


function reset()  {
    for ( var i = 0 ; i < 20 ; i++ ){
        premTable[i].points = 0 
        premTable[i].matchesPlayed = 0 
        premTable[i].matchesWon = 0 
        premTable[i].matchesLost = 0 
        premTable[i].matchesDrawn = 0 
        premTable[i].goalsFor = 0 
        premTable[i].goalsAgainst = 0 
        premTable[i].goalDifference = 0 
    }
}
function champReset()  {
    for ( var i = 0 ; i < 24 ; i++ ){
        champTable[i].points = 0 
        champTable[i].matchesPlayed = 0 
        champTable[i].matchesWon = 0 
        champTable[i].matchesLost = 0 
        champTable[i].matchesDrawn = 0 
        champTable[i].goalsFor = 0 
        champTable[i].goalsAgainst = 0 
        champTable[i].goalDifference = 0 
    }
}
function league1Reset() {
    for ( var i = 0 ; i < 24 ; i++ ){
        league1Table[i].points = 0 
        league1Table[i].matchesPlayed = 0 
        league1Table[i].matchesWon = 0 
        league1Table[i].matchesLost = 0 
        league1Table[i].matchesDrawn = 0 
        league1Table[i].goalsFor = 0 
        league1Table[i].goalsAgainst = 0 
        league1Table[i].goalDifference = 0 
    }
}
function league2Reset() {
    for ( var i = 0 ; i < 24 ; i++ ){
        league2Table[i].points = 0 
        league2Table[i].matchesPlayed = 0 
        league2Table[i].matchesWon = 0 
        league2Table[i].matchesLost = 0 
        league2Table[i].matchesDrawn = 0 
        league2Table[i].goalsFor = 0 
        league2Table[i].goalsAgainst = 0 
        league2Table[i].goalDifference = 0 
    }
}


























