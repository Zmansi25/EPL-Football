var myApp = angular.module('infoApp', ['ngRoute','ui.bootstrap']); 

myApp.controller('mainController',['$http','$q','$scope','$routeParams',function($http,$q,$scope, $routeParams){
 
   //Declaring variables to calculate total score of individual team
   $scope.total_1 = 0;
   $scope.total_2 = 0;
   $scope.total_3 = 0;
   $scope.total_4 = 0;
   $scope.total_5 = 0;
   $scope.total_6 = 0;
   $scope.total_7 = 0;
   $scope.total_8 = 0;
   $scope.total_9 = 0;
   $scope.total_10 = 0;
   $scope.total_11 = 0;
   $scope.total_12 = 0;
   $scope.total_13 = 0;
   $scope.total_14 = 0;
   $scope.total_15 = 0;
   $scope.total_16 = 0;
   $scope.total_17 = 0;
   $scope.total_18 = 0;
   $scope.total_19 = 0;
   $scope.total_20 = 0;   
   $scope.total_21 = 0;
   $scope.total_22 = 0;
   $scope.total_23 = 0;

   //Declaring variables to calculate number of wins for a particular team
   $scope.man=0;
   $scope.tot=0;
   $scope.bou=0;
   $scope.ast=0;
   $scope.eve=0;
   $scope.wat=0;
   $scope.lei=0;
   $scope.sun=0;
   $scope.nor=0;
   $scope.crys=0;
   $scope.chel=0;
   $scope.swan=0;
   $scope.ars=0;
   $scope.wes=0;
   $scope.new=0;
   $scope.sou=0;
   $scope.sto=0;
   $scope.liv=0;
   $scope.brom=0;
   $scope.manch=0;
   $scope.burn=0;
   $scope.midd=0;
   $scope.hull=0;

   //Declaring variables to calculate number of draws for a particular team

   $scope.man_1=0;
   $scope.tot1=0;
   $scope.bou_1=0;
   $scope.ast_1=0;
   $scope.eve_1=0;
   $scope.wat_1=0;
   $scope.lei_1=0;
   $scope.sun_1=0;
   $scope.nor_1=0;
   $scope.crys_1=0;
   $scope.chel_1=0;
   $scope.swan_1=0;
   $scope.ars_1=0;
   $scope.wes_1=0;
   $scope.new_1=0;
   $scope.sou_1=0;
   $scope.sto_1=0;
   $scope.liv_1=0;
   $scope.brom_1=0;
   $scope.manch_1=0;
   $scope.burn_1=0;
   $scope.midd_1=0;
   $scope.hull_1=0;


   $scope.teams=[]; 
   $scope.match=[];
   $scope.scores=[];
   $scope.wins=[];
   $scope.draws=[];

   //http service to get json data
   var getdayone=$http({
   		method:'GET',
   		url:"https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
   });
   var getdaytwo=$http({
   		method:'GET',
   		url:"https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
   });
   $q.all([getdayone,getdaytwo]).then(function(response) {
   	$scope.dayone=response[0].data;
   	$scope.daytwo=response[1].data;
      $scope.first=response[0].data.rounds;
      $scope.second=response[1].data.rounds;

      $scope.yeardet = $routeParams.yearid;
      $scope.roundsdet = $routeParams.roundsid;
      $scope.whichmatch = $routeParams.guitarID;   
      $scope.teamid=$routeParams.id;


      angular.forEach($scope.dayone.rounds, function(data){
         angular.forEach(data.matches,function(arr){
            $scope.teams.push(arr.team1.name);
            $scope.teams.push(arr.team2.name);

         })
      });
      angular.forEach($scope.daytwo.rounds, function(data){
         angular.forEach(data.matches,function(arr){
            $scope.teams.push(arr.team1.name);
            $scope.teams.push(arr.team2.name);

         })
      });
      $scope.a = _.keys(_.countBy($scope.teams, function(teams) { return teams; }));
      console.log($scope.a);
      $scope.match1=_.countBy($scope.teams, function(teams) { return teams; });  //calculate no. of matches played
      angular.forEach($scope.match1, function(data){
         
            $scope.match.push(data);
         
      });

      //calculate number of matches won and draw for each team.

      angular.forEach($scope.dayone.rounds, function(data){
         angular.forEach(data.matches,function(arr){

            if(arr.team1.name=="Manchester United"){
               $scope.total_1+= arr.score1 ;
               $scope.manutd=$scope.total_1;
               if(arr.score1 > arr.score2){
                  $scope.man+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.man_1+=1;
               }
            }
            if(arr.team2.name=="Manchester United"){
               $scope.total_1+= arr.score2 ;            
               $scope.manutd=$scope.total_1;
               if(arr.score1 < arr.score2){
                  $scope.man+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.man_1+=1;
               }
            }
            if(arr.team1.name=="Tottenham Hotspur"){
               $scope.total_2+= arr.score1 ;
               $scope.tottenham=$scope.total_2;
               if(arr.score1 > arr.score2){
                  $scope.tot+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.tot1+=1;
               }               
            }
            if(arr.team2.name=="Tottenham Hotspur"){
               $scope.total_2+= arr.score2 ;
               $scope.tottenham=$scope.total_2;
               if(arr.score1 < arr.score2){
                  $scope.tot+=1;
               } 
               if(arr.score1 == arr.score2){
                  $scope.tot1+=1;
               }                             
            }            
            if(arr.team1.name=="Bournemouth"){
               $scope.total_3+= arr.score1 ;
               $scope.bournemouth=$scope.total_3;
               if(arr.score1 > arr.score2){
                  $scope.bou+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.bou_1+=1;
               }    
            }
            if(arr.team2.name=="Bournemouth"){
               $scope.total_3+= arr.score2 ;
               $scope.bournemouth=$scope.total_3;
               if(arr.score1 < arr.score2){
                  $scope.bou+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.bou_1+=1;
               }    
            }
            if(arr.team1.name=="Aston Villa"){
               $scope.total_4+= arr.score1 ;
               $scope.astonvilla=$scope.total_4;
               if(arr.score1 > arr.score2){
                  $scope.ast+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.ast_1+=1;
               }
            }
            if(arr.team2.name=="Aston Villa"){
               $scope.total_4+= arr.score2 ;
               $scope.astonvilla=$scope.total_4;
               if(arr.score1 < arr.score2){
                  $scope.ast+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.ast_1+=1;
               }
            }
            if(arr.team1.name=="Everton"){
               $scope.total_5+= arr.score1 ;
               $scope.everton=$scope.total_5;
               if(arr.score1 > arr.score2){
                  $scope.eve+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.eve_1+=1;
               }   
            }
            if(arr.team2.name=="Everton"){
               $scope.total_5+= arr.score2 ;
               $scope.everton=$scope.total_5;
               if(arr.score1 < arr.score2){
                  $scope.eve+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.eve_1+=1;
               }
            }
            if(arr.team1.name=="Watford"){
               $scope.total_6+= arr.score1 ;
               $scope.watford=$scope.total_6;
               if(arr.score1 > arr.score2){
                  $scope.wat+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.wat_1+=1;
               }   
            }
            if(arr.team2.name=="Watford"){
               $scope.total_6+= arr.score2 ;
               $scope.watford=$scope.total_6;
               if(arr.score1 < arr.score2){
                  $scope.wat+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.wat_1+=1;
               }
            }
            if(arr.team1.name=="Leicester City"){
               $scope.total_7+= arr.score1 ;
               $scope.leicester=$scope.total_7;
               if(arr.score1 > arr.score2){
                  $scope.lei+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.lei_1+=1;
               } 
            }
            if(arr.team2.name=="Leicester City"){
               $scope.total_7+= arr.score2 ;
               $scope.leicester=$scope.total_7;
               if(arr.score1 < arr.score2){
                  $scope.lei+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.lei_1+=1;
               }  
            }
            if(arr.team1.name=="Sunderland"){
               $scope.total_8+= arr.score1 ;
               $scope.sunderland=$scope.total_8;
               if(arr.score1 > arr.score2){
                  $scope.sun+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.sun_1+=1;
               }  
            }
            if(arr.team2.name=="Sunderland"){
               $scope.total_8+= arr.score2 ;
               $scope.sunderland=$scope.total_8;
               if(arr.score1 < arr.score2){
                  $scope.sun+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.sun_1+=1;
               } 
            }
            if(arr.team1.name=="Norwich"){
               $scope.total_9+= arr.score1;
               $scope.norwich=$scope.total_9;
               if(arr.score1 > arr.score2){
                  $scope.nor+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.nor_1+=1;
               }    
            }
            if(arr.team2.name=="Norwich"){
               $scope.total_9+= arr.score2 ;
               $scope.norwich=$scope.total_9;
               if(arr.score1 < arr.score2){
                  $scope.nor+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.nor_1+=1;
               } 
            }
            if(arr.team1.name=="Crystal Palace"){
               $scope.total_10+= arr.score1 ;
               $scope.crystalpalace=$scope.total_10;
               if(arr.score1 > arr.score2){
                  $scope.crys+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.crys_1+=1;
               }    
            }
            if(arr.team2.name=="Crystal Palace"){
               $scope.total_10+= arr.score2 ;
               $scope.crystalpalace=$scope.total_10;
               if(arr.score1 < arr.score2){
                  $scope.crys+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.crys_1+=1;
               } 
            }
            if(arr.team1.name=="Chelsea"){
               $scope.total_11+= arr.score1;
               $scope.chelsea=$scope.total_11;
               if(arr.score1 > arr.score2){
                  $scope.chel+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.chel_1+=1;
               }
            }
            if(arr.team2.name=="Chelsea"){
               $scope.total_11+= arr.score2 ;
               $scope.chelsea=$scope.total_11;
               if(arr.score1 < arr.score2){
                  $scope.chel+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.chel_1+=1;
               }
            }
            if(arr.team1.name=="Swansea"){
               $scope.total_12+= arr.score1 ;
               $scope.swansea=$scope.total_12;
               if(arr.score1 > arr.score2){
                  $scope.swan+=1;
               } 
               if(arr.score1 == arr.score2){
                  $scope.swan_1+=1;
               }     
            }
            if(arr.team2.name=="Swansea"){
               $scope.total_12+= arr.score2 ;
               $scope.swansea=$scope.total_12;
               if(arr.score1 < arr.score2){
                  $scope.swan+=1;
               } 
               if(arr.score1 == arr.score2){
                  $scope.swan_1+=1;
               }     
            }
            if(arr.team1.name=="Arsenal"){
               $scope.total_13+= arr.score1 ;
               $scope.Arsenal=$scope.total_13;
               if(arr.score1 > arr.score2){
                  $scope.ars+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.ars_1+=1;
               }   
            }
            if(arr.team2.name=="Arsenal"){
               $scope.total_13+=arr.score2;
               $scope.Arsenal=$scope.total_13;
               if(arr.score1 < arr.score2){
                  $scope.ars+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.ars_1+=1;
               }
            }            
            if(arr.team1.name=="West Ham United"){
               $scope.total_14+= arr.score1 ;
               $scope.westham=$scope.total_14;
               if(arr.score1 > arr.score2){
                  $scope.wes+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.wes_1+=1;
               } 
            }
            if(arr.team2.name=="West Ham United"){
               $scope.total_14+= arr.score2 ;
               $scope.westham=$scope.total_14;
               if(arr.score1 < arr.score2){
                  $scope.wes+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.wes_1+=1;
               }
            }
            if(arr.team1.name=="Newcastle United"){
               $scope.total_15+= arr.score1 ;
               $scope.newcastle=$scope.total_15;
               if(arr.score1 > arr.score2){
                  $scope.new+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.new_1+=1;
               }     
            }
            if(arr.team2.name=="Newcastle United"){
               $scope.total_15+= arr.score2 ;
               $scope.newcastle=$scope.total_15;
               if(arr.score1 < arr.score2){
                  $scope.new+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.new_1+=1;
               }  
            }
            if(arr.team1.name=="Southampton"){
               $scope.total_16+= arr.score1 ;
               $scope.southampton=$scope.total_16;
               if(arr.score1 > arr.score2){
                  $scope.sou+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.sou_1+=1;
               }  
            }
            if(arr.team2.name=="Southampton"){
               $scope.total_16+= arr.score2 ;
               $scope.southampton=$scope.total_16;
               if(arr.score1 < arr.score2){
                  $scope.sou+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.sou_1+=1;
               } 
            }
            if(arr.team1.name=="Stoke City"){
               $scope.total_17+= arr.score1;
               $scope.stoke=$scope.total_17;
               if(arr.score1 > arr.score2){
                  $scope.sto+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.sto_1+=1;
               } 
            }
            if(arr.team2.name=="Stoke City"){
               $scope.total_17+= arr.score2 ;
               $scope.stoke=$scope.total_17;
               if(arr.score1 < arr.score2){
                  $scope.sto+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.sto_1+=1;
               }  
            }
            if(arr.team1.name=="Liverpool"){
               $scope.total_18+= arr.score1 ;
               $scope.liverpool=$scope.total_18;
               if(arr.score1 > arr.score2){
                  $scope.liv+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.liv_1+=1;
               } 
            }
            if(arr.team2.name=="Liverpool"){
               $scope.total_18+= arr.score2 ;
               $scope.liverpool=$scope.total_18;
               if(arr.score1 < arr.score2){
                  $scope.liv+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.liv_1+=1;
               } 
            }
            if(arr.team1.name=="West Bromwich Albion"){
               $scope.total_19+= arr.score1 ;
               $scope.westbrom=$scope.total_19;
               if(arr.score1 > arr.score2){
                  $scope.brom+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.brom_1+=1;
               }  
            }
            if(arr.team2.name=="West Bromwich Albion"){
               $scope.total_19+= arr.score2 ;
               $scope.westbrom=$scope.total_19;
               if(arr.score1 < arr.score2){
                  $scope.brom+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.brom_1+=1;
               } 
            }
            if(arr.team1.name=="Manchester City"){
               $scope.total_20+= arr.score1 ;
               $scope.mancity=$scope.total_20;
               if(arr.score1 > arr.score2){
                  $scope.manch+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.manch_1+=1;
               } 
            }
            if(arr.team2.name=="Manchester City"){
               $scope.total_20+= arr.score2 ;
               $scope.mancity=$scope.total_20;
               if(arr.score1 < arr.score2){
                  $scope.manch+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.manch_1+=1;
               } 
            }

         })
      });
      angular.forEach($scope.daytwo.rounds, function(data){
         angular.forEach(data.matches,function(arr){

            if(arr.team1.name=="Manchester United"){
               $scope.total_1+= arr.score1 ;
               $scope.manutd=$scope.total_1;
               if(arr.score1 > arr.score2){
                  $scope.man+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.man_1+=1;
               }
            }
            if(arr.team2.name=="Manchester United"){
               $scope.total_1+= arr.score2 ;            
               $scope.manutd=$scope.total_1;
               if(arr.score1 < arr.score2){
                  $scope.man+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.man_1+=1;
               }
            }
            if(arr.team1.name=="Tottenham Hotspur"){
               $scope.total_2+= arr.score1 ;
               $scope.tottenham=$scope.total_2;
               if(arr.score1 > arr.score2){
                  $scope.tot+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.tot1+=1;
               }               
            }
            if(arr.team2.name=="Tottenham Hotspur"){
               $scope.total_2+= arr.score2 ;
               $scope.tottenham=$scope.total_2;
               if(arr.score1 < arr.score2){
                  $scope.tot+=1;
               } 
               if(arr.score1 == arr.score2){
                  $scope.tot1+=1;
               }                             
            }            
            if(arr.team1.name=="Bournemouth"){
               $scope.total_3+= arr.score1 ;
               $scope.bournemouth=$scope.total_3;
               if(arr.score1 > arr.score2){
                  $scope.bou+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.bou_1+=1;
               }    
            }
            if(arr.team2.name=="Bournemouth"){
               $scope.total_3+= arr.score2 ;
               $scope.bournemouth=$scope.total_3;
               if(arr.score1 < arr.score2){
                  $scope.bou+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.bou_1+=1;
               }    
            }
            if(arr.team1.name=="Aston Villa"){
               $scope.total_4+= arr.score1 ;
               $scope.astonvilla=$scope.total_4;
               if(arr.score1 > arr.score2){
                  $scope.ast+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.ast_1+=1;
               }
            }
            if(arr.team2.name=="Aston Villa"){
               $scope.total_4+= arr.score2 ;
               $scope.astonvilla=$scope.total_4;
               if(arr.score1 < arr.score2){
                  $scope.ast+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.ast_1+=1;
               }
            }
            if(arr.team1.name=="Everton"){
               $scope.total_5+= arr.score1 ;
               $scope.everton=$scope.total_5;
               if(arr.score1 > arr.score2){
                  $scope.eve+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.eve_1+=1;
               }   
            }
            if(arr.team2.name=="Everton"){
               $scope.total_5+= arr.score2 ;
               $scope.everton=$scope.total_5;
               if(arr.score1 < arr.score2){
                  $scope.eve+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.eve_1+=1;
               }
            }
            if(arr.team1.name=="Watford"){
               $scope.total_6+= arr.score1 ;
               $scope.watford=$scope.total_6;
               if(arr.score1 > arr.score2){
                  $scope.wat+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.wat_1+=1;
               }   
            }
            if(arr.team2.name=="Watford"){
               $scope.total_6+= arr.score2 ;
               $scope.watford=$scope.total_6;
               if(arr.score1 < arr.score2){
                  $scope.wat+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.wat_1+=1;
               }
            }
            if(arr.team1.name=="Leicester City"){
               $scope.total_7+= arr.score1 ;
               $scope.leicester=$scope.total_7;
               if(arr.score1 > arr.score2){
                  $scope.lei+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.lei_1+=1;
               } 
            }
            if(arr.team2.name=="Leicester City"){
               $scope.total_7+= arr.score2 ;
               $scope.leicester=$scope.total_7;
               if(arr.score1 < arr.score2){
                  $scope.lei+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.lei_1+=1;
               }  
            }
            if(arr.team1.name=="Sunderland"){
               $scope.total_8+= arr.score1 ;
               $scope.sunderland=$scope.total_8;
               if(arr.score1 > arr.score2){
                  $scope.sun+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.sun_1+=1;
               }  
            }
            if(arr.team2.name=="Sunderland"){
               $scope.total_8+= arr.score2 ;
               $scope.sunderland=$scope.total_8;
               if(arr.score1 < arr.score2){
                  $scope.sun+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.sun_1+=1;
               } 
            }
            if(arr.team1.name=="Norwich"){
               $scope.total_9+= arr.score1;
               $scope.norwich=$scope.total_9;
               if(arr.score1 > arr.score2){
                  $scope.nor+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.nor_1+=1;
               }    
            }
            if(arr.team2.name=="Norwich"){
               $scope.total_9+= arr.score2 ;
               $scope.norwich=$scope.total_9;
               if(arr.score1 < arr.score2){
                  $scope.nor+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.nor_1+=1;
               } 
            }
            if(arr.team1.name=="Crystal Palace"){
               $scope.total_10+= arr.score1 ;
               $scope.crystalpalace=$scope.total_10;
               if(arr.score1 > arr.score2){
                  $scope.crys+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.crys_1+=1;
               }    
            }
            if(arr.team2.name=="Crystal Palace"){
               $scope.total_10+= arr.score2 ;
               $scope.crystalpalace=$scope.total_10;
               if(arr.score1 < arr.score2){
                  $scope.crys+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.crys_1+=1;
               } 
            }
            if(arr.team1.name=="Chelsea"){
               $scope.total_11+= arr.score1;
               $scope.chelsea=$scope.total_11;
               if(arr.score1 > arr.score2){
                  $scope.chel+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.chel_1+=1;
               }
            }
            if(arr.team2.name=="Chelsea"){
               $scope.total_11+= arr.score2 ;
               $scope.chelsea=$scope.total_11;
               if(arr.score1 < arr.score2){
                  $scope.chel+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.chel_1+=1;
               }
            }
            if(arr.team1.name=="Swansea"){
               $scope.total_12+= arr.score1 ;
               $scope.swansea=$scope.total_12;
               if(arr.score1 > arr.score2){
                  $scope.swan+=1;
               } 
               if(arr.score1 == arr.score2){
                  $scope.swan_1+=1;
               }     
            }
            if(arr.team2.name=="Swansea"){
               $scope.total_12+= arr.score2 ;
               $scope.swansea=$scope.total_12;
               if(arr.score1 < arr.score2){
                  $scope.swan+=1;
               } 
               if(arr.score1 == arr.score2){
                  $scope.swan_1+=1;
               }     
            }
            if(arr.team1.name=="Arsenal"){
               $scope.total_13+= arr.score1 ;
               $scope.Arsenal=$scope.total_13;
               if(arr.score1 > arr.score2){
                  $scope.ars+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.ars_1+=1;
               }   
            }
            if(arr.team2.name=="Arsenal"){
               $scope.total_13+=arr.score2;
               $scope.Arsenal=$scope.total_13;
               if(arr.score1 < arr.score2){
                  $scope.ars+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.ars_1+=1;
               }
            }            
            if(arr.team1.name=="West Ham United"){
               $scope.total_14+= arr.score1 ;
               $scope.westham=$scope.total_14;
               if(arr.score1 > arr.score2){
                  $scope.wes+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.wes_1+=1;
               } 
            }
            if(arr.team2.name=="West Ham United"){
               $scope.total_14+= arr.score2 ;
               $scope.westham=$scope.total_14;
               if(arr.score1 < arr.score2){
                  $scope.wes+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.wes_1+=1;
               }
            }
            if(arr.team1.name=="Newcastle United"){
               $scope.total_15+= arr.score1 ;
               $scope.newcastle=$scope.total_15;
               if(arr.score1 > arr.score2){
                  $scope.new+=1;
               }
               if(arr.score1 == arr.score2){
                  $scope.new_1+=1;
               }     
            }
            if(arr.team2.name=="Newcastle United"){
               $scope.total_15+= arr.score2 ;
               $scope.newcastle=$scope.total_15;
               if(arr.score1 < arr.score2){
                  $scope.new+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.new_1+=1;
               }  
            }
            if(arr.team1.name=="Southampton"){
               $scope.total_16+= arr.score1 ;
               $scope.southampton=$scope.total_16;
               if(arr.score1 > arr.score2){
                  $scope.sou+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.sou_1+=1;
               }  
            }
            if(arr.team2.name=="Southampton"){
               $scope.total_16+= arr.score2 ;
               $scope.southampton=$scope.total_16;
               if(arr.score1 < arr.score2){
                  $scope.sou+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.sou_1+=1;
               } 
            }
            if(arr.team1.name=="Stoke City"){
               $scope.total_17+= arr.score1;
               $scope.stoke=$scope.total_17;
               if(arr.score1 > arr.score2){
                  $scope.sto+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.sto_1+=1;
               } 
            }
            if(arr.team2.name=="Stoke City"){
               $scope.total_17+= arr.score2 ;
               $scope.stoke=$scope.total_17;
               if(arr.score1 < arr.score2){
                  $scope.sto+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.sto_1+=1;
               }  
            }
            if(arr.team1.name=="Liverpool"){
               $scope.total_18+= arr.score1 ;
               $scope.liverpool=$scope.total_18;
               if(arr.score1 > arr.score2){
                  $scope.liv+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.liv_1+=1;
               } 
            }
            if(arr.team2.name=="Liverpool"){
               $scope.total_18+= arr.score2 ;
               $scope.liverpool=$scope.total_18;
               if(arr.score1 < arr.score2){
                  $scope.liv+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.liv_1+=1;
               } 
            }
            if(arr.team1.name=="West Bromwich Albion"){
               $scope.total_19+= arr.score1 ;
               $scope.westbrom=$scope.total_19;
               if(arr.score1 > arr.score2){
                  $scope.brom+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.brom_1+=1;
               }  
            }
            if(arr.team2.name=="West Bromwich Albion"){
               $scope.total_19+= arr.score2 ;
               $scope.westbrom=$scope.total_19;
               if(arr.score1 < arr.score2){
                  $scope.brom+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.brom_1+=1;
               } 
            }
            if(arr.team1.name=="Manchester City"){
               $scope.total_20+= arr.score1 ;
               $scope.mancity=$scope.total_20;
               if(arr.score1 > arr.score2){
                  $scope.manch+=1;
               }   
               if(arr.score1 == arr.score2){
                  $scope.manch_1+=1;
               } 
            }
            if(arr.team2.name=="Manchester City"){
               $scope.total_20+= arr.score2 ;
               $scope.mancity=$scope.total_20;
               if(arr.score1 < arr.score2){
                  $scope.manch+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.manch_1+=1;
               } 
            }
            if(arr.team1.name=="Hull City"){
               $scope.total_21+= arr.score1 ;
               $scope.hullcity=$scope.total_21;
               if(arr.score1 > arr.score2){
                  $scope.hull+=1;
               } 
               if(arr.score1 == arr.score2){
                  $scope.hull_1+=1;
               }  
            }
            if(arr.team2.name=="Hull City"){
               $scope.total_21+= arr.score2 ;
               $scope.hullcity=$scope.total_21;
               if(arr.score1 < arr.score2){
                  $scope.hull+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.hull_1+=1;
               } 
            }
            if(arr.team1.name=="Burnley"){
               $scope.total_22+= arr.score1 ;
               $scope.burnley=$scope.total_22;
               if(arr.score1 > arr.score2){
                  $scope.burn+=1;
               } 
               if(arr.score1 == arr.score2){
                  $scope.burn_1+=1;
               }   
            }
            if(arr.team2.name=="Burnley"){
               $scope.total_22+= arr.score2 ;
               $scope.burnley=$scope.total_22;
               if(arr.score1 < arr.score2){
                  $scope.burn+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.burn_1+=1;
               }  
            }
            if(arr.team1.name=="Middlesbrough"){
               $scope.total_23+= arr.score1 ;
               $scope.mid=$scope.total_23;
               if(arr.score1 > arr.score2){
                  $scope.midd+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.midd_1+=1;
               } 
            }
            if(arr.team2.name=="Middlesbrough"){
               $scope.total_23+= arr.score2 ;
               $scope.mid=$scope.total_23;
               if(arr.score1 < arr.score2){
                  $scope.midd+=1;
               }  
               if(arr.score1 == arr.score2){
                  $scope.midd_1+=1;
               } 
            }

         })
      });   
      

      $scope.scores.push($scope.manutd,$scope.tottenham,$scope.bournemouth,$scope.astonvilla,$scope.everton,$scope.watford,$scope.leicester,$scope.sunderland,$scope.norwich,$scope.crystalpalace,$scope.chelsea,$scope.swansea,$scope.Arsenal,$scope.westham,$scope.newcastle,$scope.southampton,$scope.stoke,$scope.liverpool,$scope.westbrom,$scope.mancity,$scope.hullcity,$scope.burnley,$scope.mid);

      $scope.wins.push($scope.man,$scope.tot,$scope.bou,$scope.ast,$scope.eve,$scope.wat,$scope.lei,$scope.sun,$scope.nor,$scope.crys,$scope.chel,$scope.swan,$scope.ars,$scope.wes,$scope.new,$scope.sou,$scope.sto,$scope.liv,$scope.brom,$scope.manch,$scope.hull,$scope.burn,$scope.midd);

      $scope.draws.push($scope.man_1,$scope.tot1,$scope.bou_1,$scope.ast_1,$scope.eve_1,$scope.wat_1,$scope.lei_1,$scope.sun_1,$scope.nor_1,$scope.crys_1,$scope.chel_1,$scope.swan_1,$scope.ars_1,$scope.wes_1,$scope.new_1,$scope.sou_1,$scope.sto_1,$scope.liv_1,$scope.brom_1,$scope.manch_1,$scope.hull_1,$scope.burn_1,$scope.midd_1);


      //function to calculate rankings wrt no. of matches won
      $scope.rankings = $scope.a.map( function(x, i){
         return {"name": x, "state": $scope.wins[i]}        
      }.bind(this));


});

}]);
