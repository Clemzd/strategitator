"use strict";(self.webpackChunkstrategitator=self.webpackChunkstrategitator||[]).push([[1245],{1245:($,p,d)=>{d.r(p),d.d(p,{LiveRaceModule:()=>G});var l=d(6019),r=d(4474),e=d(1514);let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez]]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,r.Pc,C]]}),t})();var m=d(7009);class c{constructor(o){this.editable=!1,this.number=o.number,this.pilotId=o.pilotId,this.pilotName=o.pilotName,this.start=o.start,this.end=o.end,this.durationInMinutes=o.durationInMinutes,this.fuel=o.fuel,this.state=o.state}}class v{constructor(o){this.currentIndexRelay=-1,this.ongoing=!1,this.progressPercentage=0,this.location=o.location,this.lengthInHours=o.lengthInHours,this.plannedDate=o.plannedDate,this.relays=o.relays,this.pilots=o.pilots,this.remaningHours=this.lengthInHours,this.remaningMinutes=0,this.remaningSeconds=0}get lengthInSeconds(){return 3600*this.lengthInHours}}var a=(()=>{return(t=a||(a={}))[t.NOT_PASSED=0]="NOT_PASSED",t[t.IN_PROGRESS=1]="IN_PROGRESS",t[t.PAST=2]="PAST",a;var t})();class h{constructor(o){this.id=o.id,this.name=o.name}}var u=d(8239),M=d(2240),P=d(9417);class _{static addSeconds(o,n){return new Date(o.getTime()+1e3*n)}static getDifferenceInSeconds(o,n){return(o.getTime()-n.getTime())/1e3}}let f=(()=>{class t{constructor(){this.passedTimeInSeconds=0,this.speed=300}start(n){n.ongoing=!0,n.currentIndexRelay=0,n.relays[n.currentIndexRelay].state=a.IN_PROGRESS,n.effectiveStartDate=new Date,this.currenTime=new Date,this.timer$=function(t=0,o=M.z){return t<0&&(t=0),(0,P.H)(t,t,o)}(1e3).subscribe(()=>{!this.currenTime||!n.effectiveStartDate||(this.currenTime=_.addSeconds(this.currenTime,this.speed),this.passedTimeInSeconds=_.getDifferenceInSeconds(this.currenTime,n.effectiveStartDate),this.passedTimeInSeconds>n.lengthInSeconds&&this.timer$?this.timer$.unsubscribe():this.tick(n))})}changeRelay(n){n.relays[n.currentIndexRelay].state=a.PAST,n.currentIndexRelay+=1,n.relays[n.currentIndexRelay].state=a.IN_PROGRESS}askEdit(n){n.relays.forEach(i=>i.editable=!0)}askView(n){n.relays.forEach(i=>i.editable=!1)}goFaster(){this.speed+=60}tick(n){this.calculateTotalProgress(n)}calculateTotalProgress(n){n.progressPercentage=this.passedTimeInSeconds/n.lengthInSeconds,n.remaningHours=Math.trunc((n.lengthInSeconds-this.passedTimeInSeconds)/3600),n.remaningMinutes=Math.trunc((n.lengthInSeconds-this.passedTimeInSeconds)/60)%60,n.remaningSeconds=(n.lengthInSeconds-this.passedTimeInSeconds)%60}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function S(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-button",8),e.NdJ("click",function(){return e.CHM(n),e.oxw().presentAlertConfirm()}),e._UZ(1,"ion-icon",9),e.TgZ(2,"span",10),e._uU(3,"Lancer la course"),e.qZA(),e.qZA()}}function b(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-button",11),e.NdJ("click",function(){return e.CHM(n),e.oxw().goFaster()}),e._UZ(1,"ion-icon",12),e.qZA()}}let x=(()=>{class t{constructor(n,i){this.alertController=n,this.raceService=i}ngOnInit(){}presentAlertConfirm(){var n=this;return(0,u.Z)(function*(){yield(yield n.alertController.create({mode:"ios",cssClass:"my-custom-class",header:"Confirmer",message:"Vous pouvez toujours annuler et repartir de z\xe9ro",buttons:[{text:"Annuler",role:"cancel",cssClass:"secondary",id:"cancel-button",handler:()=>{console.log("Confirm Cancel: blah")}},{text:"Go !",id:"confirm-button",handler:()=>{n.raceService.start(n.race)}}]})).present()})()}goFaster(){this.raceService.goFaster()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.Br),e.Y36(f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-race-header"]],inputs:{race:"race"},decls:14,vars:15,consts:[[1,"header"],[1,"time"],[1,"hours-minutes"],[1,"seconds"],["color","primary-tertiary-gradient","shape","round","size","small",3,"click",4,"ngIf"],["color","primary","shape","round","size","small",3,"click",4,"ngIf"],[1,"container-progress-bar"],[3,"value"],["color","primary-tertiary-gradient","shape","round","size","small",3,"click"],["name","play","slot","start"],[1,"text-start-race"],["color","primary","shape","round","size","small",3,"click"],["name","play-forward","size","large","slot","icon-only"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-toolbar"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e._uU(4),e.ALo(5,"number"),e.ALo(6,"number"),e.qZA(),e.TgZ(7,"div",3),e._uU(8),e.ALo(9,"number"),e.qZA(),e.qZA(),e.YNc(10,S,4,0,"ion-button",4),e.YNc(11,b,2,0,"ion-button",5),e.qZA(),e.qZA(),e.TgZ(12,"div",6),e._UZ(13,"ion-progress-bar",7),e.qZA()),2&n&&(e.xp6(4),e.AsE("",e.xi3(5,6,i.race.remaningHours,"2.0"),":",e.xi3(6,9,i.race.remaningMinutes,"2.0"),""),e.xp6(4),e.hij(":",e.xi3(9,12,i.race.remaningSeconds,"2.0"),""),e.xp6(2),e.Q6J("ngIf",!i.race.ongoing),e.xp6(1),e.Q6J("ngIf",i.race.ongoing),e.xp6(2),e.Q6J("value",i.race.progressPercentage))},directives:[r.sr,l.O5,r.X7,r.YG,r.gu],pipes:[l.JJ],styles:["ion-toolbar[_ngcontent-%COMP%]{--padding-start: var(--ion-padding);--padding-end: var(--ion-padding)}.container-progress-bar[_ngcontent-%COMP%]{margin:0 var(--ion-padding)}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}.header[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%]{margin:0 var(--ion-padding)}.header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{display:flex;align-items:baseline;font-weight:800;line-height:.7}.header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .hours-minutes[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:var(--font-size-xxxl)}.header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   .seconds[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:var(--font-size-xl)}.header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:var(--space-xl)}.header[_ngcontent-%COMP%]   .text-start-race[_ngcontent-%COMP%]{font-size:var(--font-size-l);font-weight:600;letter-spacing:0}"]}),t})();function T(t,o){1&t&&e._UZ(0,"div",5)}function R(t,o){if(1&t&&(e.TgZ(0,"div"),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,T,1,0,"div",4),e.qZA(),e.qZA(),e.qZA()),2&t){const n=o.$implicit,i=e.oxw();e.xp6(3),e.Oqu(n.start),e.xp6(2),e.Q6J("ngIf",n.state===i.StateRelayEnum.IN_PROGRESS)}}let Z=(()=>{class t{constructor(){}ngOnInit(){}get StateRelayEnum(){return a}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-race-timeline"]],inputs:{race:"race"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"timeline"],[1,"start-time"],[1,"vertical-line"],["class","progress-point",4,"ngIf"],[1,"progress-point"]],template:function(n,i){1&n&&e.YNc(0,R,6,2,"div",0),2&n&&e.Q6J("ngForOf",i.race.relays)},directives:[l.sg,l.O5],styles:["[_nghost-%COMP%]{--border-width: .3rem;--size-progress-point: 1rem;margin-top:-15px}[_nghost-%COMP%]   .timeline[_ngcontent-%COMP%]{width:5rem;height:calc(var(--height-relay-card) + var(--margin-bottom-relays))}[_nghost-%COMP%]   .timeline[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%]{background:var(--ion-color-primary);display:flex;flex-direction:column;height:60%;width:.3rem;border-radius:11px;margin:5px auto}[_nghost-%COMP%]   .timeline[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%]   .progress-point[_ngcontent-%COMP%]{height:var(--size-progress-point);width:var(--size-progress-point);background:var(--ion-color-progress-relay-point);border-radius:50%;position:absolute;top:calc(50% - var(--size-progress-point) / 2);contain:strict;display:flex;align-self:center;animation:blinker 1s infinite}[_nghost-%COMP%]   .timeline[_ngcontent-%COMP%]   .progress-point[_ngcontent-%COMP%]{position:absolute;border-radius:50%;height:1rem;width:1rem;background:var(--ion-color-progress-relay-point)}[_nghost-%COMP%]   .timeline[_ngcontent-%COMP%]   .start-time[_ngcontent-%COMP%]{border:var(--border-width) solid var(--ion-color-primary);font-size:var(--font-size-xm);font-weight:600;border-radius:2rem;text-align:center;padding:0;background:var(--ion-color-light)}"]}),t})();const I=["barSheet"];let A=(()=>{class t{constructor(n,i,s,g,X){this.gestureCtrl=n,this.renderer=i,this.alertController=s,this.actionSheetController=g,this.raceService=X,this.startingExpandingHeight=0}ngOnInit(){this.gestureCtrl.create({gestureName:"resize-race-action-sheet",el:this.barSheet.nativeElement,gesturePriority:100,passive:!1,direction:"y",onStart:()=>{this.renderer.setStyle(this.barSheet.nativeElement,"transition","none"),this.startingExpandingHeight=this.barSheet.nativeElement.clientHeight},onMove:i=>{i.deltaY<20&&this.renderer.setStyle(this.barSheet.nativeElement,"height",this.startingExpandingHeight-i.deltaY+"px")},onEnd:i=>{this.onEnd(i)}}).enable()}onEnd(n){this.startingExpandingHeight=0,this.renderer.setStyle(this.barSheet.nativeElement,"transition","0.1s ease-out"),this.renderer.setStyle(this.barSheet.nativeElement,"height",n.deltaY<50?"var(--expanded-height-action-sheet)":"var(--default-height-action-sheet)")}showSettings(){var n=this;return(0,u.Z)(function*(){const i=yield n.actionSheetController.create({header:"R\xe9glages de la course",mode:"ios",cssClass:"my-custom-class",buttons:[{text:"Changer les relais",icon:"create-outline",handler:()=>{n.raceService.askEdit(n.race)}},{text:"Mettre en pause",icon:"pause-circle-outline",handler:()=>{console.log("Play clicked")}},{text:"Ajuster le Chrono",icon:"timer-outline",handler:()=>{console.log("Favorite clicked")}},{text:"Cancel",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield i.present();const{role:s,data:g}=yield i.onDidDismiss();console.log("onDidDismiss resolved with role and data",s,g)})()}changeRelay(){var n=this;return(0,u.Z)(function*(){yield(yield n.alertController.create({mode:"ios",cssClass:"my-custom-class",header:"Confirmer",message:"Relais termin\xe9",buttons:[{text:"Annuler",role:"cancel",cssClass:"secondary",id:"cancel-button",handler:()=>{console.log("Confirm Cancel: blah")}},{text:"Ok",id:"confirm-button",handler:()=>{n.raceService.changeRelay(n.race)}}]})).present()})()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.TH),e.Y36(e.Qsj),e.Y36(r.Br),e.Y36(r.BX),e.Y36(f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-race-action-sheet"]],viewQuery:function(n,i){if(1&n&&e.Gf(I,7),2&n){let s;e.iGM(s=e.CRH())&&(i.barSheet=s.first)}},inputs:{race:"race"},decls:14,vars:0,consts:[[1,"toolbar-sheet"],["barSheet",""],[1,"menu-handle"],[1,"action-sheet"],[1,"button-bar"],["fill","clear","mode","ios","shape","default","size","square",3,"click"],["name","custom-settings","slot","icon-only"],[1,"vertical-bar"],[1,"message"],["color","secondary-gradient","shape","default","size","square",3,"click"],["name","custom-swap","size","large","slot","icon-only"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0,1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"ion-button",5),e.NdJ("click",function(){return i.showSettings()}),e._UZ(6,"ion-icon",6),e.qZA(),e._UZ(7,"div",7),e.qZA(),e.TgZ(8,"div",8),e._uU(9,"Pr\xe9parez vous au d\xe9part !"),e.qZA(),e.TgZ(10,"div",4),e._UZ(11,"div",7),e.TgZ(12,"ion-button",9),e.NdJ("click",function(){return i.changeRelay()}),e._UZ(13,"ion-icon",10),e.qZA(),e.qZA(),e.qZA(),e.qZA())},directives:[r.YG,r.gu],styles:["[_nghost-%COMP%]{--default-height-action-sheet: 8.5rem;--expanded-height-action-sheet: 21.5rem}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]{display:flex;align-content:flex-start;flex-direction:column;height:var(--default-height-action-sheet)}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .menu-handle[_ngcontent-%COMP%]{background:var(--ion-color-medium);border-radius:8px;width:36px;height:5px;margin:var(--space-xxs);margin-bottom:var(--space-xxxs);margin-right:auto;margin-left:auto}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .action-sheet[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 var(--space-s) var(--space-s) var(--space-s)}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .action-sheet[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:var(--font-size-l)}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .action-sheet[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-size:var(--font-size-l);font-family:var(--ion-font-family-race);font-weight:600;color:var(--ion-color-primary)}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]{display:flex;height:100%}[_nghost-%COMP%]   .toolbar-sheet[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]   .vertical-bar[_ngcontent-%COMP%]{width:1px;height:100%;background:var(--ion-color-medium-light);border-radius:1rem;margin-left:var(--space-xs);margin-right:var(--space-xs)}"]}),t})(),w=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-popover-relay-duration"]],decls:1,vars:0,consts:[["presentation","time","color","primary","showDefaultButtons","true","showDefaultTitle","true","max","60","hourValues","0,1","minuteValues","0,5,10,15,20,25,30"]],template:function(n,i){1&n&&e._UZ(0,"ion-datetime",0)},directives:[r.x4,r.QI],styles:[""]}),t})(),k=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-badge"]],inputs:{text:"text"},decls:1,vars:1,template:function(n,i){1&n&&e._uU(0),2&n&&e.hij("",i.text,"\n")},styles:["[_nghost-%COMP%]{font-family:var(--ion-font-family-race);font-size:var(--font-size-s);font-weight:700;background:var(--ion-color-medium);color:var(--ion-color-light);width:2rem;height:2rem;line-height:2rem;border-radius:50%;text-align:center}"]}),t})();function z(t,o){1&t&&e._UZ(0,"ion-icon",14)}function N(t,o){1&t&&e._UZ(0,"ion-icon",15)}function E(t,o){if(1&t&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Oqu(n.relay.pilotName)}}function D(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"ion-select-option",18),e._uU(2),e.qZA(),e.BQk()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.name)}}function q(t,o){if(1&t&&(e.TgZ(0,"ion-select",16),e.YNc(1,D,3,2,"ng-container",17),e.qZA()),2&t){const n=e.oxw();e.Q6J("interfaceOptions",n.customAlertOptions)("value",n.relay.pilotId),e.xp6(1),e.Q6J("ngForOf",n.pilots)}}function J(t,o){1&t&&e._UZ(0,"ion-reorder",19)}let U=(()=>{class t{constructor(n){this.popoverController=n,this.customAlertOptions={header:"Pilote",mode:"ios",translucent:!0}}ngOnInit(){}askChangeDuration(){var n=this;return(0,u.Z)(function*(){const i=yield n.popoverController.create({component:w,cssClass:"my-custom-class",translucent:!0,mode:"ios"});yield i.present();const{role:s}=yield i.onDidDismiss();console.log("onDidDismiss resolved with role",s)})()}get StateRelayEnum(){return a}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.Dh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card-relay"]],inputs:{relay:"relay",pilots:"pilots"},decls:17,vars:15,consts:[[1,"card-relay"],[1,"relay-duration",3,"click"],["name","stopwatch-outline",4,"ngIf"],["name","create-outline","slot","icon-only","size","large",4,"ngIf"],[1,"time"],[1,"info-pilot"],[1,"line"],[4,"ngIf"],["placeholder","Pilote",3,"interfaceOptions","value",4,"ngIf"],[1,"badge",3,"text"],[1,"weight"],["name","barbell"],[1,"kg"],["mode","ios","slot","end",4,"ngIf"],["name","stopwatch-outline"],["name","create-outline","slot","icon-only","size","large"],["placeholder","Pilote",3,"interfaceOptions","value"],[4,"ngFor","ngForOf"],[3,"value"],["mode","ios","slot","end"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.NdJ("click",function(){return i.askChangeDuration()}),e.YNc(2,z,1,0,"ion-icon",2),e.YNc(3,N,1,0,"ion-icon",3),e.TgZ(4,"div",4),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.YNc(8,E,2,1,"div",7),e.YNc(9,q,2,3,"ion-select",8),e._UZ(10,"app-badge",9),e.qZA(),e.TgZ(11,"div",6),e.TgZ(12,"div",10),e._UZ(13,"ion-icon",11),e.TgZ(14,"div",12),e._uU(15,"2.5KG"),e.qZA(),e.qZA(),e.YNc(16,J,1,0,"ion-reorder",13),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.ekj("active",i.relay.state===i.StateRelayEnum.IN_PROGRESS)("passed",i.relay.state===i.StateRelayEnum.PAST),e.xp6(1),e.Q6J("ngIf",!i.relay.editable),e.xp6(1),e.Q6J("ngIf",i.relay.editable),e.xp6(2),e.hij("",i.relay.durationInMinutes,"'"),e.xp6(3),e.Q6J("ngIf",!i.relay.editable),e.xp6(1),e.Q6J("ngIf",i.relay.editable),e.xp6(1),e.ekj("active",i.relay.state===i.StateRelayEnum.IN_PROGRESS)("passed",i.relay.state===i.StateRelayEnum.PAST),e.Q6J("text",i.relay.number.toString()),e.xp6(6),e.Q6J("ngIf",i.relay.editable))},directives:[l.O5,k,r.gu,r.t9,r.QI,l.sg,r.n0,r.Nh],styles:["@keyframes blinker{0%{opacity:1}50%{opacity:.5}to{opacity:1}}[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]{display:flex;flex:1;color:var(--ion-color-primary);width:100%;margin-left:var(--space-xxs);height:var(--height-relay-card)}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background:var(--ion-color-medium);padding:var(--space-xm) var(--space-xs);border-radius:21px 0 0 21px;color:var(--ion-color-light);width:3.3rem;font-size:var(--font-size-xm);text-align:center;font-weight:600}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration.active[_ngcontent-%COMP%]{background:var(--ion-color-secondary-gradient)}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration.passed[_ngcontent-%COMP%]{background:var(--ion-color-primary)}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.8rem;--ionicon-stroke-width: 48px}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .relay-duration[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{margin-top:.4rem}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;flex:1;font-size:var(--font-size-sl);font-weight:600;background:var(--ion-color-light);border-radius:10px;padding:var(--space-m)}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:not(:first-child){margin-top:1.1rem}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .badge.active[_ngcontent-%COMP%]{background:var(--ion-color-secondary)}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .badge.passed[_ngcontent-%COMP%]{background:var(--ion-color-primary)}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .weight[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:var(--font-size-s);font-weight:600;border:.2rem solid var(--ion-color-primary);border-radius:10px;padding:0 var(--space-xxs)}[_nghost-%COMP%]   .card-relay[_ngcontent-%COMP%]   .info-pilot[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .weight[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:var(--space-xxxs)}[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]{--padding-bottom: 0;--padding-end: 0;--padding-start: 0;--padding-top: 0}"]}),t})();function F(t,o){if(1&t&&(e.TgZ(0,"div",7),e._UZ(1,"app-card-relay",8),e.qZA()),2&t){const n=o.$implicit,i=e.oxw();e.xp6(1),e.Q6J("relay",n)("pilots",i.pilots)}}const H=[{path:"",component:(()=>{class t{constructor(){this.pilotClement=new h({id:1,name:"Cl\xe9ment"}),this.pilotSamuel=new h({id:2,name:"Samuel"}),this.relay1=new c({pilotId:this.pilotClement.id,pilotName:this.pilotClement.name,start:"02:00",end:"01:55",number:1,durationInMinutes:5,fuel:!1,state:a.NOT_PASSED}),this.relay2=new c({pilotId:this.pilotSamuel.id,pilotName:this.pilotSamuel.name,start:"01:55",end:"01:40",number:2,durationInMinutes:15,fuel:!1,state:a.NOT_PASSED}),this.relay3=new c({pilotId:this.pilotClement.id,pilotName:this.pilotClement.name,start:"01:40",end:"01:20",number:3,durationInMinutes:20,fuel:!1,state:a.NOT_PASSED}),this.relay4=new c({pilotId:this.pilotSamuel.id,pilotName:this.pilotSamuel.name,start:"01:20",end:"01:00",number:4,durationInMinutes:20,fuel:!1,state:a.NOT_PASSED}),this.relay5=new c({pilotId:this.pilotClement.id,pilotName:this.pilotClement.name,start:"01:00",end:"00:50",number:5,durationInMinutes:10,fuel:!1,state:a.NOT_PASSED}),this.relay6=new c({pilotId:this.pilotSamuel.id,pilotName:this.pilotSamuel.name,start:"00:50",end:"00:40",number:6,durationInMinutes:10,fuel:!1,state:a.NOT_PASSED}),this.relay7=new c({pilotId:this.pilotSamuel.id,pilotName:this.pilotSamuel.name,start:"00:40",end:"00:30",number:7,durationInMinutes:10,fuel:!1,state:a.NOT_PASSED}),this.relay8=new c({pilotId:this.pilotClement.id,pilotName:this.pilotClement.name,start:"00:30",end:"00:20",number:8,durationInMinutes:10,fuel:!1,state:a.NOT_PASSED}),this.relay9=new c({pilotId:this.pilotSamuel.id,pilotName:this.pilotSamuel.name,start:"00:30",end:"00:20",number:9,durationInMinutes:10,fuel:!1,state:a.NOT_PASSED}),this.relay10=new c({pilotId:this.pilotClement.id,pilotName:this.pilotClement.name,start:"00:20",end:"00:00",number:10,durationInMinutes:20,fuel:!1,state:a.NOT_PASSED}),this.relays=[this.relay1,this.relay2,this.relay3,this.relay4,this.relay5,this.relay6,this.relay7,this.relay8,this.relay9,this.relay10],this.pilots=[this.pilotClement,this.pilotSamuel],this.race=new v({location:"St Michel Chef Chef",lengthInHours:2,plannedDate:new Date,relays:this.relays,pilots:this.pilots})}ngOnInit(){}reorderItems(n){const i=this.relays.splice(n.detail.from,1)[0];this.relays.splice(n.detail.to,0,i),n.detail.complete()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-live-race"]],decls:16,vars:10,consts:[[1,"ion-no-border"],[3,"race"],[1,"track-info"],[1,"race-wrapper"],[1,"relays"],["disabled","false",3,"ionItemReorder"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[3,"relay","pilots"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0),e._UZ(1,"app-race-header",1),e.qZA(),e.TgZ(2,"ion-content"),e.TgZ(3,"div",2),e.TgZ(4,"h1"),e._uU(5),e.qZA(),e.TgZ(6,"h3"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"app-race-timeline",1),e.TgZ(11,"div",4),e.TgZ(12,"ion-reorder-group",5),e.NdJ("ionItemReorder",function(g){return i.reorderItems(g)}),e.YNc(13,F,2,2,"div",6),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"ion-footer"),e._UZ(15,"app-race-action-sheet",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("race",i.race),e.xp6(4),e.Oqu(i.race.location),e.xp6(2),e.AsE("",i.race.lengthInHours,"H - ",e.xi3(8,7,i.race.plannedDate,"mediumDate"),""),e.xp6(3),e.Q6J("race",i.race),e.xp6(3),e.Q6J("ngForOf",i.relays),e.xp6(2),e.Q6J("race",i.race))},directives:[r.Gu,x,r.W2,Z,r.oz,l.sg,r.fr,A,U],pipes:[l.uU],styles:["[_nghost-%COMP%]   .race-wrapper[_ngcontent-%COMP%]{padding-top:var(--margin-relay-middle);display:flex}[_nghost-%COMP%]   .race-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-bottom:var(--margin-bottom-relays)}[_nghost-%COMP%]   .race-wrapper[_ngcontent-%COMP%]   .relays[_ngcontent-%COMP%]{width:100%;margin-right:var(--space-xxl)}[_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-family:var(--ion-font-family-race);margin-bottom:var(--space-l)}[_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0}"]}),t})()}];let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(H)],m.Bz]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,r.Pc]]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,r.Pc]]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,r.Pc]]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez]]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,r.Pc,y,Q,Y,B,j,L]]}),t})()}}]);