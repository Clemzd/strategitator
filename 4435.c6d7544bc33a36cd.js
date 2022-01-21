"use strict";(self.webpackChunkstrategitator=self.webpackChunkstrategitator||[]).push([[4435],{4435:(T,g,c)=>{c.r(g),c.d(g,{LiveRaceModule:()=>w});var s=c(6019),i=c(4474),e=c(1514);let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez]]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,i.Pc,h]]}),t})();var d=c(7009);class r{constructor(o){this.number=o.number,this.pilot=o.pilot,this.start=o.start,this.end=o.end,this.durationInMinutes=o.durationInMinutes,this.fuel=o.fuel,this.active=o.active}}class p{constructor(o){this.location=o.location,this.lengthInHours=o.lengthInHours,this.date=o.date,this.relays=o.relays}}let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-race-header"]],decls:13,vars:0,consts:[[1,"header"],[1,"time"],[1,"hours-minutes"],[1,"seconds"],["color","primary-tertiary-gradient","shape","round","size","small"],["name","play","slot","start"],[1,"text-start-race"],[1,"container-progress-bar"],["value","0.7"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-toolbar"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e._uU(4,"02:00"),e.qZA(),e.TgZ(5,"div",3),e._uU(6,":00"),e.qZA(),e.qZA(),e.TgZ(7,"ion-button",4),e._UZ(8,"ion-icon",5),e.TgZ(9,"span",6),e._uU(10,"Lancer la course"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",7),e._UZ(12,"ion-progress-bar",8),e.qZA())},directives:[i.sr,i.YG,i.gu,i.X7],styles:["ion-toolbar[_ngcontent-%COMP%]{--padding-start: var(--ion-padding);--padding-end: var(--ion-padding)}.container-progress-bar[_ngcontent-%COMP%]{margin:0 var(--ion-padding)}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}.header[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%]{margin:0 var(--ion-padding)}.header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{display:flex;align-items:baseline;font-weight:800;line-height:.7}.header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .hours-minutes[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:var(--font-size-xxxl)}.header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .seconds[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:var(--font-size-xl)}.header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:var(--space-xl)}.header[_ngcontent-%COMP%]   .text-start-race[_ngcontent-%COMP%]{font-size:var(--font-size-l);font-weight:600;letter-spacing:0}"]}),t})();var f=c(8239);const C=["barSheet"];let y=(()=>{class t{constructor(n,a,l){this.gestureCtrl=n,this.renderer=a,this.actionSheetController=l,this.startingExpandingHeight=0}ngOnInit(){this.gestureCtrl.create({gestureName:"resize-race-action-sheet",el:this.barSheet.nativeElement,gesturePriority:100,passive:!1,direction:"y",onStart:()=>{this.renderer.setStyle(this.barSheet.nativeElement,"transition","none"),this.startingExpandingHeight=this.barSheet.nativeElement.clientHeight},onMove:a=>{},onEnd:a=>{this.onEnd(a)}}).enable()}onEnd(n){this.startingExpandingHeight=0,this.renderer.setStyle(this.barSheet.nativeElement,"transition","0.1s ease-out"),this.renderer.setStyle(this.barSheet.nativeElement,"height",n.deltaY<50?"var(--expanded-height-action-sheet)":"var(--default-height-action-sheet)")}showSettings(){var n=this;return(0,f.Z)(function*(){const a=yield n.actionSheetController.create({header:"R\xe9glages de la course",cssClass:"my-custom-class",buttons:[{text:"Changer les relais",icon:"share",data:10,handler:()=>{console.log("Share clicked")}},{text:"Play (open modal)",icon:"caret-forward-circle",data:"Data value",handler:()=>{console.log("Play clicked")}},{text:"Favorite",icon:"heart",handler:()=>{console.log("Favorite clicked")}},{text:"Cancel",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield a.present();const{role:l,data:A}=yield a.onDidDismiss();console.log("onDidDismiss resolved with role and data",l,A)})()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.TH),e.Y36(e.Qsj),e.Y36(i.BX))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-race-action-sheet"]],viewQuery:function(n,a){if(1&n&&e.Gf(C,7),2&n){let l;e.iGM(l=e.CRH())&&(a.barSheet=l.first)}},decls:14,vars:0,consts:[[1,"toolbar-sheet"],["barSheet",""],[1,"menu-handle"],[1,"action-sheet"],[1,"button-bar"],["mode","ios","fill","clear","shape","default","size","square",3,"click"],["name","custom-settings","slot","icon-only"],[1,"vertical-bar"],[1,"message"],["color","secondary-gradient","shape","default","size","square"],["name","custom-swap","size","large","slot","icon-only"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0,1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"ion-button",5),e.NdJ("click",function(){return a.showSettings()}),e._UZ(6,"ion-icon",6),e.qZA(),e._UZ(7,"div",7),e.qZA(),e.TgZ(8,"div",8),e._uU(9,"Pr\xe9parez vous au d\xe9part !"),e.qZA(),e.TgZ(10,"div",4),e._UZ(11,"div",7),e.TgZ(12,"ion-button",9),e._UZ(13,"ion-icon",10),e.qZA(),e.qZA(),e.qZA(),e.qZA())},directives:[i.YG,i.gu],styles:["[_nghost-%COMP%]{--default-height-action-sheet: 8.5rem;--expanded-height-action-sheet: 21.5rem}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]{display:flex;align-content:flex-start;flex-direction:column;height:var(--default-height-action-sheet)}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .menu-handle[_ngcontent-%COMP%]{background:var(--ion-color-medium);border-radius:8px;width:36px;height:5px;margin:var(--space-xxs);margin-bottom:var(--space-xxxs);margin-right:auto;margin-left:auto}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .action-sheet[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 var(--space-s) var(--space-s) var(--space-s)}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .action-sheet[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:var(--font-size-l)}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .action-sheet[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-size:var(--font-size-l);font-family:var(--ion-font-family-race);font-weight:600;color:var(--ion-color-primary)}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]{display:flex;height:100%}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]   .vertical-bar[_ngcontent-%COMP%]{width:1px;height:100%;background:var(--ion-color-medium-light);border-radius:1rem;margin-left:var(--space-xs);margin-right:var(--space-xs)}"]}),t})(),M=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-badge"]],inputs:{text:"text"},decls:1,vars:1,template:function(n,a){1&n&&e._uU(0),2&n&&e.hij("",a.text,"\n")},styles:["[_nghost-%COMP%]{font-family:var(--ion-font-family-race);font-size:var(--font-size-s);font-weight:700;background:var(--ion-color-medium);color:var(--ion-color-light);width:2rem;height:2rem;line-height:2rem;border-radius:50%;text-align:center}"]}),t})();function _(t,o){1&t&&e._UZ(0,"div",15)}let v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-relay"]],inputs:{relay:"relay"},decls:21,vars:9,consts:[[1,"relay"],[1,"timeline"],[1,"start-time"],[1,"vertical-line"],["class","progress-point",4,"ngIf"],[1,"card-relay"],[1,"relay-duration"],["name","stopwatch-outline"],[1,"time"],[1,"info-pilot"],[1,"line"],[1,"badge",3,"text"],[1,"weight"],["name","barbell"],[1,"kg"],[1,"progress-point"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,_,1,0,"div",4),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e._UZ(8,"ion-icon",7),e.TgZ(9,"div",8),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"div",9),e.TgZ(12,"div",10),e.TgZ(13,"div"),e._uU(14),e.qZA(),e._UZ(15,"app-badge",11),e.qZA(),e.TgZ(16,"div",10),e.TgZ(17,"div",12),e._UZ(18,"ion-icon",13),e.TgZ(19,"div",14),e._uU(20,"2.5KG"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.Oqu(a.relay.start),e.xp6(2),e.Q6J("ngIf",a.relay.active),e.xp6(2),e.ekj("active",a.relay.active),e.xp6(3),e.hij("",a.relay.durationInMinutes,"'"),e.xp6(4),e.Oqu(a.relay.pilot),e.xp6(1),e.ekj("active",a.relay.active),e.Q6J("text",a.relay.number.toString()))},directives:[s.O5,i.gu,M],styles:["@keyframes blinker{0%{opacity:1}50%{opacity:.5}to{opacity:1}}[_nghost-%COMP%]{width:100%;--border-width: .3rem;--size-progress-point: 1rem}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]{display:flex;color:var(--ion-color-primary);margin-right:var(--space-xxl);width:100%}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{width:5rem}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%]{background:var(--ion-color-primary);display:flex;flex-direction:column;height:65%;position:relative;width:.3rem;border-radius:11px;margin:5px auto}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%]   .progress-point[_ngcontent-%COMP%]{height:var(--size-progress-point);width:var(--size-progress-point);background:var(--ion-color-progress-relay-point);border-radius:50%;position:absolute;top:calc(50% - var(--size-progress-point) / 2);contain:strict;display:flex;align-self:center;animation:blinker 1s infinite}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .progress-point[_ngcontent-%COMP%]{position:absolute;border-radius:50%;height:1rem;width:1rem;background:var(--ion-color-progress-relay-point)}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .start-time[_ngcontent-%COMP%], [_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .end-time[_ngcontent-%COMP%]{border:var(--border-width) solid var(--ion-color-primary);font-size:var(--font-size-xm);font-weight:600;border-radius:2rem;margin-top:calc(var(--margin-relay-middle) * -1);text-align:center;padding:0;background:var(--ion-color-light)}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]{display:flex;flex:1;margin-left:var(--space-xxs);height:90%}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background:var(--ion-color-medium);padding:var(--space-xm) var(--space-xs);border-radius:21px 0 0 21px;color:var(--ion-color-light);width:3.3rem;font-size:var(--font-size-xm);text-align:center;font-weight:600}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration.active[_ngcontent-%COMP%]{background:var(--ion-color-secondary-gradient)}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.8rem;--ionicon-stroke-width: 48px}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{margin-top:.4rem}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;flex:1;font-size:var(--font-size-sl);font-weight:600;background:var(--ion-color-light);border-radius:10px;padding:var(--space-m)}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:not(:first-child){margin-top:1.1rem}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .badge.active[_ngcontent-%COMP%]{background:var(--ion-color-secondary)}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .weight[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:var(--font-size-s);font-weight:600;border:.2rem solid var(--ion-color-primary);border-radius:10px;padding:0 var(--space-xxs)}[_nghost-%COMP%]   .relay[_ngcontent-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .weight[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:var(--space-xxxs)}"]}),t})();function O(t,o){if(1&t&&(e.TgZ(0,"div",4),e._UZ(1,"app-relay",5),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("relay",n)}}const P=[{path:"",component:(()=>{class t{constructor(){this.relay1=new r({pilot:"Cl\xe9ment",start:"02:00",end:"01:55",number:1,durationInMinutes:5,fuel:!1,active:!0}),this.relay2=new r({pilot:"Samuel",start:"01:55",end:"01:40",number:2,durationInMinutes:15,fuel:!1,active:!1}),this.relay3=new r({pilot:"Cl\xe9ment",start:"01:40",end:"01:20",number:3,durationInMinutes:20,fuel:!1,active:!1}),this.relay4=new r({pilot:"Samuel",start:"01:20",end:"01:00",number:4,durationInMinutes:20,fuel:!1,active:!1}),this.relay5=new r({pilot:"Cl\xe9ment",start:"01:00",end:"00:50",number:5,durationInMinutes:10,fuel:!1,active:!1}),this.relay6=new r({pilot:"Samuel",start:"00:50",end:"00:40",number:6,durationInMinutes:10,fuel:!1,active:!1}),this.relay7=new r({pilot:"Samuel",start:"00:40",end:"00:30",number:7,durationInMinutes:10,fuel:!1,active:!1}),this.relay8=new r({pilot:"Samuel",start:"00:30",end:"00:20",number:8,durationInMinutes:10,fuel:!1,active:!1}),this.relay9=new r({pilot:"Samuel",start:"00:30",end:"00:20",number:9,durationInMinutes:10,fuel:!1,active:!1}),this.relay10=new r({pilot:"Samuel",start:"00:20",end:"00:00",number:10,durationInMinutes:20,fuel:!1,active:!1}),this.relays=[this.relay1,this.relay2,this.relay3,this.relay4,this.relay5,this.relay6,this.relay7,this.relay8,this.relay9,this.relay10],this.race=new p({location:"St Michel Chef Chef",lengthInHours:2,date:new Date,relays:this.relays})}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-live-race"]],decls:13,vars:7,consts:[[1,"ion-no-border"],[1,"track-info"],[1,"relays-list"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[3,"relay"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header",0),e._UZ(1,"app-race-header"),e.qZA(),e.TgZ(2,"ion-content"),e.TgZ(3,"div",1),e.TgZ(4,"h1"),e._uU(5),e.qZA(),e.TgZ(6,"h3"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.qZA(),e.TgZ(9,"div",2),e.YNc(10,O,2,1,"div",3),e.qZA(),e.qZA(),e.TgZ(11,"ion-footer"),e._UZ(12,"app-race-action-sheet"),e.qZA()),2&n&&(e.xp6(5),e.Oqu(a.race.location),e.xp6(2),e.AsE("",a.race.lengthInHours,"H - ",e.xi3(8,4,a.race.date,"mediumDate"),""),e.xp6(3),e.Q6J("ngForOf",a.relays))},directives:[i.Gu,m,i.W2,s.sg,i.fr,y,v],pipes:[s.uU],styles:["[_nghost-%COMP%]   .relays-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:calc(var(--margin-relay-middle))}[_nghost-%COMP%]   .relays-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-bottom:var(--space-xxs)}[_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-family:var(--ion-font-family-race);margin-bottom:var(--space-l)}[_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.Bz.forChild(P)],d.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,i.Pc]]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,i.Pc]]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,i.Pc,u,b,Z,x]]}),t})()}}]);