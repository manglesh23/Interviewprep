const players = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9},
    {number: 10},
    {number: 11}
  ];

  const getPlayerFormation=(players,formation)=>{
    if(formation==="not in use"){
        return [];
     }
     if(formation==="343d"){
        formation="31213";
     } 
     if(formation==="4240"){
        formation="424"
     }

    let a=[];
    a.push([players[0]]);
    let start=1;
    for(let i=0;i<formation.length;i++){
       a.push(players.slice(start,start+Number(formation[i])));
       start=start+Number(formation[i]);
    }
    console.log(a);
  }
  getPlayerFormation(players,"433");

  db.users.find({
    mail: /@example\.com$/, 
    "lastLogin.coord.0": { $gte: -90, $lte: 0 }, 
    "lastLogin.coord.1": { $gte: -180, $lte: 0 }, 
    "unsuccessfulAttempts": { $gte: 1 },
    "activeSessions": {
      $size: { $gte: 2 }, 
      $elemMatch: { duration: { $gte: 8 } } 
    },
    role: { $nin: ["admin", "client"] } 
  });
  
  

  