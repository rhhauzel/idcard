"use strict";(self.webpackChunkDCKlbIDCard=self.webpackChunkDCKlbIDCard||[]).push([[592],{1029:(g,f,s)=>{s.d(f,{d:()=>t});var t=(()=>{return(c=t||(t={})).desc="desc",c.asc="asc",t;var c})()},4633:(g,f,s)=>{s.d(f,{d:()=>t});var t=(()=>{return(c=t||(t={})).name="name",c.enteredDate="enteredDate",c.approvedDate="approvedDate",c.printedDate="printedDate",t;var c})()},834:(g,f,s)=>{s.d(f,{n:()=>_});var t=s(4650),c=s(1762);let _=(()=>{var r;class p{constructor(e){this.firestore=e,this.dbPath="/department",this.deptsRef=e.collection(this.dbPath)}getAll(){return this.firestore.collection(this.dbPath,e=>e.orderBy("departmentName"))}getOne(e){return this.deptsRef.doc(e)}getByDistrictID(e){return this.firestore.collection(this.dbPath,o=>o.where("deptDistrictID","==",e)).get()}create(e){return this.deptsRef.add({...e})}update(e,o){return this.deptsRef.doc(e).update(o)}delete(e){return this.deptsRef.doc(e).delete()}}return(r=p).\u0275fac=function(e){return new(e||r)(t.LFG(c.ST))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),p})()},3067:(g,f,s)=>{s.d(f,{b:()=>_});var t=s(4650),c=s(1762);let _=(()=>{var r;class p{constructor(e){this.firestore=e,this.dbPath="/designation",this.desigsRef=e.collection(this.dbPath)}getAll(){return this.desigsRef}getOne(e){return this.desigsRef.doc(e)}create(e){return this.desigsRef.add({...e})}update(e,o){return this.desigsRef.doc(e).update(o)}delete(e){return this.desigsRef.doc(e).delete()}}return(r=p).\u0275fac=function(e){return new(e||r)(t.LFG(c.ST))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),p})()},8074:(g,f,s)=>{s.d(f,{R:()=>_});var t=s(4650),c=s(1762);let _=(()=>{var r;class p{constructor(e){this.firestore=e,this.dbPath="/district",this.distsRef=e.collection(this.dbPath)}getAll(){return this.firestore.collection(this.dbPath,e=>e.orderBy("districtAbbrev"))}getOne(e){return this.distsRef.doc(e)}create(e){return this.distsRef.add({...e})}update(e,o){return this.distsRef.doc(e).update(o)}delete(e){return this.distsRef.doc(e).delete()}}return(r=p).\u0275fac=function(e){return new(e||r)(t.LFG(c.ST))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),p})()},3786:(g,f,s)=>{s.d(f,{k:()=>_});var t=s(4650),c=s(1762);let _=(()=>{var r;class p{constructor(e){this.firestore=e,this.dbPath="/idcard",this.dbDel="/cardDel",this.cardsRef=e.collection(this.dbPath),this.cardsDel=e.collection(this.dbDel)}getAll(){return this.cardsRef}getAllOrderBy(e,o,h){return this.firestore.collection(this.dbPath,m=>m.where("officeID","==",e).where("isApproved","==",!1).orderBy(o,h))}getForApproval(e,o){return this.firestore.collection(this.dbPath,h=>h.where("isApproved","==",!1).orderBy(e,o))}setApproval(e,o,h){return this.cardsRef.doc(e).update({isApproved:!0,approvedBy:o,approvedDate:h})}getForPrint(e,o){return this.firestore.collection(this.dbPath,h=>h.where("isApproved","==",!0).where("isPrinted","==",!1).orderBy(e,o))}setPrinted(e,o,h){return this.cardsRef.doc(e).update({isPrinted:!0,printedBy:o,printedDate:h})}getOne(e){return this.cardsRef.doc(e)}create(e){return this.cardsRef.add({...e})}update(e,o){return this.cardsRef.doc(e).update(o)}delete(e){return this.cardsRef.doc(e).delete()}addDeleted(e){return this.cardsDel.add({...e})}}return(r=p).\u0275fac=function(e){return new(e||r)(t.LFG(c.ST))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),p})()},2232:(g,f,s)=>{s.d(f,{l:()=>_});var t=s(4650),c=s(1762);let _=(()=>{var r;class p{constructor(e){this.firestore=e,this.dbPath="/office",this.officeRef=e.collection(this.dbPath)}getAll(){return this.firestore.collection(this.dbPath,e=>e.orderBy("officeName"))}getAllFiltered(e,o){return this.firestore.collection(this.dbPath,h=>h.where("deptID","==",o).where("districtID","==",e).orderBy("officeName")).get()}getOne(e){return this.officeRef.doc(e)}create(e){return this.officeRef.add({...e})}update(e,o){return this.officeRef.doc(e).update(o)}delete(e){return this.officeRef.doc(e).delete()}}return(r=p).\u0275fac=function(e){return new(e||r)(t.LFG(c.ST))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),p})()},4795:(g,f,s)=>{s.d(f,{g:()=>_});var t=s(4650),c=s(1762);let _=(()=>{var r;class p{constructor(e){this.firestore=e,this.dbPath="settings",this.settingsRef=e.collection(this.dbPath)}add(e){return this.settingsRef.add({...e})}get(e){return this.settingsRef.doc(e)}getAllID(){return this.settingsRef}delete(e){return this.settingsRef.doc(e).delete()}updateCurrNo(e,o){var h=o+1;this.settingsRef.doc(e).update({currNum:h})}}return(r=p).\u0275fac=function(e){return new(e||r)(t.LFG(c.ST))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),p})()},8423:(g,f,s)=>{s.d(f,{Ro:()=>w,ef:()=>A,t2:()=>P});var t=s(4650),c=s(1135),_=s(7579),r=s(9300),p=s(2722),d=s(7340),e=s(6895),o=s(1481);const h=["overlay"];function m(i,u){1&i&&t._UZ(0,"div")}function y(i,u){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,m,1,0,"div",6),t.qZA()),2&i){const n=t.oxw(2);t.Tol(n.spinner.class),t.Udp("color",n.spinner.color),t.xp6(1),t.Q6J("ngForOf",n.spinner.divArray)}}function E(i,u){if(1&i&&(t._UZ(0,"div",7),t.ALo(1,"safeHtml")),2&i){const n=t.oxw(2);t.Q6J("innerHTML",t.lcZ(1,1,n.template),t.oJD)}}function C(i,u){if(1&i&&(t.TgZ(0,"div",1,2),t.YNc(2,y,2,5,"div",3),t.YNc(3,E,2,3,"div",4),t.TgZ(4,"div",5),t.Hsn(5),t.qZA()()),2&i){const n=t.oxw();t.Udp("background-color",n.spinner.bdColor)("z-index",n.spinner.zIndex)("position",n.spinner.fullScreen?"fixed":"absolute"),t.Q6J("@.disabled",n.disableAnimation)("@fadeIn","in"),t.xp6(2),t.Q6J("ngIf",!n.template),t.xp6(1),t.Q6J("ngIf",n.template),t.xp6(1),t.Udp("z-index",n.spinner.zIndex)}}const I=["*"],x={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},O="primary";class v{constructor(u){Object.assign(this,u)}static create(u){return(null==u?.type||0===u.type.length)&&console.warn('[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component\n        and ensure css is added to angular.json file'),new v(u)}}let P=(()=>{class i{constructor(){this.spinnerObservable=new c.X(null)}getSpinner(n){return this.spinnerObservable.asObservable().pipe((0,r.h)(a=>a&&a.name===n))}show(n=O,a){return new Promise((l,b)=>{setTimeout(()=>{a&&Object.keys(a).length?(a.name=n,this.spinnerObservable.next(new v({...a,show:!0})),l(!0)):(this.spinnerObservable.next(new v({name:n,show:!0})),l(!0))},10)})}hide(n=O,a=10){return new Promise((l,b)=>{setTimeout(()=>{this.spinnerObservable.next(new v({name:n,show:!1})),l(!0)},a)})}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const R=new t.OlP("NGX_SPINNER_CONFIG");let M=(()=>{class i{constructor(n){this._sanitizer=n}transform(n){if(n)return this._sanitizer.bypassSecurityTrustHtml(n)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(o.H7,16))},i.\u0275pipe=t.Yjl({name:"safeHtml",type:i,pure:!0}),i})(),w=(()=>{class i{constructor(n,a,l,b){this.spinnerService=n,this.changeDetector=a,this.elementRef=l,this.globalConfig=b,this.disableAnimation=!1,this.spinner=new v,this.ngUnsubscribe=new _.x,this.setDefaultOptions=()=>{const{type:S}=this.globalConfig??{};this.spinner=v.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??S,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor="rgba(51,51,51,0.8)",this.zIndex=99999,this.color="#fff",this.size="large",this.fullScreen=!0,this.name=O,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}handleKeyboardEvent(n){this.spinnerDOM&&this.spinnerDOM.nativeElement&&(this.fullScreen||!this.fullScreen&&this.isSpinnerZone(n.target))&&(n.returnValue=!1,n.preventDefault())}initObservable(){this.spinnerService.getSpinner(this.name).pipe((0,p.R)(this.ngUnsubscribe)).subscribe(n=>{this.setDefaultOptions(),Object.assign(this.spinner,n),n.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(n){return n===this.elementRef.nativeElement.parentElement||n.parentNode&&this.isSpinnerZone(n.parentNode)}ngOnChanges(n){for(const a in n)if(a){const l=n[a];if(l.isFirstChange())return;typeof l.currentValue<"u"&&l.currentValue!==l.previousValue&&""!==l.currentValue&&(this.spinner[a]=l.currentValue,"showSpinner"===a&&(l.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),"name"===a&&this.initObservable())}}getClass(n,a){this.spinner.divCount=x[n],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((b,S)=>S);let l="";switch(a.toLowerCase()){case"small":l="la-sm";break;case"medium":l="la-2x";break;case"large":l="la-3x"}return"la-"+n+" "+l}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(P),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(R,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ngx-spinner"]],viewQuery:function(n,a){if(1&n&&t.Gf(h,5),2&n){let l;t.iGM(l=t.CRH())&&(a.spinnerDOM=l.first)}},hostBindings:function(n,a){1&n&&t.NdJ("keydown",function(b){return a.handleKeyboardEvent(b)},!1,t.evT)},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},features:[t.TTD],ngContentSelectors:I,decls:1,vars:1,consts:[["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],["overlay",""],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,a){1&n&&(t.F$t(),t.YNc(0,C,6,12,"div",0)),2&n&&t.Q6J("ngIf",a.spinner.show)},dependencies:[e.sg,e.O5,M],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[(0,d.X$)("fadeIn",[(0,d.SB)("in",(0,d.oB)({opacity:1})),(0,d.eR)(":enter",[(0,d.oB)({opacity:0}),(0,d.jt)(300)]),(0,d.eR)(":leave",(0,d.jt)(200,(0,d.oB)({opacity:0})))])]},changeDetection:0}),i})(),A=(()=>{class i{static forRoot(n){return{ngModule:i,providers:[{provide:R,useValue:n}]}}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[e.ez]}),i})()}}]);