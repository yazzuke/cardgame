import{a as u,d as V,e as H,g as U}from"./chunk-KTVTVXL3.js";import{a as w}from"./chunk-NYHKZ5SU.js";import{a as L}from"./chunk-MFZETDTK.js";import{D as R,a as k,b as P,c as N,d as O,e as E,f as j,g as I,i as T,j as q,q as F}from"./chunk-AMT74OIL.js";import{g as S,h as x}from"./chunk-AMAF2MAF.js";import"./chunk-RGNDWIHZ.js";import{Db as p,Fb as y,Pb as r,Vb as v,Za as s,_a as c,d as _,ha as g,hb as b,jb as l,ma as h,na as f,ob as C,tb as e,ub as i,vb as d,zb as M}from"./chunk-5TXZLY6E.js";function A(a,n){if(a&1){let D=M();e(0,"button",10),p("click",function(){h(D);let o=y();return f(o.createUser())}),e(1,"mat-icon"),r(2,"keyboard_arrow_right"),i()()}}function G(a,n){a&1&&(e(0,"button",11)(1,"mat-icon"),r(2,"keyboard_arrow_right"),i()())}var re=(()=>{let n=class n{constructor(t,o,m){this.coreServer=t,this.router=o,this._snackbar=m,this.userName=""}createUser(){return _(this,null,function*(){let t=yield this.coreServer.createUser(this.userName);t.status>=200&&t.status<=299?(this._snackbar.showNotification("snackbar-success","Usuario creado correctamente \u{1F973}","bottom","center",2e3),u(V,t.body?.id),u(H,t.body?.username),this.navigateToPlay()):(this.userName="",this._snackbar.showNotification("snackbar-danger","Erro intenta nuevamente \u{1F613}","bottom","center",3500))})}navigateToPlay(){this.router.navigate([w.GAME])}};n.\u0275fac=function(o){return new(o||n)(c(L),c(S),c(U))},n.\u0275cmp=g({type:n,selectors:[["app-home"]],standalone:!0,features:[v],decls:20,vars:3,consts:[[1,"home"],["src","../../../assets/logo.png","alt","card game logo",1,"home__logo"],[1,"home__start"],["appearance","outline",1,"start__input"],["matInput","","placeholder","Nombre","required","",3,"ngModel","ngModelChange"],["mat-fab","","color","primary","class","start__btn"],[1,"home__footer"],["href","https://github.com/yazzuke/cardgame","target","_blank","title","Github Repo"],["src","../../../assets/icons/github.svg","alt","github","width","25"],[3,"routerLink"],["mat-fab","","color","primary",1,"start__btn",3,"click"],["mat-fab","","color","primary","disabled","",1,"start__btn"]],template:function(o,m){o&1&&(e(0,"section",0),d(1,"img",1),e(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),r(5,"Nombre equipo/jugador"),i(),e(6,"input",4),p("ngModelChange",function(z){return m.userName=z}),i(),e(7,"mat-error"),r(8,"Nombre es "),e(9,"strong"),r(10,"requerido"),i()()(),b(11,A,3,0,"button",5)(12,G,3,0),i(),e(13,"div",6)(14,"a",7),d(15,"img",8),i(),e(16,"p"),r(17,"hecho por ... "),e(18,"a",9),r(19,"click aqui"),i()()()()),o&2&&(s(6),l("ngModel",m.userName),s(5),C(11,m.userName!==""?11:12),s(7),l("routerLink","/made-by"))},dependencies:[R,k,P,O,N,x,T,I,E,j,F,q],styles:[".home[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;height:100%;gap:4rem}.home[_ngcontent-%COMP%]   .home__start[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}.home[_ngcontent-%COMP%]   .home__start[_ngcontent-%COMP%]   .start__input[_ngcontent-%COMP%]{width:400px}.home[_ngcontent-%COMP%]   .home__footer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;position:absolute;bottom:25px;padding:0 5%}@media screen and (max-width: 550px){.home[_ngcontent-%COMP%]   .home__logo[_ngcontent-%COMP%]{width:90%}.home[_ngcontent-%COMP%]   .home__start[_ngcontent-%COMP%]   .start__input[_ngcontent-%COMP%]{width:calc(100vw - 40px)!important}}"]});let a=n;return a})();export{re as HomeComponent};
