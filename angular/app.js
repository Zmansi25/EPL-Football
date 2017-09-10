var myApp = angular.module('infoApp', ["ngRoute"]);

//mainController start
myApp.controller('mainController', ['$http', '$q', '$routeParams', function ($http, $q, $routeParams)
{
  var vm = this;
  this.combinedData = [];
  this.bgimg = "img/bird.jpg";
  this.yeardet = $routeParams.yearid;
  this.roundsdet = $routeParams.roundsid;
  this.whichmatch = $routeParams.guitarID;
  this.teamid = $routeParams.id;
  this.loadAllData = function ()
  {
    vm.getdayone = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json',
    {
      cache: false
    });
    vm.getdaytwo = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json',
    {
      cache: false
    });
    $q.all([vm.getdayone, vm.getdaytwo]).then(function successCallback(response1)
    {
      var main = this;
      this.first = [];
      this.second = [];
      this.dayone = [];
      this.daytwo = [];

      vm.dayone = response1[0].data;
      vm.daytwo = response1[1].data;
      vm.first = response1[0].data.rounds;
      vm.second = response1[1].data.rounds;

      vm.combinedData = response1[0].data.rounds.concat(response1[1].data.rounds);
      console.log(this.dayone);


    }, function errorCallback(response)
    {

      alert("You have an Error!");

    });
  }
  this.loadAllData();

}]); // end mainController

//matchDetailsController start
myApp.controller('matchDetailsController', ['$http', '$q', '$routeParams', function ($http, $q, $routeParams)
{
  var vm = this;
  this.combinedData = [];
  this.team1Name = "";
  this.team2Name = "";
  this.team1Code = "";
  this.team2Code = "";
  this.team1Key = "";
  this.team2Key = "";
  this.team1Score = "";
  this.team2Score = "";
  this.roundName = "";
  this.matchDate = "";
  this.teams = [];


  //Team logos used in teamstats page
  this.imgs = ["img/manu.jpg", "img/tot.jpg", "img/bourn1.jpg", "img/aston.jpg", "img/Everton.jpg", "img/watford.jpg", "img/leice.jpg", "img/sun.jpg", "img/nor.jpg", "img/crys.jpg", "img/chel.jpg", "img/swan.jpg", "img/ars.jpg", "img/west-ham-united.jpg", "img/new.jpg", "img/south.jpg", "img/stoke.jpg", "img/liv.jpg", "img/west.jpg", "img/Manch.png", "img/Hull.jpg", "img/burn.png", "img/mids.jpg"]

  this.date = $routeParams.date;
  this.team1code = $routeParams.team1code;
  this.team2code = $routeParams.team2code;


  //function to get the data from api.
  this.loadAllData = function ()
  {
    vm.getdayone = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json',
    {
      cache: false
    });
    vm.getdaytwo = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json',
    {
      cache: false
    });
    $q.all([vm.getdayone, vm.getdaytwo]).then(function successCallback(response)
    {
      var main = this;
      this.first = [];
      this.second = [];
      this.dayone = [];
      this.daytwo = [];

      vm.dayone = response[0].data;
      vm.daytwo = response[1].data;
      vm.first = response[0].data.rounds;
      vm.second = response[1].data.rounds;


      vm.combinedData = response[0].data.rounds.concat(response[1].data.rounds);

      angular.forEach(vm.first, function (data)
      {
        angular.forEach(data.matches, function (arr)
        {
          vm.teams.push(arr.team1.name);
          vm.teams.push(arr.team2.name);

        })
      });
      angular.forEach(vm.second, function (data)
      {
        angular.forEach(data.matches, function (arr)
        {
          vm.teams.push(arr.team1.name);
          vm.teams.push(arr.team2.name);

        })
      });
      vm.a = _.keys(_.countBy(vm.teams, function (teams)
      {
        return teams;
      }));


      function matchFunction()
      {

        for (var i = 0; i < vm.combinedData.length; i++)
        {
          //console.log(main.combinedData[i]);
          var myNewData = vm.combinedData[i];
          console.log(vm.roundName);
          console.log(vm.combinedData);


          for (var j = 0; j < myNewData.matches.length; j++)
          {
            //console.log(myNewData.matches[j]);

            var dateNew = myNewData.matches[j].date;
            console.log(dateNew);
            dateNew = dateNew.replace(/[^\/\d]/g, '');

            if (dateNew == vm.date && myNewData.matches[j].team1.code == vm.team1code && myNewData.matches[j].team2.code == vm.team2code)
            {
              /*console.log(myNewData.matches[j].date);
              console.log(myNewData.matches[j].team1.name);
              console.log(myNewData.matches[j].team2.name);
              console.log(myNewData.matches[j].score1);
              console.log(myNewData.matches[j].score2); */

              //transfering data to matchview.controller.main
              vm.roundName = vm.combinedData[i].name;
              vm.matchDate = myNewData.matches[j].date;
              vm.team1Name = myNewData.matches[j].team1.name;
              vm.team2Name = myNewData.matches[j].team2.name;
              vm.team1Code = myNewData.matches[j].team1.code;
              vm.team2Code = myNewData.matches[j].team2.code;
              vm.team1Key = myNewData.matches[j].team1.key;
              vm.team2Key = myNewData.matches[j].team2.key;
              vm.team1Score = myNewData.matches[j].score1;
              vm.team2Score = myNewData.matches[j].score2;

            }
          }
        }
      }; //matchFunction end
      matchFunction();
    }, function errorCallback(response)
    {

      alert("Error occurred. Check the console.");
      console.log(response);

    });
  } // end load all Data
  this.loadAllData();

}]); // end matchDetailsController

