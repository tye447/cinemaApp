(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{F4UR:function(n,e,t){"use strict";t.r(e),t.d(e,"LoginPageModule",function(){return d});var i=t("ofXK"),o=t("3Pt+"),s=t("TEn/"),r=t("tyNb"),a=t("fXoL"),b=t("tk/3");let l=(()=>{class n{constructor(n,e){this.httpClient=n,this.router=e}signUp(n,e){let t={};t.name=n,t.password=e,console.log(t),this.result=t,this.setUser(),this.router.navigateByUrl("home").then()}setUser(){window.sessionStorage.setItem("currentUser",JSON.stringify(this.result))}login(n,e){this.httpClient.get("./assets/data/users.json").pipe().subscribe(t=>{this.result=t.filter(e=>e.name===n).filter(n=>n.password===e)[0],null!=this.result?(this.setUser(),this.router.navigateByUrl("home").then()):(alert("Invalid name or password: Please try again"),window.sessionStorage.clear())})}}return n.\u0275fac=function(e){return new(e||n)(a.Qb(b.a),a.Qb(r.g))},n.\u0275prov=a.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const c=[{path:"",component:(()=>{class n{constructor(n,e,t){this.route=n,this.fb=e,this.userService=t}ngOnInit(){this.ionViewDidEnter()}ionViewDidEnter(){sessionStorage.clear(),this.name="",this.password=""}logForm(){this.buildLoginForm(),this.userService.login(this.loginForm.value.name,this.loginForm.value.password)}signIn(){this.buildLoginForm(),this.userService.signUp(this.loginForm.value.name,this.loginForm.value.password)}buildLoginForm(){this.loginForm=this.fb.group({name:[this.name],password:[this.password]})}}return n.\u0275fac=function(e){return new(e||n)(a.Jb(r.a),a.Jb(o.a),a.Jb(l))},n.\u0275cmp=a.Db({type:n,selectors:[["app-login"]],decls:24,vars:2,consts:[[3,"ngSubmit"],["autocomplete","","type","text","name","name",3,"ngModel","ngModelChange"],["type","password","name","password",3,"ngModel","ngModelChange"],["fixed",""],["size","6"],["type","button","expand","block",3,"click"],["type","submit","expand","block"]],template:function(n,e){1&n&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-title"),a.ic(3,"Login"),a.Lb(),a.Lb(),a.Lb(),a.Mb(4,"ion-content"),a.Mb(5,"form",0),a.Ub("ngSubmit",function(){return e.logForm()}),a.Mb(6,"ion-item"),a.Mb(7,"ion-label"),a.ic(8,"Name"),a.Lb(),a.Mb(9,"ion-input",1),a.Ub("ngModelChange",function(n){return e.name=n}),a.Lb(),a.Lb(),a.Mb(10,"ion-item"),a.Mb(11,"ion-label"),a.ic(12,"Password"),a.Lb(),a.Mb(13,"ion-input",2),a.Ub("ngModelChange",function(n){return e.password=n}),a.Lb(),a.Lb(),a.Mb(14,"ion-grid",3),a.Mb(15,"ion-row"),a.Mb(16,"ion-col",4),a.Mb(17,"ion-button",5),a.Ub("click",function(){return e.signIn()}),a.ic(18,"Sign In"),a.Lb(),a.Lb(),a.Mb(19,"ion-col",4),a.Mb(20,"ion-button",6),a.ic(21,"Login"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(22,"ion-text"),a.ic(23,"name:admin, password: admin"),a.Lb(),a.Lb()),2&n&&(a.zb(9),a.bc("ngModel",e.name),a.zb(4),a.bc("ngModel",e.password))},directives:[s.n,s.C,s.B,s.l,o.j,o.f,o.g,s.r,s.s,s.q,s.F,o.e,o.h,s.m,s.w,s.k,s.d,s.A],styles:[""]}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[r.i.forChild(c)],r.i]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[i.b,o.b,s.D,u]]}),n})()}}]);