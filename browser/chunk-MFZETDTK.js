import{a as n}from"./chunk-AMAF2MAF.js";import{_ as o,da as i,r}from"./chunk-5TXZLY6E.js";var a={CORE_SERVER_URI:"https://cardgamebackend.onrender.com"};var u=(()=>{let e=class e{constructor(t){this.http=t,this.baseUri=a.CORE_SERVER_URI}getUsers(){return r(this.http.get(`${this.baseUri}/users/all`,{observe:"response"}))}createUser(t){return r(this.http.post(`${this.baseUri}/users/register`,{username:t},{observe:"response"}))}getScoreboard(){return r(this.http.get(`${this.baseUri}/scoreboard/getscoreboard`,{observe:"response"}))}createUserScore(t){return r(this.http.post(`${this.baseUri}/scoreboard/postscoreboard`,t,{observe:"response"}))}getCards(){return r(this.http.get(`${this.baseUri}/cards/cardsimg`,{observe:"response"}))}};e.\u0275fac=function(c){return new(c||e)(i(n))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{u as a};