//teamsController start
myApp.controller('teamsController', ['$http', '$q', '$routeParams', function ($http, $q, $routeParams)
{
  var vm = this;
  this.combinedData = [];
  this.totalMatchesPlayed1 = []; //team1
  this.totalWins1 = [];
  this.totalLost1 = [];
  this.totaltie1 = [];
  this.totalgoals1 = 0;
  this.totalMatchesPlayed2 = []; //team2
  this.totalWins2 = [];
  this.totalLost2 = [];
  this.totaltie2 = [];
  this.totalgoals2 = 0;
  this.totalMatchesPlayed = []; //total
  this.totalWins = [];
  this.totalLost = [];
  this.totaltie = [];
  this.totalgoals = 0;
  this.teamname1 = "";
  this.teamname2 = "";
  this.teams = [];

  //partners logo
  this.imgs = ["img/barclays.jpg", "img/cad.jpg", "img/carling.jpg", "img/nike.png", "img/EA.png"]


  this.teamcode = $routeParams.teamcode;
  this.teamkey = $routeParams.teamkey;


  this.loadAllData = function ()
  {
    vm.getdayone = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json',
    {
      cache: false
    });
    vm.getdaytwo = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json',
    {
      cache: false
    });
    $q.all([vm.getdayone, vm.getdaytwo]).then(function successCallback(response1)
    {
      var main = this;
      this.first = [];
      this.second = [];
      this.myData = [];
      this.mynewData = [];

      //console.log(response1);
      vm.first = response1[0].data.rounds;
      vm.second = response1[1].data.rounds;
      //console.log(response1[2].data.rounds);
      vm.combinedData = response1[0].data.rounds.concat(response1[1].data.rounds);
      console.log(vm.first);

      angular.forEach(vm.first, function (data)
      {
        angular.forEach(data.matches, function (arr)
        {
          vm.teams.push(arr.team1.name);
          vm.teams.push(arr.team2.name);

        })
      });
      angular.forEach(vm.second, function (data)
      {
        angular.forEach(data.matches, function (arr)
        {
          vm.teams.push(arr.team1.name);
          vm.teams.push(arr.team2.name);

        })
      });
      vm.a = _.keys(_.countBy(vm.teams, function (teams)
      {
        return teams;
      }));
      console.log(vm.a);


      //console.log(main.combinedData);
      //function for epl 2015-16
      function firstFunction()
      {
        for (var i = 0; i < vm.first.length; i++)
        {
          for (var j = 0; j < vm.first[i].matches.length; j++)
          {
            main.myData.push(vm.first[i].matches[j]);

          }
        }
        console.log("ds", main.myData);
        console.log("sass", vm.combinedData);

        //Loop to check win status

        for (var i = 0; i < main.myData.length; i++)
        {
          if ((main.myData[i].team1.code === vm.teamcode || main.myData[i].team2.code === vm.teamcode) && (main.myData[i].team1.key === vm.teamkey || main.myData[i].team2.key === vm.teamkey))
          {

            vm.totalMatchesPlayed1.push(main.myData[i].team1.name);

            if (main.myData[i].team1.code === vm.teamcode && main.myData[i].team1.key === vm.teamkey)
            {
              vm.teamname1 = main.myData[i].team1.name;

              //totalgoals1 start
              vm.totalgoals1 = vm.totalgoals1 + main.myData[i].score1;
              //totalgoals1 end
              if (main.myData[i].score1 > main.myData[i].score2)
              {
                //console.log("team win");
                vm.totalWins1.push(main.myData[i].team2.code);

              }
              else if (main.myData[i].score1 < main.myData[i].score2)
              {
                //console.log("team  lost");
                vm.totalLost1.push(main.myData[i].team1.code);


              }
              else if (main.myData[i].score1 == main.myData[i].score2)
              {

                //console.log("tie");
                vm.totaltie1.push(main.myData[i].team1.code);


              }
              else
              {
                console.log(nothing);
              }


            }

            //if team 2
            if (main.myData[i].team2.code === vm.teamcode && main.myData[i].team2.key === vm.teamkey)
            {
              //totalgoals1 start
              vm.totalgoals1 = vm.totalgoals1 + main.myData[i].score2;
              //totalgoals1 end

              if (main.myData[i].score1 < main.myData[i].score2)
              {
                //console.log("team win");
                vm.totalWins1.push(main.myData[i].team2.code);

              }
              else if (main.myData[i].score1 > main.myData[i].score2)
              {
                //console.log("team  lost");
                vm.totalLost1.push(main.myData[i].team1.code);


              }
              else if (main.myData[i].score1 == main.myData[i].score2)
              {

                //console.log("tie");
                vm.totaltie1.push(main.myData[i].team1.code);


              }
              else
              {
                console.log(nothing);
              }
            }
            //if team 2 end
          } //if for totalMatchesPlayed


        } // end for loop 

      }; //firstFunction end
      firstFunction();


      //function for epl 2016-2017
      function secondFunction()
      {
        for (var i = 0; i < vm.second.length; i++)
        {
          for (var j = 0; j < vm.second[i].matches.length; j++)
          {
            main.mynewData.push(vm.second[i].matches[j]);
          }
        }
        //loop to check win status
        for (var i = 0; i < main.mynewData.length; i++)
        {
          if ((main.mynewData[i].team1.code === vm.teamcode || main.mynewData[i].team2.code === vm.teamcode) && (main.mynewData[i].team1.key === vm.teamkey || main.mynewData[i].team2.key === vm.teamkey))
          {


            vm.totalMatchesPlayed2.push(main.mynewData[i].team1.name);
            //team 1
            if (main.mynewData[i].team1.code === vm.teamcode && main.mynewData[i].team1.key === vm.teamkey)
            {
              vm.teamname2 = main.mynewData[i].team1.name;

              //totalgoals2 start
              vm.totalgoals2 = vm.totalgoals2 + main.myData[i].score1;
              //totalgoals2 end
              if (main.mynewData[i].score1 > main.mynewData[i].score2)
              {
                vm.totalWins2.push(main.mynewData[i].team2.code);

              }
              else if (main.mynewData[i].score1 < main.mynewData[i].score2)
              {
                vm.totalLost2.push(main.mynewData[i].team1.code);


              }
              else if (main.mynewData[i].score1 == main.mynewData[i].score2)
              {

                vm.totaltie2.push(main.mynewData[i].team1.code);


              }
              else
              {
                console.log(nothing);
              }

            }

            // team 2
            if (main.mynewData[i].team2.code === vm.teamcode && main.mynewData[i].team2.key === vm.teamkey)
            {

              vm.totalgoals2 = vm.totalgoals2 + main.myData[i].score2;
              if (main.mynewData[i].score1 < main.mynewData[i].score2)
              {
                vm.totalWins2.push(main.mynewData[i].team2.code);

              }
              else if (main.mynewData[i].score1 > main.mynewData[i].score2)
              {
                vm.totalLost2.push(main.mynewData[i].team1.code);


              }
              else if (main.mynewData[i].score1 == main.mynewData[i].score2)
              {

                vm.totaltie2.push(main.mynewData[i].team1.code);


              }
              else
              {
                console.log(nothing);
              }
            }

          }


        } // end for loop 
      }; //secondFunction end
      secondFunction();

      //total team stats
      vm.totalMatchesPlayed = vm.totalMatchesPlayed1.length + vm.totalMatchesPlayed2.length;

      vm.totalWins = vm.totalWins1.length + vm.totalWins2.length;
      vm.totalLost = vm.totalLost1.length + vm.totalLost2.length;
      vm.totaltie = vm.totaltie1.length + vm.totaltie2.length;
      vm.totalgoals = vm.totalgoals1 + vm.totalgoals2;


    }, function errorCallback(response)
    {

      alert("Error occurred. Check the console.");

    });
  } // end load all Data
  this.loadAllData();
}]); // end teamsController