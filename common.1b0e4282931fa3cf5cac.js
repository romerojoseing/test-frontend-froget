(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OaWH:function(t,n,r){"use strict";r.d(n,"a",function(){return a});var s=r("AytR"),e=r("fXoL"),i=r("IheW");let a=(()=>{class t{constructor(t){this.http=t}getPeople(){return this.http.get(s.a.urlAddress+"/people/")}getPlanets(){return this.http.get(s.a.urlAddress+"/planets/")}getStarships(){return this.http.get(s.a.urlAddress+"/starships/")}}return t.\u0275fac=function(n){return new(n||t)(e.Hb(i.a))},t.\u0275prov=e.yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},QxXW:function(t,n,r){"use strict";r.d(n,"a",function(){return i});var s=r("ofXK"),e=r("fXoL");let i=(()=>{class t{}return t.\u0275mod=e.Ab({type:t}),t.\u0275inj=e.zb({factory:function(n){return new(n||t)},imports:[[s.b],s.b]}),t})()},lXt9:function(t,n,r){"use strict";r.d(n,"a",function(){return c});var s=r("fXoL"),e=r("ofXK");function i(t,n){if(1&t&&(s.Fb(0,"div",4),s.Fb(1,"h3",5),s.Sb(2),s.Eb(),s.Fb(3,"p",6),s.Sb(4,"Text Secondary"),s.Eb(),s.Fb(5,"p",7),s.Sb(6,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti officia aspernatur pariatur nobis quisquam voluptate asperiores !"),s.Eb(),s.Fb(7,"div",8),s.Fb(8,"button",9),s.Sb(9,"Action 1"),s.Eb(),s.Fb(10,"button",9),s.Sb(11,"Action 2"),s.Eb(),s.Eb(),s.Eb()),2&t){const t=n.$implicit;s.tb(2),s.Tb(t.name)}}function a(t,n){if(1&t&&(s.Fb(0,"div",2),s.Rb(1,i,12,1,"div",3),s.Eb()),2&t){const t=s.Mb();s.tb(1),s.Nb("ngForOf",t.data.results)}}function o(t,n){1&t&&(s.Fb(0,"div",10),s.Db(1,"div"),s.Db(2,"div"),s.Eb())}let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.wb({type:t,selectors:[["app-card"]],inputs:{data:"data"},decls:2,vars:2,consts:[["class","cards",4,"ngIf"],["class","lds-ripple",4,"ngIf"],[1,"cards"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-title"],[1,"card-sub"],[1,"card-text"],[1,"card-buttons"],[1,"card-button","ripple"],[1,"lds-ripple"]],template:function(t,n){1&t&&(s.Rb(0,a,2,1,"div",0),s.Rb(1,o,3,0,"div",1)),2&t&&(s.Nb("ngIf",null!=n.data),s.tb(1),s.Nb("ngIf",null==n.data))},directives:[e.i,e.h],styles:[""]}),t})()}}]);