"use strict";(self.webpackChunkDCKlbIDCard=self.webpackChunkDCKlbIDCard||[]).push([[258],{4258:(U,p,s)=>{s.r(p),s.d(p,{DistrictModule:()=>w});var g=s(6895),d=s(9585),f=s(4004),t=s(4650),v=s(8074),_=s(388),r=s(433);function D(i,c){1&i&&t._uU(0),2&i&&t.hij(" ",c.rowIndex+1," ")}function b(i,c){if(1&i&&(t._uU(0),t.ALo(1,"titlecase")),2&i){const n=c.row;t.hij(" ",t.lcZ(1,1,null==n?null:n.districtName)," ")}}function x(i,c){if(1&i&&t._uU(0),2&i){const n=c.row;t.hij(" ",null==n?null:n.districtAbbrev," ")}}function C(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div",15),t.NdJ("click",function(){const a=t.CHM(n).row,m=t.oxw(),l=t.MAs(22);return t.KtG(m.captureEdit(a,l))}),t._UZ(1,"i",16),t.qZA(),t.TgZ(2,"div",15),t.NdJ("click",function(){const a=t.CHM(n).row,m=t.oxw(),l=t.MAs(24);return t.KtG(m.captureDialog(a,l))}),t._UZ(3,"i",17),t.qZA()}}function Z(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div",18)(1,"h4",19),t._uU(2,"Add district"),t.qZA(),t.TgZ(3,"button",20),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.modalRef.hide())}),t.TgZ(4,"span",21),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",22)(7,"div",23)(8,"div",24)(9,"div",5)(10,"form")(11,"div",25)(12,"label",26),t._uU(13,"District Name"),t.qZA(),t.TgZ(14,"input",27),t.NdJ("ngModelChange",function(o){t.CHM(n);const a=t.oxw();return t.KtG(a.distData.districtName=o)}),t.qZA()(),t.TgZ(15,"div",25)(16,"label",28),t._uU(17,"Abbrevation"),t.qZA(),t.TgZ(18,"input",29),t.NdJ("ngModelChange",function(o){t.CHM(n);const a=t.oxw();return t.KtG(a.distData.districtAbbrev=o)}),t.qZA()()()()()()(),t.TgZ(19,"div",30)(20,"button",31),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.saveClick())}),t._uU(21,"Save"),t.qZA()()}if(2&i){const n=t.oxw();t.xp6(14),t.Q6J("ngModel",n.distData.districtName),t.xp6(4),t.Q6J("ngModel",n.distData.districtAbbrev)}}function T(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div",18)(1,"h4",19),t._uU(2,"Edit district"),t.qZA(),t.TgZ(3,"button",20),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.modalRef.hide())}),t.TgZ(4,"span",21),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",22)(7,"div",23)(8,"div",24)(9,"div",5)(10,"form")(11,"div",25)(12,"label",26),t._uU(13,"District Name"),t.qZA(),t.TgZ(14,"input",27),t.NdJ("ngModelChange",function(o){t.CHM(n);const a=t.oxw();return t.KtG(a.distData.districtName=o)}),t.qZA()(),t.TgZ(15,"div",25)(16,"label",28),t._uU(17,"Abbrevation"),t.qZA(),t.TgZ(18,"input",29),t.NdJ("ngModelChange",function(o){t.CHM(n);const a=t.oxw();return t.KtG(a.distData.districtAbbrev=o)}),t.qZA()()()()()()(),t.TgZ(19,"div",30)(20,"button",31),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.updateClick(o.selRow))}),t._uU(21,"Save"),t.qZA()()}if(2&i){const n=t.oxw();t.xp6(14),t.Q6J("ngModel",n.distData.districtName),t.xp6(4),t.Q6J("ngModel",n.distData.districtAbbrev)}}function A(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div",18)(1,"h4",19),t._uU(2,"Dialog"),t.qZA(),t.TgZ(3,"button",20),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.modalRef.hide())}),t.TgZ(4,"span",21),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",22)(7,"div",23)(8,"div",24)(9,"div",5)(10,"div"),t._uU(11," Do you really want to delete the data: "),t.qZA(),t.TgZ(12,"div"),t._uU(13," Table: DISTRICT,"),t._UZ(14,"br"),t._uU(15),t.qZA()()()()(),t.TgZ(16,"div",30)(17,"button",32),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.captureDelete())}),t._uU(18,"Yes"),t.qZA(),t.TgZ(19,"button",33),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.captureNo())}),t._uU(20,"No"),t.qZA()()}if(2&i){const n=t.oxw();t.xp6(15),t.hij(" District Name : ",n.distData.districtName," ")}}let h=(()=>{var i;class c{constructor(e,o){this.districtService=e,this.modalService=o,this.ColumnMode=d.hq,this.distData={districtName:"",districtAbbrev:""},this.message=""}ngOnInit(){this.retrieveDistrict()}retrieveDistrict(){this.districtService.getAll().snapshotChanges().pipe((0,f.U)(e=>e.map(o=>({id:o.payload.doc.id,...o.payload.doc.data()})))).subscribe(e=>{this.rows=e})}captureAdd(e){this.modalRef=this.modalService.show(e)}captureEdit(e,o){this.distData=e,this.modalRef=this.modalService.show(o),this.selRow=e.id}captureDelete(){this.districtService.delete(this.selRow).then(()=>this.message=`The data for ${this.distData.districtName} is deleted successfully.`).catch(e=>this.message=e),this.distData={districtName:"",districtAbbrev:""},this.modalRef.hide()}captureDialog(e,o){this.selRow=e.id,this.distData=e,this.modalRef=this.modalService.show(o)}captureNo(){this.modalRef.hide()}saveClick(){this.districtService.create(this.distData).then(()=>this.message=`The data for ${this.distData.districtName} is created successfully.`).catch(e=>this.message=e),this.distData={districtName:"",districtAbbrev:""},this.modalRef.hide()}updateClick(e){this.districtService.update(e,this.distData).then(()=>this.message=`The data for ${this.distData.districtName} is updated successfully.`).catch(o=>this.message=o),this.distData={districtName:"",districtAbbrev:""},this.modalRef.hide()}}return(i=c).\u0275fac=function(e){return new(e||i)(t.Y36(v.R),t.Y36(_.tT))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-district"]],decls:25,vars:8,consts:[[1,"container"],[1,"card","col-md-12","mb-3",2,"margin-top","10px"],[1,"card-header"],[1,"d-flex","justify-content-between"],[1,"btn","btn-outline-defalt",3,"click"],[1,"card-body"],["rowHeight","auto",1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","limit"],["name","#",3,"flexGrow"],["ngx-datatable-cell-template",""],["name","District Name",3,"flexGrow"],["name","District Abbrev",3,"flexGrow"],["name","Action","props","name"],["modalAdd",""],["modalEdit",""],["modalDialog",""],[1,"btn",3,"click"],[1,"fa","fa-edit"],[1,"fa","fa-trash","text-danger"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"card"],[1,"card-block"],[1,"form-group"],["for","districtName"],["type","text","id","districtName","name","districtName",1,"form-control",3,"ngModel","ngModelChange"],["for","districtAbbrev"],["type","text","id","districtAbbrev","name","districtAbbrev",1,"form-control",3,"ngModel","ngModelChange"],[1,"modal-footer"],[1,"btn","text-right",3,"click"],[1,"btn","text-right","btn-success",3,"click"],[1,"btn","text-right","btn-danger",3,"click"]],template:function(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),t._uU(5,"District List"),t.qZA(),t.TgZ(6,"div",4),t.NdJ("click",function(){t.CHM(a);const l=t.MAs(20);return t.KtG(o.captureAdd(l))}),t._uU(7,"Add"),t.qZA()()(),t.TgZ(8,"div",5)(9,"ngx-datatable",6)(10,"ngx-datatable-column",7),t.YNc(11,D,1,1,"ng-template",8),t.qZA(),t.TgZ(12,"ngx-datatable-column",9),t.YNc(13,b,2,3,"ng-template",8),t.qZA(),t.TgZ(14,"ngx-datatable-column",10),t.YNc(15,x,1,1,"ng-template",8),t.qZA(),t.TgZ(16,"ngx-datatable-column",11),t.YNc(17,C,4,0,"ng-template",8),t.qZA(),t._uU(18,"> "),t.qZA()()()(),t.YNc(19,Z,22,2,"ng-template",null,12,t.W1O),t.YNc(21,T,22,2,"ng-template",null,13,t.W1O),t.YNc(23,A,21,1,"ng-template",null,14,t.W1O)}2&e&&(t.xp6(9),t.Q6J("rows",o.rows)("columnMode",o.ColumnMode.force)("headerHeight",50)("footerHeight",50)("limit",10),t.xp6(1),t.Q6J("flexGrow",.5),t.xp6(2),t.Q6J("flexGrow",3),t.xp6(2),t.Q6J("flexGrow",2))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.On,r.F,d.nE,d.UC,d.vq,g.rS]}),c})();var u=s(2507);const M=[{path:"",component:h}];let N=(()=>{var i;class c{}return(i=c).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(M),u.Bz]}),c})(),w=(()=>{var i;class c{}return(i=c).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[_.tT],imports:[g.ez,N,r.u5,r.UX,u.Bz.forChild([{path:"",component:h}]),d.xD,_.zk]}),c})()}}]);