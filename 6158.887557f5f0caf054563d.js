(self.webpackChunkionic_cinema_app=self.webpackChunkionic_cinema_app||[]).push([[6158],{6158:(n,o,e)=>{"use strict";e.r(o),e.d(o,{LoginPageModule:()=>d});var i=e(8583),t=e(665),s=e(7823),r=e(649),a=e(639),c=e(9709);const g=[{path:"",component:(()=>{class n{constructor(n,o){this.route=n,this.userService=o,this.showPassword=!1,this.passwordToggleIcon="eye"}ngOnInit(){this.ionViewWillEnter()}ionViewWillEnter(){sessionStorage.clear(),this.name="",this.password=""}logForm(){this.userService.login(this.name,this.password)}signIn(){this.route.navigateByUrl("sign-up")}togglePassword(){this.showPassword=!this.showPassword,this.passwordToggleIcon="eye"===this.passwordToggleIcon?"eye-off":"eye"}}return n.\u0275fac=function(o){return new(o||n)(a.Y36(r.F0),a.Y36(c.K))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-login"]],decls:29,vars:4,consts:[["fixed",""],["size-md","8","offset-md","2"],["autocomplete","","type","text","name","name",3,"ngModel","ngModelChange"],["placeholder","Password","name","password",3,"type","ngModel","ngModelChange"],["slot","end",3,"name","click"],["size","6"],["type","button","expand","block",3,"click"],["type","submit","expand","block",3,"click"]],template:function(n,o){1&n&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-title"),a._uU(3,"Login"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(4,"ion-content"),a.TgZ(5,"ion-grid",0),a.TgZ(6,"ion-row"),a.TgZ(7,"ion-col",1),a.TgZ(8,"ion-card"),a.TgZ(9,"ion-card-content"),a.TgZ(10,"ion-item"),a.TgZ(11,"ion-label"),a._uU(12,"Name"),a.qZA(),a.TgZ(13,"ion-input",2),a.NdJ("ngModelChange",function(n){return o.name=n}),a.qZA(),a.qZA(),a.TgZ(14,"ion-item"),a.TgZ(15,"ion-label"),a._uU(16,"Password"),a.qZA(),a.TgZ(17,"ion-input",3),a.NdJ("ngModelChange",function(n){return o.password=n}),a.qZA(),a.TgZ(18,"ion-icon",4),a.NdJ("click",function(){return o.togglePassword()}),a.qZA(),a.qZA(),a.TgZ(19,"ion-grid",0),a.TgZ(20,"ion-row"),a.TgZ(21,"ion-col",5),a.TgZ(22,"ion-button",6),a.NdJ("click",function(){return o.signIn()}),a._uU(23,"Sign In"),a.qZA(),a.qZA(),a.TgZ(24,"ion-col",5),a.TgZ(25,"ion-button",7),a.NdJ("click",function(){return o.logForm()}),a._uU(26,"Login"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(27,"ion-text"),a._uU(28,"name:admin, password: admin"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(13),a.Q6J("ngModel",o.name),a.xp6(4),a.Q6J("type",o.showPassword?"text":"password")("ngModel",o.password),a.xp6(1),a.Q6J("name",o.passwordToggleIcon))},directives:[s.Gu,s.sr,s.wd,s.W2,s.jY,s.Nd,s.wI,s.PM,s.FN,s.Ie,s.Q$,s.pK,s.j9,t.JJ,t.On,s.gu,s.YG,s.yW],styles:[""]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[r.Bz.forChild(g)],r.Bz]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[i.ez,t.u5,s.Pc,l]]}),n})()}}]);